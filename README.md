# ContentJS

ContentJS helps developers work with Content on the web. It's everywhere these days, in all sorts of formats, and viewed with all sorts of styles and templates. ContentJS aims to simplify and structure this Content to provide an opportunity for standard Tempaltes and Theme libraries. Beautiful Content, easily.

ContentJS provides a standard interface to the following properties of Web Content:
    * `html` - The HTML body of the Content. This is the only required property.

## Content

Content is a structured way of representing web microdocuments (i.e. HTML fragments) meant for human consumption. Things like comments, blog posts, tweets, photos, and more.

Content should be passed a string of HTML on construction.

You can get an HTML representation of the Content using the `.html` method.
Or set the HTML by passing it a string.

Subclasses are encouraged to expose more getters and setters for other, more specific properties.
Just as long as there's always a way of getting HTML from `.html()`