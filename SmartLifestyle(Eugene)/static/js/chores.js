window.onload = function(){ 
	
	if($('#change1').is(":checked")){
		$("#auto1").show();
		$("#manual1").hide();
		}
	else{
		$("#auto1").hide();
		$('#manual1').show();
		}	
	if($('#change2').is(":checked")){
		$("#auto2").show();
		$("#manual2").hide();
		}
	else{
		$("#auto2").hide();
		$('#manual2').show();
		}	
	if($('#change3').is(":checked")){
		$("#auto3").show();
		$("#manual3").hide();
	}
	else{
		$("#auto3").hide();
		$('#manual3').show();
	}

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


		
}	

function addDevice(){
		var insertpic=document.getElementById("list");
		var page=document.getElementById('page');
		var device=document.getElementById('select');
		div=document.createElement("div");
		div.className = "device";
		if (device.value == 'cleaner'){
			var pic = document.createElement("img");
			pic.src=('../static/images/cleaner.jpg');
			pic.className="image"
			pic.setAttribute('alt','robotic cleaner');
			div.appendChild(pic);
			var head = document.createElement("h3");
			head.innerHTML="Vacuum Cleaner";
			div.appendChild(head);
			var p=document.createElement("p");
			var position=document.getElementById('position')
			p.innerHTML="Position: " + position.value;
			div.appendChild(p);
			var piclist=document.createElement("li");
			piclist.appendChild(div);
			insertpic.appendChild(piclist);
			page.appendChild(insertpic);
		}
		else if (device.value == "wash"){
			
		}
		else if (device.value == "mop"){
			
		}
	}



