

    class Materia{
        constructor(nombre_m,horario_m,id){
            this.nombre_m=nombre_m;
            this.horario_m=horario_m;
            this.id=id;
        }
        toString=function(){
            return `MATERIAS nombre: ${this.nombre_m} horario: ${this.horario_m}AM id: ${this.id}`;
            }
    }
    const matematica = new Materia("matematica","10:00",237);
    class Profesor{
        constructor(nombre,id,materia){
            this.nombre=nombre;
            this.id=id;
            this.materia=materia;
        }
        toString=function(){
            return `PROFESORES nombre: ${this.nombre} id: ${this.id}  ${this.materia}`;
            }
    }
    const juan = new Profesor("Juan",12,matematica);
    class Alumno{
         constructor(nombre,id,materia){
            this.nombre=nombre;
            this.id=id;
            this.materia=materia;
        }
        toString=function(){
            return `ALUMNOS nombre: ${this.nombre} id: ${this.id} ${this.materia}`;
            }
    }
    const pepe= new Alumno("pepe",90,matematica);

    class Curso {
        constructor(materia,id,profesor){
            this.materia=materia;
            this.id=id;
            this.profesor=profesor;
        }
        toString=function(){
            return `CURSOS materia: ${this.materia} id: ${this.id} profesor: ${this.profesor}`;
            }
        
    } 
    const sextoA =new Curso(matematica,"6A",juan);

        
    let clases = [matematica,juan,pepe,sextoA];
    
    
    let clase=function(){
        let ul=document.getElementById("clase");
        for(clase of clases){
            let li=document.createElement("li");
            li.className="list-group-item text-center";
            li.appendChild(document.createTextNode(clase.toString()));
            ul.appendChild(li);
        }
    
    }
    
    clase();

   