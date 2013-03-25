define(function(require, exports, module) {
    var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

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
    __extends(SHContent, Content);


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