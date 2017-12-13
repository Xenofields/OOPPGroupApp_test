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
	var modal = document.getElementById('myModal');
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
		
		}
	else if (device.value == "wash"){
		var pic = document.createElement("img");
		pic.src=('../static/images/washingmachine.jpg');
		pic.className="image"
		pic.setAttribute('alt','washing machine');
		div.appendChild(pic);
		var head = document.createElement("h3");
		head.innerHTML="Washing Machine";
		div.appendChild(head);
		}
	else if (device.value == "mop"){
		var pic = document.createElement("img");
		pic.src=('../static/images/mop.jpg');
		pic.className="image"
		pic.setAttribute('alt','robotic mop');
		div.appendChild(pic);
		var head = document.createElement("h3");
		head.innerHTML="Electronic Mop";
		div.appendChild(head);
		}
		
	var p=document.createElement("p");
	p.className='pos'
	var position=document.getElementById('position')
	p.innerHTML="Position: " + position.value;
	div.appendChild(p);	
	//sliders
	var manAuto=document.createElement("p");
	var span=document.createElement('span');
	span.className='manOrauto';
	span.innerHTML="Manual";
	manAuto.appendChild(span);

	var label=document.createElement('label');
	label.className='switch';
	var slider=document.createElement('input');
	slider.setAttribute('type', 'checkbox');
	slider.setAttribute('id','change');
	slider.setAttribute('onchange','valueChanged()');
	var sliderspan=document.createElement('span');
	sliderspan.className='slider round';
	label.appendChild(slider);
	label.appendChild(sliderspan);
	manAuto.appendChild(label);
			
	var span2=document.createElement('span');
	span2.className='manOrauto';
	span2.innerHTML="Automatic";
	manAuto.appendChild(span2);
	//end
			
	//maunal
	var manual=document.createElement('div');
	manual.setAttribute('id', 'manual');
	var para = document.createElement('p');
	var manspan=document.createElement('span');
	manspan.className='onOff';
	manspan.innerHTML="Off";
	para.appendChild(manspan)
	
	var manlabel=document.createElement('label');
	manlabel.className='switch2';
	var slider2=document.createElement('input');
	slider2.setAttribute('type', 'checkbox');
	var sliderspan2=document.createElement('span');
	sliderspan2.className='slider2 round';
	manlabel.appendChild(slider2);
	manlabel.appendChild(sliderspan2);
	para.appendChild(manlabel);
			
	var manspan2=document.createElement('span');
	manspan2.className='onOff';
	manspan2.innerHTML="On";
	para.appendChild(manspan2);
	manual.appendChild(para);
			
			
	//auto
	var auto=document.createElement("div");
	auto.setAttribute('id','auto');
	var starttime=document.createElement('label');
	starttime.setAttribute('for','timestart');
	starttime.innerHTML="Start Time";
	var st = document.createElement('input');
	st.setAttribute('type','time');
	st.setAttribute('id', 'timestart');
	st.setAttribute('name','timestart');
	starttime.appendChild(st);
	var br = document.createElement('br');
	starttime.appendChild(br);
	var duration=document.createElement('label');
	duration.setAttribute('for','duration');
	duration.innerHTML="Duration";
	var dur = document.createElement('input');
	dur.setAttribute('type','text');
	dur.setAttribute('id', 'duration');
	dur.setAttribute('name','duration');
	duration.appendChild(dur);
	auto.appendChild(starttime);
	auto.appendChild(duration);
			
	div.appendChild(manAuto);
	div.appendChild(manual);
	div.appendChild(auto);
	var piclist=document.createElement("li");
	piclist.appendChild(div);
	insertpic.appendChild(piclist);
	page.appendChild(insertpic);
	modal.style.display = "none";
}

//firebase




