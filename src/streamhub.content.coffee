define (require, exports, module) ->
    Content = require 'content'

    class SHContent extends Content
        constructor: (streamhubContent) ->
            if typeof streamhubContent isnt 'object' or
            not (streamhubContent.content and streamhubContent.content.bodyHtml)
                throw "Cannot create StreamHubContent without an object arg and arg.content.bodyHtml"
            @_sh = streamhubContent

        html: (newVal) ->
            if newVal
                console.log("Warning: Can't set .html on StreamHubContent. It is derived")
                return false
            return @_sh.content.bodyHtml

    exports = SHContent