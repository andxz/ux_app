
var mainBox = document.getElementById('main_box');

function homeButton() {
    
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;

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
<div class="ad_container" onClick="adExample_1()">
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
<div class="ad_container" onClick="adExample_2()">
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
<div class="ad_container" onClick="adExample_3()">
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
<div class="ad_container" onClick="adExample_4()">
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
<div class="ad_container" onClick="adExample_5()">
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
    
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
    
var firstPageContent = `
<div class="middle_parent_box">
    <div class="middle_main_box">
<div class="container">
<h2>Skapa Annons</h2> <br/><br/>

<h3>Personguppgifter:</h3><br/><br/>
<form>
  <div class="form-group">
    <label for="exampleFormControlInput1"><i class="fas fa-sort-alpha-up"> </i> Namn:</label>
    <input type="name" class="form-control" id="exampleFormControlInput1">
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1"><i class="fas fa-at"></i> </i>Email:</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="namn@exempel.com">
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1"><i class="fas fa-building"> </i>Stad:</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Stockholm</option>
      <option>Västerås</option>
      <option>Malmö</option>
      <option>Göteborg</option>
    </select>
  </div><br/>
<h3>Annons:</h3> <br/><br/>
  <div class="form-group">
    <label for="exampleFormControlInput1"><i class="fab fa-adn"> </i>Titel:</label>
    <input type="name" class="form-control" id="exampleFormControlInput1">
</div>
  <div class="form-group">
    <label for="exampleFormControlSelect1"><i class="fas fa-search"> </i>Finnes eller sökes?:</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Finnes</option>
      <option>Sökes</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1"><i class="fas fa-microphone"> </i> </i>Instrument:</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Gitarr</option>
      <option>Piano</option>
      <option>Trummor</option>
      <option>Bas</option>
      <option>Sång</option>
      <option>Övrigt</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1"><i class="fas fa-music"> </i>Genre:</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Rock</option>
      <option>Pop</option>
      <option>Hip Hop</option>
      <option>Klassisk</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1"><i class="fas fa-align-justify"> </i>Annonstext:</label>
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
    
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;

    
var firstPageContent = `
<div class="middle_parent_box">
    <div class="middle_main_box">
<div class="container">
<h2>Sök efter annonser:</h2> <br/><br/>
<form>
  <div class="form-group">
    <label for="exampleFormControlSelect1"><i class="fas fa-building"> </i>Stad:</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Stockholm</option>
      <option>Västerås</option>
      <option>Malmö</option>
      <option>Göteborg</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1"><i class="fas fa-search"> </i>Finnes eller sökes?:</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Finnes</option>
      <option>Sökes</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1"><i class="fas fa-microphone"> </i> </i>Instrument:</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Gitarr</option>
      <option>Piano</option>
      <option>Trummor</option>
      <option>Bas</option>
      <option>Sång</option>
      <option>Övrigt</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1"><i class="fas fa-music"> </i>Genre:</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Rock</option>
      <option>Pop</option>
      <option>Hip Hop</option>
      <option>Klassisk</option>
    </select>
  </div>
</form>
<br/>
<button class="button_style" onClick="homeButton()">Sök</button>
    </div>

    </div>
</div>
`;

    mainBox.innerHTML = firstPageContent;
}

function adExample_1() {
    
var firstPageContent = `
<div class="middle_parent_box">
    <div class="middle_main_box">
<div class="container">
<h2>GITARRIST SÖKER BAND</h2> <br/><br/>

<img src="images/guitar.png" width="25%" height="25%">
Jag heter boo jag söker band! hör av er <br/><br/>

<p>
<b>FINNES:</b> GITARRIST <br/>
<b>GENRE:</b> ROCK <br/>
<b>STAD:</b> STHLM <br/>
<b>Mailadress:</b> mail@mail.se <br/>
</p>
<p align="right"><a class="read_more" href="index.html">TILLBAKA</a></p>

    </div>

    </div>
</div>
`;

    mainBox.innerHTML = firstPageContent;
}

function adExample_2() {
    
var firstPageContent = `
<div class="middle_parent_box">
    <div class="middle_main_box">
<div class="container">
<h2>SÅNGARE SÖKES TILL BAND</h2> <br/><br/>

<img src="images/singer.png" width="25%" height="25%">
Vi söker nästa Bon Jovi! Hör av er! <br/><br/>

<p>
<b>SÖKES:</b> SÅNGARE <br/>
<b>GENRE:</b> POP <br/>
<b>STAD:</b> VÄSTERÅS <br/>
<b>Mailadress:</b> mail@mail.se <br/>
</p>
<p align="right"><a class="read_more" href="index.html">TILLBAKA</a></p>

    </div>

    </div>
</div>
`;

    mainBox.innerHTML = firstPageContent;
}

function adExample_3() {
    
var firstPageContent = `
<div class="middle_parent_box">
    <div class="middle_main_box">
<div class="container">
<h2>PIANOMÄSTARE FINNES</h2> <br/><br/>

<img src="images/piano.png" width="25%" height="25%">
Mina vänner kallar mig för Mozart, hör av er!

<p>
<b>FINNES:</b> PIANIST <br/>
<b>GENRE:</b> KLASSISKT <br/>
<b>STAD:</b> MALMÖ <br/>
<b>Mailadress:</b> mail@mail.se <br/>
</p>
<p align="right"><a class="read_more" href="index.html">TILLBAKA</a></p>

    </div>

    </div>
</div>
`;

    mainBox.innerHTML = firstPageContent;
}

function adExample_4() {
    
var firstPageContent = `
<div class="middle_parent_box">
    <div class="middle_main_box">
<div class="container">
<h2>PRODUCENT SÖKES</h2> <br/><br/>

<img src="images/producer.png" width="25%" height="25%">
Nästa Max Martin sökes!

<p>
<b>SÖKES:</b> PRODUCENT <br/>
<b>GENRE:</b> POP <br/>
<b>STAD:</b> STHLM <br/>
<b>Mailadress:</b> mail@mail.se <br/>
</p>
<p align="right"><a class="read_more" href="index.html">TILLBAKA</a></p>

    </div>

    </div>
</div>
`;

    mainBox.innerHTML = firstPageContent;
}

function adExample_5() {
    
var firstPageContent = `
<div class="middle_parent_box">
    <div class="middle_main_box">
<div class="container">
<h2>GITARRIST SÖKES</h2> <br/><br/>

<img src="images/guitar.png" width="25%" height="25%">
Vi behöver gitarrist till Bob Marley Coverband. <br/><br/>

<p>
<b>SÖKES:</b> GITARRIST <br/>
<b>GENRE:</b> REGGAE <br/>
<b>STAD:</b> GBG <br/>
<b>Mailadress:</b> mail@mail.se <br/>
</p>
<p align="right"><a class="read_more" href="index.html">TILLBAKA</a></p>

    </div>

    </div>
</div>
`;

    mainBox.innerHTML = firstPageContent;
}
    
homeButton();
