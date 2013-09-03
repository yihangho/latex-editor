var Previewer = function(_textarea, _preview, _buffer, _buttons)
{
	this.textarea = _textarea;
	this.preview = _preview;
	this.buffer = _buffer;
	this.buttons = _buttons;

	this.delay = 150;
	this.timeout = null;
	this.mjRunning = false;
	this.oldText = null;
	this.cur_instance = this;

	this.SwapBuffers = function() {
		var buffer = this.preview, preview = this.buffer;
		this.buffer = buffer; this.preview = preview;
		this.buffer.hide();
		this.preview.show();
	};

	this.Update = function() {
		if (this.timeout) {clearTimeout(this.timeout)}
		this.timeout = setTimeout(this.callback, this.delay);
	};

	this.CreatePreview = function() {
		this.timeout = null;
		if (this.mjRunning) return;
		var text = this.textarea.val();
		if (text == this.oldtext) return;
		this.buffer.html(this.oldtext = text);
		this.mjRunning = true;
		MathJax.Hub.Queue(
			["Typeset",MathJax.Hub,this.buffer.get(0)],
			["PreviewDone",this]
		);
	};

	this.PreviewDone = function() {
		this.mjRunning = false;
		this.SwapBuffers();
	};

	this.textarea.data("this", this.cur_instance);
	this.textarea.keyup(function(){
		var that = $(this).data("this");
		that.Update.call(that);
	});

	this.buttons.data("this", this.cur_instance);
	this.buttons.click(function(){
		var that = $(this).data("this");
		if (!$(this).data("latex-code")) return;
		that.textarea.insertAtCaret($(this).data("latex-code"));
		if ($(this).data("caret-end-offset") !== undefined)
			that.textarea.setCaretPosition(that.textarea.getCaretPosition()+$(this).data("caret-start-offset"), that.textarea.getCaretPosition()+$(this).data("caret-end-offset"));
		else if ($(this).data("caret-start-offset") !== undefined)
			that.textarea.setCaretPosition(that.textarea.getCaretPosition()+$(this).data("caret-start-offset"));
		that.Update.call(that);
	});
}

function Initialize(_textarea, _preview, _buffer, _buttons){
	var output = new Previewer (_textarea, _preview, _buffer, _buttons);
	output.callback = MathJax.Callback(["CreatePreview", output]);
	output.callback.autoReset = true;
	return output;
}