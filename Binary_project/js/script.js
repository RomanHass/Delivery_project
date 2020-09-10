function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

function ibg() {
    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}
ibg();

$(window).resize(function (event) {
    mainblock();
});
function mainblock() {
    var h = $(window).outerHeight();
    $('.mainblock').css('min-height', h);
}
mainblock();

if ($('.gallery').length > 0) {
    baguetteBox.run('.gallery', {
    });
}

$('.filter__item').click(function (event) {
    var i = $(this).data('filter');
    if (i == 1) {
        $('.portfolio__column').show();
    } else {
        $('.portfolio__column').hide();
        $('.portfolio__column.f-' + i).show();
    }
    $('.filter__item').removeClass('active');
    $(this).addClass('active');

    return false;
});

$(window).scroll(function (event) {
    let s = 0 - $(this).scrollTop() / 3;
    $('.mainblock__img').css('transform', 'translate3d(0,' + s + 'px, 0)');
});

$(document).ready(function () {
    $('a[href^="#"]').click(function () {
        const target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 50
        }, 800)
    });
});