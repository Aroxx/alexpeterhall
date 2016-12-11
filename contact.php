<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $antiSpam = $_POST['antiSpam'];
    $userIP = $_SERVER['REMOTE_ADDR'];
    $to = 'alex@alexpeterhall.com';
    $body = "From: $name\n E-Mail Address: $email\n Subject: $subject\n User IP: $userIP\n Message:\n $message";
    if ($_POST['submit']) {
        if ($antiSpam != '7') {
            echo '<p align="center">You answered the anti-spam question incorrectly! <a href="index.html">Return to homepage.</a></p>';
        } else if ($name == '' || $email == ''  || $subject == '' || $message == '') {
            echo '<p align="center">You did not fill out all of the required fields! <a href="index.html">Return to homepage.</a></p>';
        } else if (strlen($message) < 60) { 
            echo '<p align="center">Your message is too short, please write a more detailed message. <a href="index.html">Return to homepage.</a></p>';
        } else if ($antiSpam == '7') {
            if (mail ($to, $subject, $body)) { 
                echo '<p align="center">Your message has been sent! Thanks for the email.</p><p align="center"><a href="index.html">Return to homepage</a></p>';
            }  else { 
                echo '<p align="center">Oh no! Something went wrong, <a href="index.html">please try again.</a></p>'; 
            }
        } else {
            echo '<p align="center">Oh no! Something went wrong, <a href="index.html">please try again.</a></p>';
        }
    }
?>