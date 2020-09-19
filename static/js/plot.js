//create a json path link
const jsonPath = "/static/data/samples.json";

//create a variable for the jsonData
var jsonData;

d3.json(jsonPath).then((data) => {
    jsonData = data;
    //initiatlize the function
    init();
});

function init() {
    var myDropDown = d3.select('#selDataset');
    jsonData.names.forEach((name) => {
        myDropDown.append('option').text(name).property('value', name);
    });
    optionChanged(jsonData.names[0])
};

function optionChanged(personId) {
    //create barchart, bubblechart, demo stuff, and gauge chart
    barchart(personId);
    bubblechart(personId);
    demographicstuff(personId);
    gaugechart(personId);
};
//create a function for the demographic stuff
function demographicstuff(personId) {
    var metaData = jsonData.metadata.filter((x) => x.id === parseInt(personId))[0];
    //console.log(metaData)
    var demoHTML = d3.select("#sample-metadata");
    demoHTML.html("");
    Object.entries(metaData).forEach(([key, value]) =>
        demoHTML.append("h6").text(`${key}: ${value}`));
};

// //create a function for the barChart
function barchart(personId) {
    //create a variable for the sample data 
    var sampData = jsonData.samples.filter(obj => obj.id.toString() === personId)[0];
    //create a variable for the top ten OTUs
    var topTenOtu = sampData.otu_ids.slice(0, 13).reverse();
    var otuIDs = topTenOtu.map(x => "OTU " + x);
    var sampVals = sampData.sample_values.slice(0, 10).reverse();
    var sampLabels = sampData.otu_labels.slice(0, 10).reverse();
    //build trace for bar chart
    var trace = {
        type: "bar",
        x: sampVals,
        y: otuIDs,
        text: sampLabels,
        orientation: 'h'
    };

    var layout = {
        title: "<b>Top 10 OTUs found",
        xaxis: {
            title: "Sample Values"
        },
        yaxis: {
            title: "OTU IDs"
        }
    }
    //create my bar data variable for the trace
    var barData = [trace];
    //plot it
    Plotly.newPlot('bar', barData, layout)
};

function bubblechart(personId) {
    //create a variable for the sample data 
    var sampData = jsonData.samples.filter(obj => obj.id.toString() === personId)[0];
    //create a variable for the sample data 
    var otuIDs = sampData.otu_ids
    var sampVals = sampData.sample_values
    var sampLabels = sampData.otu_labels
    //trace
    var trace1 = {
        x: otuIDs,
        y: sampVals,
        text: sampLabels,
        mode: 'markers',
        marker: {
            color: otuIDs,
            size: sampVals,
            colorscale: 'Warm'
        }
    };
    //grabbed the editing for the layout here: https://plotly.com/javascript/bubble-charts/#marker-size-and-color-on-bubble-charts
    var bubbledata = [trace1];

    var layout = {
        title: 'OTU IDs and Sample Values',
        xaxis: {
            title: "OTU IDs"},
        yaxis: {
            title: "Sample Values"},
        showlegend: false,
        height: 600,
        width: 1200
    };
    //plot my bubble chart
    Plotly.newPlot('bubble', bubbledata, layout);

};

function gaugechart(personId) {
    //create a metaData object like above 
    var metaData = jsonData.metadata.filter((x) => x.id === parseInt(personId))[0];
    //console.log(metaData) -- doing this to make sure it prints out what I need
    //now grab washing frequency from metaData
    var washFreq = metaData.wfreq;
    //create my data for the gauge chart
    //grabbed my editing here: https://plotly.com/javascript/gauge-charts/
    var data = [
        {
            domain: { x: [0, 1], y: [0, 1] },
            value: washFreq,
            title: { text: "Belly Button Washing Frequency" },
            type: "indicator",
            mode: "gauge+number",
            gauge: {
                axis: {tickwidth: 1, tickcolor: "black" },
                bar: { color: "darkgrey" },
                bgcolor: "white",
                borderwidth: 1,
                bordercolor: "gray",
                steps: [
                    { range: [0, 1], color: "white" },
                    { range: [1,3], color: "lightgreen"},
                    { range: [3, 100], color: "green" }]
                    },
                }
    ];
    // create my layout
    var layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
    // plot my gauge chart; the id is gauge in my html
    Plotly.newPlot('gauge', data, layout);
}

