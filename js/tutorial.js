var prev_element = false;
var animate = function(element) {
	if (prev_element && prev_element.hasClass('animated tada')) prev_element.removeClass('animated tada');
	element.addClass('animated tada');
	prev_element = element;
}
var kill_animate = function() {
	if (prev_element) prev_element.removeClass('animated tada');
	prev_element = false;
}
var update_step = function(cur_step) {
	if (cur_step != 1) {
		$("button#prev").data("goto", cur_step-1);
		$("button#prev").removeAttr("disabled");
	} else {
		$("button#prev").attr("disabled", "disabled");
	}
	
	$("button#next").data("goto", cur_step+1);

	if (cur_step < 10) $("button#next").removeAttr("disabled");
	else $("button#next").attr("disabled", "disabled");
}
var hide_all = function() {
	$("div#tutorial-alert").hide();
	$("textarea#ScribbleInput").hide();
	$("div#ScribblePreview").hide();
	$("div#ScribbleBuffer").hide();
	$("div#latex-selector").hide();
	$("button#reset").attr("disabled", "disabled");
}

var goto = function(step, force) {
	if (!step) return;
	if (step < 1 || step > 10) {
		return;
	}
	
	if (step == 1) {
		hide_all();
		kill_animate();
		$("div#tutorial div.panel-body").html("Welcome to the \\(\\LaTeX\\) tutorial brought to you by Scribble! Before we get started, it is good that we get familiar with the user interface here. Click Next to continue.");
		MathJax.Hub.Queue(["Typeset",MathJax.Hub,"instruction"]);
	}
	if (step == 2) {
		hide_all();
		kill_animate();
		$("textarea#ScribbleInput").show();
		animate($("textarea#ScribbleInput"));
		$("div#tutorial div.panel-body").html("What is shown to you right now is the <strong>textarea</strong>. It is there for you to write stuff down.");
	}
	if (step == 3) {
		hide_all();
		kill_animate();
		$("textarea#ScribbleInput").show();
		$("textarea#ScribbleInput").val("");
		$("textarea#ScribbleInput").keyup();
		setTimeout(function(){$("textarea#ScribbleInput").val("Hello World!");$("textarea#ScribbleInput").keyup();}, 200);
		$("div#tutorial div.panel-body").html("The grey box that appears above the textarea is the <strong>live preview box</strong>. Everything that you have written in the textarea will be shown there. Try it out!");
	}
	if (step == 4) {
		hide_all();
		kill_animate();
		$("textarea#ScribbleInput").show();
		$("div#latex-selector").show();
		$("textarea#ScribbleInput").val("");
		$("textarea#ScribbleInput").keyup();
		setTimeout(function(){$("textarea#ScribbleInput").val("Hello World!");$("textarea#ScribbleInput").keyup();}, 200);
		$("div#tutorial div.panel-body").html("The grey box that is sandwiched between the live preview box and textarea is the \\(\\LaTeX\\) <strong>selector</strong>. Basically, this selector allows you to use \\(\\LaTeX\\) without knowing its markup language.");
		MathJax.Hub.Queue(["Typeset",MathJax.Hub,"instruction"]);
	}
	if (step == 5) {
		hide_all();
		kill_animate();
		$("textarea#ScribbleInput").show();
		$("div#latex-selector").show();
		$("textarea#ScribbleInput").val("");
		$("textarea#ScribbleInput").keyup();
		setTimeout(function(){$("textarea#ScribbleInput").val("Let's try out the inline mode: Lorem ipsum dolor sit amet, consectetur adipiscing elit.");$("textarea#ScribbleInput").keyup();$("button#reset").data("default-text", $("textarea#ScribbleInput").val());}, 200);
		$("button#reset").removeAttr("disabled");
		$("div#tutorial div.panel-body").html("In \\(\\LaTeX\\), there are two modes to enter math: inline mode and displayed mode. We shall see what inline mode is first. In the textarea below, move the cursor to right after the colon, and choose 'Inline mode' from the selector.<br>When you are ready, click Next. If you think you screwed something up, just click Reset.");
		MathJax.Hub.Queue(["Typeset",MathJax.Hub,"instruction"]);
	}
	if (step == 6) {
		if ($("textarea#ScribbleInput").val() != "Let's try out the inline mode:\\( \\) Lorem ipsum dolor sit amet, consectetur adipiscing elit." && !force) {
			$("span#alert-message").html("Seems like you are not doing it right. Why not give it a try again?");
			$("div#tutorial-alert").fadeIn();
			return;
		}
		hide_all();
		kill_animate();
		hide_all();
		kill_animate();
		$("textarea#ScribbleInput").show();
		$("div#latex-selector").show();
		$("textarea#ScribbleInput").val("");
		$("textarea#ScribbleInput").keyup();
		setTimeout(function(){$("textarea#ScribbleInput").val("Let's try out the inline mode:\\( \\) Lorem ipsum dolor sit amet, consectetur adipiscing elit.");$("textarea#ScribbleInput").keyup();$("button#reset").data("default-text", $("textarea#ScribbleInput").val());}, 200);
		$("button#reset").removeAttr("disabled");
		$("div#tutorial div.panel-body").html("You should be able to see that '\\( \\)' appears right after the colon. This is the delimiter for inline mode - we will be entering all the math stuff in between this pair. Now, move the cursor to right before the second slash, click 'Common' in the selector and choose 'Square root'.<br>Click next when you are ready and, again, if you think you're stuck, click Reset.");
	}
	if (step == 7) {
		if ($("textarea#ScribbleInput").val() != "Let's try out the inline mode:\\( \\sqrt{b}\\) Lorem ipsum dolor sit amet, consectetur adipiscing elit." && !force) {
			$("span#alert-message").html("Seems like you are not doing it right. Why not give it a try again?");
			$("div#tutorial-alert").fadeIn();
			return;
		}
		hide_all();
		kill_animate();
		$("textarea#ScribbleInput").show();
		$("div#latex-selector").show();
		$("textarea#ScribbleInput").val("");
		$("textarea#ScribbleInput").keyup();
		setTimeout(function(){$("textarea#ScribbleInput").val("Let's try out the inline mode:\\( \\sqrt{b}\\) Lorem ipsum dolor sit amet, consectetur adipiscing elit.");$("textarea#ScribbleInput").keyup();}, 200);
		$("div#tutorial div.panel-body").html("That's right. You should now be able to see a beautifully rendered square root sign in the live preview box. From what we can see now, the math symbol appears in between other text outside the delimiter - it can be said that the math symbol is shown <em>inline</em> with other text, hence, it is called inline mode. Before we move on, please feel free to experiment with other symbols. Also, try to change the \\(b\\) in the square root to something else.<br>When you are ready, click Next.");
	}
	if (step == 8) {
		hide_all();
		kill_animate();
		$("textarea#ScribbleInput").show();
		$("div#latex-selector").show();
		$("textarea#ScribbleInput").val("");
		$("textarea#ScribbleInput").keyup();
		setTimeout(function(){$("textarea#ScribbleInput").val("Let's try out the displayed mode this time: Curabitur sodales, lectus eget auctor egestas, diam odio egestas sem, a tincidunt nibh tellus ut risus.");$("textarea#ScribbleInput").keyup();$("button#reset").data("default-text", $("textarea#ScribbleInput").val());}, 200);
		$("button#reset").removeAttr("disabled");
		$("div#tutorial div.panel-body").html("This time, we are going to see what displayed mode is. Just like last time, move the cursor in the textarea below to right after the colon. This time, choose Displayed mode from the selector.");
	}
	if (step == 9) {
		if ($("textarea#ScribbleInput").val() != "Let's try out the displayed mode this time:\\[ \\] Curabitur sodales, lectus eget auctor egestas, diam odio egestas sem, a tincidunt nibh tellus ut risus." && !force) {
			$("span#alert-message").html("Seems like you are not doing it right. Why not give it a try again?");
			$("div#tutorial-alert").fadeIn();
			return;
		}
		hide_all();
		kill_animate();
		$("textarea#ScribbleInput").show();
		$("div#latex-selector").show();
		$("textarea#ScribbleInput").val("");
		$("textarea#ScribbleInput").keyup();
		setTimeout(function(){$("textarea#ScribbleInput").val("Let's try out the displayed mode this time:\\[ \\] Curabitur sodales, lectus eget auctor egestas, diam odio egestas sem, a tincidunt nibh tellus ut risus.");$("textarea#ScribbleInput").keyup();$("button#reset").data("default-text", $("textarea#ScribbleInput").val());}, 200);
		$("button#reset").removeAttr("disabled");
		$("div#tutorial div.panel-body").html("Great work! Now, move the cursor to right before the second slash. Click Series from the selector and then choose Sigma notation.<br>When you're done, click Next. If you messed things up, click Reset.");
	}
	if (step == 10) {
		if ($("textarea#ScribbleInput").val() != "Let's try out the displayed mode this time:\\[ \\sum^{n}_{i=0}a_i\\] Curabitur sodales, lectus eget auctor egestas, diam odio egestas sem, a tincidunt nibh tellus ut risus." && !force) {
			$("span#alert-message").html("Seems like you are not doing it right. Why not give it a try again?");
			$("div#tutorial-alert").fadeIn();
			return;
		}
		hide_all();
		kill_animate();
		$("textarea#ScribbleInput").show();
		$("div#latex-selector").show();
		$("textarea#ScribbleInput").val("");
		$("textarea#ScribbleInput").keyup();
		setTimeout(function(){$("textarea#ScribbleInput").val("Let's try out the displayed mode this time:\\[ \\sum^{n}_{i=0}a_i\\] Curabitur sodales, lectus eget auctor egestas, diam odio egestas sem, a tincidunt nibh tellus ut risus.");$("textarea#ScribbleInput").keyup();$("button#reset").data("default-text", $("textarea#ScribbleInput").val());}, 200);
		$("div#tutorial div.panel-body").html("Nice. As you can see, although the syntax for sigma notation appears in between other text, it is shown on its own line and is centered. This is how displayed mode shows math formula. Also take note that the delimiter for displayed mode is \\[ \\] while the delimiter for inline mode is \\( \\).<br>You have now reached the end of the tutorial. The operating model of Scribble is almost the same as what you have seen here, except you can specify a (optional) title and have to save when you're ready. Feel free to experiment with other symbols using inline mode or displayed mode before you go. Have fun!");
	}
	update_step(step);
}

$(document).ready(function(){
	$("button.tutorial-change-step").click(function(){
		goto($(this).data("goto"), $(this).data("force"));
	});
	$("button#reset").click(function(){
		$("textarea#ScribbleInput").val($(this).data("default-text"));
		$("textarea#ScribbleInput").keyup();
	});
	$("button#tutorial-start").click(function(){
		$(this).hide();
		$("div#tutorial").show();
		goto(1);
	});
});