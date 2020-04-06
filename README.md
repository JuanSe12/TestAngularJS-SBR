# SBR AngularJS ![SBR](public/resources/sbr.png)

___

## Consulta crédito

Aplicación construida con **AngularJS** para consumir los servicios expuestos a través de **SAP Business Rules.** En este ejemplo se consulta el limite de crédito de un cliente.

### Ejecución ⚙️

Abrir ***webapp/index.html*** en cualquier servidor web en mi caso uso el plugin de visual studio code "liveServe".

### Consideraciones ❗

Lista de consideraciones para ejecutar el proyecto.

- En el archivo ***webapp/services/master.js*** cambiar el valor de la variable **authorization** con el usuario y contraseña de SCP en base64:

de esto
```javascript
const authorization = "Basic <base64 user:pass>";
```

a esto
```javascript
const authorization = "Basic anVhbml0b0BnbWFpbC5jb206cGVwaXRvUGVyZXo=";
```
lo que esta codificado es tu usuario y contraseña de SAP ya convertidos a base64, si deseas saber como, consultado online en el siguiente link:
[Encode_User&PasswordToBase64](https://www.base64encode.org)

al acceder al link podras ver la siguiente vista

![ConvertidorBase64](public/resources/ConvertidorBase64.png)
en recuadro rojo estoy colocando un ejemplo, y en el recuadro morado solo sera dar click en el boton verde "encode"


- Al tratar de consumir los servicios puede tener problemas de CORS. Esto se soluciona si abre un navegador con la seguridad deshabilitada; ejemplo en Google Chrome:

```sh
chrome.exe --args --disable-web-security --user-data-dir="C:\chrome_temp"
```

## Autor 👨‍💻

**Juan Esteban Rios Arango**
    [Linkedin](https://www.linkedin.com/in/juan-esteban-rios-arango-a00a69191/)
