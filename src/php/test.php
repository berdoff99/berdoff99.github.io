<?php

$firstname = $_POST['user_first'];
$lastname = $_POST['user_last'];
$email = $_POST['user_email'];
$phone = $_POST['user_phone'];

echo "Добрый день $firstname $lastname!". "<br> Ваш email " .$email . " <br> Ваш номер телефона " .$phone;

?>