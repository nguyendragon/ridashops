$(document).ready(function() {
    $('.close').click(function() { $('.app-download-nav').addClass('closer') });
    $('.van-member-item1, .van-parity-item1').click(function() { window.location = '/index' });
    $('.van-index-item2, .van-member-item2').click(function() { window.location = '/parity/tran' });
    $('.van-index-item3').click(function() { window.location = '/account/login' });
    $('.van-index-item4').click(function() { window.location = '/home/search' });
    $('.index_about_nav span:eq(0)').click(function() { window.location = '/about/us' });
    $('.index_about_nav span:eq(1)').click(function() { window.location = '/about/privacyPolicy' });
    $('.index_about_nav span:eq(2)').click(function() { window.location = '/about/rda' });
    $('.index_about_nav span:eq(3)').click(function() { window.location = '/about/appStatement' });
    $('.index_about_nav span:eq(4)').click(function() { window.location = '/about/refund' });
    $('.index_about_nav span:eq(5)').click(function() { window.location = '/about/condition' });
    $('.index_about_nav span:eq(6)').click(function() { window.location = '/member/ContactUs' })
    $('.nav ul li, .owjdw, .nav1 img, .product-box-item').click(function() {
        window.location = 'home/search';
    });
    setTimeout(() => {
        $('.van-notice-bar__content').addClass('load-notice');
        setTimeout(() => {
            $('.van-notice-bar__content').addClass('load-notice2');
        }, 200);
    }, 100);
    setInterval(() => {
        $('.van-notice-bar__content').removeClass('load-notice');
        $('.van-notice-bar__content').removeClass('load-notice2');
    }, 24700);
    setInterval(() => {
        setTimeout(() => {
            $('.van-notice-bar__content').addClass('load-notice');
            setTimeout(() => {
                $('.van-notice-bar__content').addClass('load-notice2');
            }, 200);
        }, 100);
    }, 25000);

    $('.fade-enter-to').animate({ width: '151px', opacity: '1' }, 1200);
    $('.header-img-text').animate({ opacity: '1' }, 1200);
});

function cownDownTimer() {
    var countDownDate = new Date("2030-07-16T23:59:59.9999999+01:00").getTime();
    setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var minute = Math.ceil(minutes / 20 - 1);
        if (minutes == 59) {
            var minute = Math.ceil(minutes / 20 - 1);
        } else if (minutes == 58) {
            var minute = Math.ceil(minutes / 20 - 2);
        } else if (minutes == 57) {
            var minute = Math.ceil(minutes / 20 - 3);
        }
        if (minutes == 56) {
            var minute = Math.ceil(minutes / 20 - 1);
        } else if (minutes == 55) {
            var minute = Math.ceil(minutes / 20 - 2);
        } else if (minutes == 54) {
            var minute = Math.ceil(minutes / 20 - 3);
        }
        if (minutes == 53) {
            var minute = Math.ceil(minutes / 20 - 1);
        } else if (minutes == 52) {
            var minute = Math.ceil(minutes / 20 - 2);
        } else if (minutes == 51) {
            var minute = Math.ceil(minutes / 20 - 3);
        }
        if (minutes == 50) {
            var minute = Math.ceil(minutes / 20 - 1);
        } else if (minutes == 49) {
            var minute = Math.ceil(minutes / 20 - 2);
        } else if (minutes == 48) {
            var minute = Math.ceil(minutes / 20 - 3);
        }
        if (minutes == 47) {
            var minute = Math.ceil(minutes / 20 - 1);
        } else if (minutes == 46) {
            var minute = Math.ceil(minutes / 20 - 2);
        } else if (minutes == 45) {
            var minute = Math.ceil(minutes / 20 - 3);
        }
        if (minutes == 44) {
            var minute = Math.ceil(minutes / 20 - 1);
        } else if (minutes == 43) {
            var minute = Math.ceil(minutes / 20 - 2);
        } else if (minutes == 42) {
            var minute = Math.ceil(minutes / 20 - 3);
        } else if (minutes == 41) {
            var minute = Math.ceil(minutes / 20 - 1);
        }
        if (minutes == 40) {
            var minute = Math.ceil(minutes / 20 - 1);
        } else if (minutes == 39) {
            var minute = Math.ceil(minutes / 20 - 2);
        } else if (minutes == 38) {
            var minute = Math.ceil(minutes / 20);
        }
        if (minutes == 37) {
            var minute = Math.ceil(minutes / 20 - 1);
        } else if (minutes == 36) {
            var minute = Math.ceil(minutes / 20 - 2);
        } else if (minutes == 35) {
            var minute = Math.ceil(minutes / 20);
        }
        if (minutes == 34) {
            var minute = Math.ceil(minutes / 20 - 1);
        } else if (minutes == 33) {
            var minute = Math.ceil(minutes / 20 - 2);
        } else if (minutes == 32) {
            var minute = Math.ceil(minutes / 20);
        }
        if (minutes == 31) {
            var minute = Math.ceil(minutes / 20 - 1);
        } else if (minutes == 30) {
            var minute = Math.ceil(minutes / 20 - 2);
        } else if (minutes == 29) {
            var minute = Math.ceil(minutes / 20);
        }
        if (minutes == 28) {
            var minute = Math.ceil(minutes / 20 - 1);
        } else if (minutes == 27) {
            var minute = Math.ceil(minutes / 20 - 2);
        } else if (minutes == 26) {
            var minute = Math.ceil(minutes / 20);
        }
        if (minutes == 25) {
            var minute = Math.ceil(minutes / 20 - 1);
        } else if (minutes == 24) {
            var minute = Math.ceil(minutes / 20 - 2);
        } else if (minutes == 23) {
            var minute = Math.ceil(minutes / 20);
        }
        if (minutes == 22) {
            var minute = Math.ceil(minutes / 20 - 1);
        } else if (minutes == 21) {
            var minute = Math.ceil(minutes / 20 - 2);
        } else if (minutes == 20) {
            var minute = Math.ceil(minutes / 20 + 1);
        } else if (minutes == 19) {
            var minute = Math.ceil(minutes / 20);
        } else if (minutes == 18) {
            var minute = Math.ceil(minutes / 20 - 1);
        } else if (minutes == 17) {
            var minute = Math.ceil(minutes / 20 + 1);
        } else if (minutes == 16) {
            var minute = Math.ceil(minutes / 20);
        } else if (minutes == 15) {
            var minute = Math.ceil(minutes / 20 - 1);
        } else if (minutes == 14) {
            var minute = Math.ceil(minutes / 20 + 1);
        } else if (minutes == 13) {
            var minute = Math.ceil(minutes / 20);
        } else if (minutes == 12) {
            var minute = Math.ceil(minutes / 20 - 1);
        } else if (minutes == 11) {
            var minute = Math.ceil(minutes / 20 + 1);
        } else if (minutes == 10) {
            var minute = Math.ceil(minutes / 20);
        } else if (minutes == 9) {
            var minute = Math.ceil(minutes / 20 - 1);
        } else if (minutes == 8) {
            var minute = Math.ceil(minutes / 20 + 1);
        } else if (minutes == 7) {
            var minute = Math.ceil(minutes / 20);
        } else if (minutes == 6) {
            var minute = Math.ceil(minutes / 20 - 1);
        } else if (minutes == 5) {
            var minute = Math.ceil(minutes / 20 + 1);
        } else if (minutes == 4) {
            var minute = Math.ceil(minutes / 20);
        } else if (minutes == 3) {
            var minute = Math.ceil(minutes / 20 - 1);
        } else if (minutes == 2) {
            var minute = Math.ceil(minutes / 20 + 1);
        } else if (minutes == 1) {
            var minute = Math.ceil(minutes / 20);
        } else if (minutes == 0) {
            var minute = Math.ceil(minutes / 20);
        }
        var seconds1 = Math.floor((distance % (1000 * 60)) / 10000);
        var seconds2 = Math.floor((distance % (1000 * 60)) / 1000);
        $('.time-sub:eq(0)').html("0");
        $('.time-sub:eq(1)').html(minute);
        $('.time-sub:eq(2)').html(seconds1);
        $('.time-sub:eq(3)').html(seconds2 % 10);
    }, 0);
};

cownDownTimer();

function money(money) {
    return String(money).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}