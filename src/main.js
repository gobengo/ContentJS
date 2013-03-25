define(function(require, exports, module) {

    /**
     * Content constructor
     * @param html {String} A string of HTML that represents the Content
     */
    var Content = function Content (html) {
        this.html(html);
    };

    /**
     * Register a Content subclass with the Content core so that instances
     * of it can be created by Content.create
     */
    Content.register = function (contentType) {

    };

    /**
     * Create a piece of Content using the best subclass for the provided parameter
     */
    Content.create = function (something) {

    };

    /**
     * Get an HTML representation of the Content
     * @param newHtml {String, optional} A new string to set as the HTML
     */
    Content.prototype.html = function (newHtml) {
        if ( ! newHtml) {
            return this._html;
        }
        if (typeof newHtml !== 'string') {
            throw "Content::html must be passed a String of HTML";
        }
        this._html = newHtml;
        return this._html;
    };

    return Content;
});