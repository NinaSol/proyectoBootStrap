/*
function Frutas (nombre,precio,kilo){
this.nombre=nombre,
this.precio=precio,
this.kilo=kilo

this.toString=function(){
return `${this.nombre} $${this.precio} ${this.kilo} kilo`;
}
}
let banana = new Frutas("Banana",80,1);
let manzana = new Frutas("Manzana",100,1);
let naranja = new Frutas("Naranja",60,1);
let frutilla = new Frutas("Frutilla",180,1);

let frutas = [banana,manzana,naranja,frutilla];


let lista=function(){
    let ul=document.getElementById("unli");
    for(fruta of frutas){
        let li=document.createElement("li");
        li.appendChild(document.createTextNode(fruta.toString()));
        ul.appendChild(li);
    }

}

lista();
*/

/*//funcion ECMAS6
function funcionE6(nombre=undefined,apellido=undefined,dni=undefined){
console.log(nombre,apellido,dni);
}
console.log("funcion ECMAS6");
funcionE6("pepe","gonzales",40987123);

//funcion ECMAS5
function funcionE5(nombre,apellido,dni){
    var name=name || undefined;
    var apellido=apellido || undefined;
    var dni=dni || undefined;

    console.log(nombre,apellido,dni);
}
console.log("funcion ECMAS5");
funcionE5("pepe","martinez",43098234);

//concatenacion ECMAS6
let nombre="pepe",
dni =40967345,
frase= `Hola ${nombre} tu dni es ${dni}`;
console.log("concatenacion ECMAS6");
console.log(frase);

//concatenacion ECMAS5
let frase2= "Hola "+ nombre +" tu dni es "+dni;
console.log("concatenacion ECMAS5");
console.log(frase2);


//objeto auto
let auto={
    color:"rojo",
    marca:"ford",
    modelo:"focus",
    imprimir: function() {
    console.log(`Auto ${this.marca} ${this.modelo} de color ${this.color}`);
    }
}
console.log("una forma");
auto.imprimir();

//otro auto
function Auto (marca,modelo,color){
    
    this.marca=marca;
    this.modelo=modelo;
    this.color=color;

    this.arrancar=function() {
        console.log("arrancando...");
    }
}

const ford=new Auto("ford","focus","rojo");
console.log("otra forma");
console.log(ford.marca);
console.log(ford.modelo);
console.log(ford.color);
console.log(ford.arrancar());*/
