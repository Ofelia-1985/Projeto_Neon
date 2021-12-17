var primero = document.getElementById("btn1");
         
         primero.addEventListener("click", validar);



function validar (){

    
    var nome= formulario.nome.value;
    var email= formulario.email.value;
    var senha= formulario.senha.value;
   

    if (nome==""  ){
        alert('Preencha corretamente o campo Nome.');
        formulario.nome.focus();
        return false;
    }

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