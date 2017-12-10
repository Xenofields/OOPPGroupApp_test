window.onload = function(){ 
	// Get the modal
	var modal = document.getElementById('myModal');

	// Get the button that opens the modal
	var btn = document.getElementById("myBtn");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on the button, open the modal 

	btn.onclick = function() {
		modal.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
	
var slide=document.getElementById("switch");
var auto = document.getElementById("test2");
var manual=document.getElementById("test");
auto.style.display = "none"
slide.onclick=function(){
    if (auto.style.display === "none") {
        auto.style.display = "block";
		manual.style.display = "none";
    } else {
        auto.style.display = "none";
		manual.style.display = "block";
    }
}


}
