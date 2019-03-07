const baseUrl = 'http://localhost:3000/api'
// const { info } = require('./info')
let countryList = {}

$(document).ready(function() {
  fetchCountryList()
  $('input.autocomplete').autocomplete({ 
    data: countryList,
    onAutocomplete: fetchDetailCountry
  })

  $('#autocomplete-input').keypress(function(event) {
    let keycode = (event.keycode ? event.keycode : event.which)
    if(keycode == '13') {
      fetchDetailCountry(this.value)
    }
  })
})

function fetchCountryList() {
  M.toast({html: `Fetching some usefull data....`})
  $.get(`${baseUrl}/countries`, function(data, status) {
    data.forEach(country => {
      countryList[country.name] = null
    });
    M.toast({html: `Hi, I'm ready to use.`})
  })
}

function fetchDetailCountry(name) {
  $('#country_detail')
    .html(`<div class="progress"><div class="indeterminate"></div></div>`)

  $.get(`${baseUrl}/countries/${name}`, function(data, status) {
    let html = ''
    if(data.length) {
      data.forEach(detail => {
        html += info(detail)
      })
    }
    $('#country_detail').html(html)
    $('.collapsible').collapsible();
  })
}




function info(data) {
  return `
  <!-- data from server here -->
  <div class="card">
    <div class="card-content">
      <div class="row">
        <div class="col s6">
          <h3>${data.name}</h3>
        </div>
        <div class="col s6">
          <img class="responsive-img" src="${data.flag}" alt="${data.name.toLowerCase()}-flag">
        </div>
      </div>
      <ul class="collapsible">
        <li>
          <div class="collapsible-header">
            <i class="material-icons">assignment</i>Basic Information
          </div>
          <div class="collapsible-body">
            <table>
              <tbody>
                <tr>
                  <td><strong>Other Name</strong></td>
                  <td>${data.altSpellings.join(', ')}</td>
                </tr>
                <tr>
                  <td><strong>Capital</strong></td>
                  <td>${data.capital}</td>
                </tr>
                <tr>
                  <td><strong>Region </strong></td>
                  <td>
                    <p>${data.region}</p>
                    <p>${data.subregion}</p>
                  </td>
                </tr>
                <tr>
                  <td><strong>Population</strong></td>
                  <td>${data.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                </tr>
                <tr>
                  <td><strong>Area(km2)</strong></td>
                  <td>${data.area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                </tr>
                <tr>
                  <td><strong>Currency</strong></td>
                  <td>
                    <p><strong>Code:</strong> ${data.currencies[0].code}</p>
                    <p><strong>Name:</strong> ${data.currencies[0].name}</p>
                    <p><strong>Symbol:</strong> ${data.currencies[0].symbol}</p>
                  </td>
                </tr>
                <tr>
                  <td><strong>Translations</strong></td>
                  <td>
                    <p>${Object.values(data.translations).join(', ')}</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </li>
        <li>
        <div class="collapsible-header">
          <i class="material-icons">add_box</i>Additional Info
        </div>
        <div class="collapsible-body">
        
        </div>
        </li>

      </ul>

    </div>
  </div>
  <!-- data from server here -->
  `
}