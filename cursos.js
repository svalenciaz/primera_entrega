const opciones = {
  f:{
    id:1,
    nombre:"Física",
    duracion:"6 meses",
    valor:100000
  },
  q:{
    id:2,
    nombre:"Química",
    duracion:"5 meses",
    valor:80000
  },
  b:{
    id:3,
    nombre:"Biología",
    duracion:"4 meses",
    valor:90000
  }
}

let {f,q,b} = opciones;


var texto_1 = "El curso de " + f.nombre + " tiene un id de " + f.id + ", dura " + f.duracion + " y vale " + f.valor;
var texto_2 = "El curso de " + q.nombre + " tiene un id de " + q.id + ", dura " + q.duracion + " y vale " + q.valor;
var texto_3 = "El curso de " + b.nombre + " tiene un id de " + b.id + ", dura " + b.duracion + " y vale " + b.valor;

let curso_f = (callback) => {
  setTimeout (function(){
    callback(texto_1)
  }, 400);
};

let curso_q = (callback) => {
  setTimeout (function(){
    callback(texto_2);
  }, 2400);
};

let curso_b = (callback) => {
  setTimeout (function(){
    callback(texto_3);
  }, 4400);
};


curso_f (function(texto_1){
    console.log (texto_1);
  }
  );

curso_b (function(texto_3){
    console.log (texto_3);
  }
  );

curso_q (function(texto_2){
    console.log (texto_2);
  }
  );



  const datos = {
    id:{
      demand:true,
      alias:"i"
    },
    name:{
      demand:true,
      alias:"n"
    },
    cedula:{
      demand:true,
      alias:"c"
    }
  }

const argv = require("yargs")
            .command("inscribir","inscribirse",datos)
            .argv;


console.log(argv);

const fs = require ("fs");

let crearArchivo = (argv) => {
  var texto_a = "Según su ID, puedes mirar en cual quedaste inscrito: \n" + "1- "+ texto_1 + "\n" + "2- "+ texto_2 + "\n" + "3- "+ texto_3;
  var texto_b = "\n\nSi tu ID no corresponde con un curso...\n¡ALERTA! Pusiste algo mal :/"
  var texto = "El nombre del estudiante es " + argv.name + "\nSu cédula es: " + argv.cedula + "\nY se inscribió al curso: " + argv.id + "\n"+ "\n" + texto_a + texto_b;

  fs.writeFile("info.txt", texto, (err) => {

    if (err) throw (err);
  });
}

crearArchivo(argv);
