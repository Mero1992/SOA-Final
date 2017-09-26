var count = 1;

function changecolor() {
	'use strict';
    if (count === 1) {
	    document.getElementById('text').style.color = "antiquewhite";
	    count = 0;
	
    } else if (count === 0) {
	    document.getElementById('text').style.color = "blue";
	    count = 1;
    }
}



