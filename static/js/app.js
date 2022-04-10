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
};

// Create function to filter data
function handleClick() {

    // Get datetime value from filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // Check if date was entered and filter data using that date
    if (date) {

        // Apply filter to table data to keep only rows where datetime value matches filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild table using filtered data
    // @NOTE: If no date was entered, then filteredData will be original tableData
    buildTable(filteredData);
};

// Attach event to listen for filter button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build table when page loads
buildTable(tableData);