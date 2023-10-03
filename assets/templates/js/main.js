ymaps.ready(init);
var myMap;

function init() {
    if (document.getElementById('map') != null) {
        myMap = new ymaps.Map("map", {
            center: [55.919438, 37.772550],
            behaviors: ['default', 'scrollZoom'],
            zoom: 15,
            controls: []
        });

        myPlacemark = new ymaps.Placemark([55.919438, 37.772550], {
            hintContent: 'Atom group',
            balloonContent: '<div class="ball_content"><div class="ball_name">Atom group</div></div>',
            clusterCaption: 'Atom group',
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'assets/templates/img/marker.png',
            iconImageSize: [36, 36],
            iconImageOffset: [-10, -40]
        });

        myMap.geoObjects.add(myPlacemark);
    }
}

$(document).ready(function () {

    $('.projects-slider').slick({
        dots: false,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        cssEase: 'linear',
        centerMode: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    fade: true,
                    variableWidth: false,
                    adaptiveHeight: true,
                    slidesToShow: 1
                }
            }
        ]
    });

    if ($('.photo-slider>div').length <= 4) {
        $('.photo-slider').addClass('no-pointer');
    }

    $('.photo-slider').slick({
        dots: false,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: 'linear',
        infinite: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    fade: true,
                    variableWidth: false,
                    adaptiveHeight: true,
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.logo-slider').slick({
        dots: false,
        arrows: false,
        slidesToShow: 6,
        pauseOnHover: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToScroll: 1,
        variableWidth: true,
        cssEase: 'linear',
        infinite: true,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 4
                }
            }, {
                breakpoint: 480,
                settings: {
                    variableWidth: false,
                    centerMode: true,
                    centerPadding: '90px',
                    slidesToShow: 1
                }
            }
        ]
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $('.scroll-div').fadeIn(400);
        } else {
            $('.scroll-div').fadeOut(400);
        }
    });

    $('#scroll_top').click(function () {
        $('html, body').animate({scrollTop: 0}, 400);
        return false;
    });

    var $menu = $(".fix");
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $menu.addClass("fixed");
            $("main").addClass('body_scroll');
        } else if ($(this).scrollTop() <= 20 && $menu.hasClass("fixed")) {
            $menu.removeClass("fixed");
            $("main").removeClass('body_scroll');
        }
    });


    $('*[data-scroll]').click(function () {
        $('.mob-menu').fadeOut(450);
        $('body').removeClass('overflow-modal');
        if ($("*").is("." + $(this).attr('data-scroll'))) {
            $('html, body').animate({scrollTop: ($("." + $(this).attr('data-scroll')).offset().top) - 100}, 1000);
        }
        return false;
    });

    $('.tab-container-zag').on('click', function () {
        if ($(this).hasClass('opened')) {
            $(this).removeClass('opened');
            $(this).next('.tab-container-txt').slideUp(450);
        } else {
            $('.tab-container-zag').removeClass('opened');
            $('.tab-container-txt').slideUp(450);
            $(this).addClass('opened');
            $(this).next('.tab-container-txt').slideDown(450);
        }
    });

    $('.tel').each(function () {
        var tel = $(this).text();
        var telnew = tel.replace(/[^+\d]/g, '');
        $(this).attr('href', 'tel:' + telnew);
    });

    $('.fa-times').on('click', function () {
        $('.thanks').fadeOut(500);
        $('.mob-menu-container').fadeOut(400);
        $('.black_theme_modal').fadeOut(400);
    });

    $('.call').on('click', function () {
        $('.mob-menu').fadeOut(500);
        $('.call_modal').fadeIn(500);
    });

    $('.call_modal').on('click', function (event) {
            if(event.target.classList.contains('call_modal')){
                $('.fa-times').click();
            }
    });

    $('.calc-modal').on('click', function (event) {
            if(event.target.classList.contains('calc-modal')){
                $('.fa-times').click();
            }
    });


    $('.calc-modal-open').on('click', function () {
        var cat = $('#FORM1_field1').val();
        var dog = $('#FORM1_field2').val();
        var kitten = $('#FORM1_field3').val();
        if (cat != '') {
            $('label[for="FORM5_field1"]').addClass('active');
            $('#FORM5_field1').val(cat);
        }
        if (dog != '') {
            $('label[for="FORM5_field2"]').addClass('active');
            $('#FORM5_field2').val(dog);
        }
        if (kitten != '') {
            $('label[for="FORM5_field3"]').addClass('active');
            $('#FORM5_field3').val(kitten);
        }
        $('.mob-menu').fadeOut(500);
        $('.calc-modal').fadeIn(500);
    });

    $('.mob-menu-btn').on('click', function () {
        $('.mob-menu').fadeIn(500);
    });

    $('.mob-menu .close').on('click', function () {
        $('.mob-menu').fadeOut(500);
    });

    $('.change').on('click', function () {
        var cat = $('#FORM1_field1').val();
        var dog = $('#FORM1_field2').val();
        $('#FORM1_field2').val(cat);
        $('#FORM1_field1').val(dog);
    });

});

var inspMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();
if (dd < 10) {
    dd = '0' + dd
}
if (mm < 10) {
    mm = '0' + mm
}

today = yyyy + '-' + mm + '-' + dd;
$('input[type="date"]').attr("min", today);

//работа с формой

$('.form .form__form-block input, .form .form__form-block select, .form .form__form-block textarea').focus(function () {
    if ($(this).parent('.form__form-block').children('label').hasClass('error')) {
        $(this).parent('.form__form-block').children('label').html($(this).parent('.form__form-block').children('label').attr('data-success')).removeClass('error');
    }
    if ($(this).parent().parent('.form__form-block').children('label').hasClass('error')) {
        $(this).parent().parent('.form__form-block').children('label').html($(this).parent().parent('.form__form-block').children('label').attr('data-success')).removeClass('error');
    }
    $(this).parent('.form__form-block').children('label').addClass('active');
})

$('.form .form__form-block input, .form .form__form-block select, .form .form__form-block textarea').blur(function () {
    if (!$(this).val()) {
        $(this).parent('.form__form-block').children('label').removeClass('active');
    }

})

$('.form .form__form-block .form-block__number-field').change(function () {
    var my = $(this).val().replace(/[^0-9]/gim, '');
    if (my.length * 1 == 10) {
        my = '7' + my.substr(0);
    }
    if (my.charAt(0) * 1 == 8) {
        my = '7' + my.substr(1);
    }
    $(this).val(my);
});

$('.form__form-select input').change(function () {
    if ($(this).is(':checked')) {
        $(this).parent().removeClass('active');
    }
});

$("form.form").submit(function (e) {
    i = true;
    e.preventDefault();
    mForm = $(this);


    $(mForm).find('.form-block__obligatory-field').each(function () {
        if ($.trim($(this).val()) == '') {
            $(this).parent().children('label').html($(this).parent().children('label').attr('data-error')).addClass('error');
            i = false;
        }

        if ($.trim($(this).val()) == '') {
            $(this).parent().parent().children('label').html($(this).parent().parent().children('label').attr('data-error')).addClass('error');
            i = false;
        }


        if ($(this).hasClass('form-block__phone-field')) {
            if ((($(this).val().length) < 6) || (($(this).val().length) > 11)) {
                $(this).parent().children('label').html($(this).parent().children('label').attr('data-error')).addClass('error');
                i = false;
            }
        }
        if ($(this).hasClass('form-block__phone-field-11')) {
            if (($(this).val().length) != 11) {
                $(this).parent().children('label').html($(this).parent().children('label').attr('data-error')).addClass('error');
                i = false;
            }
        }
    });

    $(mForm).find('.form-block__mail-field').each(function () {
        if (($.trim($(this).val()) != '') && (!inspMail.test($.trim($(this).val())))) {
            $(this).parent().children('label').html($(this).parent().children('label').attr('data-error')).addClass('error');
            i = false;
        }
    });

    $(mForm).find('.form__form-select input').each(function () {
        if (!$(this).is(':checked')) {
            i = false;
            $(this).parent().addClass('active');
        }
    });

    if (i) {
        $.ajax({
            url: ("/forms.php"),
            data: $(mForm).serialize(),
            dataType: 'html',
            type: "post",
            success: function (msg) {
                $(mForm)[0].reset();
                $(mForm).find('label').each(function () {
                    $(this).removeClass('error');
                    $(this).removeClass('active');
                });
                if ($("div").is(".black_theme_modal")) {
                    $(".black_theme_modal").fadeOut(500);
                }
                $('.thanks').fadeIn(500);
                setTimeout(function () {
                    $('.thanks').fadeOut(500);
                }, 3000);
            },
            error: function (XMLHttpRequest) {
                alert('Ошибка');
            }
        });
    }
});
