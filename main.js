nombre_cancion_array=[];
function submit()
{
    var nombre_1=document.getElementById("nombre_cancion_1").value;
    var nombre_2=document.getElementById("nombre_cancion_2").value;
    var nombre_3=document.getElementById("nombre_cancion_3").value;
    var nombre_4=document.getElementById("nombre_cancion_4").value;

    nombre_cancion_array.push(nombre_1);
    nombre_cancion_array.push(nombre_2);
    nombre_cancion_array.push(nombre_3);
    nombre_cancion_array.push(nombre_4);

    document.getElementById("ver_cancion").innerHTML=nombre_cancion_array;
    document.getElementById("boton_enviar").style.display="none";
    document.getElementById("boton_ordenar").style.display="inline-block";
}
function sorting()
{
    nombre_cancion_array.sort();
    document.getElementById("ver_cancion").innerHTML=nombre_cancion_array;
}