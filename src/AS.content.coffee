define (require, exports, module) ->
	Content = require 'content'

	###
	ActivityStrea.ms Object Content
	http://activitystrea.ms/specs/json/1.0/#object
	###
	class ASObject extends Content
		# @todo accept AS Object JSON (duh)
		constructor: (html) ->
			@content html

		html: (newVal) ->
			if newVal
				console.log("Warning: Can't set .html on ASObject. It is derived")
				return false
			return @content()

		###
		The AS Object schema has a defined `content` property:
		Natural-language description of the object encoded as a single JSON String containing HTML markup. Visual elements such as thumbnail images MAY be included. An object MAY contain a content property
		@todo ensure this is valid
		###
		content: (newHtml) ->
			if not newHtml
				return @_content
			if typeof newHtml isnt 'string'
				throw "ASObject::content must be passed a String of HTML"
			@_content = newHtml

	exports = ASObject