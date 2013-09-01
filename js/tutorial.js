$(document).ready(function(){
	$("button#tutorial-start").click(function(){
		$("button#tutorial-start").hide();
		$("button#tutorial-next").show();
		$("button#tutorial-next").data("current-step", 1);
		$("p#instruction").show();
		$("p#instruction").text("Hi! Thanks for reading this tutorial. This tutorial aims to teach the basic of \\(\\LaTeX\\). \\(\\LaTeX\\) is a markup language that allows users to easily input math equations into computer.");
		MathJax.Hub.Queue(["Typeset",MathJax.Hub,"instruction"]);
	});

	$("button#tutorial-next").click(function(){
		if ($(this).data("current-step") == 1)
		{
			$(this).data("current-step", 2);
			$("p#instruction").text("In general, there are two modes that are available in \\(\\LaTeX\\): inline mode and displayed mode. Let us first see what inline mode is. First, in the sentence present below, move the cursor to right after the colon(:) and click on the \"Inline mode\" button");
			MathJax.Hub.Queue(["Typeset",MathJax.Hub,"instruction"]);
			$("textarea#input").val("Let's see what inline mode is. Look here: Amazing!");
		}
		else if ($(this).data("current-step") == 2)
		{
			if ($("textarea#input").val() == "Let's see what inline mode is. Look here:\\( \\) Amazing!")
			{
				$(this).data("current-step", 3); 
				$("p#instruction").text("That's right! You should see that '\\( \\)' being inserted into the text. All math symbol should be put in between them. Now, make sure that the cursor is right before the second slash, and click \"Common\" then \"Square root\"");
			}
			else
			{
				alert("nope...");
			}
		}
		else if ($(this).data("current-step") == 3)
		{
			if ($("textarea#input").val() == "Let's see what inline mode is. Look here:\\( \\sqrt{b}\\) Amazing!")
			{
				$(this).data("current-step", 4);
				$("p#instruction").text("Take a look at the preview under the textarea. You can see that the square root sign appear among the other text. We say that the square root sign appears inline with other text and hence, it is called 'inline mode'. Before we proceed to explore what Displayed mode is, you should play around with other math formulae. Just make sure that all formulae appears in between \\( and \\). (Try not putting them in between \\( and \\) and see what happens) When you are ready, click next to continue.");
			}
			else
			{
				alert("nope...");
			}
		}
		else if ($(this).data("current-step") == 4)
		{
			$(this).data("current-step", 5);
			$("p#instruction").text("Now, we are ready to see what Displayed mode is. Again, move your cursor to right after the colon. This time, click \"Displayed mode\"");
			$("textarea#input").val("Let's see what displayed mode is. Look here: Amazing!");
		}
		else if ($(this).data("current-step") == 5)
		{
			if ($("textarea#input").val() == "Let's see what displayed mode is. Look here:\\[ \\] Amazing!")
			{
				$(this).data("current-step", 6);
				$("p#instruction").html("Make sure that the cursor is now right before the second slash. Copy and paste the following into the textarea:<br><code>T = 2 \\pi \\sqrt{ \\frac{l}{g} }</code>");
			}
			else
			{
				alert("nope...");
			}
		}
		else if ($(this).data("current-step") == 6)
		{
			if ($("textarea#input").val() == "Let's see what displayed mode is. Look here:\\[ T = 2 \\pi \\sqrt{ \\frac{l}{g} }\\] Amazing!")
			{
				// $(this).data("current-step", 7);
				$("p#instruction").html("Right now, you should be able to see the equation for the period of a simple pendulum displayed in a new line and centered. This is how you math equation will be shown in displayed mode.<br>In escence, when writing in LaTeX, you can work in two modes: inline and displayed. For inline mode, math formulae will be displayed inline with other text; in displayed mode, however, math formulae will be shown in it own line. Also, you should take note that all math formulae should appear inside \\( \\) or \\[ \\]. It is possible to have multiple \\( \\) or \\[ \\] in a single document.<br>Now, experiment with other formulae in these two modes and have fun!");
				$(this).hide();
			}
			else
			{
				alert("nope...");
			}
		}
	});
});