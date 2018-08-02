(function(compodoc) {

    function LunrSearchEngine() {
        this.index = null;
        this.store = {};
        this.name = 'LunrSearchEngine';
    }

    LunrSearchEngine.prototype.init = function() {
        var that = this,
            d = new promise.Promise();

        that.index = lunr.Index.load(COMPODOC_SEARCH_INDEX.index);
        that.store = COMPODOC_SEARCH_INDEX.store;
        d.done();

        return d;
    };

    LunrSearchEngine.prototype.search = function(q, offset, length) {
        var that = this,
            results = [],
            d = new promise.Promise();

        if (this.index) {
            results = $.map(this.index.search(q), function(result) {
                var doc = that.store[result.ref];

                return {
                    title: doc.title,
                    url: doc.url,
                    body: doc.summary || doc.body
                };
            });
        }

        d.done({
            query: q,
            results: results.slice(0, length),
            count: results.length
        });

        return d;
    };

    compodoc.addEventListener(compodoc.EVENTS.READY, function(event) {
        var engine = new LunrSearchEngine(),
            initialized = false;

        function query(q, offset, length) {
            if (!initialized) throw new Error('Search has not been initialized');
            return engine.search(q, offset, length);
        }

        compodoc.search = {
            query: query
        };

        engine.init()
        .then(function() {
            initialized = true;
            compodoc.dispatchEvent({
                type: compodoc.EVENTS.SEARCH_READY
            });
        });
    });
})(compodoc);
