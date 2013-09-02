<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>LaTeX Editor</title>
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	<script src="js/tutorial.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/jquery.caret.js"></script>
	<script type="text/x-mathjax-config">
	MathJax.Hub.Config({tex2jax: {processEscapes: true}});
	</script>
	<script src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
	<script src="js/mathjax-livepreview.js"></script>
	<script>
	$(document).ready(function(){
		$(".insert-latex").click(function(){
			if (!$(this).data("latex-code")) return;
			$("textarea#input").insertAtCaret($(this).data("latex-code"));
			if ($(this).data("caret-end-offset") !== undefined)
				$("textarea#input").setCaretPosition($("textarea#input").getCaretPosition()+$(this).data("caret-start-offset"), $("textarea#input").getCaretPosition()+$(this).data("caret-end-offset"));
			else if ($(this).data("caret-start-offset") !== undefined)
				$("textarea#input").setCaretPosition($("textarea#input").getCaretPosition()+$(this).data("caret-start-offset"));
			Preview.Update();
		});
	});
	</script>
</head>
<body>
	<div class="container">
		<div class="navbar navbar-default">
			<div class="navbar-header">
			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			</div>
			<div class="collapse navbar-collapse navbar-ex1-collapse">
				<ul class="nav navbar-nav">
					<?php require_once("generator.php");?>
				</ul>
			</div>
		</div>

		<div id="tutorial">
			<button id="tutorial-start" class="btn btn-default">Start tutorial</button>
			<p id="instruction" style="display:none;">\({}\)</p>
			<button id="tutorial-next" class="btn btn-default" style="display:none;">Next</button>
		</div>

		<div>
			<textarea id="input" rows=15 onkeyup="Preview.Update()" style="font-family: 'Courier New', Courier, monospace; width:100%;"></textarea>
		</div>
		<div id="ScribblePreview"></div>
		<div id="ScribbleBuffer"></div>
	</div>
</body>
</html>