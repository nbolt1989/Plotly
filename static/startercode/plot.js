const jsonLink = "/Plotly/static/samples.json";

var jsonData;
d3.json(jsonLink).then((data) => {
    jsonData = data;
    init();
});

function init() {
    var myDropDown = d3.select('#selDataset');
    //console.log(json);
    jsonData.names.forEach((name)=>{
        myDropDown.append('option').text(name).property('value',name);
    })
    optionChanged(jsonData.names[0])
};

function optionChanged(personId){
    barchart(personId);
    bubblechart(personId);
    demographicstuff(personId);
    gaugechart(personId);
};

function demographicstuff(personId){
    var metaData = jsonData.metaData.filter((sample) => sample.id === parseInt(personId))[0];
    var demoHTML = d3.select("#sample-metadata");
    demoHTML.html("");
    Object.entries(metaData).forEach(([key, value])=> demoHTML.append("h4").text(`${key}: ${value}`));
}



