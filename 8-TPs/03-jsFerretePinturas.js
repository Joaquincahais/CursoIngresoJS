/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperatura;
    var nuevatemp;

    temperatura = txtIdTemperatura.value;
    temperatura = parseFloat(temperatura);

    nuevatemp = (temperatura-32)/1.8;
    nuevatemp = nuevatemp.toFixed(1);
    alert(temperatura + " grados fahrenheit son " +nuevatemp+ " grados centigrados");
}

function CentigradosFahrenheit () 
{
    var temperatura;
    var nuevatemp;

    temperatura = txtIdTemperatura.value;
    temperatura = parseFloat(temperatura);

    nuevatemp = (temperatura*1.8)+32;
    nuevatemp = nuevatemp.toFixed(1);
    alert(temperatura + " grados centigrados son " +nuevatemp+ " grados fahrenheit");
}
