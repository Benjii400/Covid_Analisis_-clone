var url = ("https://api.covid19api.com/summary");
var newObj = new Array();
fetch(url)
  .then(response => response.json())
  .then(data => {
    
    for (var i = 0; i < data.Countries.length; i++) {
      newObj[i] = { code: data.Countries[i].CountryCode, total: data.Countries[i].TotalConfirmed }
    }



    var worldCard = `<div class="card bg-danger col-lg shadow-lg"> <h5 class="text-white" style="text-align:center;"> Total Confirmed  </h4>   <span style="color:white;text-align:center;font-size:20px"> ${data.Global.TotalConfirmed}</div>
<div class="card bg-danger col-lg shadow-lg"> <h5 class="text-white" style="text-align:center;"> Total Deaths  </h4>   <span style="color:white;text-align:center;font-size:20px"> ${data.Global.TotalDeaths}</div>
<div class="card bg-danger col-lg shadow-lg"> <h5 class="text-white" style="text-align:center;"> New Confirmed  </h4>   <span style="color:white;text-align:center;font-size:20px"> ${data.Global.NewConfirmed}</div>
<div class="card bg-danger col-lg shadow-lg"> <h5 class="text-white" style="text-align:center;"> New Death  </h4>   <span style="color:white;text-align:center;font-size:20px"> ${data.Global.NewDeaths}</div>`

    document.querySelector("#worldCard").innerHTML = worldCard;



    


  (async () => {

    const topology = await fetch(
      'https://code.highcharts.com/mapdata/custom/world.topo.json'
    ).then(response => response.json());

    Highcharts.getJSON(`https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/world-population.json`, function (data) {



      for (var j = 0; j < data.length; j++) {
        for (var i = 0; i < newObj.length; i++) {
          if (data[j].code == newObj[i].code) {
            data[j].z = newObj[i].total;
          }

        }

      }

      Highcharts.mapChart('worldMap', {
        chart: {
          borderWidth: 1,
          map: topology
        },

        title: {
          text: 'Total Cases up To date'
        },

        subtitle: {
          text: ''
        },

        accessibility: {
          description: 'We see how Usa and Europ by far are the countries with the largest cases.'
        },

        legend: {
          enabled: false
        },

        mapNavigation: {
          enabled: true,
          buttonOptions: {
            verticalAlign: 'bottom'
          }
        },

        mapView: {
          fitToGeometry: {
            type: 'MultiPoint',
            coordinates: [
              // Alaska west
              [-164, 54],
              // Greenland north
              [-35, 84],
              // New Zealand east
              [179, -38],
              // Chile south
              [-68, -55]
            ]
          }
        },

        series: [{
          name: 'Countries',
          color: '#E0E0E0',
          enableMouseTracking: false
        }, {
          type: 'mapbubble',
          name: 'Total cases',
          joinBy: ['iso-a2', 'code'],
          data: data,
          minSize: 4,
          maxSize: '12%',
          tooltip: {
            pointFormat: `{point.properties.name}: {point.z} people`
          }
        }]
      });
    });


  })();





var ul = document.querySelector("#ul");

var obj = new Object();
var total;
var Country;


for (var i = 0; i < data.Countries.length; i++) {
  total = data.Countries[i].TotalConfirmed;
  Country = data.Countries[i].Country;
  obj[`${Country}`] = total;
}


let sortable = [];
for (var countries in obj) {
  sortable.push([countries, obj[countries]]);
}


sortable.sort(function (a, b) {
  return b[1] - a[1];
});


var List = document.querySelector("#c");


for (var i = 0; i < data.Countries.length; i++) {
  var countryList = `<li id="${data.Countries[i].Country}"> <span>  ${sortable[i][0]}</span> 
    <div class="progress">
      <div class="progress-bar" role="progressbar" style="width:${Number(sortable[i][1]) / 200000}px;" ></div>
        <span style="margin-left:10px"> ${sortable[i][1]}
      </div> 
     </li>`


  var country = `<option value="${data.Countries[i].Country}">`
  List.innerHTML += country;

  ul.innerHTML += countryList;

}
  })
  .catch(error => console.error(error))

  console.log(newObj)











function fun() {




  var countryInput = document.querySelector("#countryInput").value;





  var url2 = (`https://api.covid19api.com/country/${countryInput}`);

  fetch(url2)
    .then(response => response.json())
    .then(data => {

      console.log(data)

      document.querySelector("#Cname").innerHTML = ` <h3>  <img src="https://www.countryflagicons.com/FLAT/64/${data[0].CountryCode}.png" alt=""> <span> ${countryInput}  </span> <h3> `

      var year;

      var year2020Confirmed = 0;
      var year2020Deaths = 0;
      var year2020Recovered = 0;
      var year2020Active = 0;


      var year2021Confirmed = 0;
      var year2021Deaths = 0;
      var year2021Recovered = 0;
      var year2021Active = 0;

      var year2022Confirmed = 0;
      var year2022Deaths = 0;
      var year2022Recovered = 0;
      var year2022Active = 0;

      var year2023Confirmed = 0;
      var year2023Deaths = 0;
      var year2023Recovered = 0;
      var year2023Active = 0;



      for (var i = 0; i < data.length; i++) {
        year = data[i].Date;

        if (Number(year.slice(0, 4)) == 2020) {
          year2020Confirmed = data[i].Confirmed;
          year2020Deaths = data[i].Deaths;
          year2020Recovered = data[i].Recovered;
          year2020Active = data[i].Active;



        }
        else if (Number(year.slice(0, 4)) == 2021) {
          year2021Confirmed = data[i].Confirmed;
          year2021Deaths = data[i].Deaths;
          year2021Recovered = data[i].Recovered;
          year2021Active = data[i].Active;

        }
        else if (Number(year.slice(0, 4)) == 2022) {
          year2022Confirmed = data[i].Confirmed;
          year2022Deaths = data[i].Deaths;
          year2022Recovered = data[i].Recovered;
          year2022Active = data[i].Active;

        }
        else if (Number(year.slice(0, 4)) == 2023) {
          year2023Confirmed = data[i].Confirmed;
          year2023Deaths = data[i].Deaths;
          year2023Recovered = data[i].Recovered;
          year2023Active = data[i].Active;

        }


      }


      var TotalConfirmed = year2023Confirmed;
      var TotalDeaths = year2023Deaths;
      var TotalRecoverd = year2023Recovered;
      var TotalActive = year2023Active;

      var cards = document.querySelector("#cards");
      cards.innerHTML = "";

      var card = `<div class="card bg-danger col-lg shadow-lg"> <h5 class="text-white" style="text-align:center;"> Total Confirmed  </h4>   <span style="color:white;text-align:center;font-size:20px"> ${TotalConfirmed}</div>
                <div class="card bg-danger col-lg shadow-lg"> <h5 class="text-white" style="text-align:center;"> Total Deaths  </h4>   <span style="color:white;text-align:center;font-size:20px"> ${TotalDeaths}</div>
                <div class="card bg-danger col-lg shadow-lg"> <h5 class="text-white" style="text-align:center;"> Total Recoverd  </h4>   <span style="color:white;text-align:center;font-size:20px"> ${TotalRecoverd}</div>
                <div class="card bg-danger col-lg shadow-lg"> <h5 class="text-white" style="text-align:center;"> Total Active  </h4>   <span style="color:white;text-align:center;font-size:20px"> ${TotalActive}</div>`

      cards.innerHTML += card;


      Highcharts.chart('Chart1', {
        chart: {
          type: 'area'
        },
        accessibility: {
          description: ''
        },
        title: {
          text: `${countryInput}'s Status`
        },
        subtitle: {
          text: 'By clickig the colores buttons below you can disable the status u dont want.'
        },
        xAxis: {
          allowDecimals: false,
          labels: {
            formatter: function () {
              return this.value; // clean, unformatted number for year
            }
          },
          accessibility: {
            rangeDescription: ''
          }
        },
        yAxis: {
          title: {
            text: 'Peopels'
          },
          labels: {
            formatter: function () {
              return this.value / 1000 + 'k';
            }
          }
        },
        tooltip: {
          pointFormat: '{series.name}<br><b>{point.y:,.0f}'
        },
        plotOptions: {
          area: {
            pointStart: 2020,
            marker: {
              enabled: false,
              symbol: 'circle',
              radius: 2,
              states: {
                hover: {
                  enabled: true
                }
              }
            }
          }
        },
        series: [{
          name: 'Confirmed',
          data: [Number(year2020Confirmed), Number(year2021Confirmed), Number(year2022Confirmed), Number(year2023Confirmed)]
        }, {
          name: 'Deaths',
          data: [Number(year2020Deaths), Number(year2021Deaths), Number(year2022Deaths), Number(year2023Deaths)]
        }, {
          name: 'Recovered',
          data: [Number(year2020Recovered), Number(year2021Recovered), Number(year2022Recovered), Number(year2023Recovered)]
        }, {
          name: 'Active',
          data: [Number(year2020Active), Number(year2021Active), Number(year2022Active), Number(year2023Active)]
        }]
      });

    })
    .catch(error => console.error(error))




}







var year2021Jan = 0;
var year2021Feb = 0;
var year2021Mar = 0;
var year2021Apr = 0;
var year2021May = 0;
var year2021Jun = 0;
var year2021Jul = 0;
var year2021Aug = 0;
var year2021Sep = 0;
var year2021Oct = 0;
var year2021Nov = 0;
var year2021Dec = 0;


var year2022Jan = 0;
var year2022Feb = 0;
var year2022Mar = 0;
var year2022Apr = 0;
var year2022May = 0;
var year2022Jun = 0;
var year2022Jul = 0;
var year2022Aug = 0;
var year2022Sep = 0;
var year2022Oct = 0;
var year2022Nov = 0;
var year2022Dec = 0;


var year2023Jan = 0;
var year2023Feb = 0;
var year2023Mar = 0;
var year2023Apr = 0;
var year2023May = 0;
var year2023Jun = 0;
var year2023Jul = 0;
var year2023Aug = 0;
var year2023Sep = 0;
var year2023Oct = 0;
var year2023Nov = 0;
var year2023Dec = 0;




var url3 = ("https://api.covid19api.com/world?from=2020-03-01T00:00:00Z&to=2023-04-01T00:00:00Z");
fetch(url3)
  .then(response => response.json())
  .then(data => {
    
    for (var i = 0; i < data.length; i++) {
      year1 = data[i].Date;
    
    
    
    
      if (year1.slice(0, 7) == `2021-01`) {
        year2021Jan = data[i].TotalConfirmed;
      }
      else if (year1.slice(0, 7) == `2021-0`) {
        year2021Feb = data[i].TotalConfirmed;
      }
      else if (year1.slice(0, 7) == `2021-03`) {
        year2021Mar = data[i].TotalConfirmed;
      }
      else if (year1.slice(0, 7) == `2021-04`) {
        year2021Apr = data[i].TotalConfirmed;
      }
      else if (year1.slice(0, 7) == `2021-05`) {
        year2021May = data[i].TotalConfirmed;
      }
      else if (year1.slice(0, 7) == `2021-06`) {
        year2021Jun = data[i].TotalConfirmed;
      }
      else if (year1.slice(0, 7) == `2021-07`) {
        year2021Jul = data[i].TotalConfirmed;
      }
      else if (year1.slice(0, 7) == `2021-08`) {
        year2021Aug = data[i].TotalConfirmed;
      }
      else if (year1.slice(0, 7) == `2021-09`) {
        year2021Sep = data[i].TotalConfirmed;
      }
      else if (year1.slice(0, 7) == `2021-10`) {
        year2021Oct = data[i].TotalConfirmed;
      }
      else if (year1.slice(0, 7) == `2021-11`) {
        year2021Nov = data[i].TotalConfirmed;
      }
      else if (year1.slice(0, 7) == `2021-12`) {
        year2021Dec = data[i].TotalConfirmed;
      }
    
    
    
      else if (year1.slice(0, 7) == `2022-01`) {
        year2022Jan = data[i].TotalConfirmed;
      }
      else if (year1.slice(0, 7) == `2022-0`) {
        year2022Feb = data[i].TotalConfirmed;
      }
      else if (year1.slice(0, 7) == `2022-03`) {
        year2022Mar = data[i].TotalConfirmed;
      }
      else if (year1.slice(0, 7) == `2022-04`) {
        year2022Apr = data[i].TotalConfirmed;
      }
      else if (year1.slice(0, 7) == `2022-05`) {
        year2022May = data[i].TotalConfirmed;
      }
      else if (year1.slice(0, 7) == `2022-06`) {
        year2022Jun = data[i].TotalConfirmed;
      }
      else if (year1.slice(0, 7) == `2022-07`) {
        year2022Jul = data[i].TotalConfirmed;
      }
      else if (year1.slice(0, 7) == `2022-08`) {
        year2022Aug = data[i].TotalConfirmed;
      }
      else if (year1.slice(0, 7) == `2022-09`) {
        year2022Sep = data[i].TotalConfirmed;
      }
      else if (year1.slice(0, 7) == `2022-10`) {
        year2022Oct = data[i].TotalConfirmed;
    
      }
      else if (year1.slice(0, 7) == `2022-11`) {
        year2022Nov = data[i].TotalConfirmed;
    
      }
      else if (year1.slice(0, 7) == `2022-12`) {
        year2022Dec = data[i].TotalConfirmed;
    
      }
    
    
    
    
      else if (year1.slice(0, 7) == `2023-01`) {
        year2023Jan = data[i].TotalConfirmed;
      }
      else if (year1.slice(0, 7) == `2023-0`) {
        year2023Feb = data[i].TotalConfirmed;
      }
      else if (year1.slice(0, 7) == `2023-03`) {
        year2023Mar = data[i].TotalConfirmed;
      }
      else if (year1.slice(0, 7) == `2023-04`) {
        year2023Apr = data[i].TotalConfirmed;
      }
      else if (year1.slice(0, 7) == `2023-05`) {
        year2023May = data[i].TotalConfirmed;
      }
      else if (year1.slice(0, 7) == `2023-06`) {
        year2023Jun = data[i].TotalConfirmed;
      }
      else if (year1.slice(0, 7) == `2023-07`) {
        year2023Jul = data[i].TotalConfirmed;
      }
      else if (year1.slice(0, 7) == `2023-08`) {
        year2023Aug = data[i].TotalConfirmed;
      }
      else if (year1.slice(0, 7) == `2023-09`) {
        year2023Sep = data[i].TotalConfirmed;
      }
      else if (year1.slice(0, 7) == `2023-10`) {
        year2023Oct = data[i].TotalConfirmed;
      }
      else if (year1.slice(0, 7) == `2023-11`) {
        year2023Nov = data[i].TotalConfirmed;
      }
      else if (year1.slice(0, 7) == `2023-12`) {
        year2023Dec = data[i].TotalConfirmed;
      }
    
    }
    
    
    
    
    
    
    // Data retrieved https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature
    Highcharts.chart('graph2021', {
      chart: {
        type: 'spline'
      },
      title: {
        text: 'Monthly Analsis of world 2021'
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        accessibility: {
          description: 'Months of the year'
        }
      },
      yAxis: {
        title: {
          text: 'People'
        },
        labels: {
          formatter: function () {
            return this.value;
          }
        }
      },
      tooltip: {
        crosshairs: true,
        shared: true
      },
      plotOptions: {
        spline: {
          marker: {
            radius: 4,
            lineColor: 'red',
            lineWidth: 1
          }
        }
      },
      series: [{
        name: 'World',
        marker: {
          symbol: 'square'
        },
        data: [year2021Jan, year2021Feb, year2021Mar, year2021Apr, year2021May, year2021Jun, year2021Jul, year2021Aug, year2021Sep, year2021Oct, year2021Nov, year2021Dec],
      }]
    });
    
    
    // Data retrieved https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature
    Highcharts.chart('graph2022', {
      chart: {
        type: 'spline'
      },
      title: {
        text: 'Monthly Analsis of world 2022'
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        accessibility: {
          description: 'Months of the year'
        }
      },
      yAxis: {
        title: {
          text: 'People'
        },
        labels: {
          formatter: function () {
            return this.value;
          }
        }
      },
      tooltip: {
        crosshairs: true,
        shared: true
      },
      plotOptions: {
        spline: {
          marker: {
            radius: 4,
            lineColor: 'red',
            lineWidth: 1
          }
        }
      },
      series: [{
        name: 'World',
        marker: {
          symbol: 'square'
        },
        data: [year2022Jan, year2022Feb, year2022Mar, year2022Apr, year2022May, year2022Jun, year2022Jul, year2022Aug, year2022Sep, year2022Oct, year2022Nov, year2022Dec]
    
      }]
    });
    
    
    // Data retrieved https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature
    Highcharts.chart('graph2023', {
      chart: {
        type: 'spline'
      },
      title: {
        text: 'Monthly Analsis of world 2023'
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        accessibility: {
          description: 'Months of the year'
        }
      },
      yAxis: {
        title: {
          text: 'People'
        },
        labels: {
          formatter: function () {
            return this.value;
          }
        }
      },
      tooltip: {
        crosshairs: true,
        shared: true
      },
      plotOptions: {
        spline: {
          marker: {
            radius: 4,
            lineColor: 'red',
            lineWidth: 1
          }
        }
      },
      series: [{
        name: 'World',
        marker: {
          symbol: 'square'
        },
        data: [year2023Jan, year2023Feb, year2023Mar, year2023Apr, year2023May, year2023Jun, year2023Jul, year2023Aug, year2023Sep, year2023Oct, year2023Nov, year2023Dec]
    
      }]
    });

  })
  .catch(error => console.error(error))



















