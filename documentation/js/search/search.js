(function(compodoc) {
    var MAX_RESULTS = 15,
        MAX_DESCRIPTION_SIZE = 500,

        usePushState = (typeof history.pushState !== 'undefined'),

    // DOM Elements
        $body = $('body'),
        $searchResults,
        $searchInput,
        $searchList,
        $searchTitle,
        $searchResultsCount,
        $searchQuery,
        $mainContainer,
        $xsMenu;

    // Throttle search
    function throttle(fn, wait) {
        var timeout;

        return function() {
            var ctx = this, args = arguments;
            if (!timeout) {
                timeout = setTimeout(function() {
                    timeout = null;
                    fn.apply(ctx, args);
                }, wait);
            }
        };
    }

    function displayResults(res) {
        var noResults = res.count == 0;
        $searchResults.toggleClass('no-results', noResults);

        // Clear old results
        $searchList.empty();

        // Display title for research
        $searchResultsCount.text(res.count);
        $searchQuery.text(res.query);

        // Create an <li> element for each result
        res.results.forEach(function(res) {
            var $li = $('<li>', {
                'class': 'search-results-item'
            }),

            $title = $('<h3>'),

            content = res.body.trim(),

            link = '';

            switch (COMPODOC_CURRENT_PAGE_DEPTH) {
                case 0:
                    link = './';
                    break;
                case 1:
                    link = '../';
                    break;
                case 2:
                    link = '../../';
                    break;
            }

            var $link = $('<a>', {
                'href': link + res.url,
                'text': res.title
            })

            if (content.length > MAX_DESCRIPTION_SIZE) {
                content = content.slice(0, MAX_DESCRIPTION_SIZE).trim()+'...';
            }
            var $content = $('<p>').html(content);

            $link.appendTo($title);
            $title.appendTo($li);
            $content.appendTo($li);
            $li.appendTo($searchList);
        });
    }

    function launchSearch(q) {
        $body.addClass('with-search');

        if ($xsMenu.css('display') === 'block') {
            $mainContainer.css('height', 'calc(100% - 100px)');
            $mainContainer.css('margin-top', '100px');
        }

        throttle(compodoc.search.query(q, 0, MAX_RESULTS)
        .then(function(results) {
            displayResults(results);
        }), 1000);
    }

    function closeSearch() {
        $body.removeClass('with-search');
        if ($xsMenu.css('display') === 'block') {
            $mainContainer.css('height', 'calc(100% - 50px)');
            $mainContainer.css('margin-top', '50px');
        }
    }

    function bindMenuButton() {
        document.getElementById('btn-menu').addEventListener('click', function() {
            if ($xsMenu.css('display') === 'none') {
                $body.removeClass('with-search');
                $mainContainer.css('height', 'calc(100% - 50px)');
                $mainContainer.css('margin-top', '50px');
            }
            $.each($searchInputs, function(index, item){
                var item = $(item);
                item.val('');
            });
        });
    }

    function bindSearch() {
        // Bind DOM
        $searchInputs        = $('#book-search-input input');

        $searchResults = $('.search-results');
        $searchList         = $searchResults.find('.search-results-list');
        $searchTitle        = $searchResults.find('.search-results-title');
        $searchResultsCount = $searchTitle.find('.search-results-count');
        $searchQuery        = $searchTitle.find('.search-query');
        $mainContainer      = $('.container-fluid');
        $xsMenu             = $('.xs-menu');

        // Launch query based on input content
        function handleUpdate(item) {
            var q = item.val();

            if (q.length == 0) {
                closeSearch();
                window.location.href = window.location.href.replace(window.location.search, '');
            } else {
                launchSearch(q);
            }
        }

        // Detect true content change in search input
        var propertyChangeUnbound = false;

        $.each($searchInputs, function(index, item){
            var item = $(item);
            // HTML5 (IE9 & others)
            item.on('input', function(e) {
                // Unbind propertychange event for IE9+
                if (!propertyChangeUnbound) {
                    $(this).unbind('propertychange');
                    propertyChangeUnbound = true;
                }

                handleUpdate($(this));
            });
            // Workaround for IE < 9
            item.on('propertychange', function(e) {
                if (e.originalEvent.propertyName == 'value') {
                    handleUpdate($(this));
                }
            });
            // Push to history on blur
            item.on('blur', function(e) {
                // Update history state
                if (usePushState) {
                    var uri = updateQueryString('q', $(this).val());
                    if ($(this).val() !== '') {
                        history.pushState({ path: uri }, null, uri);
                    }
                }
            });
        });
    }

    function launchSearchFromQueryString() {
        var q = getParameterByName('q');
        if (q && q.length > 0) {
            // Update search inputs
            $.each($searchInputs, function(index, item){
                var item = $(item);
                item.val(q)
            });
            // Launch search
            launchSearch(q);
        }
    }

    compodoc.addEventListener(compodoc.EVENTS.SEARCH_READY, function(event) {
        bindSearch();

        bindMenuButton();

        launchSearchFromQueryString();
    });

    function getParameterByName(name) {
        var url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)', 'i'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    function updateQueryString(key, value) {
        value = encodeURIComponent(value);

        var url = window.location.href;
        var re = new RegExp('([?&])' + key + '=.*?(&|#|$)(.*)', 'gi'),
            hash;

        if (re.test(url)) {
            if (typeof value !== 'undefined' && value !== null)
                return url.replace(re, '$1' + key + '=' + value + '$2$3');
            else {
                hash = url.split('#');
                url = hash[0].replace(re, '$1$3').replace(/(&|\?)$/, '');
                if (typeof hash[1] !== 'undefined' && hash[1] !== null)
                    url += '#' + hash[1];
                return url;
            }
        }
        else {
            if (typeof value !== 'undefined' && value !== null) {
                var separator = url.indexOf('?') !== -1 ? '&' : '?';
                hash = url.split('#');
                url = hash[0] + separator + key + '=' + value;
                if (typeof hash[1] !== 'undefined' && hash[1] !== null)
                    url += '#' + hash[1];
                return url;
            }
            else
                return url;
        }
    }
})(compodoc);
