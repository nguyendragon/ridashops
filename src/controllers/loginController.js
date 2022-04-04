import connection from '../configs/connectDB';

// trang login
const getPageLogin = (req, res) => {
        return res.render('login/index.ejs');
    }
    // const loginFunc = (req, res) => {
    //     let phone_login = req.body.phone_login;
    //     let password_login = req.body.password_login;
    //     console.log({ phone_login: phone_login, password_login: password_login });
    //     connection.execute('SELECT * FROM `user` WHERE `phone_login` = ? AND `password_login` = ?', [phone_login, password_login], function(err, result) {
    //         console.log(result);
    //         if (result.length > 0) {
    //             console.log(result);
    //             console.log('{"message": false, "status": 200 }');
    //             res.end('{"message": false, "status": 200 }');
    //         } else {
    //             console.log('{"message": true, "status": 500 }');
    //             res.end('{"message": true, "status": 500 }');
    //         }
    //     });
    // }

//call api login
const loginFunc = (req, res) => {
    var url = '/account/login'
    var username = req.phone_login;
    var password = req.password_login;

    var myHeaders = new Headers();
    myHeaders.append("phone_login", username);
    myHeaders.append("password_login", password);
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("phone_login", username);
    urlencoded.append("password_login", password);

    var requestOptions = {
        method: 'POST',
        // headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

    fetch(url, requestOptions)
        .then(response => {
            if (!response.ok) {
                alert("Sai tài khoản hoặc mật khẩu");
            } else {
                alert("Đăng nhập thành công");
                window.location.href = "home.html";
                return response.text();
            }
        })
        .then(result => {
            var result = JSON.parse(result)
                // $(".notify").toggleClass("active");
                // $("#notifyType").toggleClass("success");
                // setTimeout(function() {
                //     $(".notify").removeClass("active");
                //     $("#notifyType").removeClass("success");
                // }, 2000);

            localStorage.setItem('token', result.token);


            // window.location.href = "home.html";
        })
        .catch(error => console.log('error', error));
    $(".notify").addClass("active");
    $("#notifyType").addClass("failure");

    setTimeout(function() {
        $(".notify").removeClass("active");
        $("#notifyType").removeClass("failure");
    }, 2000);
}

module.exports = {
    getPageLogin,
    loginFunc,

}