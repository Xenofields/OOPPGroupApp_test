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
	
	var add=document.getElementById("add")
	add.onclick = function(){
		device=document.getElementById("select");
		div=document.createElement("div");
		div.className = "device";
		if (device.value == 'cleaner'){
			var pic = document.createElement("img");
			pic.src=('../static/images/cleaner.jpg');
			pic.className="images"
			pic.setAttribute('alt','robotic cleaner');
			var head = document.createElement("h3");
			head.innerHTML="Vacuum Cleaner";
			var p=document.createElement("p");
			var position=document.getElementById('position')
			p.innerHTML="Position: " + position.value;
			var insertpic=document.getElementById("list");
			var piclist=document.createElement("li");
			var ul=document.getElementById('ul');
			piclist.appendChild(pic);
			piclist.appendChild(head);
			piclist.appendChild(p);
			insertpic.appendChild(piclist);
			
		}
		else if (device.value == "wash"){
			
		}
		else if (device.value == "mop"){
			
		}
	}
}
