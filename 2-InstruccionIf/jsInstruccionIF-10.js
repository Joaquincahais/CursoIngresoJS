function mostrar()
{
	var nota;

	nota = Math.floor(Math.random() * 11);

	if(nota == 9 || nota == 10)
	{
		alert("EXCELENTE, su nota es: " +nota);
	}
	else if(nota >4)
	{
		alert("APROBO, su nota es: " +nota);
	}
	else if(nota <4)
	{
		alert ("Vamos, la proxima se puede, su nota es: " +nota);
	}

}//FIN DE LA FUNCIÓN