google.charts.load("current", { packages: ["geochart"] });
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
  var data = google.visualization.arrayToDataTable([
    ["Country", "Presión Fiscal"],
    ["Germany", 47.3],
    ["United States", 25],
    ["Brazil", 33.1],
    ["Canada", 33.8],
    ["France", 47.3],
    ["Spain", 37.3],
    ["Mexico", 16],
    ["China", 22],
    ["Poland", 36.4],
    ["Czech Republic", 35.9],
    ["Norway", 38.8],
    ["Ireland", 20.7],
    ["United Kingdom", 35.2],
    ["Sweden", 43.3],
    ["Iceland", 36],
    ["Estonia", 34.2],
    ["Latvia", 31.8],
    ["Lithuania", 30.9],
    ["Slovakia", 35.1],
    ["Italy", 42.8],
    ["Croatia", 37.1],
    ["Serbia", 38.4],
    ["Romania", 27.1],
    ["Greece", 41.1],
    ["Austria", 42.4],
    ["Hungary", 36.2],
    ["Nicaragua", 25.9],
    ["Guatemala", 13.1],
    ["Belice", 32.4],
    ["Honduras", 21.9],
    ["Argentina", 28.6],
    ["Colombia", 19.7],
    ["Peru", 16.6],
    ["Morocco", 28.4],
    ["Cuba", 42],
    ["Dominican Republic", 13.5],
    ["Bolivia", 24.7],
    ["Chile", 20.9],
    ["Paraguay", 13.9],
    ["Uruguay", 29],
    ["Egipto", 14.2],
    ["Venezuela", 14.4],
    ["Australia", 27.7],
    ["Panama", 14.1],
    ["Costa Rica", 23.6],
  ]);

  var options = {
    colorAxis: { colors: ["#4dec63", "#0d7c41", "#d87533", "#be0a10"] },
    backgroundColor: "white",
    datalessRegionColor: "#F5F5F5",
    defaultColor: "#f5f5f5",
  };

  var chart = new google.visualization.GeoChart(
    document.getElementById("regions_div")
  );

  chart.draw(data, options);
}

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Task", "Recaudación Impuestos"],
    ["IRPF", 94.19],
    ["Sociedades", 21.7],
    ["IVA", 72.22],
    ["Impuestos Especiales", 21.8],
    ["Otros Ingresos", 12.16],
  ]);

  var options = {
    title: "Filscal Presures",
    pieHole: 0.3,
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("donutchart")
  );
  chart.draw(data, options);
}

google.charts.load("current", { packages: ["corechart", "bar"] });
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {
  var data = new google.visualization.DataTable();
  data.addColumn("timeofday", "Time of Year");
  data.addColumn("number", "Motivation Level");

  data.addRows([
    [{ v: [8, 0, 0], f: "Irlanda" }, 109.5],
    [{ v: [9, 0, 0], f: "Noruega" }, 93.2],
    [{ v: [10, 0, 0], f: "Francia" }, 77.72],
    [{ v: [11, 0, 0], f: "Estados Unidos" }, 77.71],
    [{ v: [12, 0, 0], f: "Alemania" }, 74.2],
    [{ v: [13, 0, 0], f: "Reunido Unido" }, 64.3],
    [{ v: [14, 0, 0], f: "Australia" }, 61.3],
    [{ v: [15, 0, 0], f: "Italia" }, 61.3],
    [{ v: [16, 0, 0], f: "España" }, 58.1],
    [{ v: [17, 0, 0], f: "Canadá" }, 57.9],
    [{ v: [18, 0, 0], f: "Unión Europea" }, 57.2],
    [{ v: [19, 0, 0], f: "Japón" }, 46.8],
    [{ v: [20, 0, 0], f: "Portugal" }, 44.6],
    [{ v: [21, 0, 0], f: "Chile" }, 30.2],
    [{ v: [22, 0, 0], f: "México" }, 22.2],
  ]);

  var options = {
    title: "Productividad por horas",
    hAxis: {
      title: "Paises",
      format: "",
      viewWindow: {
        min: [7, 30, 0],
        max: [17, 30, 0],
      },
    },
    vAxis: {
      title: "Rating (scale of 1-10)",
    },
  };

  var chart = new google.visualization.ColumnChart(
    document.getElementById("chart_div")
  );

  chart.draw(data, options);
}

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
    [
      "Month",
      "Bolivia",
      "Ecuador",
      "Madagascar",
      "Papua New Guinea",
      "Rwanda",
      "Average",
    ],
    ["2004/05", 165, 938, 522, 998, 450, 614.6],
    ["2005/06", 135, 1120, 599, 1268, 288, 682],
    ["2006/07", 157, 1167, 587, 807, 397, 623],
    ["2007/08", 139, 1110, 615, 968, 215, 609.4],
    ["2008/09", 136, 691, 629, 1026, 366, 569.6],
  ]);

  var options = {
    title: "Production",
    vAxis: { title: "Cups" },
    hAxis: { title: "Month" },
    seriesType: "bars",
    series: { 5: { type: "line" } },
  };

  var chart = new google.visualization.ComboChart(
    document.getElementById("chart_div2")
  );
  chart.draw(data, options);
  
  
}

google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback(drawChart2);

  function drawChart2() {
    var data = google.visualization.arrayToDataTable([
      ["Director (Year)", "Rotten Tomatoes", "IMDB"],
      ["Alfred Hitchcock (1935)", 8.4, 7.9],
      ["Ralph Thomas (1959)", 6.9, 6.5],
      ["Don Sharp (1978)", 6.5, 6.4],
      ["James Hawes (2008)", 4.4, 6.2],
    ]);

    var options = {
      title: "The decline of the economic'",
      vAxis: { title: "Accumulated Rating" },
      isStacked: true,
    };

    var chart = new google.visualization.SteppedAreaChart(
      document.getElementById("chart_div3")
    );

    chart.draw(data, options);
  }


google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart3);

      function drawChart3() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2013',  1000,      400],
          ['2014',  1170,      460],
          ['2015',  660,       1120],
          ['2016',  1030,      540]
        ]);

        var options = {
          title: 'Economic',
          hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div4'));
        chart.draw(data, options);
      }


