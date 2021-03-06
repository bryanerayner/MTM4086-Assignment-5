Store.PaginationPageComponent = Em.Component.extend({
  isCurrent: (function() {
    return this.get('currentPage') === this.get('page');
  }).property('currentPage', 'page'),
  tagName: 'li',
  classNameBindings: 'isCurrent:current',

  actions: {
    pageClicked: function() {
      return this.get('parentView').send('goToPage', this.get('page'));
    }
  }

});



Store.PaginationLinksComponent = Em.Component.extend({
  hasPrevious: function() {
    return this.get('page') > 1;
  }.property('page'),

  hasNext: function() {
    return this.get('page') + 1 < this.get('pages');
  }.property('page', 'pages'),

  showPagination: Em.computed.gt('pages', 1),
  lastPage: Em.computed.alias('pages'),

  visiblePages: function() {
    var finish, limit, page, pages, start, _i, _ref, _results;
    pages = this.get('pages');
    page = this.get('page');
    limit = 5;
    if (pages < 5) {
      limit = pages;
    }
    finish = function(start, limit) {
      return start + limit - 1;
    };
    start = page - parseInt(limit / 2);

    if (finish(start, limit) > pages) {
      start = pages - limit + 1;
    }
    if (start < 1) {
      start = 1;
    }
    return (function() {
      _results = [];
      for (var _i = start, _ref = finish(start, limit); start <= _ref ? _i <= _ref : _i >= _ref; start <= _ref ? _i++ : _i--){ _results.push(_i); }
      return _results;
    }).apply(this);
  }.property('page', 'pages'),


  showBeforeEllipsis: function() {
    return this.get('visiblePages.firstObject') > 3;
  }.property('visiblePages.[]'),

  showAfterEllipsis: function() {
    return Math.abs(this.get('lastPage') - this.get('visiblePages.lastObject')) > 2;
  }.property('visiblePages.[]', 'lastPage'),

  actions: {
    goToNextPage: function() {
      if (this.get('hasNext')) {
        return this.incrementProperty('controller.page');
      }
    },
    goToPreviousPage: function() {
      if (this.get('hasPrevious')) {
        return this.decrementProperty('controller.page');
      }
    },
    goToPage: function(pageNumber) {
      if (pageNumber >= 1 && pageNumber <= this.get('lastPage')) {
        return this.set('controller.page', pageNumber);
      }
    }
  }


});