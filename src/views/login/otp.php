<?php
include "config.php";
date_default_timezone_set('Asia/Ho_Chi_Minh');
$_SESSION['session_request'] = time();
$time = date('H:i d/m/Y');

$phone_signup = mysqli_real_escape_string($con,$_POST['phone_signup']);
$str_name = substr($phone_signup, 5);
$name_user = "Member".$str_name;
$rand_otp = rand(100000, 999999);

if ($phone_signup != ""){
    $check_phone_acc = $con->query("SELECT * FROM `user` WHERE `phone_login` = '$phone_signup' ");
    
    if($check_phone_acc->num_rows != 0){
        $con->query("UPDATE `user` SET `otp` = '$rand_otp', `send_otp` = '0' WHERE `phone_login` = '$phone_signup' ");
    } else {
        $con->query("INSERT INTO `user` SET
        `phone_login` = '$phone_signup',
        `name` = '$name_user',
        `password_login` = 'null',
        `lever` = 'user',
        `status_login` = '0',
        `total_money` = '0',
        `money` = '0',
        `ip` = '$ip_address',
        `send_otp` = '0',
        `veri` = '0',
        `otp` = '$rand_otp',
        `time_sign_up` = 'null' ");
    }
}