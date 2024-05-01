import { question } from "readline-sync"

function print(mensagem){
    return console.log(mensagem)
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
    let valor_inicial = pegar_numero('Insira o valor inicial da pa: ')
    const razão_pa = pegar_numero('Insira a razão da pa: ')
    const limite = pegar_numero('Insira o número limite que será exibido: ')

    for(let numero = valor_inicial; numero <= limite; numero+=razão_pa){
        print(numero)
    }
}
main()