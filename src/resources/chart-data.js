export const chartData = {
    type: 'pie',
    data: {
      labels: ['...die wichtigste Fähigkeit von Arbeitnehmern sein.', '...genauso wichtig sein wie fachliche oder soziale Kompetenzen.', '...wird von untergeordneter Bedeutung sein.'],
      datasets: [
        { // one line graph
          label: 'Digitalkompetenz wird...',
          data: [18, 87, 2],
          backgroundColor: [
            'rgba(54,73,93,.5)', // Blue
            'rgba(54,73,93,.5)', // Blue
            'rgba(54,73,93,.5)', // Blue
          ],
          borderColor: [
            '#36495d'
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
    }
  }
  
  export default chartData;