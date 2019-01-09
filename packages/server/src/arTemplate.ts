const ajaxCall = `
if (!markerFound){
	markerFound=true;
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
`


export const arTemplate = (ticketCheck: boolean) => {
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
	0% { fill: blue;stroke-width:50; }
	40% { fill: red;stroke-width:10; }
	60% { fill: blue;stroke-width:20; }
	100% { fill: red;stroke-width:50; }
  }
  
  .button-glow {
	animation: glowing 5000ms infinite;
  }
  </style>
</head>
<body>
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
	path: 'animations/qrMadness5.json'
	});

	var qr;
	animItem.addEventListener('DOMLoaded', function(e) { 	
		svg = document.getElementsByTagName('svg')[0];
		qr = svg.getElementsByTagName('g')[12];

	console.log(qr); });

	animItem.addEventListener('loopComplete', function(e){
		qr.innerHTML = '';
		qr.innerHTML = '<g id="QR2"><rect class="button-glow" x="80.6"y="240.6"fill="#FF3333"stroke="#000000"stroke-width="10"stroke-miterlimit="20"width="249"height="249"/><g><path fill="#EA74FF"stroke="#9AE0FF"stroke-miterlimit="10"d="M150.6,332.6v-20.1h2.4v20.1H150.6z"/><path fill="#EA74FF"stroke="#9AE0FF"stroke-miterlimit="10"d="M172.1,320.9v-8.4h2.4v20.1l-3,0l-11.3-16.7l0.1,8.3v8.4H158\
		v-20.1h3l11.3,16.7L172.1,320.9z"/><path fill="#EA74FF"stroke="#9AE0FF"stroke-miterlimit="10"d="M179.4,332.6v-20.1h2.4v20.1H179.4z"/><path fill="#EA74FF"stroke="#9AE0FF"stroke-miterlimit="10"d="M194,314.8v17.9h-2.4v-17.9h-6.2v-2.3h14.8v2.3H194z"/><path fill="#EA74FF"stroke="#9AE0FF"stroke-miterlimit="10"d="M203.7,332.6v-20.1h2.4v20.1H203.7z"/><path fill="#EA74FF"stroke="#9AE0FF"stroke-miterlimit="10"d="M224.5,332.6v-8h-10.9v8h-2.4v-20.1h15.7v20.1H224.5z\
		 M213.5,322.4h10.9v-7.6h-10.9V322.4z"/><path fill="#EA74FF"stroke="#9AE0FF"stroke-miterlimit="10"d="M239,314.8v17.9h-2.4v-17.9h-6.2v-2.3h14.8v2.3H239z"/><path fill="#EA74FF"stroke="#9AE0FF"stroke-miterlimit="10"d="M251.1,314.8v6.4h9.8v2.3h-9.8v6.9h10.4v2.3h-12.8v-20.1h12.8\
		v2.3L251.1,314.8z"/><path fill="#EA74FF"stroke="#9AE0FF"stroke-miterlimit="10"d="M151.9,367.2v-16.9l-7.4,10.1h-0.2l-7.4-10.1v16.9h-2.4V347h3\
		l7,9.5l7-9.5h3v20.1H151.9z"/><path fill="#EA74FF"stroke="#9AE0FF"stroke-miterlimit="10"d="M159.3,367.2V347h2.4v17.9h10.7V347h2.4v20.1H159.3z"/><path fill="#EA74FF"stroke="#9AE0FF"stroke-miterlimit="10"d="M182.3,349.3v6.3h11.2v11.5h-13.6v-2.3h11.2v-7h-11.2V347h13.6\
		v2.3H182.3z"/><path fill="#EA74FF"stroke="#9AE0FF"stroke-miterlimit="10"d="M198.5,367.2V347h2.4v20.1H198.5z"/><path fill="#EA74FF"stroke="#9AE0FF"stroke-miterlimit="10"d="M225.5,354.3l-2.5,0c-1-3.2-3.9-5.3-7.4-5.3c-4.5,0-8,3.5-8,8.1\
		c0,4.6,3.5,8.1,8,8.1c3.5,0,6.4-2.2,7.4-5.3l2.5,0c-1.2,4.6-5.1,7.6-9.9,7.6c-5.9,0-10.4-4.5-10.4-10.4c0-6,4.5-10.4,10.4-10.4\
		C220.4,346.7,224.3,349.7,225.5,354.3z"/><path fill="#EA74FF"stroke="#9AE0FF"stroke-miterlimit="10"d="M258.1,357.1c0,3.1-1.3,5.8-3.3,7.7l3.3,4.4l-1.8,1.4l-3.4-4.5\
		c-1.5,0.9-3.3,1.4-5.2,1.4c-5.9,0-10.4-4.5-10.4-10.4c0-5.9,4.5-10.4,10.4-10.4C253.6,346.7,258.1,351.2,258.1,357.1z\
		 M239.7,357.1c0,4.6,3.5,8.1,8,8.1c4.5,0,8-3.4,8-8.1c0-4.7-3.5-8.1-8-8.1C243.2,349,239.7,352.5,239.7,357.1z"/><path fill="#EA74FF"stroke="#9AE0FF"stroke-miterlimit="10"d="M273.6,359.5l3.9,7.7h-2.6l-3.9-7.7h-6.3v7.7h-2.4V347h14.4v12.5\
		H273.6z M264.7,357.4h9.7v-8.1h-9.7V357.4z"/><path fill="#EA74FF"stroke="#9AE0FF"stroke-miterlimit="10"d="M139.5,383.8v6.3h11.2v11.5h-13.6v-2.3h11.2v-7h-11.2v-10.9h13.6\
		v2.3H139.5z"/><path fill="#EA74FF"stroke="#9AE0FF"stroke-miterlimit="10"d="M165.3,381.2c4.8,0,8.7,3,9.9,7.6l-2.5,0c-1-3.2-3.9-5.3-7.4-5.3\
		c-4.5,0-8,3.5-8,8.1c0,4.6,3.5,8.1,8,8.1c3.5,0,6.4-2.2,7.4-5.3h2.5c-1.2,4.6-5.1,7.6-9.9,7.6c-5.9,0-10.4-4.5-10.4-10.4\
		C154.9,385.7,159.4,381.2,165.3,381.2L165.3,381.2z"/><path fill="#EA74FF"stroke="#9AE0FF"stroke-miterlimit="10"d="M192.6,401.7v-8h-10.9v8h-2.4v-20.1H195v20.1H192.6z\
		 M181.7,391.4h10.9v-7.6h-10.9V391.4z"/><path fill="#EA74FF"stroke="#9AE0FF"stroke-miterlimit="10"d="M214.1,390v-8.4h2.4v20.1h-3L202.3,385l0.1,8.3v8.4H200v-20.1h3\
		l11.3,16.7L214.1,390z"/><path fill="#EA74FF"stroke="#9AE0FF"stroke-miterlimit="10"d="M235.5,390v-8.4h2.4v20.1h-3L223.7,385l0.1,8.3v8.4h-2.4v-20.1h3\
		l11.3,16.7L235.5,390z"/><path fill="#EA74FF"stroke="#9AE0FF"stroke-miterlimit="10"d="M245.3,383.8v6.4h9.8v2.3h-9.8v6.9h10.4v2.3h-12.8v-20.1h12.8\
		v2.3H245.3z"/><path fill="#EA74FF"stroke="#9AE0FF"stroke-miterlimit="10"d="M271,394l3.9,7.7h-2.6l-3.9-7.7H262v7.7h-2.4v-20.1H274V394H271z\
		 M262,392h9.7v-8.1H262V392z"/></g></g>'
	});




	//////////////////////////////////////////////////////////////////////////////////
	//		Init
	//////////////////////////////////////////////////////////////////////////////////

	// init renderer
	function AR(){
		AEContainer.remove();
		var ARContainer = document.getElementById('ARContainer');
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

				${ticketCheck && ajaxCall}

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