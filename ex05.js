import { question } from "readline-sync"

function calcular_fatorial(numero){
    let resultado = 1
    for(let i = 1; i <= numero; i++ ){
        resultado*=i
    }
    return resultado
}

function print(mensagem){
    return console.log(mensagem)
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
    let numero = pegar_numero('Insira o número que você deseja o fatorial: ')
    let fatorial = calcular_fatorial(numero)
    
    print(`O resultado do fatorial do seu numero é: ${fatorial}`)
}
main()