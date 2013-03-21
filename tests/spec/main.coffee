define (require, exports, module) ->
    jasmine = require 'jasmine'
    Content = require 'content'

    describe 'Content', () ->
        beforeEach () ->
            @content = new Content '<h1>Content<h1>'

        it 'instances are instanceof Content', () ->
            expect(@content instanceof Content).toBe(true)

        it 'gets its html when .html is called', () ->
            expect(@content.html()).toBe(@content._html)

        it 'sets its html when a string is passed to .html', () ->
            newHtml = 'blah'
            expect(@content.html()).not.toBe(newHtml)
            @content.html newHtml
            expect(@content.html()).toBe(newHtml)