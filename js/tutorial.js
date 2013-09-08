$(document).ready(function(){
	// "Global variable"
	var animation_prev_element = false;
	var tutorial_content;
	// DOMs
	var textarea = $("textarea#ScribbleInput");
	var preview = $("div#ScribblePreview");
	var buffer = $("div#ScribbleBuffer");
	var selector = $("div#latex-selector");
	var prev_button = $("button#prev");
	var next_button = $("button#next");
	var reset_button = $("button#reset");
	var alert_bar = $("div#tutorial-alert");
	var instruction = $("div#instruction");

	// Function definition
	function load_tutorial() {
		$.getJSON("js/tutorial.json", function(data){
			tutorial_content = data;
		});
	}
	function animate(element) {
		kill_animation();
		element.addClass('animated tada');
		animation_prev_element = element;
	}

	function kill_animation() {
		if (animation_prev_element) {
			animation_prev_element.removeClass('animated tada');
			animation_prev_element = false;
		}
	}

	function update_step_attr(cur_step) {
		// Update the data-goto attribute for the buttons
		prev_button.data("goto", cur_step-1);
		next_button.data("goto", cur_step+1);
		reset_button.data("goto", cur_step);

		if (cur_step > 1) {
			prev_button.removeAttr("disabled");
		} else {
			prev_button.attr("disabled", "");
		}

		if (cur_step < tutorial_content.length) {
			next_button.removeAttr("disabled");
		} else {
			next_button.attr("disabled", "");
		}

		if ("reset" in tutorial_content[cur_step-1] && tutorial_content[cur_step-1]["reset"]) {
			reset_button.removeAttr("disabled");
		} else {
			reset_button.attr("disabled", "");
		}
	}

	function hide_all() {
		textarea.hide();
		selector.hide();
		preview.hide();
		buffer.hide();
		alert_bar.hide();
		kill_animation();
	}

	function goto(step, force) {
		if (!tutorial_content) {
			load_tutorial();
			return;
		}

		if (step <= 0 || step > tutorial_content.length) {
			return;
		}

		var cur_step = tutorial_content[step-1];

		if (!force && "regex" in cur_step && !(new RegExp(cur_step["regex"]).test(textarea.val()))) {
			alert_bar.fadeIn();
			return;
		}

		hide_all();

		if ("textarea" in cur_step && cur_step["textarea"] == "show") {
			textarea.show();
		}

		if ("selector" in cur_step && cur_step["selector"] == "show") {
			selector.show();
		}

		if ("animate" in cur_step) {
			if (cur_step["animate"] == "textarea") {
				animate(textarea);
			}
			// TODO: Handle other objects
		}

		if ("textarea-text" in cur_step) {
			textarea.val("");
			textarea.keyup();
			setTimeout(function(){
				textarea.val(cur_step["textarea-text"]);
				textarea.keyup();
			}, 200);
		}

		instruction.html(cur_step["instruction"]);

		if ("render" in cur_step && cur_step["render"]) {
			MathJax.Hub.Queue(["Typeset",MathJax.Hub,"instruction"]);
		}

		update_step_attr(step);
	}

	// Event listeners
	$("button.tutorial-change-step").click(function(){
		goto($(this).data("goto"), $(this).data("force"));
	});

	$("button#tutorial-start").click(function(){
		$("button#tutorial-start").hide();
		$("div#tutorial").show();
		goto(1);
	});

	// Load tutorial
	load_tutorial();
});