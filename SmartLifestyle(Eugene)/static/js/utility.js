window.onload = function(){ 
	var electricity = 0;
	var water=0
	var gas = 0;
	var elecbill=0.203
	var totalelecbill=0
	var wbill=2.39
	var wbill2=3.21
	var totalwaterbill=0
	var gasbill=0.1768
	var totalgasbill=0
	window.setInterval(
		function (){
			electricity=electricity + 1;
			document.getElementById("electricity").innerHTML = electricity + 'kWh';
		}, 500);
	window.setInterval(
		function (){
			totalelecbill=(elecbill * electricity).toFixed(2);
			document.getElementById("totalelecbill").innerHTML = '$' + totalelecbill;
		}, 0);
		
	window.setInterval(
		function (){
			water= water + 0.05;
			document.getElementById("water").innerHTML = parseFloat(water).toFixed(2) + 'm<sup>3</sup>';
		}, 500);
	window.setInterval(
		function (){
			if(water <= 40){
				totalwaterbill=(wbill * water).toFixed(2);
				document.getElementById("totalwaterbill").innerHTML = '$' + totalwaterbill;
			}else{
				totalwaterbill=(wbill2 * water).toFixed(2);
				document.getElementById("totalwaterbill").innerHTML = '$' + totalwaterbill;
			}
		}, 0);
		
	
	window.setInterval(
		function (){
			gas=gas + 1;
			document.getElementById("gas").innerHTML = gas + 'kWh';
		}, 3500);
	
	window.setInterval(
		function (){
			totalgasbill=(gasbill * gas).toFixed(2);
			document.getElementById("totalgasbill").innerHTML = '$' + totalgasbill;
		}, 0);
}