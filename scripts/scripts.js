let fileName = getCurrentFileName();
$(document).ready(function(){
    setTimeout(() => {
        AOS.init();
    }, 120);

    navScrollChange();

    // INDEX PAGE SCRIPTS
    // Calls JSON to fill in sections
    // index.html
    IntroInfo();
    AboutMeInfo();

    $('.nav-tabs #small-beginnings').tab('show');

    $(".nav-tabs a").click(function () {
        $(this).tab('show');
    });

    // portfolio.html
    fetchPortfolio();
} );

function getCurrentFileName(){
    var pagePathName= window.location.pathname;
    return pagePathName.substring(pagePathName.lastIndexOf("/") + 1);
}

// Inverses color scheme of the navbar
function navScrollChange() {
    let navbarCyber = $('#navbar');
    let navbarBrand = $('.navbar-brand');
    let navLink = $('.navbar-cyberpunk .navbar-nav .nav-link');
    let navbarIcon = $('#navbar-icon');
    let active = $('#active');
    let minScroll = 0;
    let width = $(window).width()
    if (fileName === "interests.html") {
        return;
    } else {
        // Determines which file is selected and, based on the current width of the screen, where the change should occur
        switch (fileName) {
            case "index.html": 
                if (width > 900) {
                    minScroll = 700;
                } else if (width > 700) {
                    minScroll = 1685;
                } else if (width > 200) {
                    minScroll = 1490;
                }
                break;
            case "portfolio.html":
                if (width > 900) {
                    minScroll = 530;
                } else {
                    minScroll = 500;
                }
                break;
            default:
                minScroll = 600;
        }

        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            if (scroll > minScroll) {
                navbarCyber.removeClass('navbar-cyberpunk');
                navbarCyber.addClass('navbar-cyberpunk-alt');
                navbarBrand.css("color", "var(--cyber-yellow)");
                navbarIcon.addClass('navbar-toggler-icon-alt');
                navLink.css("color", "var(--cyber-yellow)");
                active.addClass("active-alt");
                active.removeClass("active");
            } else {
                navbarCyber.removeClass('navbar-cyberpunk-alt');
                navbarCyber.addClass('navbar-cyberpunk');
                navbarBrand.css("color", "var(--cyber-grey)");
                navbarIcon.removeClass('navbar-toggler-icon-alt');
                navLink.css("color", "var(--cyber-grey)");
                active.addClass("active");
                active.removeClass("active-alt");
                
            }
        });
    }
}

// Calls all the info in the introduction section in a very bad and chaotic manner,
// but still better than having it all laid out on the HTML page.
function IntroInfo() {
    let itemsInFile = 2;
    // for some reason, this link OCCASIONALLY works. Not sure why not always.
    fetch("https://raw.githubusercontent.com/Azyn7/CIS-376-01/main/lib/intro.json")
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < itemsInFile; i++) {
                $("#headshot-div").append(data[0].imgs[i]);
            }
            $("#intro-header").html(data[0].header);
            $("#intro-text").html(data[0].content);
        });
}

// Does the same thing as above but for the "about me" pills.
function AboutMeInfo() {
    let imgSrc="";
    let itemsInFile = 3;
    fetch("https://raw.githubusercontent.com/Azyn7/CIS-376-01/main/lib/about-me.json")
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < itemsInFile; i++) {
                switch (i) {
                    case 0:
                        $('#nav-first-tab').html(data[0].tab[i]);
                        $('#nav-first-header').html(data[0].header[i]);
                        $('#nav-first-content').html(data[0].content[i]);
                        break;
                    case 1:
                        $('#nav-second-tab').html(data[0].tab[i]);
                        $('#nav-second-header').html(data[0].header[i]);
                        $('#nav-second-content').html(data[0].content[i]);
                        imgSrc = "<img id=\"nav-second-img\" class=\"img-fluid cyber-grey-border\" src=\"" + data[0].img[i] + "\">"
                        $('#nav-second').append(imgSrc);
                        break;
                    case 2:
                        $('#nav-third-tab').html(data[0].tab[i]);
                        $('#nav-third-header').html(data[0].header[i]);
                        $('#nav-third-content').html(data[0].content[i]);
                        imgSrc = "<img id=\"nav-third-img\" class=\"img-fluid cyber-grey-border\" src=\"" + data[0].img[i] + "\">"
                        $('#nav-third').append(imgSrc);
                        break;
                }
            }
        });

}

// Gets content for Portfolio page from JSON file
function fetchPortfolio() {
    fetch("https://raw.githubusercontent.com/Azyn7/CIS-376-01/main/lib/portfolio.json")
        .then(response => response.json())
        .then(data => {
            $('#portfolio-h1').html(data[0].header);
            $('#portfolio-p').html(data[0].content);
            $('#work-h2').html(data[1].header);
            $('#c376-header').html(data[2].header);
            $('#c376-p').html(data[2].content);
            $('#portfolio-card-head').html(data[3].header);
            $('#portfolio-card-text').html(data[3].content);
        });
}