//ARRAY PARA LOS NOMBRES DE LOS
let cars = ["bmw","volvo","saab","ford","fiat","audi"];
const btnPush = document.getElementById("btn_push");
const btnPop = document.getElementById("btn_pop");
const btnSlice = document.getElementById("btn_slice");
const btnShift = document.getElementById("btn_shift");



//obtener elementos de html

//función para cargar las imagenes
function cargarLogos()   {
  let text = "";

  for (let car of cars)  {
    text += `<img src="img/${car}.png" alt="${car}logo" width="100"/>`;
  }
  document.getElementById("demo").innerHTML = text;

}


//FUNCIONES PARA LOS BOTONES
function functionPush(e){
        cars.push('lexus');
        cargarLogos();
}
function funoPop(e){
  cars.pop();
  cargarLogos();
}
function



 funcionSlice(e){
  let begin = document.getElementById("begin").evalue;
  let end = document.getElementById("end").evalue;

  if (begin != "" && end != "") {
     cars = cars.slice(begin,end);
     cargarLogos();
  }
}



//ASIGNAMOS BOTONES
cargarLogos();
btnPush.onclick = functionPush;
btnPop.onclick = funtionPop;
btnShift.onclick = functionshift;
btnUnshift.onclik = functionUnshift;
btnSlice.onclik = funcionSlice;
