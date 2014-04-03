/*
* Adapt Ice Cream
* License - http://github.com/adaptlearning/adapt_framework/LICENSE
* Maintainers - Kirsty Hames
*/

define(function(require) {
	
	var Adapt = require('coreJS/adapt');

	Adapt.on('pageView:ready', function(view) {
		if (view.model.get('_id')=== 'co-12') {

			var alertObject = {
			    title: "Alert",
			    body: "Oops - looks like you've not passed this assessment. Please try again.",
			    confirmText: "Ok",
			    _callbackEvent: "notify:alertObjectClosed",
			    _showIcon: true
			};

			Adapt.trigger('notify:alert', alertObject);
			
		}
	});

	Adapt.on("notify:alertObjectClosed", function() {
		var promptObject = {
		    title: "Leaving so soon?",
		    body: "Looks like you're trying to leave this page, yet you haven't completed all the learning. Would you like to stay on this page and complete it?",
		    _prompts:[
		        {
		            promptText: "Yes",
		            _callbackEvent: "notify:yes",
		        },
		        {
		            promptText: "No",
		            _callbackEvent: "notify:no"
		        }
		    ],
		    _showIcon: true
		}

		Adapt.trigger('notify:prompt', promptObject);
	});
	
	Adapt.on("notify:yes", function() {
		var popupObject = {
		    title: "Popup title",
		    body: "This is a popup to add additional information - looks like you selected yes on the previous prompt - please close me by pressing the 'x'"
		};
		Adapt.trigger('notify:popup', popupObject);
	});

	Adapt.on("notify:no", function() {
		var popupObject = {
		    title: "Popup title",
		    body: "This is a popup to add additional information - looks like you selected no on the previous prompt - please close me by pressing the 'x'"
		};
		Adapt.trigger('notify:popup', popupObject);
	});

});