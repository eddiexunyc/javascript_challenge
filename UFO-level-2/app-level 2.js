// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var form = d3.select("#filters");

var date = d3.select("#datetime");
var city = d3.select("#city");
var state = d3.select("#state");
var country = d3.select("#country");
var shape = d3.select("#shape");

//button.on("click", runEnter);
form.on("change",runEnter);

function printTable(tData){
    tbody.html("");
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

    var dateValue = date.property("value");
    var cityValue = city.property("value");
    var stateValue = state.property("value");
    var countryValue = country.property("value");
    var shapeValue = shape.property("value");

    var filterData = "";

    if (dateValue){
        console.log(dateValue);
        tbody.html("");

        filterData = tableData.filter(ufoData => ufoData.datetime === dateValue);
        console.log(filterData);
        printTable(filterData);      
    }
    else if (cityValue){
        console.log(cityValue);
        tbody.html("");

        filterData = tableData.filter(ufoData => ufoData.city === cityValue);
        console.log(filterData);
        printTable(filterData);
    }
    else if(stateValue){
        console.log(stateValue);
        tbody.html("");

        filterData = tableData.filter(ufoData => ufoData.state === stateValue);
        printTable(filterData);
    }
    else if(countryValue){
        console.log(countryValue);
        tbody.html("");

        filterData = tableData.filter(ufoData => ufoData.country === countryValue);
        printTable(filterData);
    }
    else if(shapeValue){
        console.log(shapeValue);
        tbody.html("");

        filterData = tableData.filter(ufoData => ufoData.shape === shapeValue);
        printTable(filterData);
    }

    // d3.event.preventDefault();
    // var filterElement = {};

    // var inputElement = d3.select(this).select("input");
    // var elementValue = inputElement.property("value");
    // var filterID = inputElement.attr("id");
    // if (elementValue){
    //     filterElement[filterID] = elementValue;
    //     console.log(filterElement);
    // }
    // else {
    //     delete filterElement[filterID];
    // }
    
    // tbody.html("");
    // var filterData = tableData;

    // Object.entries(filterElement).forEach(function([key, value]){
    //     filterData = filterData.filter(row => row[key] === value);
    //     console.log(filterData);
    // });
    
    // printTable(filterData);
};

