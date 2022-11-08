/* 
Ejercicio 1
convertirGradosCentigradosAGradosFahrenheint.
*/
function convertirGradosCentigradosAGradosFahrenheint() {
    var c = parseInt(document.getElementById('centigrados').value);
    var f = (c * 1.8) + 32
    document.getElementById('fa').innerText = `${c} c = ${f} F`;
    document.getElementById('res');
    if (f >= 212) {
        res.innerHTML = "<li> Punto de ebullición del agua </li>";
    } else if (f >= 98.6 && f < 212) {
        res.innerHTML = "<li> Temperatura del cuerpo humano </li>";
    } else if (f >= 77 && f <= 98.6) {
        res.innerHTML = "<li> Temperatura ambiente </li>";
    } else if (f >= 32 && f <= 77) {
        res.innerHTML = "<li> Punto de congelación del agua </li>";
    } else if (f >= -459.58 && f <= 32) {
        res.innerHTML = "<li> Cero absoluto” </li>";
    }

}


/*
Ejercicio 2
Calcular porcentajes.
*/
function calcularPorcentajes() {
    var n = document.getElementById('numero').value;
    var r = 0
    if (n < 500) {
        r = n * 1.5;
    } else {
        r = n * 0.93;
    }
    document.getElementById("r").innerHTML = "<ol> Resultado: " + r + "</ol>";
}

/* Ejercicio 3
Generar tabla.
*/
function generarTablaHTML() {
    var fi = document.getElementById('f').value;
    var co = document.getElementById('c').value;
    var cot = document.getElementById('cot');
    var i, j;
    cot.innerHTML = "";
    var escribir=fi*co
    var tabla = "<table border>";
    for (i = 1; i <= fi; i++) {
        tabla += "<tr>"
        for (j = 1; j <= co; j++) {
            tabla += "<td>"+escribir+"</td>";
            escribir=escribir-1
        }
        tabla += "</tr>";
    }
    tabla += "</table border>";
    cot.innerHTML = tabla;
}