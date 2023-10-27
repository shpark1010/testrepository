function fetchGridData() {
  $.ajax({
    url: '/api/grid-data', // Endpoint to fetch data from the server
    method: 'GET',
    success: function (data) {
      // Assuming 'data' is an array of objects representing rows in the grid
      // Populate your grid columns with the data
      // For simplicity, let's assume a grid with a 'name' and 'age' column
      data.forEach((item) => {
        const name = item.name;
        const age = item.age;
        // Populate your grid with the 'name' and 'age'
        // ...
      });
    },
    error: function (error) {
      console.error('Error fetching grid data', error);
    },
  });
}

// Call this function to fetch and populate grid data
fetchGridData();
