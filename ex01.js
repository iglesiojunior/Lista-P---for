import { question } from "readline-sync"

function print(mensagem){
    return console.log(mensagem)
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
    const numero_limite = pegar_numero('Insira um número: ')
    for (let numero = 1; numero <= numero_limite; numero++){
        print(numero)
    } 
}
main()