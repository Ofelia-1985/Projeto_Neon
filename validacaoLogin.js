var primero = document.getElementById("btn1");
         
         primero.addEventListener("click", validar);

var segundo = document.getElementById("btn2");

        segundo.addEventListener("click", inscribirse);

        function inscribirse(){

            location.href = "cadastro.html";
        };


 function validar (){

  
 var email= formulario.email.value;
    var senha= formulario.senha.value;

    
        if (email=="" || email.indexOf ('@')==-1){
            alert('Preencha corretamente o campo Email.');
            formulario.email.focus();
            return false;
        }
    
        if (senha=="" || senha.length <=5){
            alert('Preencha o campo Senha com mínimo 6 caracteres.');
            formulario.senha.focus();
            return false;
        
         }else{
    
       
             location.href = "tela1.html";
            
        }
    }
