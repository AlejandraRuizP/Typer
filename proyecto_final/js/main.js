//constantes----------------------------------------------------------
const words= [
    
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'caleidoscopio',
    'otorrinolaringólogo',
    'zephyr',
    'hipopotomonstrosesquipedaliofobia',
    'footer',
    'bachata',
    "esternocleidomastoideo"
    ]

//variables globales--------------------------------------------------

//variable que almacena la palabra elegida al azar
let palabraR= palabraRandomica();

//variable que almacena el elemento html en el que se escribe la palabra al azar
let randomWord=document.querySelector("h1");

//inner que actualiza la palabra en pantalla
randomWord.innerText= palabraR;
randomWord.classList.add("sintiempo");

//variable que almacena el texto donde se escribe el tiempo
let tiempoRestante=document.querySelector("#timeSpan");

//tiempo restante
var time = 10;

//intervalo
let idInterval = setInterval(actualizarTiempo,1000);

//-------------------------------keydown
let text=document.querySelector("#text");

text.focus();

//funciones-----------------------------------------------------------
function palabraRandomica(){
    let indiceR=Math.floor(Math.random()*words.length);
    let newWord=words[indiceR];
    console.log(newWord);
    return newWord;
}


function actualizarTiempo(){
    //if (text.value== leters){

        time--;
        tiempoRestante.innerText= "Time left: " + (1 + time) + " s";

    //}
   
    if(time==0){
        tiempoRestante.innerText="Game Over";
        clearInterval(idInterval);     
        gameOver();  
        text.readOnly= true



    }
}

//------score
let score=document.querySelector("#score");
let puntos=0;

//score.innerHTML=puntos;
function updateScore(){
    puntos++
    score.innerText= puntos + "";
    if(puntos>10){
        puntos++
        score.innerText= puntos + "🥵";
    }
    return puntos
}


function updateTime(){
    time+=3 
    //tiempoAdd.innerText= ptostime + time;
    tiempoRestante.innerText= "Time left: " + (time) + " s";
}

//eventos-------------------------------------------------------------

text.addEventListener("keyup", function(e){
    console.log(e);
    //if(e.key==leters){
     if (text.value==palabraR){
        palabraR=palabraRandomica();
        randomWord.innerText= palabraR;
        text.value= "";
        updateTime();
        updateScore();
     }
   //}
})

//código general------------------------------------------------------
//newTitle=document.querySelector("h1")
//newP=document.querySelector("p")
//button=document.createElement("div")

function gameOver(){

    let NuevoTitulo=document.querySelector ("#end-game-container");
    NuevoTitulo.innerHTML= "😂You ran out of time😂<br>";
    NuevoTitulo.classList.add("sintiempo");
    console.log(NuevoTitulo)

     let button=document.createElement("button");
    button.innerHTML= "Try again";
    button.setAttribute("onclick","location.reload()");
    button.classList.add("button");
    console.log(button)

    let container=document.querySelector("#end-game-container");
    container.appendChild (button);

} 

