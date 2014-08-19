
$(function() {
	
	$('a:not(.no-effect)').hover(function(event) {
		
		var newText,
			$el = $(this),
			text = $el.text();
		
		$.data($el.get(0), 'text', text);
		
		newText = text
			.replace(/o/gi, '0')
			.replace(/l/g, '1')
			.replace(/\+/i, '-')
			.replace(/s/gi, '5')
			.replace(/t/gi, '7')
			.replace(/i/gi, '1')
			.replace(/a/gi, '4')
			.replace(/e/gi, '3');
		
		$el.text(newText);
		
	}, function(event) {
		
		var $el = $(this),
			text = $.data($el.get(0), 'text');
		
		$el.text(text);
		
	});
	
	hljs.initHighlightingOnLoad();
	
});
