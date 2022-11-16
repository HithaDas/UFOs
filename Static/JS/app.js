// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");
// Simple JavaScript console.log statement
// function printHello() {
   //  console.log("Hello there!");
 // }

 // Build table and pass data as the argument 
  function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
);
    });
  }

// Build a function to filter by date
  function handleClick() {
    // Testing console.log("hello");
    // Grab the datetime value from the filter
    let date = d3.select("#enterdate").property("value").toString().split("-");
    var date1 = date[1];
    // Testing date through console.log(date1);
    if (date1.substring(0,1) == "0") {
      var dmth = date1.substring(1,2);
    }
      else { 
      var dmth = date1;
    }
    var date2 = date[2];
    if (date2.substring(0,1) == "0") {
      var dday = date2.substring(1,2);
    }
      else { 
      var dday = date2;
    }
    var dateString = dmth + "/" + dday + "/" + date[0];

    console.log(dateString);

    let filteredData = tableData;
  console.log(filteredData);
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime == dateString);
    };
    console.log(filteredData);
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  };

  function handleClick2() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    }
  
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  };
  
  // Attach an event to listen for the form button
  d3.selectAll("#filter-btn").on("click", handleClick);
  
  // Build the table when the page loads
  buildTable(tableData);