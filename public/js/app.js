

/**
 * Crear Cookie manualmente
 * [cookie description]
 * @type {String}
 */

//document.cookie = "nombre = Luis;";
//document.cookie = "apellido = Villalobos;";
//document.cookie = "edad = 22;";
//var cookies = document.cookie;

/**
 * Crear Cookie con función
 * [crearCookie description]
 * @param  {[String]} nombre [description]
 * @param  {[String]} valor  [description]
 * @return {[Void]}        [description]
 */

function crearCookie(nombre,valor){
	//encodeURI: Sirve para poder almacenar los caracteres especiales en las cookies y dejarlos en su formato
	valor = encodeURI(valor);

	var hoy= new Date();
	hoy.setMinutes(hoy.getMinutes()+10);
	document.cookie = nombre+"="+valor+";expires="+hoy.toUTCString()+";";
}

/**
 * Borrar cookie con función
 * [borrarCookie description]
 * @param  {[String]} nombre [description]
 * @return {[type]}        [description]
 */
function borrarCookie(nombre){
	var hoy= new Date();
	hoy.setMinutes(hoy.getMinutes()-10);
	document.cookie = nombre+"=x"+";expires="+hoy.toUTCString()+";";
}


/**
 * getCookie Retorna el valor del nombre de la cookie que se pida 
 * [getCookie description]
 * @param  {[type]} nombre [description]
 * @return {[type]}        [description]
 */
function getCookie(nombre){

	var cookies = document.cookie;
	var cookieArr = cookies.split("; ");
	//console.log(cookieArr);

	for (var i = 0; i<cookieArr.length; i++) {
		var parArr = cookieArr[i].split("=");
		cookieArr[i] = parArr;

		if(parArr[0] === nombre){
			//decodeURIComponent: sirve para retrornar como en un principio estuvo la cookie
			return decodeURIComponent(parArr[1]);
		}
	}
	return undefined;
}

//console.log(getCookie("apellido"));

function evento( arg ){
	console.log("Me dispare");
	console.log(arg);
}


//var obj = document.getElementById("objBtn");
//obj.addEventListener("click", evento);

document.onmousedown = function(arg){
	if(arg.button ===2){
		alert("Click bloqueado");
		console.log(arg);
		return;
	}else{
		console.log("Todo bien");
	}
}


document.onmouseup = function(arg){
	var select = window.getSelection().toString();
	console.log(select);
}

function validar(){

	var nombre = document.getElementById("txtNombre").value;
	var apellido = document.getElementById("txtApellido").value;

	if (nombre.length<1) {
		return false;
	}

	if (apellido.length<1) {
		return false;
	}
	return true;
}

function getParamURL(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}

console.log(getParamURL("txtNombre"));