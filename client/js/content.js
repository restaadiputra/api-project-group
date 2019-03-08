let mainContent = `
  <div class="container">
    <div class="row">
      <div class="col s12 m4 l4 ">
        <h5>Looking for any country?</h5>

        <!-- search -->
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix white-text"">search</i>
            <input type="text" id="autocomplete-input" class="autocomplete white-text">
            <label for="autocomplete-input" class="white-text"">Enter Country Here</label>
          </div>
        </div>
      </div>
      <!-- country details -->
      <div class="col s12 m8 l8 ">
        <div id="country_detail"></div>
      </div>
    </div>
  </div>
`

let loginContent = `
  <div class="container">
    <div class="row">
      <div class="col s6 offset-s3 valign-wrapper center-align">
        <div class="card">
          <div class="card-content">
            <p>Google Login</p>
          </div>
          <div class="card-content">
          <div id="g-signin-button" class="g-signin2" data-longtitle="true" data-onsuccess="onSignIn"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
`