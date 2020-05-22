<?php 
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $service = $_POST['service'];
    $message = $_POST['content'];
    $formContent = "From: $name \n Phone: $phone \n Service: $service \n Message: $message";
    $recipient = "info@temixempire.com";
    $subject = "Message from Contact form";
    $mailheader = "From: $email \r\n";
    mail($recipient, $subject, $formContent, $mailheader) or die("Error!");
    echo "Thanks for contacting us! We will get in touch shortly!" . " - " . "<a href='index.html' style='text-decoration:none; background-color:#0b7cac; color:#fff; padding:10px; border-radius:5px;'>Return to Home</a>";

?>