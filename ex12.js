import {question} from 'readline-sync'

function mostrar(mensagem){
   console.log(mensagem)
}

function pegar_numero(mensagem){
   return Number(question(mensagem))
}

function main(){
   let contador_qtd_num = pegar_numero('Insira o número N: ')
   let soma_numeros = 0
   for(let i = contador_qtd_num;i > 0; i--){
       soma_numeros += pegar_numero('Insira um número a ser somado: ')
   }
   const media_numeros = soma_numeros/contador_qtd_num
   mostrar(`
   A soma de todos os números é: ${soma_numeros}
   A media dos números é igual a ${media_numeros.toFixed(1)}
   `)
}
main()