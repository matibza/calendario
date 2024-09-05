	var meses = "";
	var categ = 1;
	var antig = 1;
	var quinc = ""
	var ann = "";
function recibos20() {
	ann = document.getElementById("tit").innerHTML;
	var fondo = document.getElementById("bbdd");
	fondo.style.backgroundColor = "black";
	meses = document.getElementById("mes2").value;
	quinc = document.getElementById("qui").value;
	if (meses == "Enero") {
		enero2();
	}
	if (meses == "Febrero") {
		febrero2();
	}
	if (meses == "Marzo") {
		marzo2();
	}
	if (meses == "Abril") {
		abril2();
	}
	if (meses == "Mayo") {
		mayo2();
	}
	if (meses == "Junio") {
		junio2();
	}
	if (meses == "Julio") {
		julio2();
	}
	if (meses == "Agosto") {
		agosto2();
	}
	if (meses == "Septiembre") {
		septiembre2();
	}
	if (meses == "Octubre") {
		octubre2();
	}
	if (meses == "Noviembre") {
		noviembre2();
	}
	if (meses == "Diciembre") {
		diciembre2();
	}
quincena();
}


	var a = "a";
	var b = "b";
	var turno = "g";
function enero2() {
	for (var i = 1; i < 43;) {
		i++;
		b = "b" + i;
		a = "a" + i;
		var fk = "f" + i;
		var gk = "g" + i;
		var color_fondo = window.getComputedStyle(document.getElementById(fk)).backgroundColor;
		var color_fondo2 = window.getComputedStyle(document.getElementById(a)).backgroundColor;
			document.getElementById(gk).style.backgroundColor = color_fondo;
			document.getElementById(b).style.backgroundColor = color_fondo2;
		var c = document.getElementById(a).innerHTML;
		document.getElementById(b).innerHTML = c;
	}
document.getElementById("mesesito").innerHTML = meses + " " + ann;
}
function febrero2() {
		var comienzo = 44;
	for (var i = 1; i < 43;) {
		i++;
		b = "b" + i;
		a = "a" + comienzo;
		var fk = "f" + comienzo;
		var gk = "g" + i;
		var color_fondo = window.getComputedStyle(document.getElementById(fk)).backgroundColor;
		var color_fondo2 = window.getComputedStyle(document.getElementById(a)).backgroundColor;
			document.getElementById(gk).style.backgroundColor = color_fondo;
			document.getElementById(b).style.backgroundColor = color_fondo2;
		var c = document.getElementById(a).innerHTML;
		document.getElementById(b).innerHTML = c;
		comienzo++;
	}
document.getElementById("mesesito").innerHTML = meses + " " + ann;
}
function marzo2() {
	var comienzo = 86;
	for (var i = 1; i < 43;) {
		i++;
		b = "b" + i;
		a = "a" + comienzo;
		var fk = "f" + comienzo;
		var gk = "g" + i;
		var color_fondo = window.getComputedStyle(document.getElementById(fk)).backgroundColor;
		var color_fondo2 = window.getComputedStyle(document.getElementById(a)).backgroundColor;
			document.getElementById(gk).style.backgroundColor = color_fondo;
			document.getElementById(b).style.backgroundColor = color_fondo2;
		var c = document.getElementById(a).innerHTML;
		document.getElementById(b).innerHTML = c;
		comienzo++;
	}
document.getElementById("mesesito").innerHTML = meses + " " + ann;
}
function abril2() {
	var comienzo = 128;
	for (var i = 1; i < 43;) {
		i++;
		b = "b" + i;
		a = "a" + comienzo;
		var fk = "f" + comienzo;
		var gk = "g" + i;
		var color_fondo = window.getComputedStyle(document.getElementById(fk)).backgroundColor;
		var color_fondo2 = window.getComputedStyle(document.getElementById(a)).backgroundColor;
			document.getElementById(gk).style.backgroundColor = color_fondo;
			document.getElementById(b).style.backgroundColor = color_fondo2;
		var c = document.getElementById(a).innerHTML;
		document.getElementById(b).innerHTML = c;
		comienzo++;
	}
document.getElementById("mesesito").innerHTML = meses + " " + ann;
}
function mayo2() {
	var comienzo = 170;
	for (var i = 1; i < 43;) {
		i++;
		b = "b" + i;
		a = "a" + comienzo;
		var fk = "f" + comienzo;
		var gk = "g" + i;
		var color_fondo = window.getComputedStyle(document.getElementById(fk)).backgroundColor;
		var color_fondo2 = window.getComputedStyle(document.getElementById(a)).backgroundColor;
			document.getElementById(gk).style.backgroundColor = color_fondo;
			document.getElementById(b).style.backgroundColor = color_fondo2;
		var c = document.getElementById(a).innerHTML;
		document.getElementById(b).innerHTML = c;
		comienzo++;
	}
document.getElementById("mesesito").innerHTML = meses + " " + ann;
}
function junio2() {
	var comienzo = 212;
	for (var i = 1; i < 43;) {
		i++;
		b = "b" + i;
		a = "a" + comienzo;
		var fk = "f" + comienzo;
		var gk = "g" + i;
		var color_fondo = window.getComputedStyle(document.getElementById(fk)).backgroundColor;
		var color_fondo2 = window.getComputedStyle(document.getElementById(a)).backgroundColor;
			document.getElementById(gk).style.backgroundColor = color_fondo;
			document.getElementById(b).style.backgroundColor = color_fondo2;
		var c = document.getElementById(a).innerHTML;
		document.getElementById(b).innerHTML = c;
		comienzo++;
	}
document.getElementById("mesesito").innerHTML = meses + " " + ann;
}
function julio2() {
	var comienzo = 254;
	for (var i = 1; i < 43;) {
		i++;
		b = "b" + i;
		a = "a" + comienzo;
		var fk = "f" + comienzo;
		var gk = "g" + i;
		var color_fondo = window.getComputedStyle(document.getElementById(fk)).backgroundColor;
		var color_fondo2 = window.getComputedStyle(document.getElementById(a)).backgroundColor;
			document.getElementById(gk).style.backgroundColor = color_fondo;
			document.getElementById(b).style.backgroundColor = color_fondo2;
		var c = document.getElementById(a).innerHTML;
		document.getElementById(b).innerHTML = c;
		comienzo++;
	}
document.getElementById("mesesito").innerHTML = meses + " " + ann;
}
function agosto2() {
	var comienzo = 296;
	for (var i = 1; i < 43;) {
		i++;
		b = "b" + i;
		a = "a" + comienzo;
		var fk = "f" + comienzo;
		var gk = "g" + i;
		var color_fondo = window.getComputedStyle(document.getElementById(fk)).backgroundColor;
		var color_fondo2 = window.getComputedStyle(document.getElementById(a)).backgroundColor;
			document.getElementById(gk).style.backgroundColor = color_fondo;
			document.getElementById(b).style.backgroundColor = color_fondo2;
		var c = document.getElementById(a).innerHTML;
		document.getElementById(b).innerHTML = c;
		comienzo++;
	}
document.getElementById("mesesito").innerHTML = meses + " " + ann;
}
function septiembre2() {
	var comienzo = 338;
	for (var i = 1; i < 43;) {
		i++;
		b = "b" + i;
		a = "a" + comienzo;
		var fk = "f" + comienzo;
		var gk = "g" + i;
		var color_fondo = window.getComputedStyle(document.getElementById(fk)).backgroundColor;
		var color_fondo2 = window.getComputedStyle(document.getElementById(a)).backgroundColor;
			document.getElementById(gk).style.backgroundColor = color_fondo;
			document.getElementById(b).style.backgroundColor = color_fondo2;
		var c = document.getElementById(a).innerHTML;
		document.getElementById(b).innerHTML = c;
		comienzo++;
	}
document.getElementById("mesesito").innerHTML = meses + " " + ann;
}
function octubre2() {
	var comienzo = 380;
	for (var i = 1; i < 43;) {
		i++;
		b = "b" + i;
		a = "a" + comienzo;
		var fk = "f" + comienzo;
		var gk = "g" + i;
		var color_fondo = window.getComputedStyle(document.getElementById(fk)).backgroundColor;
		var color_fondo2 = window.getComputedStyle(document.getElementById(a)).backgroundColor;
			document.getElementById(gk).style.backgroundColor = color_fondo;
			document.getElementById(b).style.backgroundColor = color_fondo2;
		var c = document.getElementById(a).innerHTML;
		document.getElementById(b).innerHTML = c;
		comienzo++;
	}
document.getElementById("mesesito").innerHTML = meses + " " + ann;
}
function noviembre2() {
	var comienzo = 422;
	for (var i = 1; i < 43;) {
		i++;
		b = "b" + i;
		a = "a" + comienzo;
		var fk = "f" + comienzo;
		var gk = "g" + i;
		var color_fondo = window.getComputedStyle(document.getElementById(fk)).backgroundColor;
		var color_fondo2 = window.getComputedStyle(document.getElementById(a)).backgroundColor;
			document.getElementById(gk).style.backgroundColor = color_fondo;
			document.getElementById(b).style.backgroundColor = color_fondo2;
		var c = document.getElementById(a).innerHTML;
		document.getElementById(b).innerHTML = c;
		comienzo++;
	}
document.getElementById("mesesito").innerHTML = meses + " " + ann;
}
function diciembre2() {
	var comienzo = 464;
	for (var i = 1; i < 43;) {
		i++;
		b = "b" + i;
		a = "a" + comienzo;
		var fk = "f" + comienzo;
		var gk = "g" + i;
		var color_fondo = window.getComputedStyle(document.getElementById(fk)).backgroundColor;
		var color_fondo2 = window.getComputedStyle(document.getElementById(a)).backgroundColor;
			document.getElementById(gk).style.backgroundColor = color_fondo;
			document.getElementById(b).style.backgroundColor = color_fondo2;
		var c = document.getElementById(a).innerHTML;
		document.getElementById(b).innerHTML = c;
		comienzo++;
	}
document.getElementById("mesesito").innerHTML = meses + " " + ann;
}

function quincena() {
	var textoh2 = "0";
	var textoh = "";
if (quinc == "1ra") {
	for (var i = 1; i < 43;) {
		i++;
		b = "b" + i;
		var gk = "g" + i;
		textoh = document.getElementById(b).innerHTML;
			if (textoh == "16") {
				textoh2 = "1";
			}
		if ((textoh2 == "1") || (textoh == "----")){
			document.getElementById(b).style.backgroundColor = "black";
			document.getElementById(gk).style.backgroundColor = "black";
		}
	}
}
if (quinc == "2da") {
	for (var i = 1; i < 43;) {
		i++;
		b = "b" + i;
		var gk = "g" + i;
		textoh = document.getElementById(b).innerHTML;
			if ((textoh <= 15) || (textoh == "----")) {
			document.getElementById(b).style.backgroundColor = "black";
			document.getElementById(gk).style.backgroundColor = "black";
			}
	}
}
}