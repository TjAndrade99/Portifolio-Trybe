
// ########## Operador (&&) - "and" ##########

// Ex:01
//----------
// const comida = 'pão na chapa';
// const bebida = 'refri';

// if (bebida === 'cafézinho' && comida === 'pão na chapa') {
//   console.log('Muito obrigado pela refeição :)');
// } else {
//   console.log('Acho que houve um engano com meu pedido');
// }

// Ex:02
// ----------

// const conditionOne = true;
// const conditionTwo = false;

// console.log(conditionOne && conditionTwo);

// Ex:03
// ----------

// const cenouras = true;
// const leite = true;
// const arroz = true;
// const feijao = true;

// const listaDeCompras = cenouras && leite && arroz && feijao;

// console.log(cenouras && leite && arroz && feijao);


// --------------------------------------------------------------------------------------------

// Exercicios
// ----------

// 01.Crie uma constante chamada "currentHour" que recebe um número entre 4 e 24 de sua escolha, para representar as horas do dia.
// 02.Crie uma variável chamada "message" que, inicialmente, é uma string vazia.
// 03.Implemente condicionais para que:

// const currentHour = 2;
// var message = "";

// if (currentHour >= 22){
//     console.log(message= "Não deveríamos comer nada, é hora de dormir")
// }
// else if (currentHour >= 18){
//     console.log(message= "Rango da noite, vamos jantar :D");
// }
// else if(currentHour >= 14){
//     console.log(message= "Vamos fazer um bolo pro café da tarde");
// }
// else if (currentHour >= 11 && message <=14){
//     console.log(message = "Hora do almoço");
// }
// else if (currentHour <= 4 && currentHour >= 11){
//     console.log(message = "Hmmm, cheiro de café recém passado");
// }
// else console.log(message= "Estou dormindo zZZzzzz");   
// *** linha bonus que fiz se a hora estiver fora das condições ***


// ########## Operador (||) - "or" ##########

// Ex:01
// ----------

// const bebidaPrincipal =  'cafezinho';
// const bebidaAlternativa = 'suco de laranja';

// if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
//   console.log("Obrigado por me atender :D")
// } else {
//   console.log("Ei, eu não pedi isso!");
// }


// Exercicios
// ----------

// 01. Crie uma variável chamada "weekDay" que recebe a string "quarta-feira".
// 02. Implemente condicionais para que:
// 
// *Se nossa variável "weekDay" for "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira" ou "sexta-feira", imprima "Oba, mais um dia de aprendizado na Trybe >:D".
// ou "sexta-feira", imprima "Oba, mais um dia de aprendizado na Trybe >:D".
// 
// *Se for algum dia de fim de semana, imprima "FINALMENTE, descando merecido UwU".



// var weekDay = 'sexta-feira'

// if (weekDay == 'segunda-feira' || weekDay =='terça-feira' || weekDay == 'quarta-feira' || weekDay == 'quinta-feira'){
//     console.log('"Oba, mais um dia de aprendizado na Trybe >:D".')
// }
// else if (weekDay == 'sexta-feira'){
//     console.log ('Hoje é dia de Mufasa!!!!')
// }
// else console.log ('FINALMENTE, descando merecido UwU')

 

// ########## Operador ( ! ) - "not" ##########

// exemplos
// ----------


// console.log((2 + 2) === 4);

// console.log(!(2 + 2) === 4);



// const squirtle = "melhor pokemon inicial";

// console.log(!squirtle); // false



