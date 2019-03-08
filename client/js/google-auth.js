
// Sign In
function onSignIn(googleUser) {
  $('.dropdown-trigger').dropdown();
  const id_token = googleUser.getAuthResponse().id_token;
  $.post('http://localhost:3000/api/signin/google', { idtoken: id_token }, function(data, status) {
    // IMPORTANT! Saves the accessToken from server
    localStorage.setItem('accessToken', data.accessToken);
    document.getElementById('option').innerHTML = `
      <a class='dropdown-trigger btn ' href='#' data-target='dropdown1' id="username"></a>
  
      <ul id='dropdown1' class='right dropdown-content'>
        <li><a href="#!"><h6 id="email"></h6></a></li>
        <li id="logout">
          <a href="#" onclick="signOut();" id="signout-button"><h6>Sign out</h6></a>
        </li>
      </ul>
    `
    $('.dropdown-trigger').dropdown();
    document.getElementById('g-signin-button').style.display = 'none';
    document.getElementById('username').innerHTML = data.name
    document.getElementById('email').innerHTML = data.email
    document.getElementById('content').innerHTML = mainContent
    
    fetchCountryList()
    
    $('input.autocomplete').autocomplete({ 
      data: countryList,
      onAutocomplete: fetchDetailCountry
    })
  })
}

// Sign Out
function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2
    .signOut()
    .then(function () {
      // $('#content').html(loginContent)
      localStorage.removeItem('accessToken');

      // document.getElementById('g-signin-button').style.display = 'block';
      document.getElementById('option').innerHTML = ''
      document.getElementById('content').innerHTML = `
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
      location.reload();
    })
    .catch(function(err) {
      console.error(err);
    });
}