function plotMultiLineChart(divID,data) {
/*    var data = [
        {
            "symbol": "Planned",
            "date": "Feb 2000",
            "price": "36.35"
    },
        {
            "symbol": "Planned",
            "date": "Mar 2003",
            "price": "43.22"
    },
        {
            "symbol": "Planned",
            "date": "Apr 2005",
            "price": "38.37"
    },
        {
            "symbol": "Planned",
            "date": "May 2006",
            "price": "25.45"
    },
        {
            "symbol": "Planned",
            "date": "Jun 2007",
            "price": "32.54"
    },
        {
            "symbol": "Planned",
            "date": "Mar 2010",
            "price": "28.8"
    },
        {
            "symbol": "Actual",
            "date": "Jan 2000",
            "price": "25.35"
    },
        {
            "symbol": "Actual",
            "date": "Feb 2003",
            "price": "35.87"
    },
        {
            "symbol": "Actual",
            "date": "Mar 2005",
            "price": "30"
    },
        {
            "symbol": "Actual",
            "date": "Apr 2006",
            "price": "25.19"
    },
        {
            "symbol": "Actual",
            "date": "May 2007",
            "price": "22.31"
    },
        {
            "symbol": "Actual",
            "date": "Jun 2010",
            "price": "25.31"
    }
];*/

    // Set the dimensions of the canvas / graph
    var margin = {
            top: 30,
            right: 20,
            bottom: 70,
            left: 50
        },
        width = 410 - margin.left - margin.right,
        height = 300 - margin.top - margin.bottom;


    // Parse the date / time
    var parseDate = d3.time.format("%b %Y").parse;

    // Set the ranges
    var x = d3.time.scale().range([0, width]);
    var y = d3.scale.linear().range([height, 0]);

    // Define the axes
    var xAxis = d3.svg.axis().scale(x)
        .orient("bottom").ticks(5);

    var yAxis = d3.svg.axis().scale(y)
        .orient("left").ticks(5);

    // Define the line
    var priceline = d3.svg.line()
        .x(function (d) {
            return x(d.date);
        })
        .y(function (d) {
            return y(d.price);
        });

    // Adds the svg canvas
    var svg = d3.select("#" + divID)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    /*//Draw a line
    svg.append("line") // attach a line
        .style("stroke", "black") // colour the line
        .attr("x1", 100) // x position of the first end of the line
        .attr("y1", 50) // y position of the first end of the line
        .attr("x2", 300) // x position of the second end of the line
        .attr("y2", 150); // y position of the second end of the line
    */
    // Get the data
    console.log(JSON.stringify(data));
    data.forEach(function (d) {
        d.date = parseDate(d.date);
        d.price = +d.price;
    });

    // Scale the range of the data
    x.domain(d3.extent(data, function (d) {
        return d.date;
    }));
    y.domain([0, d3.max(data, function (d) {
        return d.price;
    })]);  

    // Nest the entries by symbol
    var dataNest = d3.nest()
        .key(function (d) {
            return d.symbol;
        })
        .entries(data);

    var color = d3.scale.category10(); // set the colour scale

    legendSpace = width / dataNest.length; // spacing for legend

    // Loop through each symbol / key
    dataNest.forEach(function (d, i) {

        svg.append("path")
            .attr("class", "line")
            .style("stroke", function () { // Add the colours dynamically
                return d.color = color(d.key);
            })
            .attr("d", priceline(d.values));

        // Add the Legend
        svg.append("text")
            .attr("x", (legendSpace / 2) + i * legendSpace) // spacing
            .attr("y", height + (margin.bottom / 2) + 5)
            .attr("class", "legend") // style the legend
            .style("fill", function () { // dynamic colours
                return d.color = color(d.key);
            })
            .text(d.key);

    });

    // Add the X Axis
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    // Add the Y Axis
    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);
}