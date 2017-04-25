function calc() {
	var x = document.getElementById('dollar');
  	var i = x.selectedIndex + 1;
  	var weekly = document.getElementById('weekly-checked').checked;
	    if (weekly) {
	      var sum = i * 752;
	    } else {
	      var sum = i * 173;
	    }
  	document.getElementById('output').innerHTML = '$' + sum;
}

calc();