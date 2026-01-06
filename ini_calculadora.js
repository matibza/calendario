function iniciar_calculadora() {
	LP = 1;
var selector = document.getElementById("sel");
var anio = document.getElementById("tit").innerHTML;
	if (selector.value == "TB") {
		cargar_2023_b();
		document.getElementById("boton_calc").value = "B";
	}
	if (selector.value == "TA") {
		cargar_2023_a();
		document.getElementById("boton_calc").value = "A";
	}
	if (selector.value == "TC") {

		cargar_2023_c();
		document.getElementById("boton_calc").value = "C";
	}
	if (selector.value == "TD") {
		cargar_2023_d();
		document.getElementById("boton_calc").value = "D";
	}
	if (selector.value == "DIUR") {
		cargar_2023_diurno();
		document.getElementById("boton_calc").value = "DIU";
	}
	if (anio == "2025") {
		feriados2025();
	}
}
var lee = 1;
var LP = 0;
function letra_principal() {
		var fondo = document.getElementById("bbdd");
	fondo.style.backgroundColor = "black";
	LP = 1;
	var anio = document.getElementById("tit").innerHTML;
	lee++;
	var le = document.getElementById("boton_calc");
		if (lee == 0) {
			le.value = "A";
			cargar_2023_a();
		}
		if (lee == 1) {
			le.value = "B";
			cargar_2023_b();
		}
		if (lee == 2) {
			le.value = "C";
			cargar_2023_c();
		}
		
		if (lee == 3) {
			le.value = "D";
			
			cargar_2023_d();
		}
		if (lee == 4) {
			le.value = "DIU";
			lee = -1;
			cargar_2023_diurno();
		}
	if (anio == "2025") {
		feriados2025();
	}
}

function feriados2025() {
break
var a = document.getElementById("a5");
var b = document.getElementById("a94");
var c = document.getElementById("a95");
var d = document.getElementById("a131");
var e = document.getElementById("a147");
var f = document.getElementById("a317");
var g = document.getElementById("a174");
var h = document.getElementById("a198");
var i = document.getElementById("a228");
var j = document.getElementById("a231");
var k = document.getElementById("a264");
var l = document.getElementById("a394");
var m = document.getElementById("a472");
var n = document.getElementById("a489");
var nn = document.getElementById("a115");
var o = document.getElementById("a451");
var p = document.getElementById("a5");
var q = document.getElementById("a5");
var r = document.getElementById("a5");
var s = document.getElementById("a5");
a.style.backgroundColor = "red";
b.style.backgroundColor = "red";
c.style.backgroundColor = "red";
d.style.backgroundColor = "red";
e.style.backgroundColor = "red";
f.style.backgroundColor = "red";
g.style.backgroundColor = "red";
h.style.backgroundColor = "red";
i.style.backgroundColor = "red";
j.style.backgroundColor = "red";
k.style.backgroundColor = "red";
l.style.backgroundColor = "red";
m.style.backgroundColor = "red";
n.style.backgroundColor = "red";
nn.style.backgroundColor = "red";
o.style.backgroundColor = "red";
p.style.backgroundColor = "red";
q.style.backgroundColor = "red";
r.style.backgroundColor = "red";
s.style.backgroundColor = "red";
}
function recibosjeje(){
		var fondo = document.getElementById("bbdd");
	fondo.style.backgroundColor = "white";
	if (LP == 1) {
	document.getElementById("padreto").style.opacity = "0%";
	document.getElementById('ancla_enerope').click();
	setInterval(cortar, 400)
	}
	if (LP == 0) {
		alert("Debe calcular el turno primero");
	}
}
function cortar() {
	document.getElementById("padreto").style.display = "none";
}




















	var c = 1
	function ocultar() {
		if (LP == 1) {
							if (c == 0) {
								document.getElementById("a").style.fontSize = "0";
								document.getElementById("b").style.fontSize = "0";
								document.getElementById("c").style.fontSize = "0";
								document.getElementById("d").style.fontSize = "0";
								document.getElementById("e").style.fontSize = "0";
								document.getElementById("f").style.fontSize = "0";
								document.getElementById("g").style.fontSize = "0";
								document.getElementById("recibo").style.width = "0";
								document.getElementById("recibo").style.opacity = "0";
								document.getElementById("p1").style.fontSize = "0";
								document.getElementById("p2").style.fontSize = "0";
								document.getElementById("p3").style.fontSize = "0";
								document.getElementById("p4").style.fontSize = "0";
								document.getElementById("p5").style.fontSize = "0";
								document.getElementById("p6").style.fontSize = "0";
								document.getElementById("p7").style.fontSize = "0";
								document.getElementById("p8").style.fontSize = "0";
								document.getElementById("p9").style.fontSize = "0";
								document.getElementById("p10").style.fontSize = "0";
								document.getElementById("p11").style.fontSize = "0";
								document.getElementById("p12").style.fontSize = "0";
								setTimeout(bruto, 300);
							}
							if (c == 1) {
								document.getElementById("recibo").style.display = "block";
								setTimeout(bruto2, 500);
								c = -1;
							}
							c++
		}
	}

	function bruto() {
		document.getElementById("recibo").style.display = "none";
	}
	function bruto2() {
		document.getElementById("recibo").style.opacity = "100%";
		document.getElementById("recibo").style.width = "98%";
								document.getElementById("a").style.fontSize = "12.4px";
								document.getElementById("b").style.fontSize = "12.4px";
								document.getElementById("c").style.fontSize = "12.4px";
								document.getElementById("d").style.fontSize = "12.4px";
								document.getElementById("e").style.fontSize = "12.4px";
								document.getElementById("f").style.fontSize = "12.4px";
								document.getElementById("g").style.fontSize = "12.4px";
								document.getElementById("p1").style.fontSize = "16px";
								document.getElementById("p2").style.fontSize = "16px";
								document.getElementById("p3").style.fontSize = "16px";
								document.getElementById("p4").style.fontSize = "16px";
								document.getElementById("p5").style.fontSize = "16px";
								document.getElementById("p6").style.fontSize = "16px";
								document.getElementById("p7").style.fontSize = "16px";
								document.getElementById("p8").style.fontSize = "16px";
								document.getElementById("p9").style.fontSize = "16px";
								document.getElementById("p10").style.fontSize = "16px";
								document.getElementById("p11").style.fontSize = "16px";
								document.getElementById("p12").style.fontSize = "16px";
	}

