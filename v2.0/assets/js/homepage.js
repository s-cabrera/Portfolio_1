//------- Light/Dark Theme toggle functions ------------//

var darkURL = "./v2.0/assets/images/dark_background.jpg";
var lightURL = "./v2.0/assets/images/background.jpg";

var switchToDarkTheme = (button) => {
    $(button).addClass('btn-outline-light').removeClass('btn-outline-dark');
    $(button).text("Light");
    $(".img-section").css("background-image",`url(${darkURL})`);
}
var switchToLightTheme = (button) => {
    $(button).addClass('btn-outline-dark').removeClass('btn-outline-light');
    $(button).text("Dark");
    $(".img-section").css("background-image",`url(${lightURL})`);
}

//Receive and save QueryString
const params = new URLSearchParams(document.location.search);
const url = params.get("url");
const theme = params.get("theme");
console.info(theme); //show C
theme=="light"?switchToLightTheme($('button')):switchToDarkTheme($('button'));


// ------------ Event Listeners -------------------//
$('button').click((event)=>{
    $(event.target).hasClass('btn-outline-dark')?switchToDarkTheme(event.target):
    switchToLightTheme(event.target);
});