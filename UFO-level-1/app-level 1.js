// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var form = d3.select("#filters");

button.on("click", runEnter);
form.on("change",runEnter);

function printTable(tData){
    tData.forEach(function(ufoData) {
        var row = tbody.append("tr");
        Object.entries(ufoData).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

printTable(tableData);

function runEnter(){
    d3.event.preventDefault();
    tbody.html("");

    var inputDate = d3.select("#datetime");
    var dateValue = inputDate.property("value");
    console.log(dateValue);
    var filterData = tableData.filter(ufoDate => ufoDate.datetime === dateValue);
    console.log(filterData);

    printTable(filterData);
};