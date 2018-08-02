document.addEventListener('DOMContentLoaded', function() {
    var $tabSource = document.querySelector('#source-tab'),
        $prismPre = document.querySelector('pre');
    if ($prismPre) {
        $prismCode = $prismPre.querySelector('code'),
        $content = document.querySelector('.content'),
        prismLinks = document.querySelectorAll('.link-to-prism')

        for (var i = 0; i < prismLinks.length; i++) {
            prismLinks[i].addEventListener('click', linkToPrism, false);
        }

        function linkToPrism(event) {
            var targetLine = event.target.getAttribute('data-line');
            event.preventDefault();

            $prismPre.setAttribute('data-line', targetLine);
            Prism.highlightElement($prismCode, function() {});

            $tabSource.click();

            setTimeout(function() {
                var $prismHighlightLine = document.querySelector('.line-highlight'),
                    top = parseInt(getComputedStyle($prismHighlightLine)['top']);
                $content.scrollTop = top;
            }, 500);
        };
    }
});
