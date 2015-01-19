//Start Basic Functions

function login() {
	FB.login(
		function(response) {
			if (response.status == 'connected') {  //if (response.session) { esta linea no respondia asi que chequeo el status del logueo en vez de la sesion.
			window.location.href = "loggedin.html";
		      /*alert('Te has logueado satisfactoriamente.');*/			
			} else {
			alert('ERROR: No se pudo iniciar sesión.');
			}
		},
		{ scope: "public_profile,user_birthday,user_groups,user_photos,read_friendlists,user_friends,email,publish_actions,read_stream,user_events,publish_stream" } // Agrego Permisos de aplicación Facebook.
		);
}

function logout() {
	FB.logout(function(response) {
	  alert('Te has deslogueado satisfactoriamente.');
	});
}

// Start Device Ready, Camera and share functions.

document.addEventListener("deviceready", init, false);
function init() {

	function onSuccess(imageData) {
		console.log('success');
		var image = document.getElementById('myImage');
		image.src = "data:image/jpeg;base64," + imageData;
		console.log(imageData);
		// Beware: passing a base64 file as 'data:' is not supported on Android 2.x: https://code.google.com/p/android/issues/detail?id=7901#c43
        // Hint: when sharing a base64 encoded file on Android you can set the filename by passing it as the subject (second param)
		
        //window.plugins.socialsharing.share(null, 'Android filename', image.src, null); Esta linea habilita el listado de aplicaciones en la cuál podrías compartir la imágen tomada o seleccionada.
		
		window.plugins.socialsharing.shareViaFacebook('Message via Facebook', image.src, null, function() {console.log('share ok')}, function(errormsg){alert(errormsg)}); // Cordova socialsharing plugin function.				
	}
	
	function onFail(message) {
		alert('Failed because: ' + message);
	}	
	
	//Use from Camera
	document.querySelector("#takePicture").addEventListener("touchend", function() {
		navigator.camera.getPicture(onSuccess, onFail, { 
			quality: 50,
			sourceType: Camera.PictureSourceType.CAMERA,
			destinationType: Camera.DestinationType.DATA_URL//Camera.DestinationType.FILE_URI
		});

	});

	//Use from Library
	document.querySelector("#usePicture").addEventListener("touchend", function() {
		navigator.camera.getPicture(onSuccess, onFail, { 
			quality: 50,
			sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
			destinationType: Camera.DestinationType.DATA_URL//Camera.DestinationType.FILE_URI
		});

	});
	
	// Facebook Javascript SDK Wall Post Function
	
	/*function facebookWallPost(){
		console.log('Debug 1');
			var params = {
				method: 'feed',
				name: 'Facebook Camera App by Ton',
				link: 'http://www.frasebook.com.ar/',
				picture: image.src,
				caption: 'Testeando camera, aplication for android',
				description: 'Esto es un simple test que prueba la función share in live action.'
			  };
			console.log(params);
			FB.ui(params, function(obj) { console.log(obj);});
	}*/	
	
}