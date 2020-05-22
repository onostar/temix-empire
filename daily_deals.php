<?php 
    $name = $_POST['name'];
    $address = $_POST['address'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['content'];
    $formContent = "This person is interested in our daily deal\n Name: $name \n Phone: $phone \n Address: $address \n Message: $message";
    $recipient = "info@temixempire.com";
    $subject = "Daily deal";
    $mailheader = "From: $email \r\n";
    mail($recipient, $subject, $formContent, $mailheader) or die("Error!");
    echo "Thanks! We have recieved you order. We will get in touch shortly!" . " - " . "<a href='index.html' style='text-decoration:none; background-color:#0b7cac; color:#fff; padding:10px; border-radius:5px;'>Return to Home</a>";

?>