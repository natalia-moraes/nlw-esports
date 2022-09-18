
// function upperName(name) {
//     return name;
// }

/**
 * Arrow Function
 */
// const myName = (name) =>  name.toUpperCase();
// console.log(myName('natalia'));

/////////////////////////////////////////////////

/**
 * Destructuring = desestruturar funcao
 */
// function handleMouse(event) {
//     const {clientX, clientY} = event;
//     console.log(clientX, clientY);

// }
// document.addEventListener('click', handleMouse);

/**
 * Desestructing array
 */
// const frutas = ['banana', 'uva'];
// const [frutas1, frutas2] = frutas;

// console.log(frutas2, frutas1);


/**
 * Rest = três pontinhos, dessa forma eu nao preciso passar o segundo parametro como um array, posso ir adicionando os parametros direto que ele já entende.
 */
// function showList(empresa, ...clientes) {
//     clientes.forEach(cliente => {
//         console.log(`Empresa: ${empresa}, Funcionario: ${cliente}`);
//     });
// }

// showList('google', 'joao', 'pedro');

/**
 * Spread = serve para espalhar 
 */
// const numeros = [10,20,40,1,3,4];
// const maior = Math.max(...numeros);
// console.log(maior);

// const carro = {
//     cor: 'Preto',
//     modelo: 'Gol g4',
//     marca: 'VW'
// }
// const carroAno = {...carro, ano: 2009};
// console.log(carroAno);


/**
 * Fetch
 */
fetch('https://ranekapi.origamid.dev/json/api/produto')
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
    });