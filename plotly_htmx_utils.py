# import json
from markupsafe import escape

def plotlyToJSON(x, htmlStr):
    """
    Convert a Plotly figure into a Plotly.newPlot JSON object
    :param x: Plotly object with .to_json() method e.g Figure
    :param htmlStr: HTML string that will be passed to HTMX for swapping
    :return: data that can be passed to Plotly.newPlot()
    """
    restyleData = x.to_json()
    # print(f'restyleData: {restyleData}')
    obj = {
        'restyle_data': restyleData,
        'markup': str(escape(htmlStr))
    }
    return obj
