// samesizr by Stephen Widom 2015-06-24 - stephenwidom.com
(function($){ // Makes all matched elements as tall as the tallest one
	$.fn.samesizr = function(o){
		var s = $.extend({
			mobile: 767 // Mobile breakpoint
		},o);
		var w = Math.max(document.documentElement.clientWidth,window.innerWidth || 0); // Get the viewport width
		this.css('height','auto'); // Make sure an explicit height isn't declared
		if(w > s.mobile){ // If we're NOT on a mobile
			var h = 0; // Initialize height variable
			this.each(function(){ // For each matched element...
				h = Math.max(h,$(this).outerHeight()); // Set h equal to its height, if it's taller than h
			}).css('height',h); // Set all matched elements' height equal to h
		}
		return this;
	}
}(jQuery));