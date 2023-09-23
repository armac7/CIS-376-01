$(document).ready(function(){
    // Calls JSON to fill in sections
    // index.html
    IntroInfo();
    AboutMeInfo();

    $('.nav-tabs #small-beginnings').tab('show');

    setTimeout(() => {
        AOS.init();
    }, 120);

    $(".nav-tabs a").click(function () {
        $(this).tab('show');
    });
} );

// Calls all the info in the introduction section in a very bad and chaotic manner,
// but still better than having it all laid out on the HTML page.
function IntroInfo() {
    // for some reason, this link OCCASIONALLY works. Not sure why not always.
    fetch("lib/intro.json")
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < 2; i++) {
                $("#headshot-div").append(data[0].imgs[i]);
            }
            $("#intro-header").html(data[0].header);
            $("#intro-text").html(data[0].content);
        });
}

// Does the same thing as above but for the "about me" pills.
function AboutMeInfo() {
    let imgSrc="";
    fetch("https://raw.githubusercontent.com/Azyn7/CIS-376-01/main/lib/about-me.json")
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < 3; i++) {
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
