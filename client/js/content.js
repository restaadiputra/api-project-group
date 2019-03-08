let content = `
<main>
  <div class="container">
    <div class="row">
      <div class="col s12 m4 l4 ">
        <h5>Looking for any country?</h5>

        <!-- search -->
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">search</i>
            <input type="text" id="autocomplete-input" class="autocomplete">
            <label for="autocomplete-input">Enter Country Here</label>
          </div>
        </div>
      </div>
      <!-- country details -->
      <div class="col s12 m8 l8 ">
        <div id="country_detail"></div>
      </div>
    </div>
  </div>
</main>

`