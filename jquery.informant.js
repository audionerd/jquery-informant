// jquery.informant
//  a jQuery port of Indie Lab's "Informant" (http://github.com/ihearithurts/informant/)
(function($) {
	$.fn.informant = function(options) {
		var forms = this;

		var settings = jQuery.extend({
			message: "All unsaved changes will be lost." /* message for display in the browser alert */
		}, options);

		// via https://developer.mozilla.org/en/DOM/window.onbeforeunload
		window.onbeforeunload = function (e) {
		  e = e || window.event;
			if (unsaved()) {
			  if (e) { e.returnValue = settings.message; } // For IE and Firefox
				return settings.message; // For Safari
			}
		};

		var hasSubmitButton = function(element) {
			return $('input[type="submit"], input[type="image"], button', element).length > 0;
		};

		var unsaved = function() {
			var i = forms.length;
			while (i--) { if (forms[i].unsaved && forms[i].unsaved()) { return true; }}
			return false;
		};

		this.each(function(n, form) {
			// ignore forms if they omit a submit button.
			// forms submitted through javascript don't trigger the onSubmit event
			// so we ignore them too
			if (!hasSubmitButton($(form))) { return; }

			form.before  = $(form).serialize();
			form.unsaved = function(){ return form.before != $(form).serialize(); };
			$(form).bind('submit', function(event){ form.before = $(form).serialize(); });
		});
		return this;
	};
})(jQuery);