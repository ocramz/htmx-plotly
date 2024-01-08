// adapted from https://unpkg.com/htmx.org@1.9.10/dist/ext/client-side-templates.js 

htmx.defineExtension('htmx-plotly', {
    transformResponse : (text, xhr, elt) => {

        const verbose = true
        const pedantic = false

        var plotEl = htmx.closest(elt, "[plot-id]"); // closest including div element
        if (plotEl) {
            const dataNew = JSON.parse(text)
            n = dataNew.length
            const plotId = plotEl.getAttribute('plot-id');  // lookup value of ? in < .. plot-id="?">
            var plotDiv = htmx.find("#" + plotId); // div element pointed at
            if (plotDiv) {
                // https://plotly.com/javascript/plotlyjs-function-reference/#plotlyrestyle
                    for (const [i, d] of dataNew.entries()) {
                        if (verbose) {console.warn('Restyling trace ' + i + ' of ' + n)}
                        Plotly.restyle(plotId, d)
                    }

                  // // validate against a layout (TBD)
                if (pedantic) {
                    Plotly.validate(dataNew, {}).forEach((o) => console.warn('Plotly.validate: ' + o.msg))
                }

            } else {
                console.error("Cannot find plot id: " + plotId)
            }
        } else {
            console.log('No plot-id attribute defined')
        }

        return ''

    }
}
)