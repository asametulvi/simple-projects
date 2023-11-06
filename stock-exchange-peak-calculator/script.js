function createTable() {

    // call the values that we got
    var price = parseFloat(document.querySelector(".price").value);
    var number = parseFloat(document.querySelector(".number").value);

    // ensure to take valid entries
    if (isNaN(price) || isNaN(number)) {
        alert("Please enter valid values for 'price' and number'.");
        return;
    }

    // print the information
    if (!isNaN(price) || !isNaN(number)) {
        var paragraph = document.createElement("p");
        paragraph.className = "paragraph";

        // Set the text content of the paragraph
        paragraph.textContent = "With the decision taken by BIST in March 2020, the price margin is applied as 10% on all shares.."
    
        // Get the div element with class name "info"
        var infoDiv = document.querySelector(".summary");
    
        // Append the paragraph to the div
        infoDiv.innerHTML = ""
        infoDiv.appendChild(paragraph);
    }

                            /* CREATE FIRST TABLE */
    
    // Create first table
    var table1 = document.createElement("table");
    table1.className = "table-1";

    // Create table header (thead) of first table and add headers
    var thead1 = document.createElement("thead");
    thead1.className = "thead-1"
    var headerRow1 = document.createElement("tr");

    var headers1 = ["Price of a Lot", "Number of Lots", "Total Amount of Lots"];
    headers1.forEach(function (headerText) {
        var th1 = document.createElement("th");
        th1.className = "th-1"
        th1.appendChild(document.createTextNode(headerText));
        headerRow1.appendChild(th1);
    });

    thead1.appendChild(headerRow1);
    table1.appendChild(thead1);

    // Create table body (tbody) of first table and add user-provided data
    var tbody1 = document.createElement("tbody");
    var dataRow1 = document.createElement("tr");
    dataRow1.className = "tr-1";

    var priceCell1 = document.createElement("td");
    priceCell1.className = "td-1";
    var numberCell1 = document.createElement("td");
    numberCell1.className = "td-1";
    var productCell1 = document.createElement("td");
    productCell1.className = "td-1";

    priceCell1.appendChild(document.createTextNode(price));
    numberCell1.appendChild(document.createTextNode(number));
    productCell1.appendChild(document.createTextNode((price * number).toFixed(2)));

    dataRow1.appendChild(priceCell1);
    dataRow1.appendChild(numberCell1);
    dataRow1.appendChild(productCell1);

    tbody1.appendChild(dataRow1);
    table1.appendChild(tbody1);

    // Add the first table to the table-container-1 div
    var tableContainer1 = document.getElementById("table-1");
    tableContainer1.innerHTML = ""; // Clear previous content
    tableContainer1.appendChild(table1);
    
                        /* CREATE SECOND TABLE */

    // Create second table element
    var table2 = document.createElement("table");
    table2.className = "table-2";

    // Create table header (thead) of second table and add headers
    var thead2 = document.createElement("thead");
    thead2.className = "thead-2";
    var headerRow2 = document.createElement("tr");

    var headers2 = ["Peak", "Price", "Balance", "Profit", "Profit (%)"];
    headers2.forEach(function (headerText) {
        if (headerText.endsWith("t")) {
            var th2 = document.createElement("th");
            th2.className = "th-2-profit";
            th2.appendChild(document.createTextNode(headerText));
            headerRow2.appendChild(th2);
        } else {
            var th2 = document.createElement("th");
            th2.className = "th-2";
            th2.appendChild(document.createTextNode(headerText));
            headerRow2.appendChild(th2);
        }
    });

    thead2.appendChild(headerRow2);
    table2.appendChild(thead2);

    // Create table body (tbody) of second table and populate data
    var tbody2 = document.createElement("tbody");
    
    var i = 1
    var currentPrice = price
    var cumulativeProfitPercentage = 0;

    while (i <= 20) {
        var newRow = document.createElement("tr");
        if (i%2 == 0) {
            newRow.className = "tr-2-even";
        } else {
            newRow.className = "tr-2-odd";
        }

        var peakCell = document.createElement("td");
        peakCell.className = "td-2-peak";
        peakCell.appendChild(document.createTextNode(i + ". Peak"));

        var priceCell = document.createElement("td");
        priceCell.className = "td-2-price";
        var currentPrice = currentPrice + (currentPrice/10)
        priceCell.appendChild(document.createTextNode(currentPrice.toFixed(2)));
        
        var balanceCell = document.createElement("td");
        balanceCell.className = "td-2-balance";
        var balance = currentPrice*number;
        balanceCell.appendChild(document.createTextNode(balance.toFixed(2)));

        var profitCell = document.createElement("td");
        profitCell.className = "td-2-profit";
        var profit = balance  - (price*number);
        profitCell.appendChild(document.createTextNode(profit.toFixed(2)));

        var profitPercentageCell = document.createElement("td");
        profitPercentageCell.className = "td-2-percentage";
        cumulativeProfitPercentage = cumulativeProfitPercentage + (10 + cumulativeProfitPercentage/10);
        profitPercentageCell.appendChild(document.createTextNode("%"  +(cumulativeProfitPercentage).toFixed(2)));

        newRow.appendChild(peakCell);
        newRow.appendChild(priceCell);
        newRow.appendChild(balanceCell);
        newRow.appendChild(profitCell);
        newRow.appendChild(profitPercentageCell);

        tbody2.appendChild(newRow);

        i++;
    }

    table2.appendChild(tbody2);

    // Add the second table to the table-container-2 div
    var tableContainer2 = document.getElementById("table-2");
    tableContainer2.innerHTML = ""; // Clear previous content
    tableContainer2.appendChild(table2);
}