const userAction = async () => {
    const response = await fetch('  https://defendant-med-expand-stored.trycloudflare.com/libro'); //puerto localhost:4567
    const myJson = await response.json(); //extract JSON from the http response
    showLibros(myJson);

    // do something with myJson
}
const buscar = async () => {
    var text = document.getElementById('buscar').value;
    const response = await fetch('  https://defendant-med-expand-stored.trycloudflare.com/libro/'+text); //puerto localhost:4567
    const myJson = await response.json(); //extract JSON from the http response
    var obj = {
    libros:[myJson]
    };
    showLibros(obj);
console.log(JSON.stringify( obj));
    // do something with myJson
}

function showLibros(j) {
    console.log(JSON.stringify( j));
    /*const myPara1 = document.getElementById('para1');
   const myPara2 = document.getElementById('para2');
   const myPara3 = document.getElementById('para3');
  const myPara4 = document.getElementById('para4');*/
  var jsonObj = j.libros
  console.log(jsonObj.length);
  var col = [];
      for (var i = 0; i < jsonObj.length; i++) {
          for (var key in jsonObj[i]) {
              if (col.indexOf(key) === -1) {
                  col.push(key);
              }
          }
      }

      // CREATE DYNAMIC TABLE.
      var table = document.createElement("table");

      // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

      var tr = table.insertRow(-1);                   // TABLE ROW.

      for (var i = 0; i < col.length; i++) {
          var th = document.createElement("th");      // TABLE HEADER.
          th.innerHTML = col[i];
          tr.appendChild(th);
      }

      // ADD JSON DATA TO THE TABLE AS ROWS.
      for (var i = 0; i < jsonObj.length; i++) {

          tr = table.insertRow(-1);

          for (var j = 0; j < col.length; j++) {
              var tabCell = tr.insertCell(-1);
              tabCell.innerHTML = jsonObj[i][col[j]];
          }
      }

      // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
      var divContainer = document.getElementById("showData");
      divContainer.innerHTML = "";
      divContainer.appendChild(table);
    /*const myPara1 = document.createElement('p');
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
   document.body.appendChild(myPara4);*/
}
