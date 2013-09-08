<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>LaTeX Editor</title>
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/tutorial.css">
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
		var previewer = Initialize($("textarea#ScribbleInput"), $("div#ScribblePreview"), $("div#ScribbleBuffer"), $(".insert-latex"));
	});
	</script>
</head>
<body>
	<div class="container">
		<div class="alert alert-warning alert-dismissable" style="display:none;" id="tutorial-alert">
			<button type="button" class="close" aria-hidden="true" onclick="$('div#tutorial-alert').fadeOut();">&times;</button>
			<strong>Hmm...</strong> <span id="alert-message"></span>
		</div>
		
		<div id="tutorial-container">
			<button id="tutorial-start" class="btn btn-default">Start tutorial</button>
			<div class="panel panel-default" id="tutorial" style="display:none;">
				<div class="panel-body" id="instruction">
			    	Welcome to the \(\LaTeX\) tutorial brought to you by Scribble! Before we get started, it is good that we get familiar with the user interface here. Click Next to continue.
				</div>
				<div class="panel-footer" style="overflow:hidden;">
					<div class="btn-group pull-right">
						<button type="button" class="btn btn-default tutorial-change-step" id="prev" disabled data-force="true">Prev</button>
						<button type="button" class="btn btn-default" id="reset" disabled>Reset</button>
						<button type="button" class="btn btn-default tutorial-change-step" id="next" data-goto=2>Next</button>
					</div>
				</div>
			</div>
		</div>

		<div class="well well-lg" id="ScribblePreview" style="display:none;"></div>
		<div class="well well-lg" id="ScribbleBuffer" style="display:none;"></div>

		<div class="navbar navbar-default" id="latex-selector">
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

		<div>
			<textarea id="ScribbleInput" rows=15 style="font-family: 'Courier New', Courier, monospace; width:100%;"></textarea>
		</div>
		
	</div>
</body>
</html>