document.observe("dom:loaded", function () {
	new Ajax.Request("/pure/navigation.json",
		{
			method:"get",
			onSuccess: function(response){
			    var obj = JSON.parse(response.responseText);
			    $("navOT").autoRender({page:obj});
			},
			onFailure: function(response){
				$("navOT").innerHTML = "Failed to load navigation";
			},
			onException: function(request, ex) {
				$("navOT").innerHTML = "Exception loading navigation: " + ex;
	        }
		}
	);
	new Ajax.Request("/pure/navigationPC.json",
		{
			method:"get",
			onSuccess: function(response){
			    var obj = JSON.parse(response.responseText);
			    $("navPC").autoRender({page:obj});
			},
			onFailure: function(response){
				$("navPC").innerHTML = "Failed to load navigation";
			},
			onException: function(request, ex) {
				$("navPC").innerHTML = "Exception loading navigation: " + ex;
	        }
		}
	);
	new Ajax.Request("/pure/navigationEC.json",
		{
			method:"get",
			onSuccess: function(response){
			    var obj = JSON.parse(response.responseText);
			    $("navEC").autoRender({page:obj});
			},
			onFailure: function(response){
				$("navEC").innerHTML = "Failed to load navigation";
			},
			onException: function(request, ex) {
				$("navEC").innerHTML = "Exception loading navigation: " + ex;
	        }
		}
	);
	new Ajax.Request("/pure/navigationZap.json",
		{
			method:"get",
			onSuccess: function(response){
			    var obj = JSON.parse(response.responseText);
			    $("navZap").autoRender({page:obj});
			},
			onFailure: function(response){
				$("navZap").innerHTML = "Failed to load navigation";
			},
			onException: function(request, ex) {
				$("navZap").innerHTML = "Exception loading navigation: " + ex;
	        }
		}
	);
	new Ajax.Request("/pure/navigationNotes.json",
			{
				method:"get",
				onSuccess: function(response){
					var obj = JSON.parse(response.responseText);
					$("navNotes").autoRender({page:obj});
				},
				onFailure: function(response){
					$("navNotes").innerHTML = "Failed to load navigation";
				},
				onException: function(request, ex) {
					$("navNotes").innerHTML = "Exception loading navigation: " + ex;
				}
			}
	);
});
