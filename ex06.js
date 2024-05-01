import { question } from "readline-sync"

function calcular_tabuada(numero){
    for(let multiplicando = 1; multiplicando <= 10; multiplicando++){
        let resultado_mult = numero*multiplicando
        print(`${numero}x${multiplicando} = ${resultado_mult}`)
    }
}

function print(mensagem){
    return console.log(mensagem)
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
    let valor_tabuada = pegar_numero('Insira o valor que você deseja a tabuada: ')
    
    const tabuada = calcular_tabuada(valor_tabuada)
}
main()