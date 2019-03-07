module.exports = {
  info: function(data) {
    return `
    <!-- data from server here -->
    <div class="card">
      <div class="card-content">
        <div class="row">
          <div class="col s6">
            <h2>${data.name}</h2>
          </div>
          <div class="col s6">
            <img class="responsive-img" src="${data.flag}" alt="${data.name.toLowerCase()}-flag">
          </div>
        </div>
        <ul class="collapsible">
          <li>
            <div class="collapsible-header">
              <i class="material-icons">assignment</i><strong>Basic Information</strong>
            </div>
            <div class="collapsible-body">
              <table>
                <tbody>
                  <tr>
                    <td><strong>Other Name</strong></td>
                    <td>${data.altSpellings.join(', ')}</td>
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
                      <p><strong>Code:</strong> IDR</p>
                      <p><strong>Name:</strong> Indonesian rupiah</p>
                      <p><strong>Symbol:</strong> Rp</p>
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
        </ul>

      </div>
    </div>
    <!-- data from server here -->
    `
  }
}