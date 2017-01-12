// Site JS library.
// By: Joey Kim
var site = {
	search: function(v){
		window.location.href = "search.html?q=" + v;
	}
};
function xhr(file, cb, options){
	var c = new XMLHttpRequest();
	if(options){
		for(var i in options){
			c[i] = options[i];
		}
	}
	c.open("GET", file);
	c.onload = function(e){
		if(c.status === 200 || c.status === 0) { // some stupid servers return 0.
			if(c.responseText){
				cb(c.responseText); // for textual xmlhttprequest
			} else {
				cb(c.response); // for arraybuffer response
			}
		}
	};
	c.send();
}

var pages = null; // array[] of pages.
var totalTasksDone = 0; // don't change this number...
var totalTasksToDo = 1; // change this number

// Do not modify this function! This contains the global initializers.
window.onload = function(){
    var c = document.getElementsByClassName("tab");
    for(var i=0;i<c.length;i++){
        c[i].innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    }
	xhr("pages.json", function(response) {
		try {
			pages = JSON.parse(response);
		} catch (e) {
			alert("Error parsing sitemap");
		}
		totalTasksDone++;
	});
	var v = setInterval(function(){
		if(totalTasksDone === totalTasksToDo){
			if(typeof onLoad !== "undefined"){
				clearInterval(v);
				onLoad();
			}
		}
	});
};

// Insert a fragment into the site.
function insertFrag(frag, id, cb){
	var url = "fragments/" + frag + ".frag";
	xhr(url, function(data){
		document.getElementById(id).innerHTML += data;
		if(cb) cb();
	});
}