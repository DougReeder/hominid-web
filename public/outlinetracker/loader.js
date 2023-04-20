document.observe("dom:loaded", function () {
	new Ajax.Request("faq.json",
		{
			method:"get",
			onSuccess: function(response){
			    var obj = response.responseText.evalJSON();
			    $("container").autoRender({faqs:obj});
			},
			onFailure: function(){ 
				$("container").innerHTML = "Failed to load FAQ";
			},
			onException: function(request, ex) {
				$("container").innerHTML = "Exception loading FAQ:" + ex;
	        }
		}
	);
});
