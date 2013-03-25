define(function(require, exports, module) {
    var $ = require('jquery');
    var Content = require('content');

    /**
     * StreamHub Content
     * @param streamhubContent {Object} An data object from the StreamHub SDK
    */
    var SHContent = function SHContent(streamhubContent) {
        if (typeof streamhubContent !== 'object' || !(streamhubContent.content && streamhubContent.content.bodyHtml)) {
            throw "Cannot create StreamHubContent without an object arg and arg.content.bodyHtml";
        }
        this._sh = streamhubContent;
    };
    $.extend(SHContent.prototype, Content.prototype);


    /**
     * Get an HTML representation of the StreamHub Content
     */
    SHContent.prototype.html = function(newVal) {
        if (newVal) {
            console.log("Warning: Can't set .html on StreamHubContent. It is derived");
            return false;
        }
        return this._sh.content.bodyHtml;
    };

    return SHContent;
});