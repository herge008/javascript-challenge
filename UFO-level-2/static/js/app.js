// from data.js
var tableData = data;
var filterObjects = {
    datetime: "",
    city: "",
    state: "",
    country: "",
    shape: ""
  };
var filterData = data;

// tbody is in html code
var tbody = d3.select("tbody")

// reference input field
var input = document.getElementById("ufoFilterParams");

// YOUR CODE HERE!

function executeFilter(ufoRecord) {
  return (
    (filterObjects["datetime"] == ufoRecord.datetime || filterObjects["datetime"] == "") &&
    (filterObjects["city"] == ufoRecord.city || filterObjects["city"] == "") &&
    (filterObjects["state"] == ufoRecord.state || filterObjects["state"] == "") &&
    (filterObjects["country"] == ufoRecord.country || filterObjects["country"] == "") &&
    (filterObjects["shape"] == ufoRecord.shape || filterObjects["shape"] == "")
  );
}

function filterResult() {
  tbody.html("");
  filterData.forEach(ufoSighting => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(function([key, value]) {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};

d3.select("#filter-btn").on("click", () => {
  filterObjects["datetime"] = d3.select("#datetime").node().value;
  filterObjects["city"] = d3.select("#city").node().value;
  filterObjects["state"] = d3.select("#state").node().value;
  filterObjects["country"] = d3.select("#country").node().value;
  filterObjects["shape"] = d3.select("#shape").node().value;
  filterData = tableData.filter(executeFilter);
  filterResult();
});

input.addEventListener("submit", function(event) {
  event.preventDefault();
  document.getElementById("filter-btn").click();
});

filterResult();