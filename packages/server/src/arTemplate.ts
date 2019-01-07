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
  <script
  src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>
  <script>THREEx.ArToolkitContext.baseURL = ""</script>
</head>
<body>
  <div style="z-index:-5" id="ARContainer"></div>
<script>
	//////////////////////////////////////////////////////////////////////////////////
	//		Init
	//////////////////////////////////////////////////////////////////////////////////

	// init renderer
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
</script>
</body>
</html>`)}