 /*let pokemons;
function getPokemons(url) {
    let xhttp;
    xhttp = new XMLHttpRequest(); 
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) { 
            pokemons=this.responseText; 
            pokemons = JSON.parse(pokemons).results; 
            console.log(pokemons);     
          }
    }
    xhttp.open("GET", url, true); 
    xhttp.send();
}


//getPokemons('https://pokeapi.co/api/v2/pokemon/ditto', Pokemons);

function Pokemons(XMLHttpRequest) { 
    pokemons = XMLHttpRequest.responseText; 
    pokemons = JSON.parse(pokemons).results; 
    console.log(pokemons);
  function poke(){
        for(pokemon of pokemons){
            let ul=document.getElementById("poke");
            let li=document.createElement("li");
            let imprimirPokemons = JSON.stringify(pokemons);
            li.appendChild(document.createTextNode(imprimirPokemons));
            ul.appendChild(li);
            i++;
        }
    
    }
    poke();
}*/
function pokeSubmit(){
    var param = document.getElementById("pokeInput").value;
    var pokeURL = "http://pokeapi.co/api/v1/pokemon/" + param;

    $.getJSON(pokeURL, function(data){
        console.log(data);
        console.log(JSON.stringify(data, null, "  "));

    });
}

