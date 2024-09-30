	var meses = "";
	var categ = 1;
	var antig = 1;
	var quinc = ""
	var ann = "";
	var tur = "";
function recibos20() {
document.getElementById("valorhora").innerHTML = "Valor hora:...................";
document.getElementById("p1").innerHTML = "Horas normales:........................";
document.getElementById("p2").innerHTML = "Horas +50%:...................................";
document.getElementById("p3").innerHTML = "Horas +150%:..............................";
document.getElementById("p4").innerHTML = "I EXP1712939/16:...........";
document.getElementById("p5").innerHTML = "VI EXP1712939/16:........";
document.getElementById("p6").innerHTML = "Presentismo:....................";
document.getElementById("p13").innerHTML = "Plus nocturnidad:..................";
document.getElementById("p14").innerHTML = "Horas nocturnas:.................";
document.getElementById("totalbruto").innerHTML = "Total bruto:..........................................";
document.getElementById("totalneto").innerHTML = "Total con descuentos (aprox):....";
	document.getElementById('ancla_enerope').click();
	ann = document.getElementById("tit").innerHTML;
	tur = document.getElementById("boton_calc").value;

	var fondo = document.getElementById("bbdd");
	fondo.style.backgroundColor = "black";
	meses = document.getElementById("mes2").value;
	quinc = document.getElementById("qui").value;
	//estas funciones son para copiar los meses de la tabla1 a la tabla2 de acuerdo a los seleccionado por el usuario//
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
	//este FOR=I copia los colores dela tabla1 a la tabla2//
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
document.getElementById("mesesito").innerHTML = meses + " " + ann + " - Turno: " + tur;
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
document.getElementById("mesesito").innerHTML = meses + " " + ann + " - Turno: " + tur;
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
document.getElementById("mesesito").innerHTML = meses + " " + ann + " - Turno: " + tur;
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
document.getElementById("mesesito").innerHTML = meses + " " + ann + " - Turno: " + tur;
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
document.getElementById("mesesito").innerHTML = meses + " " + ann + " - Turno: " + tur;
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
document.getElementById("mesesito").innerHTML = meses + " " + ann + " - Turno: " + tur;
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
document.getElementById("mesesito").innerHTML = meses + " " + ann + " - Turno: " + tur;
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
document.getElementById("mesesito").innerHTML = meses + " " + ann + " - Turno: " + tur;
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
document.getElementById("mesesito").innerHTML = meses + " " + ann + " - Turno: " + tur;
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
document.getElementById("mesesito").innerHTML = meses + " " + ann + " - Turno: " + tur;
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
document.getElementById("mesesito").innerHTML = meses + " " + ann + " - Turno: " + tur;
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
document.getElementById("mesesito").innerHTML = meses + " " + ann + " - Turno: " + tur;
}

function quincena() {
	//esta funcion pinta de negro todo el mes de tabla2 y deja visible solo el de la quincena seleccionada
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
var nocturnas = 0;
var hsnoche = 0;
function horas() {
	//aqui se calculan las horas trabajadas//
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
						//AZUL= rgb(0, 0, 255)
						//NARANJA= rgb(255, 165, 0)
						//VERDE= rgb(0, 128, 0)
						//ROJO= rgb(255, 0, 0)
						feriado = window.getComputedStyle(document.getElementById(bc)).backgroundColor;
						bb2 = window.getComputedStyle(document.getElementById(b)).backgroundColor;
						if ((bb2 == "rgb(255, 165, 0)") || (bb2 == "rgb(0, 128, 0)"))  {
							normales++;
						}
						if ((feriado == "rgb(255, 0, 0)") && ((bb2 == "rgb(0, 128, 0)") || (bb2 == "rgb(255, 165, 0)"))) {
							al150++;
						}
					}


		al150 = al150*8;
		al50 = al50*8;
		normales = normales*8;
		domingo_feriado();
		sabado_manana();
		normales = normales - al50 - al150;
		turno_noche();
		
document.getElementById("p1").innerHTML = "Horas normales:................("+ normales + ")";
document.getElementById("p2").innerHTML = "Horas +50%:.....................(" + al50 + ")";
document.getElementById("p3").innerHTML = "Horas +150%:...................(" + al150 + ")";
document.getElementById("p13").innerHTML = "Plus nocturnidad:..............(" + nocturnas + ")";
document.getElementById("p14").innerHTML = "Horas nocturnas:...............(" + hsnoche + ")";

//reset variables
parrafo1normales = normales;
parrafo2normales = al50;
parrafo3normales = al150;
parrafo4normales = nocturnas;
parrafo5normales = hsnoche;
al150 = 0;
al50 = 0;
normales = 0;
nocturnas = 0;
hsnoche = 0;
horafin()
}
function domingos() {
	var primer = window.getComputedStyle(document.getElementById("g2")).backgroundColor;
	var segundo = window.getComputedStyle(document.getElementById("g9")).backgroundColor;
	var tercer = window.getComputedStyle(document.getElementById("g16")).backgroundColor;
	var cuarto = window.getComputedStyle(document.getElementById("g23")).backgroundColor;
	var quinto = window.getComputedStyle(document.getElementById("g30")).backgroundColor;
	var sexto = window.getComputedStyle(document.getElementById("g37")).backgroundColor;
		if ((primer == "rgb(255, 165, 0)") || (primer == "rgb(0, 128, 0)")) {
				al150++;
		}
		if ((segundo == "rgb(255, 165, 0)") || (segundo == "rgb(0, 128, 0)")) {
				al150++;
		}
		if ((tercer == "rgb(255, 165, 0)") || (tercer == "rgb(0, 128, 0)")) {
				al150++;
		}
		if ((cuarto == "rgb(255, 165, 0)") || (cuarto == "rgb(0, 128, 0)")) {
				al150++;
		}
		if ((quinto == "rgb(255, 165, 0)") || (quinto == "rgb(0, 128, 0)")) {
				al150++;
		}
		if ((sexto == "rgb(255, 165, 0)") || (sexto == "rgb(0, 128, 0)")) {
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
		if ((primer == "rgb(255, 165, 0)") && (primer2 !== "rgb(255, 0, 0)")) {
				al50++;
		}
		if ((segundo == "rgb(255, 165, 0)") && (segundo2 !== "rgb(255, 0, 0)")) {
				al50++;
		}
		if ((tercer == "rgb(255, 165, 0)") && (tercer2 !== "rgb(255, 0, 0)")) {
				al50++;
		}
		if ((cuarto == "rgb(255, 165, 0)") && (cuarto2 !== "rgb(255, 0, 0)")) {
				al50++;
		}
		if ((quinto == "rgb(255, 165, 0)") && (quinto2 !== "rgb(255, 0, 0)")) {
				al50++;
		}
		if ((sexto == "rgb(255, 165, 0)") && (sexto2 !== "rgb(255, 0, 0)")) {
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
function efecto(){
var div_ingr = document.getElementById("ingr");
var div_desc = document.getElementById("desc");
	div_ingr.style.height = "14.6rem";
	div_desc.style.height = "150px";
setTimeout(mostrar_parrafos, 800)
}
function mostrar_parrafos() {
	var pp0 = document.getElementById("valorhora");
	var pp1 = document.getElementById("p1");
	var pp2 = document.getElementById("p2");
	var pp3 = document.getElementById("p3");
	var pp4 = document.getElementById("p4");
	var pp5 = document.getElementById("p5");
	var pp6 = document.getElementById("p6");
	var pp7 = document.getElementById("p7");
	var pp8 = document.getElementById("p8");
	var pp9 = document.getElementById("p9");
	var pp10 = document.getElementById("p10");
	var pp11 = document.getElementById("p11");
	var pp12 = document.getElementById("p12");
	var pp13 = document.getElementById("p13");
	var pp14 = document.getElementById("p14");
	var total_bruto = document.getElementById("totalbruto");
	var total_neto = document.getElementById("totalneto");
	pp0.style.display = "block";
	pp1.style.display = "block";
	pp2.style.display = "block";
	pp3.style.display = "block";
	pp4.style.display = "block";
	pp5.style.display = "block";
	pp6.style.display = "block";
	pp7.style.display = "block";
	pp8.style.display = "block";
	pp9.style.display = "block";
	pp10.style.display = "block";
	pp11.style.display = "block";
	pp12.style.display = "block";
	pp13.style.display = "block";
	pp14.style.display = "block";
	total_bruto.style.display = "block";
	total_neto.style.display = "block";
	setTimeout(horas, 1300);
}


function turno_noche() {
	var b = "b";
	var bb2 = "b";
	var bc = "b";
	var feriado = "";
	var feriadoanterior = "";
	var feriadosiguiente = "";
					for (var i = 1; i < 43;) {
						//Horas del plus de nocturnidad
						i++;
						b = "g" + i;
						bc = "b" + i;
						bb2 = window.getComputedStyle(document.getElementById(b)).backgroundColor;
						if (bb2 == "rgb(0, 0, 255)")  {
							nocturnas++
						}
					}
					for (var i = 2; i < 43;) {
						//Horas domingos
						b = "g" + i;
						bc = "b" + i;
						bb2 = window.getComputedStyle(document.getElementById(b)).backgroundColor;
						feriado = window.getComputedStyle(document.getElementById(bc)).backgroundColor;
						ferisig = "b" + (i + 1);
						feriadosiguiente = window.getComputedStyle(document.getElementById(ferisig)).backgroundColor;
						if ((bb2 == "rgb(0, 0, 255)") && (feriadosiguiente != "rgb(255, 0, 0)"))  {
							//CASO DIA SIGUIENTE (LUNES) NO FERIADO
							al150 = al150 + 2;
							hsnoche = hsnoche + 6;
						}
						if ((bb2 == "rgb(0, 0, 255)") && (feriadosiguiente == "rgb(255, 0, 0)")) {
							//CASO DIA SIGUIENTE (LUNES) FERIADO
							al150 = al150 + 2;
							al150 = al150 + 6;
						}
					i = i + 7;
					}
					for (var i = 3; i < 43;) {
						//Horas lunes
						b = "g" + i;
						bc = "b" + i;
						bb2 = window.getComputedStyle(document.getElementById(b)).backgroundColor;
						feriado = window.getComputedStyle(document.getElementById(bc)).backgroundColor;
						ferisig = "b" + (i + 1);
						feriadosiguiente = window.getComputedStyle(document.getElementById(ferisig)).backgroundColor;
						if ((bb2 == "rgb(0, 0, 255)") && (feriado != "rgb(255, 0, 0)"))  {
							//CASO NO FERIADO
							normales = normales + 2;
							hsnoche = hsnoche + 6;
						}
						if ((bb2 == "rgb(0, 0, 255)") && (feriado == "rgb(255, 0, 0)") && (feriadosiguiente != "rgb(255, 0, 0)")) {
							//CASO SOLO LUNES FERIADO
							al150 = al150 + 2;
							hsnoche = hsnoche + 6;
						}
						if ((bb2 == "rgb(0, 0, 255)") && (feriado == "rgb(255, 0, 0)") && (feriadosiguiente == "rgb(255, 0, 0)")) {
							//CASO LUNES Y MARTES FERIADO
							al150 = al150 + 2;
							al150 = al150 + 6;
						}
					i = i + 7;
					}
					for (var i = 4; i < 43;) {
						//Horas martes
						b = "g" + i;
						bc = "b" + i;
						bb2 = window.getComputedStyle(document.getElementById(b)).backgroundColor;
						feriado = window.getComputedStyle(document.getElementById(bc)).backgroundColor;
						ferisig = "b" + (i + 1);
						feriadosiguiente = window.getComputedStyle(document.getElementById(ferisig)).backgroundColor;
						if ((bb2 == "rgb(0, 0, 255)") && (feriado != "rgb(255, 0, 0)"))  {
							//CASO NO FERIADO
							normales = normales + 2;
							hsnoche = hsnoche + 6;
						}
						if ((bb2 == "rgb(0, 0, 255)") && (feriado == "rgb(255, 0, 0)") && (feriadosiguiente != "rgb(255, 0, 0)")) {
							//CASO SOLO MARTES
							al150 = al150 + 2;
							hsnoche = hsnoche + 6;
						}
						if ((bb2 == "rgb(0, 0, 255)") && (feriado == "rgb(255, 0, 0)") && (feriadosiguiente == "rgb(255, 0, 0)")) {
							//CASO MARTES Y MIERCOLES
							al150 = al150 + 2;
							al150 = al150 + 6;
						}
					i = i + 7;
					}
					for (var i = 5; i < 43;) {
						//Horas miercoles
						b = "g" + i;
						bc = "b" + i;
						bb2 = window.getComputedStyle(document.getElementById(b)).backgroundColor;
						feriado = window.getComputedStyle(document.getElementById(bc)).backgroundColor;
						ferisig = "b" + (i + 1);
						feriadosiguiente = window.getComputedStyle(document.getElementById(ferisig)).backgroundColor;
						if ((bb2 == "rgb(0, 0, 255)") && (feriado != "rgb(255, 0, 0)"))  {
							//CASO NO FERIADO
							normales = normales + 2;
							hsnoche = hsnoche + 6;
						}
						if ((bb2 == "rgb(0, 0, 255)") && (feriado == "rgb(255, 0, 0)") && (feriadosiguiente != "rgb(255, 0, 0)")) {
							//CASO SOLO MIERCOLES FERIADO
							al150 = al150 + 2;
							hsnoche = hsnoche + 6;
						}
						if ((bb2 == "rgb(0, 0, 255)") && (feriado == "rgb(255, 0, 0)") && (feriadosiguiente == "rgb(255, 0, 0)")) {
							//CASO MIERCOLES Y JUEVES FERIADO
							al150 = al150 + 2;
							al150 = al150 + 6;
						}
					i = i + 7;
					}
					for (var i = 6; i < 43;) {
						//Horas jueves
						b = "g" + i;
						bc = "b" + i;
						bb2 = window.getComputedStyle(document.getElementById(b)).backgroundColor;
						feriado = window.getComputedStyle(document.getElementById(bc)).backgroundColor;
						ferisig = "b" + (i + 1);
						feriadosiguiente = window.getComputedStyle(document.getElementById(ferisig)).backgroundColor;
						if ((bb2 == "rgb(0, 0, 255)") && (feriado != "rgb(255, 0, 0)"))  {
							//CASO NO FERIADO
							normales = normales + 2;
							hsnoche = hsnoche + 6;
						}
						if ((bb2 == "rgb(0, 0, 255)") && (feriado == "rgb(255, 0, 0)") && (feriadosiguiente != "rgb(255, 0, 0)")) {
							//CASO SOLO JUEVES FERIADO
							al150 = al150 + 2;
							hsnoche = hsnoche + 6;
						}
						if ((bb2 == "rgb(0, 0, 255)") && (feriado == "rgb(255, 0, 0)") && (feriadosiguiente == "rgb(255, 0, 0)")) {
							//CASO JUEVES Y VIERNES FERIADO
							al150 = al150 + 2;
							al150 = al150 + 6;
						}
					i = i + 7;
					}
					for (var i = 7; i < 43;) {
						//Horas viernes
						b = "g" + i;
						bc = "b" + i;
						bb2 = window.getComputedStyle(document.getElementById(b)).backgroundColor;
						feriado = window.getComputedStyle(document.getElementById(bc)).backgroundColor;
						ferisig = "b" + (i + 1);
						feriadosiguiente = window.getComputedStyle(document.getElementById(ferisig)).backgroundColor;
						if ((bb2 == "rgb(0, 0, 255)") && (feriado != "rgb(255, 0, 0)"))  {
							//CASO NO FERIADO
							normales = normales + 2;
							hsnoche = hsnoche + 6;
						}
						if ((bb2 == "rgb(0, 0, 255)") && (feriado == "rgb(255, 0, 0)") && (feriadosiguiente != "rgb(255, 0, 0)")) {
							//CASO SOLO VIERNES FERIADO
							al150 = al150 + 2;
							hsnoche = hsnoche + 6;
						}
						if ((bb2 == "rgb(0, 0, 255)") && (feriado == "rgb(255, 0, 0)") && (feriadosiguiente == "rgb(255, 0, 0)")) {
							//CASO VIERNES Y SABADO FERIADO
							al150 = al150 + 2;
							al150 = al150 + 6;
						}
					i = i + 7;
					}
					for (var i = 7; i < 43;) {
						//Horas sabado
						b = "g" + i;
						bc = "b" + i;
						bb2 = window.getComputedStyle(document.getElementById(b)).backgroundColor;
						feriado = window.getComputedStyle(document.getElementById(bc)).backgroundColor;
						ferisig = "b" + (i + 1);
						feriadosiguiente = window.getComputedStyle(document.getElementById(ferisig)).backgroundColor;
						if (bb2 == "rgb(0, 0, 255)") {
							//CASO NO FERIADO
							al50 = al50 + 2;
							al150 = al150 + 6;
						}
						if ((bb2 == "rgb(0, 0, 255)") && (feriado == "rgb(255, 0, 0)")) {
							//CASO SOLO SABADO FERIADO
							al150 = al150 + 2;


							//RESTO LO QUE SE SUMO PREVIAMENTE EN CASO NO FERIADO
							al50 = al50 - 2;
						}
					i = i + 7;
					}
}


//CATEGORIAS DE ESCALAS SALARIALES
	var horafinal = 0;
	var parrafo1normales = 0;
	var parrafo2normales = 0;
	var parrafo3normales = 0;
	var parrafo4normales = 0;
	var parrafo5normales = 0;
	var parrafo6normales = 0;
	var parrafo7normales = 0;
	var parrafo8normales = 0;
function horafin() {
	var sec_seleccion = document.getElementById("sector").value; //SECTOR
	var cat_seleccion = parseFloat(document.getElementById("seleccion_categoria").value); //CATEGORIA
	var ant_seleccion = parseFloat(document.getElementById("antig").value); //ANTIGUEDAD
	//LOGISTICA
	if ((cat_seleccion == 4) || (cat_seleccion == 5) || (cat_seleccion == 6)) {
		var hsbase = parseFloat(document.getElementById("hora_base").value); //HORA BASE
		var cat4 = hsbase * 1; //CATEGORIA 4
		var cat5 = (hsbase * 1.176908).toFixed(2); //CATEGORIA 5
		var cat6 = (hsbase * 1.384491706).toFixed(2); //CATEGORIA 6
		var leer_cat = 0;
		var leer_antig = 0;

		if (cat_seleccion == 4) {
			leer_cat = cat4;
		}
		if (cat_seleccion == 5) {
			leer_cat = cat5;
		}
		if (cat_seleccion == 6) {
			leer_cat = cat6;
		}
		var EXP1 = 0;
		var EXP2 = 0;
		var a0 = leer_cat*1.0;
		var a1 = leer_cat*1.01;
		var a2 = a1*1.01;
		var a3 = a2*1.01;
		var a4 = a3*1.01;
		var a5 = a4*1.01;
		var a6 = a5*1.01;
		var a7 = a6*1.01;
		var a8 = a7*1.01;
		var a9 = a8*1.01;
		var a10 = a9*1.01;
		var a11 = a10*1.01;
		var a12 = a11*1.01;
		var a13 = a12*1.01;
		var a14 = a13*1.01;
		var a15 = a14*1.01;
		var a16 = a15*1.01;
		var a17 = a16*1.01;
		var a18 = a17*1.01;
		var a19 = a18*1.01;
		var a20 = a19*1.01;
		var arreglo = [a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20];

			
				for (var i = 0; i <= 20;) {
							if (ant_seleccion == i) {
								horafinal = arreglo[i].toFixed(2);	
							}
							i++;
				}
	}



	if (sec_seleccion == "Logistica") {
		var parrafo0 = document.getElementById("valorhora").innerHTML;
		var parrafo1 = document.getElementById("p1").innerHTML; //normales
		var parrafo2 = document.getElementById("p2").innerHTML; //al50
		var parrafo3 = document.getElementById("p3").innerHTML; //al150
		var parrafo4 = document.getElementById("p13").innerHTML; //nocturnas (normales)
		var parrafo5 = document.getElementById("p14").innerHTML; //hsnoche
		var totalbrutopesos = document.getElementById("totalbruto").innerHTML
		var parrafo6 = document.getElementById("p4").innerHTML
		var parrafo7 = document.getElementById("p5").innerHTML
		var parrafo8 = document.getElementById("p6").innerHTML
		var totalpesos = 0;
		if ((cat_seleccion != 4) && (cat_seleccion != 5) && (cat_seleccion != 6)) {
			alert("Admite solo categoria 4, 5, 6")
		}
		parrafo1normales = (parrafo1normales*horafinal).toFixed(2);
		parrafo2normales = (parrafo2normales*horafinal*1.5).toFixed(2);
		parrafo3normales = (parrafo3normales*horafinal*2.5).toFixed(2);
		parrafo4normales = (parrafo4normales*horafinal).toFixed(2);
		parrafo5normales = (parrafo5normales*horafinal).toFixed(2);
		parrafo6normales = (16.96815839*horafinal).toFixed(2);
		parrafo7normales = (7.2496*horafinal).toFixed(2);
		parrafo8normales = (4.71022645*horafinal).toFixed(2);
		totalpesos = parseFloat(parrafo1normales) + parseFloat(parrafo2normales) + parseFloat(parrafo3normales) + parseFloat(parrafo4normales) + parseFloat(parrafo5normales) + parseFloat(parrafo6normales) + parseFloat(parrafo7normales) + parseFloat(parrafo8normales);
		totalpesos = totalpesos.toFixed(2);
		var totalneto = (totalpesos*0.78).toFixed(2);
		document.getElementById("valorhora").innerHTML = parrafo0 + " $" +horafinal;
		document.getElementById("p1").innerHTML = parrafo1 + " $" +parrafo1normales;
		document.getElementById("p2").innerHTML = parrafo2 + " $" +parrafo2normales;
		document.getElementById("p3").innerHTML = parrafo3 + " $" +parrafo3normales;
		document.getElementById("p13").innerHTML = parrafo4 + " $" +parrafo4normales;
		document.getElementById("p14").innerHTML = parrafo5 + " $" +parrafo5normales;
		document.getElementById("totalbruto").innerHTML = totalbrutopesos + " $" + totalpesos;
		document.getElementById("totalneto").innerHTML = "Total con descuentos (aprox):..." + " $" + totalneto;
		document.getElementById("p4").innerHTML = parrafo6 + " $" +parrafo6normales;
		document.getElementById("p5").innerHTML = parrafo7 + " $" +parrafo7normales;
		document.getElementById("p6").innerHTML = parrafo8 + " $" +parrafo8normales;

	//RESET VARIABLES 
	horafinal = 0;
	parrafo1normales = 0;
	parrafo2normales = 0;
	parrafo3normales = 0;
	parrafo4normales = 0;
	parrafo5normales = 0;
	parrafo6normales = 0;
	parrafo7normales = 0;
	parrafo8normales = 0;
	}	
}
