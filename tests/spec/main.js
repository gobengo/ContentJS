define(function(require, exports, module) {
  var Content, jasmine;

  jasmine = require('jasmine');
  Content = require('content');

  describe('Content construction', function() {
    beforeEach(function() {
      return this.content = new Content('<h1>Content<h1>');
    });

    it('instances are instanceof Content', function() {
      return expect(this.content instanceof Content).toBe(true);
    });

    it('gets its html when .html is called', function() {
      return expect(this.content.html()).toBe(this.content._html);
    });
    
    it('sets its html when a string is passed to .html', function() {
      var newHtml;
      newHtml = 'blah';
      expect(this.content.html()).not.toBe(newHtml);
      this.content.html(newHtml);
      return expect(this.content.html()).toBe(newHtml);
    });
  });

});