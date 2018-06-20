

var mainBox = document.getElementById('main_box');

function homeButton() {

var firstPageContent = `
<div class="middle_parent_box">
    <div class="middle_main_box">
<div class="title_container">
        <div class="ads_first_page_title_left">
        <h2>SENASTE ANNONSERNA</h2>
        </div>
        <div class="ads_first_page_title_right">
            <h2>GENRE</h2>
        </div>
        <div class="ads_first_page_title_right">
            <h2>STAD</h2>
        </div>
        <div class="hr"><hr></div>
        </div>
<div class="ad_container" onClick="adExample()">
        <div class="ads_first_page_left">
<img src="images/guitar.png" width="50%" height="50%">
        </div>
        <div class="ads_first_page_text_left">
            <p>Gitarrist söker Band</p>
        </div>
        <div class="ads_first_page_right">
            <p>STHLM</p>
        </div>
        <div class="ads_first_page_right">
            <p>Rock</p>
        </div>
</div>
<div class="ad_container" onClick="adExample()">
        <div class="ads_first_page_left">
<img src="images/singer.png" width="50%" height="50%">
        </div>
        <div class="ads_first_page_text_left">
            <p>Sångare sökes till band</p>
        </div>
        <div class="ads_first_page_right">
            <p>Västerås</p>
        </div>
        <div class="ads_first_page_right">
            <p>Pop</p>
        </div>
</div>
<div class="ad_container" onClick="adExample()">
        <div class="ads_first_page_left">
<img src="images/piano.png" width="50%" height="50%">
        </div>
        <div class="ads_first_page_text_left">
            <p>Pianomästare finnes</p>
        </div>
        <div class="ads_first_page_right">
            <p>Malmö</p>
        </div>
        <div class="ads_first_page_right">
            <p>KLASSISK</p>
        </div>
</div>
<div class="ad_container" onClick="adExample()">
        <div class="ads_first_page_left">
<img src="images/producer.png" width="50%" height="50%">
        </div>
        <div class="ads_first_page_text_left">
            <p>Producent sökes</p>
        </div>
        <div class="ads_first_page_right">
            <p>STHLM</p>
        </div>
        <div class="ads_first_page_right">
            <p>POP</p>
        </div>
</div>
<div class="ad_container" onClick="adExample()">
        <div class="ads_first_page_left">
<img src="images/guitar.png" width="50%" height="50%">
        </div>
        <div class="ads_first_page_text_left">
            <p>Gitarrist sökes</p>
        </div>
        <div class="ads_first_page_right">
            <p>GBG</p>
        </div>
        <div class="ads_first_page_right">
            <p>REGGAE</p>
        </div>
</div>

<p align="right"><a class="read_more" href="#">MER ANNONSER</a></p>

    </div>
</div>
`;
    mainBox.innerHTML = firstPageContent;
}

function createAdButton() {
    
var firstPageContent = `
<div class="middle_parent_box">
    <div class="middle_main_box">
<div class="container">
<h2>Skapa Annons</h2> <br/><br/>

<h3>Personguppgifter:</h3><br/><br/>
<form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Namn:</label>
    <input type="name" class="form-control" id="exampleFormControlInput1">
    <label for="exampleFormControlInput1">Email:</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="namn@exempel.com">
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Stad:</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Stockholm</option>
      <option>Västerås</option>
      <option>Malmö</option>
      <option>Göteborg</option>
    </select>
  </div><br/>
<h3>Annons:</h3> <br/><br/>
    <label for="exampleFormControlInput1">Titel:</label>
    <input type="name" class="form-control" id="exampleFormControlInput1">
  <div class="form-group">
    <label for="exampleFormControlSelect1">Finnes eller sökes?:</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Finnes</option>
      <option>Sökes</option>
    </select>
    <label for="exampleFormControlSelect1">Instrument:</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Gitarr</option>
      <option>Piano</option>
      <option>Trummor</option>
      <option>Bas</option>
      <option>Sång</option>
      <option>Övrigt</option>
    </select>
    <label for="exampleFormControlSelect1">Genre:</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Rock</option>
      <option>Pop</option>
      <option>Hip Hop</option>
      <option>Klassisk</option>
    </select>

  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Annonstext:</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
</form>

<button class="button_style" onClick="submitedAd()">Skicka</button>
<div id="submited"></div>
    </div>

    </div>
</div>
`;

    mainBox.innerHTML = firstPageContent;
}

function submitedAd() {
    
  document.getElementById("submited").innerHTML = '<h4>Din Annons är Inskickad!</h4>';
    
}

function searchAd() {
    
var firstPageContent = `
<div class="middle_parent_box">
    <div class="middle_main_box">
sök efter annons här med dropdowns
    </div>
</div>
`;

    mainBox.innerHTML = firstPageContent;
}

function adExample() {
    
var firstPageContent = `
<div class="middle_parent_box">
    <div class="middle_main_box">
exempel på annons
    </div>
</div>
`;

    mainBox.innerHTML = firstPageContent;
}
    
    homeButton();
