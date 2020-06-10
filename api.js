const userAction = async () => {
  const response = await fetch('https://unto-memories-holds-purchased.trycloudflare.com/hello'); //puerto localhost:4567
  const myJson = await response.json(); //extract JSON from the http response
  showLibros(myJson)
  // do something with myJson
}
function showLibros(jsonObj){
    console.log(jsonObj);
    const myPara1 = document.createElement('p');
   const myPara2 = document.createElement('p');
   const myPara3 = document.createElement('p');
  const myPara4 = document.createElement('p');
   myPara1.textContent = 'Codigo: ' + jsonObj.codigo;
   myPara2.textContent = 'Nombre: ' + jsonObj.nombre;
   myPara3.textContent = 'Autor: ' + jsonObj.autor;
   myPara4.textContent = 'numero Pags: ' + jsonObj.numPag;
   document.body.appendChild(myPara1);
   document.body.appendChild(myPara2);
   document.body.appendChild(myPara3);
   document.body.appendChild(myPara4);
}
