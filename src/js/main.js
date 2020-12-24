let columnsObj = ['ID', 'Name' ,'Age', 'email',  ];
let rowsObj = [
  {id: 1 ,  name: "La verdad duele",       age: 24,  email: "algo@gmail.com"  },
  {id: 1 ,  name: "Diamantes de sangre",   age: 20,  email: "algo@gmail.com"  },
  {id: 1 ,  name: "Agora",                 age: 29,  email: "algo@gmail.com"  },
];
const table = document.getElementById('principal-table')
const tablaTest = document.getElementById('table-test')
const changeOnTable = () => {
  buildTable(columnsObj, rowsObj, table);
}
if(columnsObj[0]){
    tablaTest.classList.add('invisible')
}
changeOnTable()
function buildTable(columns, rows, container) {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    let theadTr = document.createElement('tr');
    // ubicar la cabecera y la primera fila en la tabla PD: sino se ubican no aparecen XD
    thead.appendChild(theadTr);
    table.appendChild(thead);
    // crear una por una de las columnas de la primera fila
    for (let i = 0; i < columns.length; i++) {
      let theadTh = document.createElement('th');
      theadTh.innerHTML = columns[i];
      theadTr.appendChild(theadTh);
    }
    
    
    // para crear los datos y ordenarlos
    for (j = 0; j < rows.length; j++) {
      let tbodyTr = document.createElement('tr');
      for (k = 0; k < columns.length; k++) {
        let tbodyTd = document.createElement('td');
        tbodyTd.innerHTML = rows[j][columns[k].toLowerCase()];
        tbodyTr.appendChild(tbodyTd);
      }
      tbody.appendChild(tbodyTr);
    }
    table.appendChild(tbody);
  
    container.appendChild(table);
}
  
  
  

