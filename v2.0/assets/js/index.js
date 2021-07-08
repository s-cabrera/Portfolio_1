// Light and Dark Theme toggle
var darkURL = "./v2.0/assets/images/dark_background.jpg";
var lightURL = "./v2.0/assets/images/background.jpg";

//Default theme is light
$('#redirect').attr('href',`./homepage.html?url=${lightURL}&theme=light`);

var switchToDarkTheme = (button) => {
    $(button).addClass('btn-outline-light').removeClass('btn-outline-dark');
    $(button).text("Light");
    $(".img-section").css("background-image",`url(${darkURL})`);
    $('#redirect').attr('href',`./homepage.html?utheme=dark`);
}
var switchToLightTheme = (button) => {
    $(button).addClass('btn-outline-dark').removeClass('btn-outline-light');
    $(button).text("Dark");
    $(".img-section").css("background-image",`url(${lightURL})`);
    $('#redirect').attr('href',`./homepage.html?theme=light`);
}
$('button').click((event)=>{
    $(event.target).hasClass('btn-outline-dark')?switchToDarkTheme(event.target):
    switchToLightTheme(event.target);
});
