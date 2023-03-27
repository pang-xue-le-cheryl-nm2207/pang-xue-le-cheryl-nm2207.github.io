
const years = [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];

const increasingSinglesLineChart = {
    labels: years,
    datasets: [
        {
            label: "20-24 Years",
            data: [93.2, 93, 93.1, 91.5, 93.3, 93.1, 94.4, 95.1, 94.8, 96.1, 96.4, 96.7, 97.7, 97.2, 96.9, 96.7, 97.1, 97.1, 97.1, 96.9, 97.8],
            borderWidth: 2,
            backgroundColor: "transparent",
            borderColor: "rgba(239,187,185,255)"
        },
        {
            label: "25-29",
            data: [57.5, 56.7, 60.2, 58.1, 62.7, 63, 62.6, 65.1, 64, 67.1, 70.5, 71.3, 74.3, 71.4, 71.2, 71.7, 72.8, 73.9, 75.3, 77.1, 75.8],
            borderWidth: 2,
            backgroundColor: "transparent",
            borderColor: "rgba(246,198,149,255)"
        },
        {
            label: "30-34 Years",
            data: [25.9, 26.5, 26.7, 27.7, 28.3, 27.9, 29.3, 29.5, 30.8, 31.1, 31.6, 32.9, 32.1, 31.2, 31.8, 32.4, 33.5, 34.8, 37.1, 40.3, 36.3],
            borderWidth: 2,
            backgroundColor: "transparent",
            borderColor: "rgba(251,229,182,255)"
        },
        {
            label: "35-39 Years",
            data: [16.5, 18.6, 16.1, 17.3, 17.5, 17, 17.6, 17.3, 18.7, 18.4, 17.6, 19.4, 20.2, 18.7, 18.8, 18.3, 18.3, 20.9, 21.6, 20.4],
            borderWidth: 2,
            backgroundColor: "transparent",
            borderColor: "rgba(203,222,171,255)"
        },
        {
            label: "40-44 Years",
            data: [14.5, 14.9, 13.8, 14.7, 13.8, 13.9, 13.3, 13.9, 14.7, 14.3, 12.6, 15.2, 15.3, 14.8, 14.7, 15.4, 14.4, 17.4, 16.6, 14.7, 16.3],
            borderWidth: 2,
            backgroundColor: "transparent",
            borderColor: "rgba(212,245,254,255)"
        },
        {
            label: "45-49 Years",
            data: [12, 12.6, 12.5, 13.1, 12.9, 12.4, 12.2, 12.2, 13, 12.3, 12.7, 12.7, 13.1, 13.7, 12.7, 13, 13.4, 14.7, 14.9, 14.4, 14.4],
            borderWidth: 2,
            backgroundColor: "transparent",
            borderColor: "rgba(158,129,216,255)"
        },

    ]
};

new Chart("lineChart", {//!--Notice here we put the id of the "new chart" we created in the html part.
    type: "line",
    data: increasingSinglesLineChart,
    options: { // configure options here
        legend: {
            display: true,
            position: 'bottom'
        },
        title: {
            display: true,
            text: 'Proportion Of Singles Among Resident Population By Selected Age Group'
        },
        responsive: true
    }
});

/////////////////////////////////////////////////////////////////////////
/////////////////////////////New Chart///////////////////////////////////
/////////////////////////////////////////////////////////////////////////



const maleAndFemale = {
    labels: ["male", "female"],
    datasets: [
        {
            label: "proportion of singles",
            data: [98.8, 96.6],
            borderWidth: 2,
            backgroundColor: [
                "rgb(190,235,231)",
                "rgb(237,114,123)"
            ],
            borderColor: [
                "rgb(190,235,231)",
                "rgb(237,114,123)"
            ],
        },
    ],
};



const config = new Chart("barChart", {//!--Notice here we put the id of the "new chart" we created in the html part.
    type: "bar",
    data: maleAndFemale,
    options: { // configure options here
        responsive: false,
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        title: {
            display: true,
            text: 'Proportion Of Singles Among Resident Population By Gender'
        },
        scales: {
            yAxes: [{
                ticks: {
                    min:0,
                    max:100
                }
            }]
        }
    }
});


function updateChart(option){
    console.log(option.value);
    let state = option.value;
    switch(state){
        case "group1":
            config.data.datasets[0].data = [98.8, 96.6];
            console.log("we are in" + state);
            break;
        case "group2":
            config.data.datasets[0].data = [82, 69.5];
            console.log("we are in" + state);
            break;
        case "group3":
            config.data.datasets[0].data = [41.1, 31.8];
            console.log("we are in" + state);
            break;
    }
    config.update();
}

/////////////////////////////////////////////////////////////////////////
/////////////////////////////New Chart///////////////////////////////////
/////////////////////////////////////////////////////////////////////////


const notDatedBefore = {
    labels: [
        'Dated Before',
        'Have Not Dated Before',
    ],
    datasets: [{
        //label: '',
        data: [62, 38],
        borderColor: 'transparent',
        backgroundColor: [
        "rgb(237,114,123)",
        "rgb(190,235,231)"
        ],
        hoverOffset: 4
    }]
    };

new Chart("pieChart", {//!--Notice here we put the id of the "new chart" we created in the html part.
    type: "pie",
    data: notDatedBefore,
    options: { // configure options here
        title: {
            display: true,
            text: 'Percentage of singles that :'
        },
        legend: {
            display: false,
        },
        responsive: false
    }
});



/////////////////////////////////////////////////////////////////////////
/////////////////////////////New Chart///////////////////////////////////
/////////////////////////////////////////////////////////////////////////

const reasons = ["I have limited social circle", "I do not have many opportunities to meet potential partners", "I prefer to leave dating to chance", "I want too concentrate on my job/ studies", "I find it difficult to form romantic relationships"]
const whyDontDate = {
  labels: reasons,
  datasets: [{
    axis: 'y',
    //label: '',
    data: [58, 57, 48, 37, 36],
    fill: false,
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
    ],
    borderWidth: 1
  }]
};


new Chart("barChart-2", {//!--Notice here we put the id of the "new chart" we created in the html part.
    type: "horizontalBar",
    data: whyDontDate,
    options: { // configure options here\
        legend: {
            display: false,
        },
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        responsive: false
    }
});

/////////////////////////////////////////////////////////////////////////
/////////////////////////////New Chart///////////////////////////////////
/////////////////////////////////////////////////////////////////////////

const meetingMethods = ["Through social/ recreational activies", "Through introduction by friends", "Through introduction by colleaugues", "Through religious activities/ organisations", "Through other online channels", "Through online dating sites/ apps", "Through dating agencies", "Through introduction by parents", "Through introduction by relatives"]
const waysToMeet = {
  labels: meetingMethods,
  datasets: [{
    axis: 'y',
    //label: '',
    data: [90, 88, 82, 66, 60, 58, 44, 39, 37],
    fill: false,
    backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)',
        'rgba(255, 105, 180, 0.2)',
        'rgba(75, 0, 130, 0.2)',
    ],
    borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)',
        'rgb(255, 105, 180)',
        'rgb(75, 0, 130)',
    ],
    borderWidth: 1
  }]
};


new Chart("barChart-3", {//!--Notice here we put the id of the "new chart" we created in the html part.
    type: "horizontalBar",
    data: waysToMeet,
    options: { // configure options here\
        legend: {
            display: false,
        },
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        responsive: false
    }
});


/////////////////////////////////////////////////////////////////////////
/////////////////////////////New Chart///////////////////////////////////
/////////////////////////////////////////////////////////////////////////


const data = {
  labels: [
    'Online Channels',
    'At School',
    'Through Friends',
    'At Work',
    'Social Activities',
  ],
  datasets: [{
    label: '2012',
    data: [7, 30, 32, 21, 4],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: 'rgb(255, 99, 132)',
    pointHoverBackgroundColor: '#rgb(255, 99, 132)',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }, {
    label: '2016',
    data: [13, 26, 27, 20, 5],
    fill: true,
    backgroundColor: 'rgba(255, 159, 64, 0.2)',
    borderColor: 'rgb(255, 159, 64)',
    pointBackgroundColor: 'rgb(255, 159, 64)',
    pointBorderColor: 'rgb(255, 159, 64)',
    pointHoverBackgroundColor: 'rgb(255, 159, 64)',
    pointHoverBorderColor: 'rgb(255, 159, 64)'
  },{
    label: '2021',
    data: [29, 21, 18, 16, 9],
    fill: true,
    backgroundColor: 'rgba(255, 205, 86, 0.2)',
    borderColor: 'rgb(255, 205, 86)',
    pointBackgroundColor: 'rgb(255, 205, 86)',
    pointBorderColor: 'rgb(255, 205, 86)',
    pointHoverBackgroundColor: 'rgb(255, 205, 86)',
    pointHoverBorderColor: 'rgb(255, 205, 86)'
  }]
};

new Chart("radarChart", {//!--Notice here we put the id of the "new chart" we created in the html part.
    type: "radar",
    data: data,
    responsive: true,
    options: { // configure options here\
        scale: {
            ticks: {
              display: true,
              backdropColor: '#BDB7DC',
            }
          },
        legend: {
            display: true,
            position:'bottom'
        },
        elements: {
            line: {
              borderWidth: 1
            }
          }  
    }
});
