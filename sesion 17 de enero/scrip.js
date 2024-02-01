{
    function Persona(nombre,apellido,edad,genero,intereses) {  
       this.nombre = flor;
       this.apellido = castillo;
       this.edad = 25;
       this.genero = femenino;
       this.intereses = leer;
       this.bio = function (){
        alert(this.nombre + '' + this.apellido + ' is ' +
               this.edad + '  de edad. A él le gusto o interesa lo siguiente:' +
               this.intereses[0] + ' y ' + this.intereses[1] + '-');
       };
       this.saludo = function (){
        alert('hola,yo soy '+ this.nombre + '-');
       };
    }
}

var persona1 = new Persona("flor","castilo",25,"femenino","leer");

 persona1.saludo();
