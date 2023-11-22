

//Obtener los elementos del DOM

const displayResult = document.querySelector('.display-screen');
const buttons = document.querySelectorAll('.buttons-calculator');


//Creamos variables para almacenar los datos: el numero que se ingresó y el operador

let currentNumber = ""; //Numero que estamos ingresando
let previusNumber = "";//almacena el dato que se ingresó cuando vayamos a ingresar el segundo dato
let currentOperator = "";

//Realizamos una funcion que actualice el resultado del Display

const updateResult = () => {
    displayResult.textContent = currentNumber;

};
//Función para realizar la operacion matematica

const calculate = () => {
    //Convertimos los numeros de cadena a numero con parsetFloat
    const num1 = parseFloat(previusNumber);
    const num2 = parseFloat(currentNumber);

    //Se realiza la operacion según el operador seleccionado

    switch (currentOperator) {
        case '+':
            currentNumber = num1 + num2;
            break;
        case '-':
            currentNumber = num1 - num2;
            break;
        case '*':
            currentNumber = num1 * num2;
            break;
        case '/':
            currentNumber = num1 / num2;
            break;
        case '&radic;':
            currentNumber = Math.sqrt(num1);
    }

    //Convertir el resultado numerico a cadena de  strings

    currentNumber = currentNumber.toString();

};

/* Event Listener- Escuchamos el evento Click, cuando hacen click en un boton. Button es parecido a un array y se recorre con forEach. Button lo creo ahora mismo dentro de la funcion. Creo  la constante value que almacena lo que pse por click*/
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.textContent

        if (button.classList.contains('data-number')) {
            currentNumber = currentNumber + value;
            updateResult();
        } else if (value === '=') { //verificamos si es el boton de igual =
            calculate();
            updateResult();
            //Reiniciar las variables despues de la operacion
            currentNumber = "";
            previusNumber = ""

            //Verifico si es el valor de C el valor que estamos ingresando
        } else if (value === 'C') {

            currentNumber = "";
            previusNumber = "";
            currentOperator = "";
            updateResult(); //Aqui limpoiamos la pantalla
            displayResult.textContent = 0;

        } else if (value === '&larr;') {
            currentNumber = currentNumber.toString().slice(0, -1);
            currentNumber = value;

        } else {
             //Aqui pasamos el numero que hay actual a la variable de numero previo para poder ingresar el segundo numero
            previusNumber = currentNumber;
            currentNumber = '';
            currentOperator = value;


        }
    })
    
   
});





