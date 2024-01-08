# 0.3

* the HTMX swap mechanism works once more as expected: this extension now receives an *object* from the server, which
is unpacked into Plotly restyle data and HTML markup.

# 0.2

* use [`plotly_utils.py`](https://cdn.jsdelivr.net/gh/ocramz/htmx-plotly@0.2/plotly_utils.py) to convert between 
Plotly objects and restyle-friendly JSON.
