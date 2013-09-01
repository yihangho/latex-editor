var Preview = {
	delay: 150,
	preview: null,
	buffer: null,
	timeout: null,
	mjRunning: false,
	oldText: null,

	Init: function () {
		this.preview = document.getElementById("ScribblePreview");
		this.buffer = document.getElementById("ScribbleBuffer");
	},

	SwapBuffers: function () {
		var buffer = this.preview, preview = this.buffer;
		this.buffer = buffer; this.preview = preview;
		buffer.style.visibility = "hidden"; buffer.style.position = "absolute";
		preview.style.position = ""; preview.style.visibility = "";
	},

	Update: function () {
		if (!this.preview) this.preview = document.getElementById("ScribblePreview");
		if (!this.buffer) this.buffer = document.getElementById("ScribbleBuffer");
		if (this.timeout) {clearTimeout(this.timeout)}
		this.timeout = setTimeout(this.callback,this.delay);
	},

	CreatePreview: function () {
		Preview.timeout = null;
		if (this.mjRunning) return;
		var text = document.getElementById("input").value;
		if (text === this.oldtext) return;
		this.buffer.innerHTML = this.oldtext = text;
		this.mjRunning = true;
		MathJax.Hub.Queue(
			["Typeset",MathJax.Hub,this.buffer],
			["PreviewDone",this]
		);
	},

	PreviewDone: function () {
		this.mjRunning = false;
		this.SwapBuffers();
	}
};

Preview.callback = MathJax.Callback(["CreatePreview",Preview]);
Preview.callback.autoReset = true;