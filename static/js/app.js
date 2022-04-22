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

// Create variable to keep track of all filters as an object
var filters = {};

// Create function to update filters 
function updateFilters() {

    // Save element that was changed as variable
    let changedElement = d3.select(this);

    // Save value that was changed as variable
    let elementValue = changedElement.property("value").toLowerCase();
    console.log(elementValue);

    // Save id of filter that was changed as variable
    let filterId = changedElement.attr("id");
    console.log(filterId);
  
    // If filter value was entered, add filterId and value to filters list
    if (elementValue) {
      filters[filterId] = elementValue;
    }
    // If not, clear filter from filters object
    else {
      delete filters[filterId];
    }
    
    console.log(filters);

    // Call function to apply all filters and rebuild table
    filterTable();
  }
  
  // Create function to filter table when data is entered
  function filterTable() {
  
    // Set filtered data to tableData
    let filteredData = tableData;
  
    // Loop through all filters and keep any data that matches filter values 
    Object.entries(filters).forEach(([key, value]) => {
      filteredData = filteredData.filter(row => row[key] === value); 
    });
    
    console.log(filteredData);
   
    // Rebuild table using filtered data
    buildTable(filteredData);
  }
  
  // Attach event to listen for changes to each filter
  d3.selectAll("input").on("change", updateFilters);
  
  // Build table when page loads
  buildTable(tableData);
