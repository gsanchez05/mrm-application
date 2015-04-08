// FB Login
function login() {
	FB.login(
		function(response) {				
			if (response.status == 'connected') {
				var accessToken = response.authResponse.accessToken;	//Obtengo el access token del usuari logueado.
				localStorage.setItem("accessToken", accessToken); //Guardo el valor del AccessToken para usarlo luego.
				
				alert(accessToken);				
				alert("FB Iniciado!");
				
			} else {
				alert('ERROR: No se pudo iniciar sesión.');
			}
		},
		{ scope: "public_profile,email,publish_actions,user_photos,read_stream,user_events,publish_stream" } // Agrego Permisos de aplicación Facebook.
	);
}

// Logout de Facebook
function logout() {
	FB.logout(function(response) {
	  alert('Te has deslogueado satisfactoriamente.');
	});
}


// Start Device Phonegap Ready, Camera and share functions.
document.addEventListener("deviceready", init, false);
function init() {

//Start Basic Functions

	//Función que se ejecuta al tomar una foto de forma exitosa.
	function onSuccess(imageData) {
	
		alert('pase por el onSucess');
		
		var accessToken = localStorage.getItem("accessToken"); //Accedo al valor de la variable.
		var image = document.getElementById('myImage'); //Populo el id con la imagen tomada.
		
		image.src = "data:image/png;base64," + imageData;//Agrego mimeType al imageData.
		
	  PostImageToFacebook(accessToken, imageData, "image/png");//Envio toda la info a la función que hara el share en FB.
		
	}

	//Mensaje q se dispara si no se pudo tomar la foto
	function onFail(message) { 
		alert('Failed because: ' + message);
	}
	
	//Función que se ejecuta al tocar el botón "Sacar Foto"
	document.querySelector("#takePicture").addEventListener("touchend", function() {
		navigator.camera.getPicture(onSuccess, onFail, { 
			quality: 25,
			encodingType: Camera.EncodingType.PNG,
			sourceType: Camera.PictureSourceType.CAMERA,
			destinationType: Camera.DestinationType.DATA_URL
			//destinationType: Camera.DestinationType.FILE_URI
		});

	});

	//Función que se ejecuta al tocar el botón "Buscar Foto"
	document.querySelector("#usePicture").addEventListener("touchend", function() {
		navigator.camera.getPicture(onSuccess, onFail, { 
			quality: 50,
			sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
			destinationType: Camera.DestinationType.DATA_URL
			//destinationType: Camera.DestinationType.FILE_URI
		});

	});
	

	// Funcion q publica la imagen en el muro o evento que yo harcodee. En este caso "https://graph.facebook.com/me/photos?access_token=" en donde ME significa que es en mi muro.
	function PostImageToFacebook(authToken, image){
	
		alert("Pase por el postImageToFacebook");		
		alert(authToken); //Reviso que el authToken sea el mismo que tenia en un principio.
		
		//Imagen de ejemplo, si se descomenta image se utiliza la tomada por el celular.
		var imageData = /*image;*/"data:image/png;base64,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";
		
		try{
			blob = dataURItoBlob(imageData);//Paso la imagen base64 a blob.
		}
		catch(e){console.log(e);
		}
		
		var fd = new FormData();//Creo un objeto de tipo formdata para pasar la info a facebook.
		
		fd.append("access_token", authToken);
		fd.append("source", blob);
		fd.append("message","Photo Text");		
				
		try{
		$.ajax({
			url:"https://graph.facebook.com/me/photos?access_token="+authToken,
			type:"POST",
			data:fd,
			processData:false,
			contentType:false,
			cache:false,
			success:function(data){
				console.log("success " + data);
				alert("success " + data);
			},
			error:function(shr,status,data){
				console.log("error " + data + " Status " + shr.status);				
				alert("error " + data + " Status " + shr.status);
			},
			complete:function(){
			console.log("Posted to facebook");
			alert("Posted to facebook");
			}
		});

		}catch(e){console.log(e);}
	}

	//Función que pasa una imagen de base64 a blob (requerido por facebook ya que no acepta imágenes en base64).
	function dataURItoBlob(dataURI) {
		var byteString = atob(dataURI.split(',')[1]);
		var ab = new ArrayBuffer(byteString.length);
		var ia = new Uint8Array(ab);
		for (var i = 0; i < byteString.length; i++) {
			ia[i] = byteString.charCodeAt(i);
		}
		return new Blob([ab], { type: 'image/png' });
	}
	

}// End Init