// Import data from data.js
const tableData = data;

// Reference HTML table using D3
var tbody = d3.select("tbody")

// Create function to build table
function buildTable(data) {

    // Clear any existing data
    tbody.html("");

    // Loop through each object in data and append row and cells for each value in row
    data.forEach((dataRow) => {

        // Append row to table body
        let row = tbody.append("tr");

        // Loop through each field in dataRow and add each value as table cell
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}