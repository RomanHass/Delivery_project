$(document).ready(function () {
    $('.header__burger').click(function (evenet) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_l.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_r.png"></button>',
        slidesToShow: 3,
        arrows: true,
        dots: true,
        centerMode: true,
        speed: 1500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    infinite: true,
                    arrows: false,
                    centerMode: false,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    arrows: false,
                    centerMode: false,
                }
            }
        ]
    });


    // Smooth scroll 
    $(document).ready(function () {
        $('a[href^="#"]').click(function () {
            const target = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(target).offset().top - 50
            }, 800)
        });
    });

    // Smooth scroll and pageup
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut()
        }
    });

    function valideForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Введите своё имя!",
                    minlength: jQuery.validator.format("Введите больше {0}-х символов!")
                },
                phone: "Введите свой номер!",
                email: {
                    required: "Введите свою почту",
                    email: "Неправильно введена почта"
                }
            }
        });
    };
    valideForms('#questions form');
    valideForms('#price form');

    $('input[name=phone]').mask("+375(99) 999-99-99");

    $('form').submit(function (e) {
        event.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");

            $('form').trigger('reset');
        });
        return false;
    });
});