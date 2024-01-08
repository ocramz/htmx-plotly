// adapted from https://unpkg.com/htmx.org@1.9.10/dist/ext/client-side-templates.js 

function htmlUnescape(input) {
  // // HTML-in-JSON should be escaped on the wire, and decoded safely here with DOMParser to avoid XSS
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent
}

htmx.defineExtension('htmx-plotly', {
    transformResponse : (text, xhr, elt) => {

        const verbose = true
        const pedantic = false

        var plotEl = htmx.closest(elt, "[plot-id]"); // closest including div element
        const payload = JSON.parse(text)
        const dataNew = payload['restyle_data']
        n = dataNew.length
        const markup = htmlUnescape(payload['markup'])  // to be passed back to HTMX for swapping
        if (plotEl) {
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

        return markup

    }
}
)