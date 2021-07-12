//------- Light/Dark Theme toggle functions ------------//

var darkURL = "./v2.0/assets/images/dark_background.jpg";
var lightURL = "./v2.0/assets/images/background.jpg";
var currentTheme;

console.log(localStorage);

var switchToDarkTheme = (button) => {
    currentTheme = "dark";
    localStorage.removeItem('theme');
    localStorage.setItem('theme', currentTheme);
    $(button).addClass('btn-outline-light').removeClass('btn-outline-dark');
    $(button).text('Light');
    $('.img-section').css('background-image',`url(${darkURL})`);
    $('body').css('background-color','rgb(24, 26, 26)');
    $('#about-me, #contact-me-main, #contact-me-main a').css('color', 'var(--text_light)');
    $('header').css({
        'border-bottom':'5px solid var(--dark_cyan)',
        'background-color':'var(--dark_blue)'
    })
    $('footer').css({
        'border-top':'5px solid var(--dark_cyan)',
        'background-color':'var(--dark_blue)'
    })
    $('article > section > h2').css({
        'border-right':'3px solid var(--text_light)',
        'border-bottom':'3px solid var(--text_light)'
    })
    if($(window).width() <= 750){$('article > section > h2').css('border-right', 'none')}
    else{$('article > section > h2').css('border-bottom', 'none')} 
}
var switchToLightTheme = (button) => {
    currentTheme = "light";
    localStorage.removeItem('theme');
    localStorage.setItem('theme', currentTheme);
    $(button).addClass('btn-outline-dark').removeClass('btn-outline-light');
    $(button).text('Dark');
    $('.img-section').css('background-image',`url(${lightURL})`);
    $('body').css('background-color','rgb(192, 207, 207)');
    $('#about-me, #contact-me-main, #contact-me-main a').css('color', 'var(--text_dark)');
    $('header').css({
        'border-bottom':'5px solid var(--cyan)',
        'background-color':'var(--blue)'
    })
    $('footer').css({
        'border-top':'5px solid var(--cyan)',
        'background-color':'var(--blue)'
    })
    $('article > section > h2').css({
        'border-right':'3px solid var(--cyan)',
        'border-bottom':'3px solid var(--cyan)'
    })
    if($(window).width() <= 750){$('article > section > h2').css('border-right', 'none')}
    else{$('article > section > h2').css('border-bottom', 'none')}  

}

// //Receive and save QueryString
// const params = new URLSearchParams(document.location.search);
// const theme = params.get("theme");
// theme=="light"?switchToLightTheme($('button')):switchToDarkTheme($('button'));
// currentTheme = theme;

currentTheme = localStorage.getItem('theme');
currentTheme=="light"?switchToLightTheme($('button')):switchToDarkTheme($('button'));

// ------------ Event Listeners -------------------//
$('button').click((event)=>{
    $(event.target).hasClass('btn-outline-dark')?switchToDarkTheme(event.target):
    switchToLightTheme(event.target);
});

$(window).resize(function(){
    let color = (currentTheme == 'light')?'--cyan':'--text_light';
    if($(window).width() <= 750){
        $('article > section > h2').css({
            'border-right': 'none',
            'border-bottom':`3px solid var(${color})`
        })
    }
    else{
        $('article > section > h2').css({
            'border-right': `3px solid var(${color})`,
            'border-bottom': 'none'
        });
    }  
});

$('.project-github').click(function(event){
    console.log('Github icon clicked');
    window.open(`${$(event.target).attr('href')}`,'_blank')
});