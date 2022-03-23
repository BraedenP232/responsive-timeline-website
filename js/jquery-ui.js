// Scrolling Animation Function That Overrides Default Link Function
$(document).on('click', 'a[href^="#"]', function(event) {
    // if (event.getElementById('.myLinks')) {
    //     return
    // }
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 100
    }, 500);
});

// Highlighting Effect Function For Navbar Links To Highlight Text
$(function() {
    $('.navbar a').on("click", function() {
        var navbarlink = $(this).attr('href');
        $('div', navbarlink).children()
            .effect("highlight", { color: '#8cfff7' }, 1800);
    })
})

// Highlighting Effect Function For Burger Links To Highlight Text
$(function() {
    $('#myLinks a').on("click", function() {
        var burgerlink = $(this).attr('href');
        $('div', burgerlink).children()
            .effect("highlight", { color: '#8cfff7' }, 1800);
    })
})

// Burger Navigation Function To Show Links
$(function() {
    $('.topnav .icon').on("click", function() {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    })
})

// Button function to show and hide tooltip
$(function() {
    $('.toolbtn').on('click', function() {
        var toolb = document.getElementById('tooltipbtn');
        var tooltip = document.getElementById('tt');
        if (tooltip.style.display === "block") {
            tooltip.style.display = "none";
            toolb.style.background = 'rgba(255, 171, 75, 1)';
            toolb.style.border = '2px solid #ce9238';
        } else {
            tooltip.style.display = "block";
            toolb.style.background = 'rgb(75, 255, 246)';
            toolb.style.border = '2px solid #3886ce';
        }
    })
})
