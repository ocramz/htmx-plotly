import plotly.express as px

def irisScatter1():
    """
    :return: px.Figure in JSON
    """
    # Load data, make figure.
    df = px.data.iris()
    fig = px.scatter(df, x="sepal_width", y="sepal_length")
    trace = next(fig.select_traces())

    # Set default point styles.
    n = len(trace.x)
    color = [trace.marker.color] * n
    size = [8] * n
    symbol = [trace.marker.symbol] * n

    # Modify kth point.
    k = 136
    color[k] = "red"
    size[k] = 15
    symbol[k] = "star"

    # Update trace.
    # trace.marker.color = color
    # trace.marker.size = size
    # trace.marker.symbol = symbol

    # Alternatively, call:
    fig.update_traces(marker=dict(color=color, size=size, symbol=symbol))

    return fig.to_json()
