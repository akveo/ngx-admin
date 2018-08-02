var compodoc = {
    EVENTS: {
        READY: 'compodoc.ready',
        SEARCH_READY: 'compodoc.search.ready'
    }
};

Object.assign( compodoc, EventDispatcher.prototype );

document.addEventListener('DOMContentLoaded', function() {
    compodoc.dispatchEvent({
        type: compodoc.EVENTS.READY
    });
});
