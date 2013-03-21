// Generated by CoffeeScript 1.6.2
(function() {
  define(function(require, exports, module) {
    var SHContent, jasmine;
    jasmine = require('jasmine');
    SHContent = require('content/streamhub.content');
    return describe('StreamHubContent', function() {
      var mockData;
      mockData = {
        "vis": 1,
        "content": {
          "replaces": "",
          "feedEntry": {
            "transformer": "lfcore.v2.procurement.feed.transformer.instagram",
            "feedType": 2,
            "description": "Lol omg hot mess but so fun  And feelin good #sxsw <img src=\"http://distilleryimage1.instagram.com/99a6dd7e918911e2820422000a1f97b5_7.jpg\" />",
            "pubDate": 1363803196,
            "channelId": "http://instagram.com/tags/sxsw/feed/recent.rss",
            "link": "http://distilleryimage1.instagram.com/99a6dd7e918911e2820422000a1f97b5_7.jpg",
            "id": "5df3a797-2568-47b8-bf19-33b6399d2f96",
            "createdAt": 1363803196
          },
          "bodyHtml": "Lol omg hot mess but so fun  And feelin good #sxsw ",
          "annotations": {},
          "authorId": "942fb1ef520b65ce03d0e442bdf7f524@instagram.com",
          "parentId": "",
          "updatedAt": 1363803196,
          "id": "5df3a797-2568-47b8-bf19-33b6399d2f96",
          "createdAt": 1363803196
        },
        "source": 13,
        "lastVis": 0,
        "type": 0,
        "event": 1363803198441200
      };
      beforeEach(function() {
        return this.content = new SHContent(mockData);
      });
      it('should fail to construct if arg.content.bodyHtml is not present', function() {
        return expect(function() {
          var failContent;
          return failContent = new SHContent({});
        }).toThrow();
      });
      it('fails to set .html because html is derived', function() {
        var originalHtml, resultOfSet;
        originalHtml = this.content.html();
        resultOfSet = this.content.html('woah');
        expect(resultOfSet).toBe(false);
        return expect(this.content.html()).toBe(originalHtml);
      });
      return it('gets html when .html is called', function() {
        return expect(this.content.html()).toBe(mockData.content.bodyHtml);
      });
    });
  });

}).call(this);

/*
//@ sourceMappingURL=streamhub.content.map
*/