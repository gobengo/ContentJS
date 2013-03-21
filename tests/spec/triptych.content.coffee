define (require, exports, module) ->
    jasmine = require 'jasmine'
    Triptych = require 'content/triptych.content'

    describe 'Triptych', () ->

        beforeEach () ->
            @trip = new Triptych '1','2','3'

        it 'fails to set .html because html is derived', () ->
            originalHtml = @trip.html()
            resultOfSet = @trip.html('woah')
            expect(resultOfSet).toBe(false)
            expect(@trip.html()).toBe(originalHtml)

        it 'gets html when .html is called', () ->
            expect(@trip.html()).toBe('1 - 2 - 3')