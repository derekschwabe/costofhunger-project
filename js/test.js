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
    colors: ['#000000', '#880015', '#002C3C', '#3E3E3E', '#DF0022', '#6185B6', '#363636','#E9E9E9']
  });

  $('#donut-container').highcharts({
    chart: {
      type: 'pie',
      backgroundColor: '#899F99',
      renderTo: 'donut-container',
      // width: 900,
      // height: 600,
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
    labels: {
      formatter: function() {
          return '$'+ value;
      },
    },

    credits: {
      enabled: false
    },

    tooltip: {
        pointFormat: '{point.y}',
        valuePrefix: '$',
        borderWidth: 0,
        valueSuffix: ' billion'
    },
         
    plotOptions: {
      pie: {
        innerSize: 100,
        depth: 100,
        size: '70%',
        borderWidth: 0
      }
    },
    series: [{
      name: 'Amount',
            
      data: [
          ['Mental Health Problems', 57.08],
          ['Poorer General Health Status', 45.95],
          ['Suicide', 21.61],
          ['Hospitalizations', 11.52],
          ['Non-communicable Diseases', 7.12],
          ['Nutrition and Digestion Problems', 7.1],
          ['Lost Productivity', 5.48],
          ['Other', 4.22],
      ]
    }]
  }); //close of donut chart 
  // Dual Axis Chart, Article 1
  // (Highcharts));
  Highcharts.setOptions({
     colors: ['#FFFFFF', '#D71529', '#006890', '#899F99', '#AAB300', '#DF7A00', '#FFF','#6AF9C4']
  });
  $(function () {
    $('#line-container').highcharts({
      chart: {
        zoomType: 'xy',
        backgroundColor: '#899F99',
      },
      title: {
          text: 'Sustained High Hunger Rates Bring Rising Costs',
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
      //   plotOptions: {
      //     connectNulls: true
      // },
      yAxis: [{ // Primary yAxis
        labels: {
          format: '${value}',
          style: {
              color: Highcharts.getOptions().colors[1]
          },
        },
        title: {
          text: 'Health costs of hunger (US billions)',
          style: {
              color: Highcharts.getOptions().colors[1]
          }
        },
        // gridLineWidth: 0,
        gridLineDashStyle: 'dot'
      },
      { // Secondary yAxis
        title: {
          text: 'Percent of population food insecure',
          style: {
            color: Highcharts.getOptions().colors[0]
          }
        },
        labels: {
          format: '{value}%',
          style: {
              color: Highcharts.getOptions().colors[0]
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
        backgroundColor: 'rgba(211,211,211,.5)',
        verticalAlign: 'top',
        y: 100,
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
$(function () {
    $('#tree-container').highcharts({
        series: [{
            type: "treemap",
            layoutAlgorithm: 'squarified',
            dataLabels: {
                enabled: false
            },
            levelIsConstant: false,
            interactByLeaf: false,
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
                        fontSize: '12px',
                        fontWeight: 'light'
                    }
                }
            }],
                    
            
            data: [{
                id: 'MTL',
                name: 'Mental Health Problems',
                color: "#EC2500"
            }, {
                id: 'HLT',
                name: 'Poorer General Health',
                color: "#ECE100"
            },{
                name: 'Suicide',
                parent: 'SCD',
                value: 21.61
            }, {
                id: 'HPT',
                name: 'Hospitalizations',
                color: '#000000'
            },{
                id: 'NCD',
                name: 'Non-communicable Diseases',
                color: '#899F99'
            },{
                id: 'NDP',
                name: 'Nutrition and Digestion Problems',
                color: '#D71529'
            },{
                name: 'Lost Productivity',
                color: '#006890',
                parent: 'LPT',
                value: 5.48
            },{
                id: 'OTR',
                name: 'Other',
                color: '#899F99'
            },{
                name: 'Mental Health Treatment for Children under 18 Years',
                parent: 'MTL',
                value: 1.22
            }, {
                name: 'Mental Health Treatment for Adults Ages 18-64 Years',
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
                value: 4.9
            }, {
                name: 'Treatment of Hyperlipidemia',
                parent: 'NCD',
                value: 1.41
            }, {
                name: 'Treatment of Endocrine System Problems Related to Diabetes Mellitus',
                parent: 'NCD',
                value: 0.81
            },{
                name: 'Treatment of Anemias and Other Deficiencies',
                parent: 'NDP',
                value: 0.85
            },{
                name: 'Treatment of Upper Gastrointestinal Disorders',
        
                parent: 'NDP',
                value: 6.25
            },{
                name: 'Additional Dental Care Visits, all ages',
                parent: 'OTR',
                value: 3.37
            },{
                name: 'Treatment of Congenital Defects and Complications of Pregnancy and Birth',
                parent: 'OTR',
                value: 0.06
            },]
        }],
          title: {
            text: ''
        },
        drillDown: {
            drillUpButton: {
                position: {
                    align: 'right',
                    y: 0,
                    x: 0
                }
                
            }
        },
        chart: {
            margin: [50, 80, 0, 80],
               },
    });
});










});//document.ready