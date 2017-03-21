var obamaData = [["Individual Income Taxes", 43], ["Payroll Taxes", 42], ["Corporate Income Taxes", 7], ["Excise Taxes", 3], ["Other", 5]];

d3.select(".chart")
    .selectAll("div")
    .data(obamaData)
    .enter().append("div")
    .style("width", function(d) {
	return d[1]*10 + "px"; })
    .text(function(d) {return d[0]; });
