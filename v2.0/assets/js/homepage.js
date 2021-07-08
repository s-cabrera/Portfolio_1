//------- Light/Dark Theme toggle functions ------------//

var darkURL = "./v2.0/assets/images/dark_background.jpg";
var lightURL = "./v2.0/assets/images/background.jpg";
var currentTheme;

var switchToDarkTheme = (button) => {
    currentTheme = "dark";
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
    $('.right-content').css({
        'border-left':'3px solid var(--text_light)',
        'border-top':'3px solid var(--text_light)'
    })
    if($(window).width() <= 625){$('.right-content').css('border-left', 'none')}
    else{$('.right-content').css('border-top', 'none')} 
}
var switchToLightTheme = (button) => {
    currentTheme = "light";
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
    $('.right-content').css({
        'border-left':'3px solid var(--cyan)',
        'border-top':'3px solid var(--cyan)'
    })
    if($(window).width() <= 625){$('.right-content').css('border-left', 'none')}
    else{$('.right-content').css('border-top', 'none')}  
}

//Receive and save QueryString
const params = new URLSearchParams(document.location.search);
const theme = params.get("theme");
theme=="light"?switchToLightTheme($('button')):switchToDarkTheme($('button'));
currentTheme = theme;

// ------------ Event Listeners -------------------//
$('button').click((event)=>{
    $(event.target).hasClass('btn-outline-dark')?switchToDarkTheme(event.target):
    switchToLightTheme(event.target);
});

$(window).resize(function(){
    let color = (currentTheme == 'light')?'--cyan':'--text_light';
    if($(window).width() <= 625){
        $('.right-content').css({
            'border-left': 'none',
            'border-top':`3px solid var(${color})`
        })
    }
    else{
        $('.right-content').css({
            'border-left': `3px solid var(${color})`,
            'border-top': 'none'
        });
    }  
});
