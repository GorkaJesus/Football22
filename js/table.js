var table = [
  { producto: "Camiseta mbappe", precio: 23 },
  { producto: "Camiseta messi", precio: 30 },
  { producto: "Camiseta cr7", precio: 43 },
  { producto: "Camiseta moleiro", precio: 50 },
  { producto: "Camiseta maradona", precio: 37 },
];

window.onload = loadEvents;

function loadEvents() {
  document.getElementById("show-table").addEventListener("click", showTable, false);
  document.getElementById("new-product").addEventListener("submit", newProduct, false);
}

function showTable() {
  var bodyTable = document.getElementById("table-elements");
  var allTable = "";

  // Loop through table items and create rows
  for (var i = 0; i < table.length; i++) {
    allTable += "<tr><td>" + table[i].producto + "</td><td>" + table[i].precio + "</td></tr>";
  }

  bodyTable.innerHTML = allTable;
}

function newProduct(event) {
  event.preventDefault();
  var producto = document.getElementById("product").value;
  var precio = document.getElementById("price").value;

  var newProduct = { producto: producto, precio: precio };
  table.push(newProduct);
}
