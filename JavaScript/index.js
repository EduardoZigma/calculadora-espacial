var usuario = prompt("¿Cuánto pesas actualmente?");
var planeta = parseInt(prompt("Elige el numero de tu planeta: \n1 es Mercurio \n2 es Venus \n3 es Tierra \n4 es Marte \n5 es Júpiter \n6 es Saturno \n7 es Urano \n8 es Neptuno"));
var peso = parseInt(usuario);

var g_mercurio = 3.7;
var g_venus = 8.8;
var g_tierra = 9.8;
var g_marte = 3.711;
var g_jupiter = 24.8;
var g_saturno = 10.4;
var g_urano = 8.87;
var g_neptuno = 11.15;
var planetita;
var peso_fnal;

if(planeta == 1)
{
 peso_fnal = peso * g_mercurio / g_tierra;
 planetita = ("Mercurio");
}
else if (planeta == 2)
{
 peso_fnal = peso * g_venus / g_tierra;
 planetita = ("Venus");
}
else if (planeta == 3)
{
 peso_fnal = peso * g_tierra / g_tierra;
 planetita = ("Tierra");
}
else if (planeta == 4)
{
 peso_fnal = peso * g_marte / g_tierra;
 planetita = ("marte");
}
else if (planeta == 5)
{
 peso_fnal = peso * g_jupiter / g_tierra;
 planetita = ("Jupiter");
}
else if (planeta == 6)
{
 peso_fnal = peso * g_saturno / g_tierra;
 planetita = ("Saturno");
}
else if (planeta == 7)
{
 peso_fnal = peso * g_urano/ g_tierra;
 planetita = ("Urano");
}
else if (planeta == 8)
{
 peso_fnal = peso * g_neptuno/ g_tierra;
 planetita = ("Neptuno");
}
else
{
    swal({
        title: "Error 404",
        text: "Vuelve a intentarlo",
        icon: "error",
    });
}



peso_fnal = parseInt(peso_fnal);



const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
  let target = button.querySelector('.target');
  function handleMove(e) {
    const x = -50 + (e.pageX - button.offsetLeft - 300 / 2) / 3;
    const y = -10 + (e.pageY - button.offsetTop - 100 / 2) / 3;

    target.style.setProperty('--x', `${ x }px`)
    target.style.setProperty('--y', `${ y }px`)
  }
  button.addEventListener('mousemove', (e) => {
    handleMove(e);
  });
  button.addEventListener('touchmove', (e) => {
    handleMove(e.changedTouches[0]);
  });
});

if (peso_fnal) {
  swal({
    title: `Tu peso en ${planetita}`,
    text: `Sería de ${peso_fnal} Kgs`,
    icon: "success",
  });
  document.write("<h1 class='display-6 animate__fadeIn'> Tu peso en "+ planetita + "  es  de " + peso_fnal + " kilos.</h1>");
} else {
    document.write("<h1 class='display-6 animate__fadeIn'>Completa la información.</h1>");
}

