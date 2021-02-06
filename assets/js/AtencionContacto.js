

function Atenciones (texto){
    this.texto=texto
}
    let turnos = new Atenciones("Turnos online");
    let info = new Atenciones("Informacion util");
    let derechos = new Atenciones("Derechos del paciente y su familia")
    let entidad = new Atenciones("Entidades");
    let direc = new Atenciones("Como llegar");
    
    let atenciones = [turnos,info,derechos,entidad,direc];
    
    
    let lista=function(){
        let ul=document.getElementById("unorder-list");
        for(atencion of atenciones){
            let li=document.createElement("li");
            li.className="list-group-item";
            li.appendChild(document.createTextNode(atencion.texto));
            ul.appendChild(li);
        }
    
    }
    
    lista();

////////////////////







