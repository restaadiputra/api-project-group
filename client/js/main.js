const baseUrl = 'http://localhost:3000/api'
let countryList = {}

$(document).ready(function() {
  

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
    let list = []
    let html = ''
    if(data.length) {
      data.forEach(detail => {
        html += info(detail)
        list.push(detail.alpha2Code)
      })
    }
    $('#country_detail').html(html)
    $('.collapsible').collapsible();
    list.forEach(country => {
      fetchHolidays(country.toUpperCase())
    })
  })
}

function fetchHolidays(countryAlphaCode) {
  $(`#country_calendar_${countryAlphaCode.toLowerCase()}`)
    .html(`<div class="progress"><div class="indeterminate"></div></div>`)

  $.get(`${baseUrl}/events/${countryAlphaCode.toUpperCase()}`, function(data, status) {
    console.log(data.response.holidays)
    let calendar = ''
    if(data.response.holidays.length) {
      data.response.holidays.forEach(cal => {
        calendar += generateCalendar(cal)
      })
    }
    $(`#country_calendar_${countryAlphaCode.toLowerCase()}`).html(calendar)

  })
}

function generateMainContent() {
  $(`#content`).html(loginContent)
}