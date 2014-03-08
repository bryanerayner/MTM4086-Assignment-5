Store.PaginatableMixin = Em.Mixin.create({



  paginatedContent: Em.computed(function() {
    
    var page = this.get('page');
    var perPage = this.get('perPage');
    var start = (page - 1) * perPage;
    var end = page * perPage;

    return this.get('paginatedSource').slice(start, end);
  }).property('paginatedSource.[]', 'page', 'perPage'),

  pages: Em.computed(function() {
    var result;
    result = parseInt(this.get('content.length') / this.get('perPage'));
    if (this.get('content.length') % this.get('perPage') > 0) {
      ++result;
    }
    return result;
  }).property('paginatedSource.[]', 'perPage'),

  paginatedSource: Em.computed(function () {
    return this.get('content');
  }).property('content.[]')
});