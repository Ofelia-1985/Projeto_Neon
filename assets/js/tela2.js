var primero = document.getElementById("btn1");
         
         primero.addEventListener("click", validar);



function validar (){

    
    var data= formulario.data.value;
    var valor= formulario.valor.value;
    var descrip= formulario.descricao.value;
   

    if (data==""  ){
        alert('Preencha corretamente o campo Data.');
        formulario.data.focus();
        return false;
    }

    if (valor=="" ||  valor.length >= 13) {
        alert('Preencha corretamente o campo Valor até 12 caracteres.');
        formulario.valor.focus();
        return false;
    }

    if (descrip=="" || descricao.length >=51){
        alert('Preencha o campo Descricão com máximo 50 caracteres.');
        formulario.descricao.focus();
        return false;
    
    }else{

        location.href = "tabela.html";
   
    }

}