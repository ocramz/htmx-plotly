
from flask import Flask, request, send_file
from markupsafe import Markup, escape

from plotly_compound_scatter_test import irisScatter1

app = Flask(__name__, static_folder='')

@app.get('/')
def index():
    return send_file('index.html')

@app.post('/get-data')
def hello():
    # name = request.args.get("name", "World")
    # return f'Hello, {escape(name)}!'
    figJSON = irisScatter1()
    return figJSON

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=3000, debug=True)