
from flask import Flask, request, send_file, make_response
import json
from markupsafe import Markup, escape
import jsonpickle
from plotly_utils import plotlyToRestyle

from plotly_compound_scatter_test import irisScatter1

app = Flask(__name__, static_folder='')

@app.get('/')
def index():
    return send_file('index.html')

@app.post('/get-data')
def getData():
    # name = request.args.get("name", "World")
    # return f'Hello, {escape(name)}!'
    x = irisScatter1()

    # z = x.to_json() # .to_json() is Plotly implem
    # w = json.loads(z)['data'][0]  # parse back into dict and extract data
    # w['x'] = [w['x']]  # the .restyle() nested array bs
    # w['y'] = [w['y']]
    w = plotlyToRestyle(x)
    # print(f'.restyle data: {w}')
    return make_response(w)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=3000, debug=True)




    # w = json.loads(z)['data'][0]  # parse back into dict and extract data

    # return w