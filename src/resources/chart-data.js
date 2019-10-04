export const chartData = [{
    type: 'pie',
    data: {
      labels: ['...die wichtigste Fähigkeit von Arbeitnehmern sein.', '...genauso wichtig sein wie fachliche oder soziale Kompetenzen.', '...wird von untergeordneter Bedeutung sein.'],
      datasets: [
        { // one line graph
          label: 'Digitalkompetenz wird...',
          data: [18, 87, 2],
          backgroundColor: ["#ffdd57","#2a3758", "#17a2b8"],
          borderColor: [
            'transparent'
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
    }
  },
  {
    type: 'line',
    data: {
      labels: ['2009', '2012', '2015', '2018'],
      datasets: [{
        label: 'Open IT Positions in k',
        backgroundColor: '#2a3758',
        borderColor: '#2a3758',
        data: [
          20, 43, 43, 82
        ],
        fill: false,
      }]
    },
    options: {
      responsive: true,
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Year'
          }
        }],
        yAxes: [{
          display: false,
          scaleLabel: {
            display: true,
            labelString: 'Open IT Positions in k'
          }
        }]
      },
      title: {
        display: false
      },
      legend: {
        display: true,
        position: 'top'
      }
    }
  }]
  
  export default chartData;