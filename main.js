// Chart1 Options
const options = {
  chart: {
    height: 350,
    width: '100%',
    type: 'line',
    background: '#f4f4f4',
    foreColor: '#333',

    toolbar: {
      show: true,
      tools: {
        download: true,
        selection: true,
        zoom: true,
        zoomin: true,
        zoomout: true,
        pan: true,
        reset: true
      },
      autoSelected: 'zoom'
    },
  },
  series: [{
    name: 'Population',
    data: [788589, 624125, 543332, 469777, 420913, 396487, 261638, 215353, 170543]
  }],
  xaxis: {
    categories: ['Kota Denpasar', 'Buleleng', 'Badung', 'Gianyar', 'Tabanan', 'Karang Asem', 'Jembrana', 'Bangli', 'Klungkung']
  },
  dataLabels: {
    enabled: false
  },
  title: {
    text: 'Largest Bali Regency By Population',
    align: 'center',
    margin: 20,
    offsetY: 20,
    style: {
      fontSize: '25px'
    }
  },


  theme: {
    palette: 'palette7',

  },

  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: "horizontal",
      shadeIntensity: 0.5,
      gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 100]
    }
  }

};

const options2 = {
  chart: {
    width: '100%',
    height: 250,
    type: 'pie',
    background: '#f4f4f4',
    foreColor: '#333',
  },
  series: [1961348, 1929409],
  labels: ['Male','Female'],

  theme: {
    palette: 'palette7',

  },
  title: {
    text: 'Gender',
    align: 'left',
    margin: 0,
    offsetY: 2,
    offsetX: 5,
    style: {
      fontSize: '25px'
    }}
};

const options3 = {
  chart: {
    width: '100%',
    height: 250,
    type: 'pie',
    background: '#f4f4f4',
    foreColor: '#333',
  },
  series: [1007223, 2626631, 256900],
  labels: ['0-14 years','15-59 years','65+ years'],

  theme: {
    palette: 'palette7',

  },
  title: {
    text: 'Age Group',
    align: 'left',
    margin: 0,
    offsetY: 2,
    offsetX: 5,
    style: {
      fontSize: '25px'
    }}
};

// Init Chart
const chart1 = new ApexCharts(document.querySelector('#chart1'), options);
const chart2 = new ApexCharts(document.querySelector('#chart2'), options2);
const chart3 = new ApexCharts(document.querySelector('#chart3'), options3);



// Render Chart
chart1.render();
chart2.render();
chart3.render();