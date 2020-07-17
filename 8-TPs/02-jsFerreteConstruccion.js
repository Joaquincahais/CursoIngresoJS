/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var radio;
    var sumarectangulo;

    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;
    largo = parseInt(largo);
    ancho = parseInt(ancho);

    largo = largo*2;
    ancho = ancho*2;
    sumarectangulo = largo + ancho;
    sumarectangulo = sumarectangulo*3;
    alert("Se necesitaran " +sumarectangulo+ " metros de alambre");
}
function Circulo () 
{
    var radio;
    var perimetrocirculo;
    
    radio = txtIdRadio.value;
    radio = parseInt(radio);
    perimetrocirculo = 2*Math.PI*radio;

    perimetrocirculo = perimetrocirculo*3;
    perimetrocirculo = perimetrocirculo.toFixed(2);
    alert("Se necesitaran " +perimetrocirculo+ " metros de alambre");
}
function Materiales () 
{
    var largo;
    var ancho;
    var area;
    var bolsascemento;
    var bolsascal;
    
    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;
    largo = parseInt(largo);
    ancho = parseInt(ancho);

    area = largo*ancho;
    bolsascemento = area*2;
    bolsascal = area*3;
    
    alert("Se necesitan " +bolsascemento+ " bolsas de cemento y " +bolsascal+ " bolsas de cal.")

}

