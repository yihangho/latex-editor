# LaTeX Editor
A (more) user friendly editor for people writing LaTeX on Scribble.

## 3rd Party Libraries
LaTeX Editor is powered by these awesome libraries: (arranged in alphabetical order)

- [Bootstrap](http://getbootstrap.com/)
- [jQuery](http://jquery.com/)
- [jQuery.caret.js](https://github.com/garyharan/jQuery-caret-utilities)
- [MathJax](http://www.mathjax.org/) (the renderer and the script for live preview)

jQuery, jQuery.caret.js and MathJax are __required__.

## Documentation
This documentation is over simplfied - current aim is to prevent me from forgetting stuff.

### Defining buttons
Buttons can be defined in `data.json`. Documentation of the structure of this document is coming. Next, define how you want your buttons to appear in `generator.php`. After that, you can either include `generator.php` by `require_once("generator.php");` in the appropriate location, or you may visit `generator.php?html=true` to get the HTML code.

### Initializing editor and previewer
To initialize the editor and previewer, we need 4 things:

- A `textarea` to input code
- Two `div`s - one shown and one hidden using `display:none;`
- All the buttons that will insert code into the textarea

Basically, we will use jQuery to select these four things, and pass them into `Initialize()`.

```javascript
$(document).ready(function(){ //Make sure that the DOMs already exists when calling Initialize()
	var previewer = Initialize($("textarea#input"), $("div#preview"), $("div#buffer"), $(".insert-latex"));
});
```

The parameters passed into `Initialize()` are (in that order, selected using jQuery):

1. The `textarea`
2. The shown `div`
3. The hidden `div`
4. The buttons