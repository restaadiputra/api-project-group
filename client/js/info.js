function info(data) {
  return `
  <!-- data from server here -->
  <div class="card grey lighten-4">
    <div class="card-content">
      <div class="row">
        <div class="col s6">
          <h3>${data.name}</h3>
        </div>
        <div class="col s6">
          <img class="responsive-img z-depth-2" src="${data.flag}" alt="${data.name.toLowerCase()}-flag">
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
          <table id="country_calendar_${data.alpha2Code.toLowerCase()}">
          </table>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <!-- data from server here -->
  `
}