<?php
if($_POST){
    $to = "test12345@gmail.com";
    $subject = "New Contact Query";
    $message = "
    Name: ".$_POST['name']."
    Phone: ".$_POST['phone']."
    Email: ".$_POST['email']."
    Message: ".$_POST['message']."
    ";
    $headers = "From: no-reply@yourwebsite.com";

    mail($to, $subject, $message, $headers);
    echo "Thank you! Your query has been submitted.";
}
?>
