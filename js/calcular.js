/*

Operadores aritméticos:
+ soma
- subtração
* multiplicação
/ divisão
++ incremento
-- decremento

Operações de atribuições:
= igual
+= mais ou igual
-= menos ou igual
/= dividido ou igual
*= multiplicado ou igual

Operações de sequência:
+ (serve para concatenar valores
     (string ou variáveis))
- (serve para subtrair valores
     (string ou variáveis))  }

Operadores de comparação:
RETORNA TRUE (VERDADEIRO) OU FALSE (FALSO)

== (comparara 2 valores)
=== (comparar valores e tipo de dado)
!= (diferente) de valores apenas
!== (comparar a diferença de valores e tipo de dado)

< menor   > maior
<= menor ou igual  >= maior ou igual

*/

function somar(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let resultado = n1 + n2;
    document.getElementById("resultado")
    .innerHTML = resultado;

   const corResultado = document.getElementById("resultado");
     if ("resultado < 0"){
          corResultado.style.color = "red";
     }

     else{
          corResultado.style.color = "blue";
     }

}


function subtrair(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let resultado = n1 - n2;
    document.getElementById("resultado")
    .innerHTML = resultado;

    const corResultado = document.getElementById("resultado");
     if ("resultado < 0"){
          corResultado.style.color = "red";
     }

     else{
          corResultado.style.color = "blue";
     }

}

function multiplicar(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let resultado = n1 * n2;
    document.getElementById("resultado")
    .innerHTML = resultado;

    const corResultado = document.getElementById("resultado");
     if ("resultado < 0"){
          corResultado.style.color = "red";
     }

     else{
          corResultado.style.color = "blue";
     }

}


function dividir(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
   
    if (n2 ==0){
     document.getElementById("resultado")
     .innerHTML = "Não é possível dividir por zero";

     document.getElementById("resultado").style.color="red";
    }




     else{
           let resultado = n1 / n2;
    document.getElementById("resultado")
    .innerHTML = resultado;

    const corResultado = document.getElementById("resultado")
     if ("resultado < 0"){
          corResultado.style.color = "pink";
     }


      else{
          corResultado.style.color = "blue";
}}}

function limpar(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("resultado").innerHTML = "---"
    document.getElementById("resultado").style.color="blue";
    const corResultado = document.getElementById("resultado");
     if ("resultado < 0"){
          corResultado.style.color = "red";
     }

     else{
          corResultado.style.color = "blue";
     }
}