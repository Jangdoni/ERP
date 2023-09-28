// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
//var ctx = document.getElementById("myPieChart");
//var myPieChart = new Chart(ctx, {
//  type: 'pie',
//  data: {
//    labels: ["Blue", "Red", "Yellow", "Green"],
 //   datasets: [{
 //     data: [12.21, 15.58, 11.25, 8.32],
 //     backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
 //   }],
 // },
//});
  
  var options = {
  chart: {
    height: 350,
    type: "area",
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: "smooth"
  },
  series: [{
    name: "series1",
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: "series2",
    data: [11, 32, 45, 32, 34, 52, 41]
  }],
  xaxis: {
    type: "datetime",
    categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00",
      "2018-09-19T05:30:00", "2018-09-19T06:30:00"
    ],
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm"
    },
  }
}
var chart = new ApexCharts(
  document.querySelector("#apexcharts-area"),
  options
);
chart.render();