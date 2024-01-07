// adapted from https://unpkg.com/htmx.org@1.9.10/dist/ext/client-side-templates.js 

htmx.defineExtension('htmx-plotly', {
    transformResponse : (text, xhr, elt) => {

        // const dataCurr = window['plotlyTestData']
        // console.log('htmx-plotly: plotlyTestData:' + JSON.stringify(dataCurr) ) // debug

        const dataNew = JSON.parse(text)
        // console.log('htmx-plotly: new data: ' + JSON.stringify(dataNew))
        // window['plotlyTestData'] = dataNew
        Plotly.restyle('my-plot', dataNew);

        return ''

        // var plotIdAttr = htmx.closest(elt, "[plot-id]"); // closest including div element
        // if (plotIdAttr) {
        //     var data = JSON.parse(text);
        //     var plotId = plotIdAttr.getAttribute('plot-id'); // < .. plot-id="?"> value of ?
            
        //     var plotDiv = htmx.find("#" + plotId); // div element pointed at
        //     if (plotDiv) {
        //         // https://plotly.com/javascript/plotlyjs-function-reference/#plotlyrestyle 
        //         Plotly.restyle(plotId, 'y', [data]);

        //     } else {
        //         throw "Cannot find plot id:" + plotDiv
        //     }
        // }

    }
}
)