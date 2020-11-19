// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var form = d3.select(".filters");

//button.on("click", runEnter);
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
    var filterElement = {};

    var inputElement = d3.select(this).select("input");
    var elementValue = inputElement.property("value");
    var filterID = inputElement.attr("id");
    if (elementValue){
        filterElement[filterID] = elementValue;
        console.log(filterElement);
    }
    else {
        delete filterElement[filterID];
    }
    
    tbody.html("");
    var filterData = tableData;

    Object.entries(filterElement).forEach(function([key, value]){
        filterData = filterData.filter(row => row[key] === value);
        console.log(filterData);
    });
    
    printTable(filterData);
};

