____________________________________________________________________
# Hagamos funcionar el plugin de Facebook Connect para Cordova:
____________________________________________________________________

1) Instalar cordova
		
        npm install -g cordova
		
 
2) Crear un nuevo proyecto
		
        cordova create fbTest com.example.fbTest fbTest
		
 
3) Acceder al directorio del proyecto
		
        cd fbTest
		
 
4) Descargar la version 0.4.0 de plugin Facebook Connect desde GitHub y descomprimimos. Recordar el directorio en donde descomprimimos.
		
        https://github.com/phonegap/phonegap-facebook-plugin/releases/tag/0.4.0
		
				
5) Instalamos el plugin en el proyecto indicando el directorio en donde descargamos el plugin (No olvidar reemplazar las variables APP_ID y APP_NAME).
		
        cordova plugin add C:/your/path/to/phonegap-facebook-plugin-0.4.0 --variable APP_ID="123456789123" --variable APP_NAME="namespace_app"
		
		
6) Una vez terminada la instalación veremos un mensaje de confirmación que confirme el hecho. Luego de que este todo OK iremos al directorio "com.phonegap.plugins.facebookconnect" dentro de la carpeta plugins de tu proyecto y abrimos el archivo plugin.xml
        
		plugins/com.phonegap.plugins.facebookconnect/plugin.xml
		
 
7) Buscar las siguientes lineas y reemplazarlas por lo siguiente (recordando modificar los valores de los parametros por los propios).
        
		Cambiar
		
		<preference name="APP_ID" />
		<preference name="APP_NAME" />
		
		por
		
		<param name="APP_ID" value="123456789123"/>
		<param name="APP_NAME" value="namespace_app"/>
			
				
8) Volvemos al root de la aplicación y abrimos la consola para agregar la plataform android.

        cordova platform add android
        Asegurarse de que la ultima linea que veamos diga "installing "com.phonegap.plugins.facebookconnect" for android
		
		
9) Ahora ya teniendo configurado y asociado el plugin de facebook con nuestra aplicación procedemos a configurar los archivos dentro de la carpeta WWW que se encuentran en este repositorio.
 
10) Abrir el index.html y modificar el appid ubicado en la linea número 26 del mismo.        
        
		FB.init({ appId: "123456789123", nativeInterface: CDV.FB, useCachedDialogs: false });
		
		
___________________________________________________________________________________________________________________________________________________________________________
# Ya teniendo nuestro proyecto con Facebook Connect podremos agregar las otras dos funcionalidades restantes (Cámara y Share). Para esto mismo seguimos los siguientes pasos.
___________________________________________________________________________________________________________________________________________________________________________


11) Acceder al directorio root de nuestro proyecto y abrir consola de comandos.

12) Inslatar los siguientes plugins desde la consola:


cordova plugin add org.apache.cordova.camera   			 // Para acceder a la camara.
	
cordova plugin add org.apache.cordova.file     			 // Sin uso pero nos permite manejar archivos y tranferirlos, seguro se usara a futuro.

cordova plugin add org.apache.cordova.splashscreen		 // Nos permite Configurar un "BootScreen" para la aplicación.
REf: https://github.com/apache/cordova-plugin-splashscreen/blob/master/doc/index.md

cordova plugin add https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin.git
REF: https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin
		

Lista de plugins del core: http://cordova.apache.org/docs/en/4.0.0/guide_cli_index.md.html		
		
		
13) Listo eso es todo! Hacemos build, corremos android y a testear la aplicación.

		cordova build android
        cordova run android
		


		
____________
# Datos Extra
____________

- Para que el plugin de FB Connect funcione previamente hay que crear una aplicación en facebook desde:

https://developers.facebook.com/


- También hay que contar con un HASH que asocia el app de facebook con nuestra aplicación	












		
		