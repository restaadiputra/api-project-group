
// Sign In
function onSignIn(googleUser) {
  const id_token = googleUser.getAuthResponse().id_token;
  axios
    .post('http://localhost:3000/tokensignin', { idtoken: id_token })
    .then(function({ data }) {

      // IMPORTANT! Saves the accessToken from server
      localStorage.setItem('accessToken', data.accessToken);

      document.getElementById('g-signin-button').style.display = 'none';
      document.getElementById('signin-first').style.display = 'none';
      document.getElementById('user-info').style.display  = 'block';
      document.getElementById('signout-button').style.display = 'block';
      document.getElementById('user-info').innerHTML = `
        <img src="${data.picture}" alt="Profile Picture">
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
      `;
    })
    .catch(function(err) {
      console.error(err);
    });
}

// Sign Out
function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2
    .signOut()
    .then(function () {

      localStorage.removeItem('accessToken');

      document.getElementById('signin-first').style.display = 'block';
      document.getElementById('user-info').innerHTML = ``;
      document.getElementById('user-info').style.display = 'none';
      document.getElementById('g-signin-button').style.display = 'block';
      document.getElementById('signout-button').style.display = 'none';
    })
    .catch(function(err) {
      console.error(err);
    });
}