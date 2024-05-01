import {question} from 'readline-sync'

function mostrar(mensagem){
   console.log(mensagem)
}

function pegar_numero(mensagem){
   return Number(question(mensagem))
}

function main(){
   let lim_inferior = pegar_numero('Insira o limite inferior: ')
   let lim_superior = pegar_numero('Insira o limite superior: ')
   for(let numero = lim_inferior; numero >=lim_inferior && numero <= lim_superior; numero++){
       if(numero%2 !== 0){
            mostrar(numero)
       }
   }
}
main()