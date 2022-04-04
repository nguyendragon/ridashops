<?php
include "config.php";
date_default_timezone_set('Asia/Ho_Chi_Minh');
$_SESSION['session_request'] = time();
$time = date("d M Y, H:i:s a");

$phone_signup = mysqli_real_escape_string($con,$_POST['phone_signup']);
$pass_signup = md5(mysqli_real_escape_string($con,$_POST['pass_signup']));
$otp_signup = mysqli_real_escape_string($con,$_POST['otp_signup']);
$infiniti_signup = mysqli_real_escape_string($con,$_POST['infiniti_signup']);
function generateRandomString($length = 16) {
    $characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}

if ($phone_signup != "" && $pass_signup != "" && $otp_signup != "" && $infiniti_signup != ""){
    $check_phone_acc = $con->query("SELECT * FROM `user` WHERE `phone_login` = '$phone_signup' AND `veri` = '1' ");
    $check_otp = $con->query("SELECT * FROM `user` WHERE `phone_login` = '$phone_signup' AND `otp` = '$otp_signup' ");
    $null_ma_gt = $con->query("SELECT `ma_gt` FROM user WHERE ma_gt = '$infiniti_signup' AND ma_gt != 0")->fetch_array();
    
    if($check_phone_acc->num_rows != 0) { 
        echo 0;
    } else {
        $id_user_no = generateRandomString();
        $rand_otp = rand(100000, 999999);
        $ma_gt = rand(1000000, 9999999);
        if ($check_otp->num_rows != 0) {   
            if (!empty($null_ma_gt)) {
                $con->query("UPDATE `user` SET 
                `password_login` = '$pass_signup',
                `ma_gt` = '$ma_gt',
                `ma_gt_f1` = '$infiniti_signup',
                `veri` = '1',
                `id_user_no` = '$id_user_no',
                `time_sign_up` = '$time' WHERE `phone_login` = '$phone_signup' AND `veri` = '0' ");
                $con->query("UPDATE `user` SET `otp` = '$rand_otp' WHERE `phone_login` = '$phone_signup' ");
                echo 1;
            } else {
                echo 3;
            }
        } else {
            echo 2;
        }
    }
}