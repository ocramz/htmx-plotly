import json

def plotlyToRestyle(x):
    """
    :param x: a Plotly object with a .to_json() implem, e.g. a Figure
    :return: data that can be passed to restyle in Plotly.js
    """
    z = x.to_json() # .to_json() is Plotly implem
    def duplicate(w):
        w['x'] = [w['x']]  # the .restyle() nested array bs
        w['y'] = [w['y']]
        return w
    return [duplicate(w) for w in json.loads(z)['data']]