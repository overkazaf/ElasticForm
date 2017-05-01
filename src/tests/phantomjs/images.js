var page = require('webpage').create();
var system = require('system');
page.open(system.args[1], function(status) {
	  var images = page.evaluate(function() {
		  var aImages = document.getElementsByTagName('img');
	      return Array.prototype.slice.call(aImages).map(function(item){
		    return item.getAttribute('src')
		  });
	  });

	  images.map(function(image) {
	    if(image.indexOf('http')==0) {
//		  page.open(image, function(imgStatus) {
			  page.render(image)
//		  });

		}
	  });
//	  console.log(JSON.stringify(images));
	  phantom.exit();
});
