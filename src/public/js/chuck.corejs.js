$(document).ready(function() {
    $('.van-tab1').click(function() {
        $('.van-tab2').removeClass('van-tab--active');
        $('.van-tab1').addClass('van-tab--active');
        $('.van-tabs__track').addClass('login');
        $('.van-tabs__track').removeClass('register')
    });
    $('.van-tab2').click(function() {
        $('.van-tab1').removeClass('van-tab--active');
        $('.van-tabs__track').removeClass('login');
        $('.van-tab2').addClass('van-tab--active');
        $('.van-tabs__track').addClass('register')
    })
    const resetPassword = document.querySelector('.reset-password');
    resetPassword.addEventListener('click', function() { window.location = 'reset-password' });
});
// $(document).ready(function() {
//     $('.login_check').click(function() {
//         var phone_login = $("#phone_login").val().trim();
//         var pass_login = $("#pass_login").val().trim();
//         const login_Check = document.querySelector('.login_check');
//         var createDisable = document.createAttribute("disabled");
//         createDisable.value = "disabled";
//         login_Check.setAttributeNode(createDisable);
//         setTimeout(function() {
//             if (phone_login != "") {
//                 $.ajax({
//                     url: 'checkLogin.php',
//                     type: 'POST',
//                     dataType: 'JSON',
//                     data: { phone_login: phone_login, pass_login: pass_login, },
//                     success: function(response) {
//                         if (response != 0 && response != 2) {
//                             $('.van-toast--loading').removeClass('display-none');
//                             $('.van-toast--loading').add('display-flex');
//                             setTimeout(function() {
//                                 $('.van-toast--loading').addClass('display-none');
//                                 $('.van-toast--loading').removeClass('display-flex');
//                                 setTimeout(() => {
//                                     localStorage.setItem("pusherclient", response);
//                                     window.location = "../member/index"
//                                 }, 300)
//                             }, 700)
//                         } else if (response == 0) {
//                             $('.van-toast--loading').removeClass('display-none');
//                             $('.van-toast--loading').add('display-flex');
//                             setTimeout(function() {
//                                 $('.van-toast--loading').addClass('display-none');
//                                 $('.van-toast--loading').removeClass('display-flex');
//                                 $('.van-toast--fail').addClass('display-flex');
//                                 $('.van-toast--fail .van-toast__text').html('Lỗi mật khẩu')
//                             }, 700);
//                             setTimeout(function() { $('.van-toast--fail').removeClass('display-flex') }, 1300)
//                         } else if (response == 2) {
//                             $('.van-toast--loading').removeClass('display-none');
//                             $('.van-toast--loading').add('display-flex');
//                             setTimeout(function() {
//                                 $('.van-toast--loading').addClass('display-none');
//                                 $('.van-toast--loading').removeClass('display-flex');
//                                 $('.van-toast--fail').addClass('display-flex');
//                                 $('.van-toast--fail .van-toast__text').html('Tài khoản không tồn tại')
//                             }, 700);
//                             setTimeout(function() { $('.van-toast--fail').removeClass('display-flex') }, 1300)
//                         }
//                     },
//                 })
//             } else {
//                 if (phone_login == "") {
//                     $('#error').html("Vui lòng nhập số điện thoại");
//                     $("#phone_login").keyup(function() { $('#error').html("") })
//                 }
//             }
//         }, 200);
//         setTimeout(function() { login_Check.removeAttribute("disabled") }, 1000)
//     });
//     var counter = function() {
//         var check_cownDown = localStorage.getItem("Cowndown");
//         if (check_cownDown == null) {
//             $('.show_cowndown').html('<span data-v-5f483b78="" class="van-button__text" id="OTP">Mã OTP</span>');
//             var btn_otp = document.querySelector('.register-button__otp');
//             btn_otp.removeAttribute("disabled");
//             btn_otp.classList.remove('van-button--disabled');
//             document.getElementById('OTP').innerHTML = "Mã OTP"
//         }
//         if (check_cownDown < 2) {
//             localStorage.removeItem("Cowndown");
//             $('.show_cowndown').html('<span data-v-5f483b78="" class="van-button__text" id="OTP">Mã OTP</span>')
//         }
//         if (check_cownDown > 0) {
//             var value = check_cownDown;
//             value = parseInt(value) - 1;
//             localStorage.setItem("Cowndown", value);
//             var btn_otp = document.querySelector('.register-button__otp');
//             var createDisable = document.createAttribute("disabled");
//             createDisable.value = "disabled";
//             btn_otp.setAttributeNode(createDisable);
//             btn_otp.classList.add('van-button--disabled');
//             $('.show_cowndown').html('<span data-v-5f483b78="" class="van-button__text" id="OTP"></span>');
//             document.getElementById('OTP').innerHTML = value + " giây";
//             document.getElementById("OTP").style.minWidth = "60.7px"
//         }
//     };
//     setInterval(counter, 1000);
//     $('.register-button__otp').click(function() {
//         var phone_signup = $(".Nationalarea-input").val().trim();
//         const btn_otp = document.querySelector('.register-button__otp');
//         var length_input = phone_signup.length;
//         const signup_check = document.querySelector('.signup_check');
//         var createDisable = document.createAttribute("disabled");
//         createDisable.value = "disabled";
//         signup_check.setAttributeNode(createDisable);
//         if (phone_signup != '' && length_input > 8 && length_input < 10) {
//             var createDisablez = document.createAttribute("disabled");
//             $('body').addClass('van-overflow-hidden');
//             createDisablez.value = "disabled";
//             btn_otp.setAttributeNode(createDisablez);
//             $('.register-button__otp').addClass('van-button--disabled');
//             $('.van-toast--loading').removeClass('display-none');
//             setTimeout(function() {
//                 $('.van-toast--loading').addClass('display-none');
//                 $('.van-toast--text').removeClass('display-none');
//                 $('.van-toast--text .van-toast__text').html('Mã xác nhận đã gửi thành công');
//                 setTimeout(function() { $('.van-toast--text').addClass('display-none') }, 500)
//             }, 1300);
//             $.ajax({ type: "POST", url: "otp.php", data: { phone_signup: phone_signup, }, dataType: "dataType", success: function(responses) {} });
//             var value = 300;
//             localStorage.setItem("Cowndown", value);
//             setTimeout(function() {
//                 signup_check.removeAttribute("disabled");
//                 $('body').removeClass('van-overflow-hidden')
//             }, 1700)
//         } else {
//             if (phone_signup == '') {
//                 $('.errrorPhone').html("Vui lòng nhập số điện thoại");
//                 $(".Nationalarea-input").keyup(function() { $('.errrorPhone').html("") });
//                 setTimeout(function() { signup_check.removeAttribute("disabled") }, 100)
//             } else if (length_input < 9 || length_input > 9) {
//                 $('.errrorPhone').html("Số điện thoại có 9 số");
//                 $(".Nationalarea-input").keyup(function() { $('.errrorPhone').html("") });
//                 setTimeout(function() { signup_check.removeAttribute("disabled") }, 100)
//             }
//         }
//     })
// });
$(document).ready(function() {
    document.querySelector(".checkbox").checked = !0;
    $('.signup_check').click(function() {
        var phone_signup = $(".Nationalarea-input").val().trim();
        var pass_signup = $(".pass_signup").val().trim();
        var re_pass_signup = $(".re_pass_signup").val().trim();
        var otp_signup = $(".otp_signup").val().trim();
        var infiniti_signup = $(".infiniti_signup").val().trim();
        const signup_check = document.querySelector('.signup_check');
        var createDisable = document.createAttribute("disabled");
        createDisable.value = "disabled";
        signup_check.setAttributeNode(createDisable);
        var length_input = phone_signup.length;
        setTimeout(function() {
            if (phone_signup != "" && pass_signup != "" && re_pass_signup != "" && length_input > 8 && length_input < 10 && otp_signup != "" && infiniti_signup != "" && pass_signup == re_pass_signup) {
                setTimeout(function() { signup_check.removeAttribute("disabled") }, 100);
                $.ajax({
                    url: 'signup.php',
                    type: 'POST',
                    dataType: 'JSON',
                    data: { phone_signup: phone_signup, pass_signup: pass_signup, otp_signup: otp_signup, infiniti_signup: infiniti_signup, },
                    success: function(response) {
                        if (response == 1) {
                            $('.van-toast--text').removeClass('display-none');
                            $('.van-toast--text .van-toast__text').html('Đăng ký thành công.');
                            setTimeout(function() { $('.van-toast--text').addClass('display-none') }, 1000);
                            $('.van-tab2').removeClass('van-tab--active');
                            $('.van-tab1').addClass('van-tab--active');
                            $('.van-tabs__track').addClass('login');
                            $('.van-tabs__track').removeClass('register')
                        } else if (response == 0) {
                            $('.van-toast--fail').removeClass('display-none');
                            $('.van-toast--fail .van-toast__text').html('Số điện thoại di động đã được đăng ký.');
                            setTimeout(function() { $('.van-toast--fail').addClass('display-none') }, 1000)
                        } else if (response == 2) {
                            $('.van-toast--fail').removeClass('display-none');
                            $('.van-toast--fail .van-toast__text').html('Sai mã xác minh!');
                            setTimeout(function() { $('.van-toast--fail').addClass('display-none') }, 1000)
                        } else if (response == 3) {
                            $('.van-toast--fail').removeClass('display-none');
                            $('.van-toast--fail .van-toast__text').html('Mã đề xuất không tồn tại!');
                            setTimeout(function() { $('.van-toast--fail').addClass('display-none') }, 1000)
                        }
                    },
                })
            }
        }, 200);
        var checkbox = document.querySelector('.checkbox').checked;
        if (checkbox == !1) {
            $('.van-toast--text').removeClass("display-none");
            $('.van-toast--text .van-toast__text').html('Vui lòng đồng ý với chính sách bảo mật trước tiên.');
            setTimeout(function() { setTimeout(function() { $('.van-toast--text').addClass("display-none") }, 1000) }, 200);
            setTimeout(function() { signup_check.removeAttribute("disabled") }, 1200)
        } else if (phone_signup == "") {
            $('.errrorPhone').html("Vui lòng nhập số điện thoại");
            $(".Nationalarea-input").keyup(function() { $('.errrorPhone').html("") });
            setTimeout(function() { signup_check.removeAttribute("disabled") }, 100)
        } else if (length_input < 9 || length_input > 9) {
            $('.errrorPhone').html("Số điện thoại có 9 số");
            $(".Nationalarea-input").keyup(function() { $('.errrorPhone').html("") });
            setTimeout(function() { signup_check.removeAttribute("disabled") }, 100)
        } else if (pass_signup == "") {
            $('.pa').html("Vui lòng nhập mật khẩu");
            $(".pass_signup").keyup(function() { $('.pa').html("") });
            setTimeout(function() { signup_check.removeAttribute("disabled") }, 100)
        } else if (re_pass_signup == "") {
            $('.re').html("Vui lòng nhập mật khẩu xác nhận");
            $(".re_pass_signup").keyup(function() { $('.re').html("") });
            setTimeout(function() { signup_check.removeAttribute("disabled") }, 100)
        } else if (pass_signup != re_pass_signup) {
            $('.kk').html("Mật khẩu không trùng khớp");
            $(".re_pass_signup").keyup(function() { $('.kk').html("") });
            setTimeout(function() { signup_check.removeAttribute("disabled") }, 100)
        } else if (infiniti_signup == "") {
            $('.van-toast--fail').removeClass("display-none");
            $('.van-toast--fail .van-toast__text').html('Vui lòng nhập mã đề xuất.');
            setTimeout(function() {
                signup_check.removeAttribute("disabled");
                setTimeout(function() { $('.van-toast--fail').addClass("display-none") }, 1000)
            }, 200)
        } else if (otp_signup == "") {
            $('.van-toast--fail').removeClass("display-none");
            $('.van-toast--fail .van-toast__text').html('Vui lòng nhập mã OTP.');
            setTimeout(function() {
                signup_check.removeAttribute("disabled");
                setTimeout(function() { $('.van-toast--fail').addClass("display-none") }, 1000)
            }, 200)
        }
    })
})