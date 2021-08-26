// let trafficLight = "vermelho"

// switch (trafficLight) {
//     case "vermelho":
//         console.log("Pare");
//         break;

//     case "amarelo":
//         console.log("Atenção")
//         break;

//     case "verde":
//         console.log("Siga!")
//         break;
    
//     default:
//         console.log("Valor não identificado")      
// }


// exercicios
// -----------


// 01.Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, 
// que pode ser: 'aprovada' , 'lista' ou 'reprovada' ;


// 02.Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do 
// exercício anterior se o estado da pessoa candidata for 'aprovada' , 'lista' ou 'reprovada' . 
// Como default , imprima a mensagem de 'não se aplica' .


let resultadoProva = "lista"

switch (resultadoProva){
    case "aprovada":
    console.log("Parebens voce passou!")
        break;

    case "lista":
        console.log("Aguardando resultado")
        break;
        
    case "reprovada":
        console.log("Reprovado(a)")
        break;

    default:
        console.log("não se aplica")
}


