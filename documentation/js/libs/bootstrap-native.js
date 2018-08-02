// Native Javascript for Bootstrap 3 v1.1.0 | © dnp_theme | MIT-License
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD support:
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like:
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    var bsn = factory();
    root.Affix = bsn.Affix;
    root.Alert = bsn.Alert;
    root.Button = bsn.Button;
    root.Carousel = bsn.Carousel;
    root.Collapse = bsn.Collapse;
    root.Dropdown = bsn.Dropdown;
    root.Modal = bsn.Modal;
    root.Popover = bsn.Popover;
    root.ScrollSpy = bsn.ScrollSpy;
    root.Tab = bsn.Tab;
    root.Tooltip = bsn.Tooltip;
  }
}(this, function() {
  // Native Javascript for Bootstrap 3 | Internal Utility Functions
  // by dnp_theme
  var addClass = function(el, c) { // where modern browsers fail, use classList
    if (el.classList) {
      el.classList.add(c);
    } else {
      el.className += ' ' + c;
      el.offsetWidth;
    }
  },
      removeClass = function(el, c) {
      if (el.classList) {
        el.classList.remove(c);
      } else {
        el.className = el.className.replace(c, '').replace(/^\s+|\s+$/g, '');
      }
      },
      isIE = (new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) != null) ? parseFloat(RegExp.$1) : false,
      getClosest = function(el, s) { //el is the element and s the selector of the closest item to find
      // source http://gomakethings.com/climbing-up-and-down-the-dom-tree-with-vanilla-javascript/
      var f = s.charAt(0);
      for (; el && el !== document; el = el.parentNode) { // Get closest match
        if (f === '.') { // If selector is a class
          if (document.querySelector(s) !== undefined) {
            return el;
          }
        }
        if (f === '#') { // If selector is an ID
          if (el.id === s.substr(1)) {
            return el;
          }
        }
      }
      return false;
      },


      // tooltip / popover stuff
      isElementInViewport = function(t) { // check if this.tooltip is in viewport
      var r = t.getBoundingClientRect();
      return (
      r.top >= 0 && r.left >= 0 && r.bottom <= (window.innerHeight || document.documentElement.clientHeight) && r.right <= (window.innerWidth || document.documentElement.clientWidth))
      },
      getScroll = function() { // also Affix and scrollSpy uses it
      return {
        y: window.pageYOffset || document.documentElement.scrollTop,
        x: window.pageXOffset || document.documentElement.scrollLeft
      }
      },
      mouseHover = ('onmouseleave' in document) ? ['mouseenter', 'mouseleave'] : ['mouseover', 'mouseout'],
      tipPositions = /\b(top|bottom|left|top)+/;


  // Native Javascript for Bootstrap 3 | Collapse
  // by dnp_theme
  // COLLAPSE DEFINITION
  // ===================
  var Collapse = function(element, options) {
    options = options || {};

    this.btn = typeof element === 'object' ? element : document.querySelector(element);
    this.accordion = null;
    this.collapse = null;
    this.duration = 300; // default collapse transition duration
    this.options = {};
    this.options.duration = (isIE && isIE < 10) ? 0 : (options.duration || this.duration);
    var self = this;
    var getOuterHeight = function(el) {
      var s = el && (el.currentStyle || window.getComputedStyle(el)),
           // the getComputedStyle polyfill would do this for us, but we want to make sure it does
          btp = /px/.test(s.borderTopWidth) ? Math.round(s.borderTopWidth.replace('px', '')) : 0,
          mtp = /px/.test(s.marginTop) ? Math.round(s.marginTop.replace('px', '')) : 0,
          mbp = /px/.test(s.marginBottom) ? Math.round(s.marginBottom.replace('px', '')) : 0,
          mte = /em/.test(s.marginTop) ? Math.round(s.marginTop.replace('em', '') * parseInt(s.fontSize)) : 0,
          mbe = /em/.test(s.marginBottom) ? Math.round(s.marginBottom.replace('em', '') * parseInt(s.fontSize)) : 0;
      return el.clientHeight + parseInt(btp) + parseInt(mtp) + parseInt(mbp) + parseInt(mte) + parseInt(mbe); //we need an accurate margin value
    };

    this.toggle = function(e) {
      e.preventDefault();

      if (!/\bin/.test(self.collapse.className)) {
        self.open();
      } else {
        self.close();
      }
    };
    this.close = function() {
      this._close(this.collapse);
      addClass(this.btn, 'collapsed');
    };
    this.open = function() {
      this._open(this.collapse);
      removeClass(this.btn, 'collapsed');

      if (this.accordion !== null) {
        var active = this.accordion.querySelectorAll('.collapse.in'),
            al = active.length,
            i = 0;
        for (i; i < al; i++) {
          if (active[i] !== this.collapse) this._close(active[i]);
        }
      }
    };
    this._open = function(c) {
      this.removeEvent();
      addClass(c, 'in');
      c.setAttribute('aria-expanded', 'true');
      addClass(c, 'collapsing');
      setTimeout(function() {
        c.style.height = self.getMaxHeight(c) + 'px'
        c.style.overflowY = 'hidden';
      }, 0);
      setTimeout(function() {
        c.style.height = '';
        c.style.overflowY = '';
        removeClass(c, 'collapsing');
        self.addEvent();
      }, this.options.duration);
    };
    this._close = function(c) {
      this.removeEvent();
      c.setAttribute('aria-expanded', 'false');
      c.style.height = this.getMaxHeight(c) + 'px'
      setTimeout(function() {
        c.style.height = '0px';
        c.style.overflowY = 'hidden';
        addClass(c, 'collapsing');
      }, 0);

      setTimeout(function() {
        removeClass(c, 'collapsing');
        removeClass(c, 'in');
        c.style.overflowY = '';
        c.style.height = '';
        self.addEvent();
      }, this.options.duration);
    };
    this.getMaxHeight = function(l) { // get collapse trueHeight and border
      var h = 0;
      for (var k = 0, ll = l.children.length; k < ll; k++) {
        h += getOuterHeight(l.children[k]);
      }
      return h;
    };
    this.removeEvent = function() {
      this.btn.removeEventListener('click', this.toggle, false);
    };
    this.addEvent = function() {
      this.btn.addEventListener('click', this.toggle, false);
    };
    this.getTarget = function() {
      var t = this.btn,
          h = t.href && t.getAttribute('href').replace('#', ''),
          d = t.getAttribute('data-target') && (t.getAttribute('data-target')),
          id = h || (d && /#/.test(d)) && d.replace('#', ''),
          cl = (d && d.charAt(0) === '.') && d,
           //the navbar collapse trigger targets a class
          c = id && document.getElementById(id) || cl && document.querySelector(cl);
      return c;
    };

    // init
    this.addEvent();
    this.collapse = this.getTarget();
    this.accordion = this.btn.getAttribute('data-parent') && getClosest(this.btn, this.btn.getAttribute('data-parent'));
  };

  // COLLAPSE DATA API
  // =================
  var Collapses = document.querySelectorAll('[data-toggle="collapse"]');
  for (var o = 0, cll = Collapses.length; o < cll; o++) {
    var collapse = Collapses[o],
        options = {};
    options.duration = collapse.getAttribute('data-duration');
    new Collapse(collapse, options);
  }

  // Native Javascript for Bootstrap 3 | Tab
  // by dnp_theme

  // TAB DEFINITION
  // ===================
  var Tab = function( element,options ) {
    options = options || {};
    this.tab = typeof element === 'object' ? element : document.querySelector(element);
    this.tabs = this.tab.parentNode.parentNode;
    this.dropdown = this.tabs.querySelector('.dropdown');
    if ( /\bdropdown-menu/.test(this.tabs.className) ) {
      this.dropdown = this.tabs.parentNode;
      this.tabs = this.tabs.parentNode.parentNode;
    }
    this.options = options;

    // default tab transition duration
    this.duration = 150;
    this.options.duration = (isIE && isIE < 10)  ? 0 : (options.duration || this.duration);

    var self = this;

    this.handle = function(e) {
      e = e || window.e; e.preventDefault();
      var next = e.target; //the tab we clicked is now the next tab
      var nextContent = document.getElementById(next.getAttribute('href').replace('#','')); //this is the actual object, the next tab content to activate

      // get current active tab and content
      var activeTab = self.getActiveTab();
      var activeContent = self.getActiveContent();

      if ( !/\bactive/.test(next.parentNode.className) ) {
        // toggle "active" class name
        removeClass(activeTab,'active');
        addClass(next.parentNode,'active');

        // handle dropdown menu "active" class name
        if ( self.dropdown ) {
          if ( !(/\bdropdown-menu/.test(self.tab.parentNode.parentNode.className)) ) {
            if (/\bactive/.test(self.dropdown.className)) removeClass(self.dropdown,'active');
          } else {
            if (!/\bactive/.test(self.dropdown.className)) addClass(self.dropdown,'active');
          }
        }

        //1. hide current active content first
        removeClass(activeContent,'in');

        setTimeout(function() {
          //2. toggle current active content from view
          removeClass(activeContent,'active');
          addClass(nextContent,'active');
        }, self.options.duration);
        setTimeout(function() {
          //3. show next active content
          addClass(nextContent,'in');
        }, self.options.duration*2);
      }
    };
    this.getActiveTab = function() {
      var activeTabs = this.tabs.querySelectorAll('.active');
      if ( activeTabs.length === 1 && !/\bdropdown/.test(activeTabs[0].className) ) {
        return activeTabs[0]
      } else if ( activeTabs.length > 1 ) {
        return activeTabs[activeTabs.length-1]
      }
    };
    this.getActiveContent = function() {
      var active = this.getActiveTab().getElementsByTagName('A')[0].getAttribute('href').replace('#','');
      return active && document.getElementById(active)
    };

    // init
    this.tab.addEventListener('click', this.handle, false);
  };

  // TAB DATA API
  // =================
  var Tabs = document.querySelectorAll("[data-toggle='tab'], [data-toggle='pill']");
  for ( var tb = 0, tbl = Tabs.length; tb<tbl; tb++ ) {
    var tab = Tabs[tb], options = {};
    options.duration = tab.getAttribute('data-duration') && tab.getAttribute('data-duration') || false;
    new Tab(tab,options);
  }

  return {
    Tab: Tab,
    Collapse: Collapse
};
}));
