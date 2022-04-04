<?php
include "config.php";
date_default_timezone_set('Asia/Ho_Chi_Minh');
$_SESSION['session_request'] = time();
$username = mysqli_real_escape_string($con,$_POST['phone_login']);
$password = md5(mysqli_real_escape_string($con,$_POST['pass_login']));
$time = date('H:i:s d/m/Y');
$ngay = date('dmY');

if ($username != "" && $password != ""){
    $sql_query = "SELECT count(*) as cntUser FROM user WHERE phone_login='".$username."' and password_login='".$password."' and veri = 1";
    $null_acc = $con->query("SELECT * FROM user WHERE phone_login = '$username' AND veri = 1 ")->fetch_array();
    $result = mysqli_query($con,$sql_query);
    $row = mysqli_fetch_array($result);
    $check_login_today = $con->query("SELECT * FROM `time_login` WHERE `phone_login` = '$username' ");

    $count = $row['cntUser'];

    if($count > 0){
        $_SESSION['uname'] = $username;
        $str_token = $username.$time;
        $token = md5($str_token);
        echo json_encode($token);
        $con->query("UPDATE `user` SET `status_login` = '1' WHERE `phone_login` = '$username' ");
        if ($check_login_today->num_rows == 0) {
            $con->query("INSERT INTO `time_login` SET 
            `phone_login` = '$username',
            `token` = '$token',
            `time` = '$time' ");
        } else {
            $con->query("UPDATE `time_login` SET `token` = '$token' WHERE `phone_login` = '$username' ");
        }
    } else {
        if(empty($null_acc)){
            echo 2;
        } else if ($count == 0) {
            echo 0;
        }
    }
}