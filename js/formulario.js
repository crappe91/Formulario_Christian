const nombres = document.getElementById("nombres");
const apellidos = document.getElementById("apellidos");
const fechaNac = document.getElementById("fechaNac");
const correo = document.getElementById("correo");
const telefono = document.getElementById("telefono");
const dni = document.getElementById("dni");
const iban = document.getElementById("iban");
const swift = document.getElementById("swift");

const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");
const fechaActual= new Date();

form.addEventListener("submit", e=>{
    e.preventDefault();
    let warnings="";
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    let entrar=false;
    parrafo.innerHTML="";

    if(nombres.value.length<6){
        warnings +=`El nombre no es válido </br>`;
        entrar=true;
    }

    if(apellidos.value.length<6){
        warnings +=`El apellido no es válido </br>`;
        entrar=true;
    }

    if(fechaActual<fechaNac){
        warnings +=`Fecha no valida </br>`;
        entrar=true;
    }

    if(!regexEmail.test(correo.value)){
        warnings +=`El correo no es válido </br>`;
        entrar=true;
    }





    if(entrar){
        parrafo.innerHTML=warnings;
    }else{
        parrafo.innerHTML="Alta Correcta";
    }


});



/*

let correcto=true;
var nombres, apellidos, fechaNac, correo, telefono, dni, iban, swift;

var nombres = document.getElementById("nombres").value;
var apellidos = document.getElementById("apellidos").value;
var fechaNac = document.getElementById("fechaNac").value;
var correo = document.getElementById("correo").value;
var telefono = document.getElementById("telefono").value;
var dni = document.getElementById("dni").value;
var iban = document.getElementById("iban").value;
var swift = document.getElementById("swift").value;

function mifuncion() {
    


    if (nombres == "" || apellidos == "" || fechaNac == "" || correo == "" || telefono == "" || dni == "" || iban == "" || swift == "" ) {
        
        alert("Debe completar todos los campos");
        correcto=false;
        
      }else if (){
        if (document.fvalida.nombre.value.length==0){
            alert("Tiene que escribir su nombre")
            document.fvalida.nombre.focus()
            return 0;
        }
        
      }


 
  }



  if (document.fvalida.nombre.value.length==0){
    alert("Tiene que escribir su nombre")
    document.fvalida.nombre.focus()
    return 0;
}

//valido la edad. tiene que ser entero mayor que 18
edad = document.fvalida.edad.value
edad = validarEntero(edad)
document.fvalida.edad.value=edad
if (edad==""){
    alert("Tiene que introducir un número entero en su edad.")
    document.fvalida.edad.focus()
    return 0;
}else{
    if (edad<18){
           alert("Debe ser mayor de 18 años.")
           document.fvalida.edad.focus()
           return 0;
    }
}

//valido el interés
if (document.fvalida.interes.selectedIndex==0){
    alert("Debe seleccionar un motivo de su contacto.")
    document.fvalida.interes.focus()
    return 0;
}

//el formulario se envia
alert("Muchas gracias por enviar el formulario");
document.fvalida.submit();
}
*/