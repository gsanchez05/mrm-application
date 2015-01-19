____________________________________________________________________
Primero hagamos funcionar al plugin de Facebook Connect:
____________________________________________________________________

1) Instalar cordova
		<pre>
        npm install -g cordova
		</pre>
 
2) Crear un nuevo proyecto
		<pre>
        cordova create fbTest com.example.fbTest fbTest
		</pre>
 
3) Accedemos al directorio del proyecto
		<pre>
        cd fbTest
		</pre>
 
4) Descargamos la version 0.4.0 de plugin Facebook Connect desde GitHub y descomprimimos. Recordar el directorio en donde descomprimimos.
		<pre>
        - https://github.com/phonegap/phonegap-facebook-plugin/releases/tag/0.4.0
		</pre>		
 
5) Instalamos el plugin en el proyecto indicando el directorio en donde descargamos el plugin (No olvidar reemplazar las variables APP_ID y APP_NAME).
		<pre>
        cordova plugin add C:/your/path/to/phonegap-facebook-plugin-0.4.0 --variable APP_ID="123456789123" --variable APP_NAME="namespace_app"
		</pre>
		
6) Una vez terminada la instalación del plugin veremos un mensaje de confirmación que confirme el hecho. Luego de que este todo OK iremos al directorio "com.phonegap.plugins.facebookconnect" dentro de la carpeta plugins de tu proyecto y abrimos el archivo plugin.xml
        <pre>
		- plugins/com.phonegap.plugins.facebookconnect/plugin.xml
		</pre>
 
7) Buscar las dos lineas que dicen <preference name="APP_ID" /> & <preference name="APP_NAME" /> y reemplazarlas por lo siguiente, recordando modificar los valores de los parametros por los propios.
        <pre>
		- Change <preference name="APP_ID" /> to <param name="APP_ID" value="123456789123"/>
        - Change <preference name="APP_NAME" /> to <param name="APP_NAME" value="Cool App"/>
		</pre>
		
8) Volvemos al root de la aplicación y abrimos la consola para agregar la plataform android.
        <pre>
		cordova platform add android
        - Asegurarse de que la ultima linea que veamos diga "installing "com.phonegap.plugins.facebookconnect" for android
		</pre>
9) Ahora ya teniendo configurado y asociado el plugin de facebook con nuestra aplicación procedemos a configurar los archivos dentro de la carpeta WWW que se encuentran en este repositorio.
 
10) Abrir el index.html y modificar el appid ubicado en la linea npumero 26 del mismo.
        
        <pre>
		-FB.init({ appId: "123456789123", nativeInterface: CDV.FB, useCachedDialogs: false });
		</pre>
		
11) Listo eso es todo! Hacemos build, corremos android y a testear nomas.
		<pre>
        cordova build android
        cordova run android
		</pre>