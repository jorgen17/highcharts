Highcharts.chart('container', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Andel som har brukt ulike medier en gjenomsnittsdag (9-79 år)'
    },
    subtitle: {
        text: 'Source: <a href="https://www.ssb.no/medie">ssb.no</a>'
    },
    xAxis: {
        categories: ['Papiravis', 'Fjernsyn', 'Radio', 'Lydmedier', 'Ukeblad', 'Bøker', 'Tidsskrift', 'Tegneserieblad', '*Serier/film/video', 'Internett'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Mediebruk (percent)',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' percent'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -100,
        y: 165,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#ffffff',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'År 1991',
        data: [84, 81, 71, 43, 21, 24, 18, 11, 10, 0]
    }, {
        name: 'År 2000',
        data: [77, 82, 57, 50, 17, 20, 14, 9, 10, 27]
    }, {
        name: 'År 2018',
        data: [30, 60, 50, 51, 5, 24, 6, 3, 37, 91]
    }, {
        name: 'År 2019',
        data: [27, 48, 48, 55, 4, 25, 7, 3, 43, 90]
    }]
});

//Highcharts brukt https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/demo/bar-basic
//Statistik kilde https://www.ssb.no/medie