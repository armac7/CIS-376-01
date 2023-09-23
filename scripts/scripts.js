$(document).ready(function(){
    AboutMeInfo();

    $('.nav-tabs #small-beginnings').tab('show');

    setTimeout(() => {
        AOS.init();
    }, 120);

    $(".nav-tabs a").click(function () {
        $(this).tab('show');
    });
} );


// Calls all the info in the about me pills in a very bad and chaotic manner,
// but still better than having it all laid out on the HTML page.
function AboutMeInfo() {
    let imgSrc="";
    fetch("/lib/about-me.json")
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