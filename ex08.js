import {question} from 'readline-sync'


function mostrar(mensagem){
   console.log(mensagem)
}


function pegar_numero(mensagem){
   return Number(question(mensagem))
}


function main(){
   let num_N = pegar_numero('Insira o número N: ')
   const lim_inferior = pegar_numero('Insira o limite inferior: ')
   const lim_superior = pegar_numero('Insira o limite superior: ')
   for(let contador_multiplos = 1; num_N <= lim_superior && num_N >= lim_inferior; contador_multiplos++){
       const multiplo = num_N*contador_multiplos
       if(multiplo >= lim_inferior && multiplo <= lim_superior){
           mostrar(multiplo)
       }
   }
}
main()