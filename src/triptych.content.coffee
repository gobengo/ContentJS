define (require, exports, module) ->
    Content = require 'content'

    class Triptych extends Content
        constructor: (first, second, third) ->
            if not (first and second and third)
                throw "Cannot create Triptych without three args"
            @first first
            @second second
            @third third

        html: (newVal) ->
            if newVal
                console.log("Warning: Can't set .html on Triptych. It is derived")
                return false
            return ''+@first()+' - '+@second()+' - '+@third()

        first: (newFirst) ->
            if not newFirst
                return @_first
            if typeof newFirst isnt 'string'
                throw "Triptych::first must be passed a String of HTML"
            @_first = newFirst

        second: (newSecond) ->
            if not newSecond
                return @_second
            if typeof newSecond isnt 'string'
                throw "Triptych::second must be passed a String of HTML"
            @_second = newSecond

        third: (newThird) ->
            if not newThird
                return @_third
            if typeof newThird isnt 'string'
                throw "Triptych::first must be passed a String of HTML"
            @_third = newThird

    exports = Triptych