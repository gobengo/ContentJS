define (require, exports, module) ->
    jasmine = require 'jasmine'
    ASObject = require 'content/AS.content'

    describe 'ASObject', () ->
        mockHtml = '<p>Content</p>'

        beforeEach () ->
            console.log ASObject
            @asObject = new ASObject mockHtml

        it 'fails to set .html because html is derived', () ->
            originalHtml = @asObject.html()
            resultOfSet = @asObject.html('woah')
            expect(resultOfSet).toBe(false)
            expect(@asObject.html()).toBe(originalHtml)

        it 'gets html when .html is called', () ->
            expect(@asObject.html()).toBe(mockHtml)

        it 'has a .content method that returns the HTML content', () ->
            expect(@asObject.content()).toBe(mockHtml)