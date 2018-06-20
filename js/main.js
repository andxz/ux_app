

var mainBox = document.getElementById('main_box');

function homeButton() {

var firstPageContent = `
<div class="middle_parent_box">
    <div class="middle_main_box">
        <div class="ads_first_page_title_left">
        <h2>SENASTE ANNONSERNA</h2>
        </div>
        <div class="ads_first_page_title_right">
            <h2>GENRE</h2>
        </div>
        <div class="ads_first_page_title_right">
            <h2>STAD</h2>
        </div>
        <hr>
<div class="ad_container" onClick="adExample()">
        <div class="ads_first_page_left">
<img src="images/guitar.png" width="50%" height="50%">
        </div>
        <div class="ads_first_page_text_left">
            <p>Gitarrist söker Band</p>
        </div>
        <div class="ads_first_page_right">
            <p>Stockholm</p>
        </div>
        <div class="ads_first_page_right">
            <p>Rock</p>
        </div>
</div>
<div class="ad_container" onClick="adExample()">
        <div class="ads_first_page_left">
<img src="images/guitar.png" width="50%" height="50%">
        </div>
        <div class="ads_first_page_text_left">
            <p>Gitarrist söker Band</p>
        </div>
        <div class="ads_first_page_right">
            <p>Stockholm</p>
        </div>
        <div class="ads_first_page_right">
            <p>Rock</p>
        </div>
</div>
<div class="ad_container" onClick="adExample()">
        <div class="ads_first_page_left">
<img src="images/guitar.png" width="50%" height="50%">
        </div>
        <div class="ads_first_page_text_left">
            <p>Gitarrist söker Band</p>
        </div>
        <div class="ads_first_page_right">
            <p>Stockholm</p>
        </div>
        <div class="ads_first_page_right">
            <p>Rock</p>
        </div>
</div>
<div class="ad_container" onClick="adExample()">
        <div class="ads_first_page_left">
<img src="images/guitar.png" width="50%" height="50%">
        </div>
        <div class="ads_first_page_text_left">
            <p>Gitarrist söker Band</p>
        </div>
        <div class="ads_first_page_right">
            <p>Stockholm</p>
        </div>
        <div class="ads_first_page_right">
            <p>Rock</p>
        </div>
</div>
<div class="ad_container" onClick="adExample()">
        <div class="ads_first_page_left">
<img src="images/guitar.png" width="50%" height="50%">
        </div>
        <div class="ads_first_page_text_left">
            <p>Gitarrist söker Band</p>
        </div>
        <div class="ads_first_page_right">
            <p>Stockholm</p>
        </div>
        <div class="ads_first_page_right">
            <p>Rock</p>
        </div>
</div>



    </div>
</div>
`;
    mainBox.innerHTML = firstPageContent;
}

function createAdButton() {
    
var firstPageContent = `
<div class="middle_parent_box">
    <div class="middle_main_box">
skapa annons
    </div>
</div>
`;

    mainBox.innerHTML = firstPageContent;
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
