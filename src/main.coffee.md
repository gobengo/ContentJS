# ContentJS

ContentJS helps developers work with Content on the web. It's everywhere these days, in all sorts of formats, and viewed with all sorts of styles and templates. ContentJS aims to simplify and structure this Content to provide an opportunity for standard Tempaltes and Theme libraries. Beautiful Content, easily.

ContentJS provides a standard interface to the following properties of Web Content:
    * `html` - The HTML body of the Content. This is the only required property.

This is a module with no dependencies

	define (require, exports, module) ->


## Content

Content is a structured way of representing web microdocuments (i.e. HTML fragments) meant for human consumption. Things like comments, blog posts, tweets, photos, and more.

Content should be passed a string of HTML on construction.
		
		class Content
			constructor: (html) ->
				@html html

You can get an HTML representation of the Content using the `.html` method.
Or set the HTML by passing it a string.

			# @todo ensure this is valid HTML
			html: (newHtml) ->
				if not newHtml
					return @_html
				if typeof newHtml isnt 'string'
					throw "Content::html must be passed a String of HTML"
				@_html = newHtml

This module exports the `Content` constructor

		exports.Content = Content