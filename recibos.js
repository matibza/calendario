	var meses = "";
	var categ = 1;
	var antig = 1;
	var quinc = ""
	var ann = "";
function recibos20() {
	document.getElementById("p1").innerHTML = "Horas normales:........................";
document.getElementById("p2").innerHTML = "Horas +50%:...................................";
document.getElementById("p3").innerHTML = "Horas +150%:..............................";
	document.getElementById('ancla_enerope').click();
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


var al150 = 0;
var al50 = 0;
var normales = 0;
function horas() {
	domingos();
	sabados();

var exp939_1 = 0;
var exp939_2 = 0;
var presentismo = 0;
	var b = "b";
	var bb2 = "b";
	var bc = "b";
	var feriado = "";
					for (var i = 1; i < 43;) {
						i++;
						b = "g" + i;
						bc = "b" + i;
						feriado = window.getComputedStyle(document.getElementById(bc)).backgroundColor;
						bb2 = window.getComputedStyle(document.getElementById(b)).backgroundColor;
						if ((bb2 == "rgb(255, 165, 0)") || (bb2 == "rgb(0, 128, 0)") || (bb2 == "rgb(0, 0, 255)"))  {
							normales++;
						}
						if ((feriado == "rgb(255, 0, 0)") && (bb2 !== "rgb(128, 128, 128)") ) {
							al150++;
						}
					}


		al150 = al150*8;
		al50 = al50*8;
		normales = normales*8;
		alert(normales);
		domingo_feriado();
		sabado_manana();
		normales = normales - al50 - al150;
		
document.getElementById("p1").innerHTML = "Horas normales:........................("+ normales + ")";
document.getElementById("p2").innerHTML = "Horas +50%:...................................(" + al50 + ")";
document.getElementById("p3").innerHTML = "Horas +150%:..............................(" + al150 + ")";
al150 = 0;
al50 = 0;
normales = 0;
}
function domingos() {
	var primer = window.getComputedStyle(document.getElementById("g2")).backgroundColor;
	var segundo = window.getComputedStyle(document.getElementById("g9")).backgroundColor;
	var tercer = window.getComputedStyle(document.getElementById("g16")).backgroundColor;
	var cuarto = window.getComputedStyle(document.getElementById("g23")).backgroundColor;
	var quinto = window.getComputedStyle(document.getElementById("g30")).backgroundColor;
	var sexto = window.getComputedStyle(document.getElementById("g37")).backgroundColor;
		if ((primer == "rgb(255, 165, 0)") || (primer == "rgb(0, 128, 0)") || (primer == "rgb(0, 0, 255)")) {
				al150++;
		}
		if ((segundo == "rgb(255, 165, 0)") || (segundo == "rgb(0, 128, 0)") || (segundo == "rgb(0, 0, 255)")) {
				al150++;
		}
		if ((tercer == "rgb(255, 165, 0)") || (tercer == "rgb(0, 128, 0)") || (tercer == "rgb(0, 0, 255)")) {
				al150++;
		}
		if ((cuarto == "rgb(255, 165, 0)") || (cuarto == "rgb(0, 128, 0)") || (cuarto == "rgb(0, 0, 255)")) {
				al150++;
		}
		if ((quinto == "rgb(255, 165, 0)") || (quinto == "rgb(0, 128, 0)") || (quinto == "rgb(0, 0, 255)")) {
				al150++;
		}
		if ((sexto == "rgb(255, 165, 0)") || (sexto == "rgb(0, 128, 0)") || (sexto == "rgb(0, 0, 255)")) {
				al150++;
		}
}
function domingo_feriado() {
	var primer = window.getComputedStyle(document.getElementById("g2")).backgroundColor;
	var segundo = window.getComputedStyle(document.getElementById("g9")).backgroundColor;
	var tercer = window.getComputedStyle(document.getElementById("g16")).backgroundColor;
	var cuarto = window.getComputedStyle(document.getElementById("g23")).backgroundColor;
	var quinto = window.getComputedStyle(document.getElementById("g30")).backgroundColor;
	var sexto = window.getComputedStyle(document.getElementById("g37")).backgroundColor;
	var primer2 = window.getComputedStyle(document.getElementById("b2")).backgroundColor;
	var segundo2 = window.getComputedStyle(document.getElementById("b9")).backgroundColor;
	var tercer2 = window.getComputedStyle(document.getElementById("b16")).backgroundColor;
	var cuarto2 = window.getComputedStyle(document.getElementById("b23")).backgroundColor;
	var quinto2 = window.getComputedStyle(document.getElementById("b30")).backgroundColor;
	var sexto2 = window.getComputedStyle(document.getElementById("b37")).backgroundColor;
		if ( (primer !== "rgb(128, 128, 128)") && (primer2 == "rgb(255, 0, 0)") ) {
				al150 = al150 - 8;
		}
		if ( (segundo !== "rgb(128, 128, 128)") && (segundo2 == "rgb(255, 0, 0)") ) {
				al150 = al150 - 8;
		}
		if ( (tercer !== "rgb(128, 128, 128)") && (tercer2 == "rgb(255, 0, 0)") ) {
				al150 = al150 - 8;
		}
		if ( (cuarto !== "rgb(128, 128, 128)") && (cuarto2 == "rgb(255, 0, 0)") ) {
				al150 = al150 - 8;
		}
		if ( (quinto !== "rgb(128, 128, 128)") && (quinto2 == "rgb(255, 0, 0)") ) {
				al150 = al150 - 8;
		}
		if ( (sexto !== "rgb(128, 128, 128)") && (sexto2 == "rgb(255, 0, 0)") ) {
				al150 = al150 - 8;
		}
}
function sabados() {
	var primer = window.getComputedStyle(document.getElementById("g8")).backgroundColor;
	var segundo = window.getComputedStyle(document.getElementById("g15")).backgroundColor;
	var tercer = window.getComputedStyle(document.getElementById("g22")).backgroundColor;
	var cuarto = window.getComputedStyle(document.getElementById("g29")).backgroundColor;
	var quinto = window.getComputedStyle(document.getElementById("g36")).backgroundColor;
	var sexto = window.getComputedStyle(document.getElementById("g43")).backgroundColor;
	var primer2 = window.getComputedStyle(document.getElementById("b8")).backgroundColor;
	var segundo2 = window.getComputedStyle(document.getElementById("b15")).backgroundColor;
	var tercer2 = window.getComputedStyle(document.getElementById("b22")).backgroundColor;
	var cuarto2 = window.getComputedStyle(document.getElementById("b29")).backgroundColor;
	var quinto2 = window.getComputedStyle(document.getElementById("b36")).backgroundColor;
	var sexto2 = window.getComputedStyle(document.getElementById("b43")).backgroundColor;
		if (((primer == "rgb(255, 165, 0)") || (primer == "rgb(0, 0, 255)")) && (primer2 !== "rgb(255, 0, 0)")) {
				al50++;
		}
		if (((segundo == "rgb(255, 165, 0)") || (segundo == "rgb(0, 0, 255)")) && (segundo2 !== "rgb(255, 0, 0)")) {
				al50++;
		}
		if (((tercer == "rgb(255, 165, 0)") || (tercer == "rgb(0, 0, 255)")) && (tercer2 !== "rgb(255, 0, 0)")) {
				al50++;
		}
		if (((cuarto == "rgb(255, 165, 0)") || (cuarto == "rgb(0, 0, 255)")) && (cuarto2 !== "rgb(255, 0, 0)")) {
				al50++;
		}
		if (((quinto == "rgb(255, 165, 0)") || (quinto == "rgb(0, 0, 255)")) && (quinto2 !== "rgb(255, 0, 0)")) {
				al50++;
		}
		if (((sexto == "rgb(255, 165, 0)") || (sexto == "rgb(0, 0, 255)")) && (sexto2 !== "rgb(255, 0, 0)")) {
				al50++;
		}

}

function sabado_manana() {
	var primer = window.getComputedStyle(document.getElementById("g8")).backgroundColor;
	var segundo = window.getComputedStyle(document.getElementById("g15")).backgroundColor;
	var tercer = window.getComputedStyle(document.getElementById("g22")).backgroundColor;
	var cuarto = window.getComputedStyle(document.getElementById("g29")).backgroundColor;
	var quinto = window.getComputedStyle(document.getElementById("g36")).backgroundColor;
	var sexto = window.getComputedStyle(document.getElementById("g43")).backgroundColor;
	var primer2 = window.getComputedStyle(document.getElementById("b8")).backgroundColor;
	var segundo2 = window.getComputedStyle(document.getElementById("b15")).backgroundColor;
	var tercer2 = window.getComputedStyle(document.getElementById("b22")).backgroundColor;
	var cuarto2 = window.getComputedStyle(document.getElementById("b29")).backgroundColor;
	var quinto2 = window.getComputedStyle(document.getElementById("b36")).backgroundColor;
	var sexto2 = window.getComputedStyle(document.getElementById("b43")).backgroundColor;
	if ( (primer == "rgb(0, 128, 0)") && (primer2 !== "rgb(255, 0, 0)") ) {
				al50++;
		}
		if ( (segundo == "rgb(0, 128, 0)") && (segundo2 !== "rgb(255, 0, 0)") ) {
				al50++;				
		}
		if ( (tercer == "rgb(0, 128, 0)") && (tercer2 !== "rgb(255, 0, 0)") ) {
				al50++;				
		}
		if ( (cuarto == "rgb(0, 128, 0)") && (cuarto2 !== "rgb(255, 0, 0)") ) {
				al50++;				
		}
		if ( (quinto == "rgb(0, 128, 0)") && (quinto2 !== "rgb(255, 0, 0)") ) {
				al50++;				
		}
		if ( (sexto == "rgb(0, 128, 0)") && (sexto2 !== "rgb(255, 0, 0)") ) {
				al50++;				
		}
}