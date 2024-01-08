import json
from markupsafe import Markup, escape

def plotlyToRestyle(x, htmlStr):
    """
    :param x: a Plotly object with a .to_json() implem, e.g. a Figure
    :param htmlStr: HTML string that will be passed to HTMX for swapping
    :return: data that can be passed to restyle in Plotly.js
    """
    z = x.to_json() # .to_json() is Plotly implem
    def duplicate(w):
        w['x'] = [w['x']]  # the .restyle() nested array bs
        w['y'] = [w['y']]
        return w
    obj = {
        'restyle_data': [duplicate(w) for w in json.loads(z)['data']],
        'markup': str(escape(htmlStr))
    }
    return obj
