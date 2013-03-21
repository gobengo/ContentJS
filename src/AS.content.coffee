define (require, exports, module) ->
	Content = require 'content'

	class ASObject extends Content
		constructor: (html) ->
			@content html

		html: (newVal) ->
			if newVal
				console.log("Warning: Can't set .html on ASObject. It is derived")
				return false
			return @content()

		# @todo ensure this is valid
		content: (newHtml) ->
			if not newHtml
				return @_content
			if typeof newHtml isnt 'string'
				throw "ASObject::content must be passed a String of HTML"
			@_content = newHtml

	exports = ASObject