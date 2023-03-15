
const years = [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];

const increasingSinglesLineChart = {
    labels: years,
    datasets: [
        {
            label: "20-24 Years | Male",
            data: [1,2,3,4],
            borderWidth: 2,
            backgroundColor: "transparent",
            borderColor: "rgb(255, 153, 153)"
        },
        {
            label: "20-24 Years | Female",
            data: [5,4,5,6,9],
            borderWidth: 2,
            backgroundColor: "transparent",
            borderColor: "rgb(255, 204, 153)"
        },
        {
            label: "25-34 Years | Male",
            data: [5,1,3,4],
            borderWidth: 2,
            backgroundColor: "transparent",
            borderColor: "rgb(171, 217, 126)"
        },
        {
            label: "25-34 Years | Female",
            data: [10,3,2,6,9],
            borderWidth: 2,
            backgroundColor: "transparent",
            borderColor: "rgb(153, 204, 255)"
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
            label: "percentage increase",
            data: [1,2],
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
            display: true,
            position: 'bottom'
        },
        scales: {
            yAxes: [{
                ticks: {
                    min:0,
                    max:8
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
            config.data.datasets[0].data = [1, 2];
            console.log("we are in" + state);
            break;
        case "group2":
            config.data.datasets[0].data = [3, 4];
            console.log("we are in" + state);
            break;
        case "group3":
            config.data.datasets[0].data = [4, 5];
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
    'At Word',
    'Social Activities',
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [7, 30, 32, 21, 4],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: 'rgb(255, 99, 132)',
    pointHoverBackgroundColor: '#rgb(255, 99, 132)',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }, {
    label: 'My Second Dataset',
    data: [13, 26, 27, 20, 5],
    fill: true,
    backgroundColor: 'rgba(255, 159, 64, 0.2)',
    borderColor: 'rgb(255, 159, 64)',
    pointBackgroundColor: 'rgb(255, 159, 64)',
    pointBorderColor: 'rgb(255, 159, 64)',
    pointHoverBackgroundColor: 'rgb(255, 159, 64)',
    pointHoverBorderColor: 'rgb(255, 159, 64)'
  },{
    label: 'My Third Dataset',
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
        scale: { ticks: {
            backgroundColor: "#000000",
        } },
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
