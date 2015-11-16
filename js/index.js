$(document).ready(function(){
  console.log("ready!");
  $('#menu-button').click(function(){
    $('.responsive-menu').slideDown();
    $('#menu-button').hide();
    $('#menu-arrow').show();
    $('header').removeClass('masthead');
    $('header').addClass('solidBG');
    console.log('worked!');
    return false;
  });
  $('#menu-arrow').click(function(){
    $('.responsive-menu').slideUp();
    $('#menu-arrow').hide();
    $('#menu-button').show();
    $('header').removeClass('solidBG');
    $('header').addClass('masthead');
    return false;
  });
  $(".source-arrow").click(function(){
    if (!$(this).hasClass('hide-sources')){
      $(this).addClass('hide-sources');
      $(".sources").slideDown();
    }
    else { 
      $(this).removeClass("hide-sources");
      $(".sources").slideUp();
    }
    return false;
  });

  //Begin Chart Defer Render Function

  (function (H) {
    function deferRender (proceed) {
      var series = this, 
      $renderTo = $(this.chart.container.parentNode);
      // It is appeared, render it
      if ($renderTo.is(':appeared')) {
          proceed.call(series);
      // It is not appeared, halt renering until appear
      } else  {
        $renderTo.appear(); // Initialize appear plugin
        $renderTo.on('appear', function () {
          proceed.call(series);
        });
      }
    };
    H.wrap(H.Series.prototype, 'render', deferRender);
  }
  (Highcharts));
  //Donut chart, article 1 
  Highcharts.setOptions({
    colors: ['#000000', '#313131', '#ffffff', '#513C40', '#939393', '#006890', '#ffffff']
  });

  $('#donut-container').highcharts({
    chart: {
      type: 'pie',
      backgroundColor: '#DF7A00',
      renderTo: 'donut-container',
      align: "center",
      exporting: { enabled: true },
      spacingBottom: 0,
      spacingTop: 0,
      spacingRight:0,
      spacingLeft: 0,
      margin: [0, 0, 0, 0],
      options3d: {
          enabled: true,
          alpha: 45
      }
    },
    title:{
      text:''
    },
    credits: {
      enabled: false
    },

    tooltip: {
        pointFormat: '{point.y}',
        valuePrefix: '$',
        borderWidth: 0,
        valueSuffix: ' billion',
    },
         
    plotOptions: {
      pie: {
        innerSize: 100,
        depth: 100,
        size: '85%',
        borderWidth: 0
      }
    },
    series: [{
      name: 'Percentage',
            
      data: [
          ['Mental Health Problems', 5.97],
          ['Special Education Expenses', 5.91],
          ['Hospitalizations', 11.52],
          ['Non-communicable Diseases', 7.12],
          ['Osteoarthritus', 3.37],
          ['Lost Productivity', 5.48],
          ['Other', 1.70],
      ],
      dataLabels:{
        fontColor: '#ffffff',
        style: {
                width: '100px'
                        }
      }
    }]
  }); //close of donut chart 
  // Dual Axis Chart, Article 1
  // (Highcharts));
  Highcharts.setOptions({
     colors: ['#696969', '#AAB300', '#006890', '#899F99', '#AAB300', '#DF7A00', '#FFF','#6AF9C4']
  });
  $(function () {
    $('#line-container').highcharts({
      chart: {
        zoomType: 'xy',
        backgroundColor: '#ffffff'
      },
      credits: {
      enabled: false
    },
      title: {
          text: '',
          style:{
          color: '#FFFFFF'
          }
      },
        // subtitle: {
        //     text: 'Source: WorldClimate.com'
        // },
      xAxis: [{
          categories: ['2007', '2008', '2009', '2010', '2011', '2012',
              '2013', '2014'],
          crosshair: true
      }],
        plotOptions: {
          connectNulls: true
      },
      yAxis: [{ // Primary yAxis
        min: 0,
        labels: {
          format: '${value}',
          style: {
              color: Highcharts.getOptions().colors[1],
              fontWeight: 'bold'
          },
        },
        title: {
          text: 'Health costs of hunger (US billions)',
          style: {
              color: Highcharts.getOptions().colors[1],
              fontWeight: 'bold'
          }
        },
        // gridLineWidth: 0,
        gridLineDashStyle: 'dot'
      },
      { // Secondary yAxis
        title: {
          text: 'Percent of population food insecure',
          style: {
            color: Highcharts.getOptions().colors[0],
            fontWeight: 'bold'
          }
        },
        labels: {
          format: '{value}%',
          style: {
              color: Highcharts.getOptions().colors[0],
              fontWeight: 'bold'
          }
        },
        opposite: true,
        // gridLineWidth: 0,
        gridLineDashStyle: 'dot'
      }],
      tooltip: {
        shared: true
      },
      exporting:{
        sourceWidth: 1000,
        sourceHeight:500
      },
      legend: {
        layout: 'vertical',
        align: 'left',
        x: 120,
        backgroundColor: 'rgba(0,0,0,0)',
        verticalAlign: 'top',
        y: 10,
        floating: true,
      },
      series: [{
          name: 'Percent of population food insecure',
          type: 'column',
          yAxis: 1,
          data: [12.2, 16.4, 16.6, 16.1, 16.4, 15.9, 15.8, 15.4],
          tooltip: {
              valueSuffix: '%'
          }
        }, {
          name: 'Health costs of hunger',
          connectNulls: true,
          type: 'spline',
          data: [98.4, null, null, 130.5, null, null, null, 143.13],
          lineWidth: 5,
          marker: {
          enabled: true,
          symbol: 'circle',
          radius: 7
          },
          tooltip: {
              valuePrefix: '$',
              valueSuffix: ' billion'
          }
      }]
    });//highcharts function bar graph
  }); //function containing highcharts bar graph

// Starting Treemap
//Setting Global Font for ALL Charts
Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'Lato'
        }
    }
});
$(function () {
    $('#tree-container').highcharts({
        series: [{
            type: "treemap",
            layoutAlgorithm: 'squarified',
            dataLabels: {
                enabled: false,
                style: { fontFamily: '\'Lato\', sans-serif'}
            },
            levelIsConstant: false,
            interactByLeaf: false,
            drillUpButton: {
                text: 'Go Back',
                position: {
                    align: 'left',
                    x: 20,
                    y: 20
                },
                relativeTo: "plotBox",
                theme: {
                    fill: '#ffffff',
                    'stroke-width': 0,
                    stroke: 'silver',
                    r: 0,
                    states: {
                        hover: {
                            fill: '#EAEEE9',
                            'stroke-width': 1,
                            stroke: '#ffffff'
                        },
                        select: {
                            stroke: '#039',
                            fill: '#EAEEE9'
                        }
                    }
                }
              },
            alternateStartingDirection: true,
            tooltip: {
              valuePrefix: '$',
              valueSuffix: ' billion'
          },
            allowDrillToNode: true,
            borderColor: '#ffffff',
            borderWidth: 8,
            levels: [{
                level: 1,
                layoutAlgorithm: 'sliceAndDice',
                dataLabels: {
                    enabled: true,
                    align: 'center',
                    verticalAlign: 'middle',
                    style: {
                        fontSize: '1.5em',
                        fontWeight: 'light',
                        fontFamily: '\'Lato\', sans-serif'
                    }
                }
            }],
                    
            
            data: [{
                id: 'MTL',
                name: 'Mental Health Problems',
                color: "#BE1E2D"
            }, {
                id: 'HLT',
                name: 'Poorer General Health',
                color: "#313131"
            },{
                name: 'Suicide',
                color: '#899F99',
                value: 21.61
            }, {
                id: 'HPT',
                name: 'Hospitalizations',
                color: '#000000'
            },{
                id: 'NCD',
                name: 'Non-communicable Diseases',
                color: '#939393'
            },{
                id: 'NDP',
                name: 'Nutrition and Digestion Problems',
                color: '#513C40'
            },{
                name: 'Lost Productivity',
                color: '#006890',
                parent: 'LPT',
                value: 5.48
            },{
                id: 'OTR',
                name: 'Other',
                color: '#000000'
            },{
                name: 'Child Mental Health Treatment',
                parent: 'MTL',
                value: 1.22
            }, {
                name: 'Adult Mental Health Treatment',
                parent: 'MTL',
                value: 4.75
            }, {
                name: 'Depression',
                parent: 'MTL',
                value: 32.03
            }, {
                name: 'Anxiety',
                parent: 'MTL',
                value: 19.08
            }, {
                name: 'Poor Overall Health Status',
                parent: 'HLT',
                value: 16.8
            }, {
                name: 'Migraines',
                parent: 'HLT',
                value: 2.41
            }, {
                name: 'Colds',
                parent: 'HLT',
                value: 0.88
            }, {
                name: 'Treatment of Diabetes Mellitus',
                parent: 'NCD',
                value: 5.0
            }, {
                name: 'Treatment of Hyperlipidemia',
                parent: 'NCD',
                value: 1.4
            }, {
                name: 'Treatment of Endocrine System Problems Related to Diabetes Mellitus',
                parent: 'NCD',
                value: 0.8
            },{
                name: 'Treatment of Anemias and other Deficiencies',
                parent: 'NDP',
                value: 0.85
            },{
                name: 'Treatment of Upper Gastrointestinal Disorders',
        
                parent: 'NDP',
                value: 6.25
            },{
                name: 'Additional Dental Care Visits, all Ages',
                parent: 'OTR',
                value: 0.8
            },{
                name: 'Congenital Defects',
                parent: 'OTR',
                value: 0.06
            },{
                name: 'Osteoarthritus and Inflammation',
                parent: 'OTR',
                value: 3.37
            },{
                name: 'Non-neonatal Hospital Stays, Children Under 18',
                parent: 'HPT',
                value: 1.82
            },{ 
                name: 'Hospital Stays, Adults',
                parent: 'HPT',
                value: 8.18
            },{ 
                name: 'Ambulatory Visits',
                parent: 'HPT',
                value: 1.51
            },]
        }],
          title: {
            text: ''
        },
         credits: {
             enabled: false
             },
        chart: {
            margin: [0, 0, 0, 0],
            backgroundColor: '#899F99',
               },
    });
}); //closing treemap

//begin stacked bar chart

$(function () {
    $('#stacked-container').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: ''
        },
         credits: {
            enabled: false
        },
        xAxis: {
            categories: ['2007', '2010', '2014'],
            labels: {
                style: {
                    fontWeight: 'bold'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Cost by Health Condition (US Billion $)'
            },
            gridLineDashStyle: 'dot'
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'Poor Overall Health',
            data: [28.7, 38.9, 42.66],
            color: '#AAB300'
        }, {
            name: 'Depression',
            data: [2.2, 29.2, 32.03],
            color: '#000000'
        }, {
            name: 'Suicide',
            data: [15.8, 19.7, 21.61],
            color: '#006890'
        },  {
            name: 'Anxiety',
            data: [12.9, 17.4, 19.08],
            color: '#696969'
        }, {
            name: 'Hospitalizations',
            data: [12.1, 16.1, 11.52],
            color: "#899F99"
        }, {
            name: 'Upper Gastrointestinal Disorders',
            data: [4.2, 5.7, 6.25],
            color: "#513C40"
        }, {
            name: 'Colds, Migraines, Iron Deficiency',
            data: [2.5, 3.5, 4.14],
            color: '#003144'
        } ] //closing data
    });//closing highcharts
});//closing entire stacked bar chart function








});//document.ready