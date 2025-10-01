$(function () {
    $('#navbar').load('/components/navbar.html');  
    $('#skill-menu').load('components/skills.html', function() {
        AOS.refresh(); // re-initialize animations after loading
    });
    $('#footer').load('/components/footer.html');
});