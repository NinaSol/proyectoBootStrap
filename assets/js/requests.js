 //funcion retorna suma
function sum(num1, num2) {
    return num1 + num2;
}
//funcion retorna resta
function resta(num1,num2) {
    return num1-num2;
}
//funcion parametros de dos numeros y pasamos un callback ej: sum() y retorna la suma 
function calcular(num1, num2, callback) {
    return callback(num1, num2);
}

let i=0;
let character;
function getCharacters(url){
    var xhttp;
    xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4&&this.status==200){
            character=this.responseText; // DOMString que contiene la  respuesta a la consulta como un texto o null 
            character = JSON.parse(character).results;
            //console.log(character) //imprime los personajes
            //let imprimirPersonajes = JSON.stringify(`${character[0].name}`);//paso a string perosnjae en formato json
            //document.getElementById("api").innerHTML = imprimirPersonajes; //imprimo en html el personaje
              
               /* function char(){
                let ul=document.getElementById("api");
                for(char of character){
                    let li=document.createElement("li");
                    li.className="list-group-item text-center";
                    i++;
                    let imprimirPersonajes = JSON.stringify(character[i]);
                    li.appendChild(document.createTextNode(imprimirPersonajes));
                    ul.appendChild(li);
                }
            
            }
            char();*/
    }
}
xhttp.open("GET",url,true);
xhttp.send();
}
getCharacters('https://rickandmortyapi.com/api/character'); //devuelve array de personajes 

                    ////////////////////////////////////////////////
//armar un getepisodes pasarle la url y un parametro mas (callback) ||

let episode;
function getEpisodes(url, callback) {
    let xhttp;
    xhttp = new XMLHttpRequest(); //objeto que se usa para interactuar con servidores. Puede recuperar datos de una URL sin tener que actualizar la página completa
    xhttp.onreadystatechange = function () { //contiene el controlador de eventos que se llamará cuando readystatechangese active el evento
        if (this.readyState == 4 && this.status == 200) { // DONE es =4 igual a operacion completa y 200 es=la solicitud ha tenido éxito
            callback(this) // otra opcion callback = this.responseText;
        }
    }
    xhttp.open("GET", url, true); //Inicializa una solicitud la ejecuta.
    xhttp.send();
     //Envía la solicitud. Si la solicitud es asincrónica (que es el valor predeterminado),
     // este método regresa tan pronto como se envía la solicitud.
}

//getEpisodes('https://rickandmortyapi.com/api/episode', Episodes) 
//trae los capitulos y con la funcion puedo traer capitulos epecificos ej: episodes[4];

getEpisodes('https://rickandmortyapi.com/api/episode', Episodes)

function Episodes(XMLHttpRequest) { //funcion que voy a utilizar como parametro del callback
    episode = XMLHttpRequest.responseText; //DOMString que contiene la  respuesta a la consulta como un texto o null 
    //console.log(episode)//imprime todos los episodios al llamar a la funcion
    episode = JSON.parse(episode).results; //puedo llamar a un episodio puntual
    //let imprimirEpisodios = JSON.stringify(`nombre: ${episode[0].name}, episodio: ${episode[0].episode}`); //paso a string un episodio en formato json
    //document.getElementById("api").innerHTML = imprimirEpisodios; //imprimo en el html en mi etiqueta li con id api el nombre y numero de episodio.
    function epi(){
        let ul=document.getElementById("api");
        for(char of character){
            let li=document.createElement("li");
            li.className="list-group-item text-center";
            let imprimirEpisodios = JSON.stringify(`nombre: ${episode[i].name}, episodio: ${episode[i].episode}`);
            li.appendChild(document.createTextNode(imprimirEpisodios));
            ul.appendChild(li);
            i++;

        }
    
    }
    epi();
}




  

    
    

