let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

//una accion tiene parentesis despues de el nombre de la accion
//a veces tiene el operador punto
typewriter
    .pauseFor(1500)//Milisegundos
    .typeString('Isabella González')
    .pauseFor(300)
    .deleteAll()
    .typeString('Desarrolladora FRONTEND JR')
    .pauseFor(1000)
    .start();


let frase = document.getElementById('frase');

let typewriterfrase = new Typewriter(frase, {
    loop: true,
    delay: 75,
});


typewriterfrase
    .pauseFor(1500)//Milisegundos
    .typeString('Siempre parece imposible… hasta que se hace')
    .pauseFor(300)
    .deleteAll()
    .typeString('Nelson Mandela')
    .pauseFor(1000)
    .start();

