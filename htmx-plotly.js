// adapted from https://unpkg.com/htmx.org@1.9.10/dist/ext/client-side-templates.js 

htmx.defineExtension('htmx-plotly', {
    transformResponse : (text, xhr, elt) => {

        var plotEl = htmx.closest(elt, "[plot-id]"); // closest including div element
        if (plotEl) {
            const dataNew = JSON.parse(text)
            const plotId = plotEl.getAttribute('plot-id');  // lookup value of ? in < .. plot-id="?">
            var plotDiv = htmx.find("#" + plotId); // div element pointed at
            if (plotDiv) {
                // https://plotly.com/javascript/plotlyjs-function-reference/#plotlyrestyle 
                Plotly.restyle(plotId, dataNew)
            } else {
                throw "Cannot find plot id: " + plotId
            }
        } else {
            console.log('No plot-id attribute defined')
        }

        return ''

    }
}
)