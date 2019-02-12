function traffic_data(traffic_levels) {
    var ctx = document.getElementById("traffic-chart");
    var timeFormat = 'DD/MM/YYYY';
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                data: traffic_levels,
                borderWidth: 1,
                borderColor: '#209cee',
                backgroundColor: 'rgba(32,156,238,0.4)'
            }]
        },
        options: {
            title: {
                display: false,
                text: "Last 60 days of traffic"
            },
            responsive: true,
            scales:{
                xAxes: [{
                    type: "time",
                    time: {
                        parser: timeFormat,
                        tooltipFormat: 'll'
                    },
                    scaleLabel: {
                        display: false,
                        labelString: 'Date'
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Requests/day (in millions)'
                    },
                    ticks: {
                        callback: function(label, index, labels) {
                            return label/1000000+'m';
                        }
                    }
                }]
            },
            legend: {
                display: false
            },
            tooltips: {
                "mode": "index",
                "backgroundColor": "#9AA7B4",
                "intersect": false,
                "cornerRadius": 3,
                "footerFontStyle": "normal",
                "titleSpacing": 0,
                "bodySpacing": 0,
                "footerSpacing": 0,
                "titleMarginBottom": 5,
                "footerMarginTop": 0,
                "yPadding": 5,
                "caretPadding": 10,
                "caretSize": 0
            }
        }
    });
}
