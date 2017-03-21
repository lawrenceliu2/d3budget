var obamaData = [["Individual Income Taxes", 43], ["Payroll Taxes", 42], ["Corporate Income Taxes", 7], ["Excise Taxes", 3], ["Other", 5]];

d3.select("#obama")
    .selectAll("div")
    .data(obamaData)
    .enter().append("div")
    .style("width", function(d) {
	return d[1]*10 + "px"; })
    .text(function(d) {return d[0]; });


var almostTrumpData = [["Individual Income Taxes", 49], ["Payroll Taxes", 33], ["Corporate Income Taxes", 9], ["Excise Taxes", 3], ["Other", 7]];

d3.select("#almostTrump")
    .selectAll("div")
    .data(almostTrumpData)
    .enter().append("div")
    .style("width", function(d) {
	return d[1]*10 + "px"; })
    .text(function(d) {return d[0]; });
