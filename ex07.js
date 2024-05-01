import { question } from "readline-sync"

function somar_numeros_intervalos(numero_limite){
    let resultado_soma = 0
    for(let numero = 1; numero <= numero_limite; numero++){
        resultado_soma+= numero
    }
    return resultado_soma
}

function print(mensagem){
    return console.log(mensagem)
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
    const numero_limite = pegar_numero('Insira um número limite: ')
    
    const soma_intervalos = somar_numeros_intervalos(numero_limite)

    print(`A soma dos números entre 1 e ${numero_limite} é igual a: ${soma_intervalos}`)
}
main()