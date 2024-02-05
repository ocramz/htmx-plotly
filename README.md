# htmx-plotly [![](https://data.jsdelivr.com/v1/package/gh/ocramz/htmx-plotly/badge)](https://www.jsdelivr.com/package/gh/ocramz/htmx-plotly)


An [htmx](https://htmx.org) [extension](https://htmx.org/extensions/) to update ("restyle") [plotly.js](https://plotly.com/javascript/) plots.
This approach is much faster than recreating the whole plot, but since HTMX natively receives HTML from the server, we need this extension to receive JSON with the new plot data instead, and trigger Plotly to re-render.

Possible applications include: simple dashboards, data apps, and similar.

### Installation

First load HTMX and Plotly in the `<head>` of your file:

```html
<script src="https://unpkg.com/htmx.org@1.9.10" integrity="sha384-D1Kt99CQMDuVetoL1lrYwg5t+9QdHe7NLX/SoJYkXDFfX37iInKRy5xLSi8nO7UC" crossorigin="anonymous"></script>
<script src="https://cdn.plot.ly/plotly-2.27.0.min.js" charset="utf-8"></script>
```

And right after, load `htmx-plotly`: 

```html
<script src="https://cdn.jsdelivr.net/gh/ocramz/htmx-plotly@0.4/htmx-plotly.js" integrity="sha256-FgvTlDVvVXn0uoRXC9MLfkxAsu9AOoGMxFRwc7If9Cg=" crossorigin="anonymous"></script>
```

### Usage

Add these attributes to a page element: 
* `hx-ext="htmx-plotly"` means this element uses the extension
* `hx-post="/get-data"` the HTTP endpoint that returns the new plot data
* `plot-id="my-plot"` ID of the DOM element that hosts the Plotly chart.

Example: here we make an `<a>` text link trigger the update of the plot within element `my-plot`:

```html
<a href="#" hx-ext="htmx-plotly" hx-post="/get-data" plot-id="my-plot"><h1>UPDATE</h1></a>
```

NB: As of `v0.3` the HTMX swap mechanism works once more as expected: this extension now receives an *object* from the server, which
is unpacked into Plotly restyle data and HTML markup.

### Setup (frontend)

Plotly charts need an empty div element as well as a script tag for initialization:

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

### Setup (backend)

*Warning:* The JSON data produced by the server must follow the Plotly 
[`newPlot` calling signature](https://plotly.com/javascript/plotlyjs-function-reference/#plotlynewplot):
the object must contain the `data` key (and optionally `layout`, `config` and `frames` keys)

* Since v0.4: use [`plotly_htmx_utils.py`](https://cdn.jsdelivr.net/gh/ocramz/htmx-plotly@0.4/plotly_htmx_utils.py) 
  to convert between Plotly objects and restyle-friendly JSON.:


## Tested with

* plotly.js 2.27
* htmx 1.9.10


### Warning

Beta-level software, feel free to file issues on github or even better submit PRs.


(c) 2023- Marco Zocca 