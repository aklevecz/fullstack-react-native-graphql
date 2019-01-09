// const ajaxCall = `
// if (!markerFound){
// 	markerFound=true;
// 	$.ajax({
// 	url:'/huntFind',
// 	method: 'POST',
// 	contentType: "application/json",
// 	data: '{"hunt":"hvob"}',
// 	success: function(data){
// 		console.log("you");
// 		if (data.arHuntedId) {
// 			console.log(data);
// 			window.location="${process.env.BACKEND_HOST}/auth/spotify?arHuntedId="+data.arHuntedId;
// 		}
// 	}
// 	})
// }
// `

const ajaxCall2 = `
if (!markerFound){
	markerFound=true;
	setTimeout(show_yesno, 3000);

	function show_yesno(){
		ARContainer.appendChild(meepo);
		$('#YES_BUTTON').on('click', yes);
		$('#NO_BUTTON').on('click', no);
	};

	function yes(){
		$('#TEXT').html('<path d="M59.6,64.1v-4.9H53v4.9h-1.5V51.8h9.6v12.3H59.6z M53,57.8h6.7v-4.6H53V57.8z"/><path d="M71.1,59.4l2.4,4.7h-1.6l-2.4-4.7h-3.9v4.7h-1.5V51.8H73v7.6H71.1z M65.7,58.1h5.9v-5h-5.9V58.1z"/><path d="M77.5,53.2v3.9h6v1.4h-6v4.2h6.4v1.4H76V51.8h7.8v1.4H77.5z"/><path d="M95.2,64.1v-4.4l-4.6-7.9h1.7l3.6,6.2l3.6-6.2h1.7l-4.6,7.9v4.4H95.2z"/><path d="M108.3,51.6c3.6,0,6.3,2.7,6.3,6.4c0,3.6-2.8,6.4-6.4,6.4c-3.6,0-6.4-2.7-6.4-6.4C102,54.3,104.7,51.6,108.3,51.6L108.3,51.6z M108.3,53c-2.8,0-4.9,2.1-4.9,5c0,2.8,2.1,5,4.9,5c2.7,0,4.9-2.1,4.9-5C113.2,55.1,111.1,53,108.3,53L108.3,53z"/><path d="M117.2,64.1V51.8h1.5v10.9h6.6V51.8h1.5v12.3H117.2z"/><path d="M136.6,53.2v4h6v1.4h-6v5.5h-1.5V51.8h7.8v1.4H136.6z"/><path d="M152.3,59.4l2.4,4.7h-1.6l-2.4-4.7h-3.9v4.7h-1.5V51.8h8.8v7.6H152.3z M146.8,58.1h5.9v-5h-5.9V58.1z"/><path d="M158.6,53.2v3.9h6v1.4h-6v4.2h6.4v1.4h-7.8V51.8h7.8v1.4H158.6z"/><path d="M168.9,53.2v3.9h6v1.4h-6v4.2h6.4v1.4h-7.8V51.8h7.8v1.4H168.9z"/><path d="M187.3,53.2v10.9h-1.5V53.2H182v-1.4h9.1v1.4H187.3z"/><path d="M201.8,64.1v-5.7h-7.1v5.7h-1.5V51.8h1.5v5.3h7.1v-5.3h1.5v12.3H201.8z"/><path d="M206.4,64.1V51.8h1.5v12.3H206.4z"/><path d="M212.4,53.2v3.9h6.8v7.1h-8.3v-1.4h6.9v-4.3h-6.9v-6.7h8.3v1.4H212.4z"/><path d="M229.1,53.2v4h6v1.4h-6v5.5h-1.5V51.8h7.8v1.4H229.1z"/><path d="M244.8,59.4l2.4,4.7h-1.6l-2.4-4.7h-3.9v4.7h-1.5V51.8h8.8v7.6H244.8z M239.3,58.1h5.9v-5h-5.9V58.1z"/><path d="M249.7,64.1V51.8h1.5v12.3H249.7z"/><path d="M258.4,51.8c3.6,0,6.3,2.6,6.3,6.2c0,3.6-2.7,6.2-6.3,6.2h-4.2V51.8H258.4z M255.7,62.7h2.7c2.7,0,4.8-2,4.8-4.8c0-2.8-2.1-4.8-4.8-4.8h-2.7V62.7z"/><path d="M275.4,64.1v-4.9h-6.7v4.9h-1.5V51.8h9.6v12.3H275.4z M268.8,57.8h6.7v-4.6h-6.7V57.8z"/><path d="M283.6,64.1v-4.4l-4.6-7.9h1.7l3.6,6.2l3.6-6.2h1.7l-4.6,7.9v4.4H283.6z"/><path d="M301.4,53.2v10.9h-1.5V53.2h-3.8v-1.4h9.1v1.4H301.4z"/><path d="M312.5,51.6c3.6,0,6.3,2.7,6.3,6.4c0,3.6-2.8,6.4-6.4,6.4c-3.6,0-6.4-2.7-6.4-6.4C306.1,54.3,308.9,51.6,312.5,51.6L312.5,51.6z M312.5,53c-2.8,0-4.9,2.1-4.9,5c0,2.8,2.1,5,4.9,5c2.7,0,4.9-2.1,4.9-5C317.4,55.1,315.2,53,312.5,53L312.5,53z"/><path d="M70.1,74.3v3.9h6.8v7.1h-8.3v-1.4h6.9v-4.3h-6.9v-6.7h8.3v1.4H70.1z"/><path d="M81.5,74.3v3.9h6v1.4h-6v4.2h6.4v1.4H80V72.9h7.8v1.4H81.5z"/><path d="M91.7,74.3v3.9h6v1.4h-6v4.2h6.4v1.4h-7.8V72.9h7.8v1.4H91.7z"/><path d="M110.1,74.3v10.9h-1.5V74.3h-3.8v-1.4h9.1v1.4H110.1z"/><path d="M124.7,85.2v-5.7h-7.1v5.7h-1.5V72.9h1.5v5.3h7.1v-5.3h1.5v12.3H124.7z"/><path d="M130.7,74.3v3.9h6v1.4h-6v4.2h6.4v1.4h-7.8V72.9h7.8v1.4H130.7z"/><path d="M150.1,85.2V74.9l-4.5,6.2h-0.1l-4.5-6.2v10.3h-1.5V72.9h1.8l4.3,5.8l4.3-5.8h1.8v12.3H150.1z"/><path d="M168.1,85.2v-4.9h-6.7v4.9h-1.5V72.9h9.6v12.3H168.1z M161.4,78.9h6.7v-4.6h-6.7V78.9z"/><path d="M177,74.3v10.9h-1.5V74.3h-3.8v-1.4h9.1v1.4H177z"/><path d="M200.3,78.8c0,0.1,0,0.3,0,0.5c-0.1,3.5-2.8,6.1-6.4,6.1c-3.6,0-6.4-2.7-6.4-6.4c0-3.6,2.8-6.4,6.4-6.4c2.9,0,5.3,1.9,6.1,4.7l-1.5,0c-0.6-1.9-2.4-3.3-4.5-3.3c-2.7,0-4.9,2.1-4.9,5c0,2.8,2.1,5,4.9,5c2.4,0,4.4-1.6,4.8-4h-5.4v-1.2H200.3z"/><path d="M209.8,80.5l2.4,4.7h-1.6l-2.4-4.7h-3.9v4.7h-1.5V72.9h8.8v7.6H209.8z M204.3,79.3h5.9v-5h-5.9V79.3z"/><path d="M222.8,85.2v-4.9h-6.7v4.9h-1.5V72.9h9.6v12.3H222.8z M216.1,78.9h6.7v-4.6h-6.7V78.9z"/><path d="M231,85.2v-4.4l-4.6-7.9h1.7l3.6,6.2l3.6-6.2h1.7l-4.6,7.9v4.4H231z"/><path d="M252.6,85.2v-4.9h-6.7v4.9h-1.5V72.9h9.6v12.3H252.6z M245.9,78.9h6.7v-4.6h-6.7V78.9z"/><path d="M264.1,80.5l2.4,4.7h-1.6l-2.4-4.7h-3.9v4.7h-1.5V72.9h8.8v7.6H264.1z M258.6,79.3h5.9v-5h-5.9V79.3z"/><path d="M270.4,74.3v3.9h6v1.4h-6v4.2h6.4v1.4h-7.8V72.9h7.8v1.4H270.4z"/><path d="M287.3,85.2v-4.9h-6.7v4.9h-1.5V72.9h9.6v12.3H287.3z M280.7,78.9h6.7v-4.6h-6.7V78.9z"/><path d="M301.2,79.6h-3.9v2.2h-1.5v-2.2h-4v-1.4h7.8v-3.8h-7.8v-1.4h9.3V79.6z M297.7,84.4c0,0.6-0.5,1-1,1c-0.6,0-1-0.4-1-1c0-0.6,0.5-1,1-1C297.2,83.4,297.7,83.9,297.7,84.4z"/>');
		$('#TEXT').attr('fill', 'red');
		$('#YES_BUTTON').on('click', sendIt);
	}

	function no(){
		meepo.remove();
	}
	function sendIt(){
		$.ajax({
		url:'/huntFind',
		method: 'POST',
		contentType: "application/json",
		data: '{"hunt":"hvob"}',
		success: function(data){
			console.log("you");
			if (data.arHuntedId) {
				console.log(data);
				window.location="${process.env.BACKEND_HOST}/auth/spotify?arHuntedId="+data.arHuntedId;
			}
		}
		})
}
}
`

export const arTemplate = (ticketCheck: boolean) => {
	console.log(ticketCheck);
	return (`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
  <script src="js/libs/three/three.js"></script>
  <script src="js/libs/vendor/jsartoolkit5/build/artoolkit.min.js"></script>
  <script src="js/libs/vendor/jsartoolkit5/js/artoolkit.api.js"></script>
  <script src="js/libs/src/threex/threex-artoolkitsource.js"></script>
  <script src="js/libs/src/threex/threex-artoolkitcontext.js"></script>
  <script src="js/libs/src/threex/threex-arbasecontrols.js"></script>
  <script src="js/libs/src/threex/threex-armarkercontrols.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.4.2/lottie_light.min.js"></script>
  <script
  src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>
  <script>THREEx.ArToolkitContext.baseURL = ""</script>
  <style>
  @keyframes glowing {
	0% { fill: blue;stroke-width:30; }
	40% { fill: red;stroke-width:10; }
	60% { fill: blue;stroke-width:20; }
	100% { fill: red;stroke-width:30; }
  }
  
  .button-glow {
	animation: glowing 5000ms infinite;
  }
  </style>
</head>
<body style="background:black;">
<div id="loading" style="position:absolute;left:20%;top:30%;font-size:50px;"> LOADING...</div>
  <div style="z-index:-5" id="ARContainer"></div>
  <div id="AEContainer"></div>
<script>
	var AEContainer = document.getElementById('AEContainer');
	AEContainer.addEventListener("click", AR);
	var animItem = bodymovin.loadAnimation({
	wrapper: AEContainer,
	animType: 'svg',
	loop: true,
	path: 'animations/qrMadness.json'
	});


	var qr,paths,requests;
	animItem.addEventListener('DOMLoaded', function(e) { 
		$('#loading').remove();
		svg = document.getElementsByTagName('svg')[0];
		qr = svg.getElementsByTagName('g')[27];
		paths = qr.getElementsByTagName('path');
		numPaths = paths.length;


		const performAnimation = () => {
			request = requestAnimationFrame(performAnimation)
			var randomPath = Math.floor(Math.random() * numPaths);
			if (randomPath % 3 === 0){
				paths[randomPath].style.fill = 'rgb(255,0,0)';
			}else{
				paths[randomPath].style.fill = 'rgb(255,255,255)';
			}
		}

		requestAnimationFrame(performAnimation)

		//...


	console.log(qr); });

	animItem.addEventListener('loopComplete', function(e){
		cancelAnimationFrame(request) //stop the animation
		qr.innerHTML = '<g id="QR2"> <rect class="button-glow" x="80.6" y="240.6" fill="#FF3333" stroke="#000000" stroke-width="10" stroke-miterlimit="10" width="249" height="249"/> <g> <path fill="#EA74FF" stroke="#9AE0FF" stroke-miterlimit="10" d="M150.6,332.6v-20.1h2.4v20.1H150.6z"/> <path fill="#EA74FF" stroke="#9AE0FF" stroke-miterlimit="10" d="M172.1,320.9v-8.4h2.4v20.1l-3,0l-11.3-16.7l0.1,8.3v8.4H158 v-20.1h3l11.3,16.7L172.1,320.9z"/> <path fill="#EA74FF" stroke="#9AE0FF" stroke-miterlimit="10" d="M179.4,332.6v-20.1h2.4v20.1H179.4z"/> <path fill="#EA74FF" stroke="#9AE0FF" stroke-miterlimit="10" d="M194,314.8v17.9h-2.4v-17.9h-6.2v-2.3h14.8v2.3H194z"/> <path fill="#EA74FF" stroke="#9AE0FF" stroke-miterlimit="10" d="M203.7,332.6v-20.1h2.4v20.1H203.7z"/> <path fill="#EA74FF" stroke="#9AE0FF" stroke-miterlimit="10" d="M224.5,332.6v-8h-10.9v8h-2.4v-20.1h15.7v20.1H224.5z M213.5,322.4h10.9v-7.6h-10.9V322.4z"/> <path fill="#EA74FF" stroke="#9AE0FF" stroke-miterlimit="10" d="M239,314.8v17.9h-2.4v-17.9h-6.2v-2.3h14.8v2.3H239z"/> <path fill="#EA74FF" stroke="#9AE0FF" stroke-miterlimit="10" d="M251.1,314.8v6.4h9.8v2.3h-9.8v6.9h10.4v2.3h-12.8v-20.1h12.8 v2.3L251.1,314.8z"/> <path fill="#EA74FF" stroke="#9AE0FF" stroke-miterlimit="10" d="M151.9,367.2v-16.9l-7.4,10.1h-0.2l-7.4-10.1v16.9h-2.4V347h3 l7,9.5l7-9.5h3v20.1H151.9z"/> <path fill="#EA74FF" stroke="#9AE0FF" stroke-miterlimit="10" d="M159.3,367.2V347h2.4v17.9h10.7V347h2.4v20.1H159.3z"/> <path fill="#EA74FF" stroke="#9AE0FF" stroke-miterlimit="10" d="M182.3,349.3v6.3h11.2v11.5h-13.6v-2.3h11.2v-7h-11.2V347h13.6 v2.3H182.3z"/> <path fill="#EA74FF" stroke="#9AE0FF" stroke-miterlimit="10" d="M198.5,367.2V347h2.4v20.1H198.5z"/> <path fill="#EA74FF" stroke="#9AE0FF" stroke-miterlimit="10" d="M225.5,354.3l-2.5,0c-1-3.2-3.9-5.3-7.4-5.3c-4.5,0-8,3.5-8,8.1 c0,4.6,3.5,8.1,8,8.1c3.5,0,6.4-2.2,7.4-5.3l2.5,0c-1.2,4.6-5.1,7.6-9.9,7.6c-5.9,0-10.4-4.5-10.4-10.4c0-6,4.5-10.4,10.4-10.4 C220.4,346.7,224.3,349.7,225.5,354.3z"/> <path fill="#EA74FF" stroke="#9AE0FF" stroke-miterlimit="10" d="M258.1,357.1c0,3.1-1.3,5.8-3.3,7.7l3.3,4.4l-1.8,1.4l-3.4-4.5 c-1.5,0.9-3.3,1.4-5.2,1.4c-5.9,0-10.4-4.5-10.4-10.4c0-5.9,4.5-10.4,10.4-10.4C253.6,346.7,258.1,351.2,258.1,357.1z M239.7,357.1c0,4.6,3.5,8.1,8,8.1c4.5,0,8-3.4,8-8.1c0-4.7-3.5-8.1-8-8.1C243.2,349,239.7,352.5,239.7,357.1z"/> <path fill="#EA74FF" stroke="#9AE0FF" stroke-miterlimit="10" d="M273.6,359.5l3.9,7.7h-2.6l-3.9-7.7h-6.3v7.7h-2.4V347h14.4v12.5 H273.6z M264.7,357.4h9.7v-8.1h-9.7V357.4z"/> <path fill="#EA74FF" stroke="#9AE0FF" stroke-miterlimit="10" d="M139.5,383.8v6.3h11.2v11.5h-13.6v-2.3h11.2v-7h-11.2v-10.9h13.6 v2.3H139.5z"/> <path fill="#EA74FF" stroke="#9AE0FF" stroke-miterlimit="10" d="M165.3,381.2c4.8,0,8.7,3,9.9,7.6l-2.5,0c-1-3.2-3.9-5.3-7.4-5.3 c-4.5,0-8,3.5-8,8.1c0,4.6,3.5,8.1,8,8.1c3.5,0,6.4-2.2,7.4-5.3h2.5c-1.2,4.6-5.1,7.6-9.9,7.6c-5.9,0-10.4-4.5-10.4-10.4 C154.9,385.7,159.4,381.2,165.3,381.2L165.3,381.2z"/> <path fill="#EA74FF" stroke="#9AE0FF" stroke-miterlimit="10" d="M192.6,401.7v-8h-10.9v8h-2.4v-20.1H195v20.1H192.6z M181.7,391.4h10.9v-7.6h-10.9V391.4z"/> <path fill="#EA74FF" stroke="#9AE0FF" stroke-miterlimit="10" d="M214.1,390v-8.4h2.4v20.1h-3L202.3,385l0.1,8.3v8.4H200v-20.1h3 l11.3,16.7L214.1,390z"/> <path fill="#EA74FF" stroke="#9AE0FF" stroke-miterlimit="10" d="M235.5,390v-8.4h2.4v20.1h-3L223.7,385l0.1,8.3v8.4h-2.4v-20.1h3 l11.3,16.7L235.5,390z"/> <path fill="#EA74FF" stroke="#9AE0FF" stroke-miterlimit="10" d="M245.3,383.8v6.4h9.8v2.3h-9.8v6.9h10.4v2.3h-12.8v-20.1h12.8 v2.3H245.3z"/> <path fill="#EA74FF" stroke="#9AE0FF" stroke-miterlimit="10" d="M271,394l3.9,7.7h-2.6l-3.9-7.7H262v7.7h-2.4v-20.1H274V394H271z M262,392h9.7v-8.1H262V392z"/> </g></g>'
	});




	//////////////////////////////////////////////////////////////////////////////////
	//		Init
	//////////////////////////////////////////////////////////////////////////////////

	// init renderer
	function AR(){
		animItem.stop();
		AEContainer.remove();

		var meepo = document.createElement('div');
		meepo.style='color: red;position: absolute;width: 80%;left: 11%;top: 20%;'
		meepo.innerHTML = '<svg viewBox="0 0 369.8 220.2"><g id="OVERLAY"><path id="BG_1_" fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" d="M350.9,212H22.4c-6.6,0-12-5.4-12-12V18.5c0-6.6,5.4-12,12-12h328.5c6.6,0,12,5.4,12,12V200C362.9,206.6,357.5,212,350.9,212z"/><g id="TEXT"><path d="M62,66.2l-1.1-4.1l-1.4-5.6h-0.1l-1.4,5.6l-1.1,4.1h-1.7L52,55h1.4l1.5,5.4l1.1,4.3l1.1-4.3l1.5-5.4h1.7l1.5,5.4l1.1,4.3l1.1-4.3l1.5-5.4h1.4l-3.1,11.2H62z"/><path d="M76.8,61.8c0,2.6-2,4.6-4.5,4.6c-2.5,0-4.5-2-4.5-4.6c0-2.7,2-4.6,4.5-4.6C74.8,57.2,76.8,59.2,76.8,61.8z M69.1,61.8c0,1.9,1.4,3.3,3.2,3.3c1.8,0,3.2-1.4,3.2-3.3c0-1.9-1.4-3.3-3.2-3.3C70.5,58.5,69.1,59.9,69.1,61.8z"/><path d="M78.8,66.2v-8.8h1.3V65H85v-7.5h1.3v8.8H78.8z"/><path d="M88.8,66.2V53.9h1.3v12.3H88.8z"/><path d="M99.8,66.2v-1.9c-0.6,1.2-1.9,2-3.4,2c-2.4,0-4.2-1.9-4.2-4.6c0-2.7,1.9-4.6,4.2-4.6c1.5,0,2.8,0.8,3.4,2.1v-5.4h1.3v12.3H99.8z M93.5,61.8c0,1.9,1.4,3.3,3.2,3.3c1.8,0,3.1-1.4,3.1-3.3c0-1.9-1.4-3.3-3.2-3.3C94.9,58.5,93.5,59.9,93.5,61.8z"/><path d="M109,69.9l2.2-4.8l-3.6-7.8h1.4l2.9,6.3l2.9-6.3h1.4l-5.8,12.5H109z"/><path d="M126.1,61.8c0,2.6-2,4.6-4.5,4.6c-2.5,0-4.5-2-4.5-4.6c0-2.7,2-4.6,4.5-4.6C124.1,57.2,126.1,59.2,126.1,61.8z M118.4,61.8c0,1.9,1.4,3.3,3.2,3.3c1.8,0,3.2-1.4,3.2-3.3c0-1.9-1.4-3.3-3.2-3.3C119.8,58.5,118.4,59.9,118.4,61.8z"/><path d="M128.1,66.2v-8.8h1.3V65h4.8v-7.5h1.3v8.8H128.1z"/><path d="M143,66.2V53.9h1.3v12.3H143z"/><path d="M148.7,55c0,0.5-0.4,0.9-0.9,0.9c-0.5,0-0.9-0.4-0.9-0.9c0-0.5,0.4-0.9,0.9-0.9C148.3,54.1,148.7,54.5,148.7,55z M147.1,66.2v-8.8h1.3v8.8H147.1z"/><path d="M156,57.4h1.7l-4.2,4.2l4.6,4.6h-1.7l-4.2-4.1v4.1h-1.3V53.9h1.3v7.3L156,57.4z"/><path d="M167.8,61.3c0,0.3,0,0.6,0,0.8h-7.7c0,1.9,1.4,3.2,3.2,3.2c1.5,0,2.7-0.9,3-2.3h1.4c-0.4,2.1-2.2,3.5-4.4,3.5c-2.6,0-4.6-2-4.6-4.6c0-2.6,2-4.6,4.5-4.6C165.6,57.2,167.5,58.9,167.8,61.3z M160.2,61.1h6.2c-0.2-1.7-1.5-2.7-3.1-2.7C161.7,58.4,160.4,59.5,160.2,61.1z"/><path d="M180.1,57.4v1.3h-3.5V65h3.5v1.3h-4.9v-7.6h-1.5v-1.3h1.5v-1.9h1.3v1.9H180.1z"/><path d="M186.1,57.2c2.5,0,4.5,1.9,4.5,4.6c0,2.6-2,4.6-4.5,4.6c-2.5,0-4.5-2-4.5-4.6C181.6,59.2,183.6,57.2,186.1,57.2L186.1,57.2z M182.9,61.8c0,1.9,1.4,3.3,3.2,3.3c1.8,0,3.2-1.4,3.2-3.3c0-1.9-1.4-3.3-3.2-3.3C184.3,58.5,182.9,59.9,182.9,61.8z"/><path d="M198.8,58.5v2.6h5.2v5.1h-6.6v-1.1h5.2v-2.9h-5.2v-4.8h6.6v1.1H198.8z"/><path d="M215,61.3c0,0.3,0,0.6,0,0.8h-7.7c0,1.9,1.4,3.2,3.2,3.2c1.5,0,2.7-0.9,3-2.3h1.4c-0.4,2.1-2.2,3.5-4.4,3.5c-2.6,0-4.6-2-4.6-4.6c0-2.6,2-4.6,4.5-4.6C212.8,57.2,214.8,58.9,215,61.3z M207.4,61.1h6.2c-0.2-1.7-1.5-2.7-3.1-2.7C208.9,58.4,207.7,59.5,207.4,61.1z"/><path d="M225.4,61.3c0,0.3,0,0.6,0,0.8h-7.7c0,1.9,1.4,3.2,3.2,3.2c1.5,0,2.7-0.9,3-2.3h1.4c-0.4,2.1-2.2,3.5-4.4,3.5c-2.6,0-4.6-2-4.6-4.6c0-2.6,2-4.6,4.5-4.6C223.3,57.2,225.2,58.9,225.4,61.3z M217.9,61.1h6.2c-0.2-1.7-1.5-2.7-3.1-2.7C219.3,58.4,218.1,59.5,217.9,61.1z"/><path d="M240.2,66.2v-5.2h-6.5v5.2h-1.3V55h1.3v4.8h6.5V55h1.3v11.2H240.2z"/><path d="M247.5,66.2l-4-11.2h1.4l3.5,9.6l3.5-9.6h1.4l-4,11.2H247.5z"/><path d="M265.9,60.6c0,3.3-2.5,5.8-5.8,5.8c-3.3,0-5.8-2.5-5.8-5.8c0-3.3,2.5-5.8,5.8-5.8C263.4,54.8,265.9,57.3,265.9,60.6z M260.1,56.1c-2.5,0-4.4,1.9-4.4,4.5c0,2.6,1.9,4.5,4.4,4.5c2.5,0,4.4-1.9,4.4-4.5C264.6,58,262.6,56.1,260.1,56.1L260.1,56.1z"/><path d="M277.1,59.7v6.5h-8.9V55h7.4v4.7H277.1z M269.6,59.7h4.7v-3.4h-4.7V59.7z M269.6,65h6.2v-4.1h-6.2V65z"/><path d="M284.4,66.2V53.9h1.3v12.3H284.4z"/><path d="M290.2,55c0,0.5-0.4,0.9-0.9,0.9s-0.9-0.4-0.9-0.9c0-0.5,0.4-0.9,0.9-0.9S290.2,54.5,290.2,55z M288.6,66.2v-8.8h1.3v8.8H288.6z"/><path d="M294.9,66.2l-3.3-8.8h1.4l2.7,7.3l2.7-7.3h1.4l-3.3,8.8H294.9z"/><path d="M309.9,61.3c0,0.3,0,0.6,0,0.8h-7.7c0,1.9,1.4,3.2,3.2,3.2c1.5,0,2.7-0.9,3-2.3h1.4c-0.4,2.1-2.2,3.5-4.4,3.5c-2.6,0-4.6-2-4.6-4.6c0-2.6,2-4.6,4.5-4.6C307.7,57.2,309.7,58.9,309.9,61.3z M302.4,61.1h6.2c-0.2-1.7-1.5-2.7-3.1-2.7C303.8,58.4,302.6,59.5,302.4,61.1z"/><path d="M320.5,61.1H317v2h-1.3v-2H312v-1.3h7.1v-3.5H312V55h8.5V61.1z M317.3,65.5c0,0.5-0.4,0.9-1,0.9c-0.5,0-1-0.4-1-0.9c0-0.5,0.4-0.9,1-0.9C316.8,64.6,317.3,65,317.3,65.5z"/></g><g id="YES"><rect x="50" y="121.9" stroke="#FFFFFF" stroke-miterlimit="10" width="119.3" height="65.3"/><g><path fill="#FFFFFF" d="M95.1,161.3v-5.6l-5.7-9.9h2.1l4.6,7.8l4.6-7.8h2.1l-5.7,9.9v5.6H95.1z"/><path fill="#FFFFFF" d="M107.2,147.6v4.9h7.5v1.8h-7.5v5.3h8v1.8h-9.9v-15.5h9.9v1.8H107.2z"/><path fill="#FFFFFF" d="M120.2,147.6v4.9h8.6v8.9h-10.5v-1.8h8.6v-5.4h-8.6v-8.4h10.5v1.8H120.2z"/></g><rect id="YES_BUTTON" x="50" y="121.9" stroke="#FFFFFF" stroke-miterlimit="10" width="119.3" height="65.3" opacity="0"/></g><g id="NO"><rect x="203.1" y="122.2" stroke="#FFFFFF" stroke-miterlimit="10" width="119.3" height="65.3"/><g><path fill="#FFFFFF" d="M258,152.6v-6.5h1.9v15.5h-2.3l-8.7-12.9l0.1,6.4v6.5h-1.9v-15.5h2.3l8.7,12.9L258,152.6z"/><path fill="#FFFFFF" d="M279,153.9c0,4.6-3.5,8-8,8c-4.5,0-8-3.4-8-8c0-4.6,3.5-8,8-8C275.5,145.8,279,149.3,279,153.9z M264.9,153.9c0,3.6,2.7,6.3,6.1,6.2c3.5,0,6.1-2.7,6.1-6.2c0-3.6-2.7-6.3-6.1-6.2C267.6,147.6,264.9,150.3,264.9,153.9z"/></g><rect id="NO_BUTTON" x="203.1" y="122.2" stroke="#FFFFFF" stroke-miterlimit="10" width="119.3" height="65.3" opacity="0"/></g></g></svg>'
		meepo.id = 'meepo';
		var ARContainer = document.getElementById('ARContainer');


		// move this to when the marker is found
		// set the time out for like 30 seconds?
		// create one prompt or two that ask them if they want to see the show
		// and if they are free on friday night
		// then congratulate them, and redirect
		// setTimeout(show_yesno, 3000);

		// function show_yesno(){
		// 	ARContainer.appendChild(meepo);
		// 	$('#YES_BUTTON').on('click', yes);
		// 	$('#NO_BUTTON').on('click', no);
		// };

		// function yes(){
		// 	$('#TEXT').html('<path d="M59.6,64.1v-4.9H53v4.9h-1.5V51.8h9.6v12.3H59.6z M53,57.8h6.7v-4.6H53V57.8z"/><path d="M71.1,59.4l2.4,4.7h-1.6l-2.4-4.7h-3.9v4.7h-1.5V51.8H73v7.6H71.1z M65.7,58.1h5.9v-5h-5.9V58.1z"/><path d="M77.5,53.2v3.9h6v1.4h-6v4.2h6.4v1.4H76V51.8h7.8v1.4H77.5z"/><path d="M95.2,64.1v-4.4l-4.6-7.9h1.7l3.6,6.2l3.6-6.2h1.7l-4.6,7.9v4.4H95.2z"/><path d="M108.3,51.6c3.6,0,6.3,2.7,6.3,6.4c0,3.6-2.8,6.4-6.4,6.4c-3.6,0-6.4-2.7-6.4-6.4C102,54.3,104.7,51.6,108.3,51.6L108.3,51.6z M108.3,53c-2.8,0-4.9,2.1-4.9,5c0,2.8,2.1,5,4.9,5c2.7,0,4.9-2.1,4.9-5C113.2,55.1,111.1,53,108.3,53L108.3,53z"/><path d="M117.2,64.1V51.8h1.5v10.9h6.6V51.8h1.5v12.3H117.2z"/><path d="M136.6,53.2v4h6v1.4h-6v5.5h-1.5V51.8h7.8v1.4H136.6z"/><path d="M152.3,59.4l2.4,4.7h-1.6l-2.4-4.7h-3.9v4.7h-1.5V51.8h8.8v7.6H152.3z M146.8,58.1h5.9v-5h-5.9V58.1z"/><path d="M158.6,53.2v3.9h6v1.4h-6v4.2h6.4v1.4h-7.8V51.8h7.8v1.4H158.6z"/><path d="M168.9,53.2v3.9h6v1.4h-6v4.2h6.4v1.4h-7.8V51.8h7.8v1.4H168.9z"/><path d="M187.3,53.2v10.9h-1.5V53.2H182v-1.4h9.1v1.4H187.3z"/><path d="M201.8,64.1v-5.7h-7.1v5.7h-1.5V51.8h1.5v5.3h7.1v-5.3h1.5v12.3H201.8z"/><path d="M206.4,64.1V51.8h1.5v12.3H206.4z"/><path d="M212.4,53.2v3.9h6.8v7.1h-8.3v-1.4h6.9v-4.3h-6.9v-6.7h8.3v1.4H212.4z"/><path d="M229.1,53.2v4h6v1.4h-6v5.5h-1.5V51.8h7.8v1.4H229.1z"/><path d="M244.8,59.4l2.4,4.7h-1.6l-2.4-4.7h-3.9v4.7h-1.5V51.8h8.8v7.6H244.8z M239.3,58.1h5.9v-5h-5.9V58.1z"/><path d="M249.7,64.1V51.8h1.5v12.3H249.7z"/><path d="M258.4,51.8c3.6,0,6.3,2.6,6.3,6.2c0,3.6-2.7,6.2-6.3,6.2h-4.2V51.8H258.4z M255.7,62.7h2.7c2.7,0,4.8-2,4.8-4.8c0-2.8-2.1-4.8-4.8-4.8h-2.7V62.7z"/><path d="M275.4,64.1v-4.9h-6.7v4.9h-1.5V51.8h9.6v12.3H275.4z M268.8,57.8h6.7v-4.6h-6.7V57.8z"/><path d="M283.6,64.1v-4.4l-4.6-7.9h1.7l3.6,6.2l3.6-6.2h1.7l-4.6,7.9v4.4H283.6z"/><path d="M301.4,53.2v10.9h-1.5V53.2h-3.8v-1.4h9.1v1.4H301.4z"/><path d="M312.5,51.6c3.6,0,6.3,2.7,6.3,6.4c0,3.6-2.8,6.4-6.4,6.4c-3.6,0-6.4-2.7-6.4-6.4C306.1,54.3,308.9,51.6,312.5,51.6L312.5,51.6z M312.5,53c-2.8,0-4.9,2.1-4.9,5c0,2.8,2.1,5,4.9,5c2.7,0,4.9-2.1,4.9-5C317.4,55.1,315.2,53,312.5,53L312.5,53z"/><path d="M70.1,74.3v3.9h6.8v7.1h-8.3v-1.4h6.9v-4.3h-6.9v-6.7h8.3v1.4H70.1z"/><path d="M81.5,74.3v3.9h6v1.4h-6v4.2h6.4v1.4H80V72.9h7.8v1.4H81.5z"/><path d="M91.7,74.3v3.9h6v1.4h-6v4.2h6.4v1.4h-7.8V72.9h7.8v1.4H91.7z"/><path d="M110.1,74.3v10.9h-1.5V74.3h-3.8v-1.4h9.1v1.4H110.1z"/><path d="M124.7,85.2v-5.7h-7.1v5.7h-1.5V72.9h1.5v5.3h7.1v-5.3h1.5v12.3H124.7z"/><path d="M130.7,74.3v3.9h6v1.4h-6v4.2h6.4v1.4h-7.8V72.9h7.8v1.4H130.7z"/><path d="M150.1,85.2V74.9l-4.5,6.2h-0.1l-4.5-6.2v10.3h-1.5V72.9h1.8l4.3,5.8l4.3-5.8h1.8v12.3H150.1z"/><path d="M168.1,85.2v-4.9h-6.7v4.9h-1.5V72.9h9.6v12.3H168.1z M161.4,78.9h6.7v-4.6h-6.7V78.9z"/><path d="M177,74.3v10.9h-1.5V74.3h-3.8v-1.4h9.1v1.4H177z"/><path d="M200.3,78.8c0,0.1,0,0.3,0,0.5c-0.1,3.5-2.8,6.1-6.4,6.1c-3.6,0-6.4-2.7-6.4-6.4c0-3.6,2.8-6.4,6.4-6.4c2.9,0,5.3,1.9,6.1,4.7l-1.5,0c-0.6-1.9-2.4-3.3-4.5-3.3c-2.7,0-4.9,2.1-4.9,5c0,2.8,2.1,5,4.9,5c2.4,0,4.4-1.6,4.8-4h-5.4v-1.2H200.3z"/><path d="M209.8,80.5l2.4,4.7h-1.6l-2.4-4.7h-3.9v4.7h-1.5V72.9h8.8v7.6H209.8z M204.3,79.3h5.9v-5h-5.9V79.3z"/><path d="M222.8,85.2v-4.9h-6.7v4.9h-1.5V72.9h9.6v12.3H222.8z M216.1,78.9h6.7v-4.6h-6.7V78.9z"/><path d="M231,85.2v-4.4l-4.6-7.9h1.7l3.6,6.2l3.6-6.2h1.7l-4.6,7.9v4.4H231z"/><path d="M252.6,85.2v-4.9h-6.7v4.9h-1.5V72.9h9.6v12.3H252.6z M245.9,78.9h6.7v-4.6h-6.7V78.9z"/><path d="M264.1,80.5l2.4,4.7h-1.6l-2.4-4.7h-3.9v4.7h-1.5V72.9h8.8v7.6H264.1z M258.6,79.3h5.9v-5h-5.9V79.3z"/><path d="M270.4,74.3v3.9h6v1.4h-6v4.2h6.4v1.4h-7.8V72.9h7.8v1.4H270.4z"/><path d="M287.3,85.2v-4.9h-6.7v4.9h-1.5V72.9h9.6v12.3H287.3z M280.7,78.9h6.7v-4.6h-6.7V78.9z"/><path d="M301.2,79.6h-3.9v2.2h-1.5v-2.2h-4v-1.4h7.8v-3.8h-7.8v-1.4h9.3V79.6z M297.7,84.4c0,0.6-0.5,1-1,1c-0.6,0-1-0.4-1-1c0-0.6,0.5-1,1-1C297.2,83.4,297.7,83.9,297.7,84.4z"/>');
		// 	$('#TEXT').attr('fill', 'red');
		// 	$('#YES_BUTTON').on('click', sendIt);
		// }

		// function no(){
		// 	meepo.remove();
		// }



		var renderer	= new THREE.WebGLRenderer({
			antialias	: true,
			alpha: true
		});
		renderer.setClearColor(new THREE.Color('lightgrey'), 0)
		renderer.setSize( 640*2, 280*2 );
		renderer.domElement.style.position = 'absolute'
		renderer.domElement.style.top = '0px'
		renderer.domElement.style.left = '0px'
		ARContainer.appendChild( renderer.domElement );


		// array of functions for the rendering loop
		var onRenderFcts= [];

		var video,
			mesh;
		// init scene and camera
		var scene	= new THREE.Scene();

		//////////////////////////////////////////////////////////////////////////////////
		//		Initialize a basic camera
		//////////////////////////////////////////////////////////////////////////////////

		// Create a camera
		var camera = new THREE.Camera();
		scene.add(camera);

		////////////////////////////////////////////////////////////////////////////////
		//          handle arToolkitSource
		////////////////////////////////////////////////////////////////////////////////

		var arToolkitSource = new THREEx.ArToolkitSource({
			// to read from the webcam 
			// sourceType : 'webcam',
			
			// to read from an image
			sourceType : 'image',
			sourceUrl : THREEx.ArToolkitContext.baseURL + '/arAssets/qr-hvob_lmt_ar.png',		

			// to read from a video
			// sourceType : 'video',
			// sourceUrl : THREEx.ArToolkitContext.baseURL + '../data/videos/headtracking.mp4',		
		})

		arToolkitSource.init(function onReady(){
			onResize()
		})
		
		// handle resize
		window.addEventListener('resize', function(){
			onResize()
		})
		

		function onResize(){
			arToolkitSource.onResize()	
			arToolkitSource.copySizeTo(renderer.domElement)	
			if( arToolkitContext.arController !== null ){
				arToolkitSource.copySizeTo(arToolkitContext.arController.canvas)	
			}	
		}
		////////////////////////////////////////////////////////////////////////////////
		//          initialize arToolkitContext
		////////////////////////////////////////////////////////////////////////////////	

		// create atToolkitContext
		var arToolkitContext = new THREEx.ArToolkitContext({
			cameraParametersUrl: THREEx.ArToolkitContext.baseURL + '/patterns/camera_para.dat',
			detectionMode: 'mono',
			// whatttt
			canvasWidth: 640*2,
			canvasHeight: 480*2,
			patternRatio: .77,
		})
		// initialize it
		arToolkitContext.init(function onCompleted(){
			// copy projection matrix to camera
			camera.projectionMatrix.copy( arToolkitContext.getProjectionMatrix() );
		})

		// update artoolkit on every frame
		onRenderFcts.push(function(){
			if( arToolkitSource.ready === false )	return

			arToolkitContext.update( arToolkitSource.domElement )
		})
		
	;(function(){
		//////////////////////////////////////////////////////////////////////////////
		//		markerRoot1
		//////////////////////////////////////////////////////////////////////////////

		// build markerControls
		var markerRoot1 = new THREE.Group
		markerRoot1.name = 'marker1'
		scene.add(markerRoot1)
		var markerControls = new THREEx.ArMarkerControls(arToolkitContext, markerRoot1, {
			type : 'pattern',
			patternUrl : THREEx.ArToolkitContext.baseURL + '/patterns/qr-hvob_lmt_ar.patt',
		})
		
		video = document.createElement('video');
		video.src = '/arAssets/HVOB_FULL.mp4';
		video.loop = true;
		video.load();
		
		var texture = new THREE.VideoTexture(video);
		texture.needsUpdate;
		texture.minFilter = THREE.LinearFilter;
		texture.magFilter = THREE.LinearFilter;
		texture.format = THREE.RGBFormat;
		texture.crossOrigin = 'anonymous';

		var geometry    = new THREE.PlaneGeometry(1,1);
		var material	= new THREE.MeshBasicMaterial({
			map:texture,
			opacity: 1,
		}); 
		mesh	= new THREE.Mesh( geometry, material );
		mesh.rotation.x = -Math.PI/2;
		mesh.material.opacity = .1;
		mesh.material.transparent = true;
		//mesh.position.y	= geometry.parameters.height/2
		
		markerRoot1.add( mesh );

	})()


	;(function(){
		var markerFound = false;
		var markerRoot1 = scene.getObjectByName('marker1')
		
		var container = new THREE.Group
		scene.add(container)

		// update container.visible and scanningSpinner visibility
		onRenderFcts.push(function(m,t){
			if( markerRoot1.visible === true ) {
				
				mesh.material.opacity += .01;
				if (mesh.material.opacity >= .9){
					video.play();
				}

				${ticketCheck && ajaxCall2}

				//geometry.verticesNeedUpdate = true;
			}

		})
		
		
	})()
		//////////////////////////////////////////////////////////////////////////////////
		//		render the whole thing on the page
		//////////////////////////////////////////////////////////////////////////////////

		// render the scene
		onRenderFcts.push(function(){
			renderer.render( scene, camera );
		})

		// run the rendering loop
		var lastTimeMsec= null
		requestAnimationFrame(function animate(nowMsec){
			// keep looping
			requestAnimationFrame( animate );
			// measure time
			lastTimeMsec	= lastTimeMsec || nowMsec-1000/60
			var deltaMsec	= Math.min(200, nowMsec - lastTimeMsec)
			lastTimeMsec	= nowMsec
			// call each update function
			onRenderFcts.forEach(function(onRenderFct){
				onRenderFct(deltaMsec/1000, nowMsec/1000)
			})
		})
	}
</script>
</body>
</html>`)}