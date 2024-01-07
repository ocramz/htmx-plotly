# htmx-plotly [![](https://data.jsdelivr.com/v1/package/gh/ocramz/htmx-plotly/badge)](https://www.jsdelivr.com/package/gh/ocramz/htmx-plotly)


An [htmx](https://htmx.org) [extension](https://htmx.org/extensions/) to update ("restyle") [plotly.js](https://plotly.com/javascript/) plots.
This approach is much faster than recreating the whole plot, but since HTMX natively receives HTML from the server, we need this extension to receive JSON with the new plot data instead, and trigger Plotly to re-render.

## Applications

Simple dashboards, data apps, etc.

### Installation

Load the script from CDN into the head of your HTML file:

```html
<script src="https://cdn.jsdelivr.net/gh/ocramz/htmx-plotly@0.1/htmx-plotly.js" integrity="sha256-jPyGR/Ll6Vkxkef+ATkyCoqduaTA6e3r57lvOxlZmxU=" crossorigin="anonymous"></script>
```

### Usage

Add these attributes to a page element: 
* `hx-ext="htmx-plotly"` means this element uses the extension
* `hx-post="/get-data"` the HTTP endpoint that returns the new plot data
* `hx-swap="none"` don't mutate the DOM with the result (we need to call the Plotly API instead)
* `plot-id="my-plot"` ID of the DOM element that hosts the Plotly chart.

Example: here we make an `<a>` text link trigger the chart update:

```html
<a href="#" hx-ext="htmx-plotly" hx-post="/get-data" hx-swap="none" plot-id="my-plot"><h1>UPDATE</h1></a>
```

### Setup

Plotly needs an empty div element as well as a script tag to initialize its plot

```html
<div id="my-plot"></div>
```

```html
<script>
plotDiv = document.getElementById('my-plot');

plotlyTestData = [{x: [0,1,2], y: [5,6,10]}]

Plotly.newPlot( plotDiv, 
    plotlyTestData, 
    {margin: { t: 0 } } 
);
</script>
```


## Tested with

* plotly.js 2.27
* htmx 1.9.10


### Warning

Beta-level software, feel free to file issues on github or even better submit PRs.


(c) 2023- Marco Zocca 