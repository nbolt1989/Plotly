# Javascript - Plotly

![image of bacteria](https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/nutraingredients.com/article/2019/10/04/gut-health-affected-by-teams-of-bacteria-not-individual-species/10214854-1-eng-GB/Gut-health-affected-by-teams-of-bacteria-not-individual-species.jpg)


### Assignment Overview:

Here you will navigate an interactive dashboard to explore a Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels.
The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

### Steps: 
* Use the D3 library to read in samples.json.

* Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
    Use sample_values as the values for the bar chart.
    Use otu_ids as the labels for the bar chart.
    Use otu_labels as the hovertext for the chart.
    
* Create a bubble chart that displays each sample.
    Use otu_ids for the x values.
    Use sample_values for the y values.
    Use sample_values for the marker size.
    Use otu_ids for the marker colors.
    Use otu_labels for the text values.
    
* Display the sample metadata, i.e., an individual's demographic information.
* Display each key-value pair from the metadata JSON object somewhere on the page.
* Update all of the plots any time that a new sample is selected.

### Advanced Challenges (Optional)

The following task is advanced and therefore optional.
* Adapt the Gauge Chart from https://plot.ly/javascript/gauge-charts/ to plot the weekly washing frequency of the individual.
* You will need to modify the example gauge code to account for values ranging from 0 through 9.
* Update the chart whenever a new sample is selected.

    
### Deployment
* Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo.
* Ensure your repository has regular commits (i.e. 20+ commits) and a thorough README.md file

#### Deploy from here: 
https://nbolt1989.github.io/Plotly/
