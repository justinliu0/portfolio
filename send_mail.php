<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    $to = "justinliu103@gmail.com"; 
    $subject = "Test Email";
    $message = "This is a test email.";
    $headers = "From: test@example.com\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent!";
    } else {
        echo "Sorry, something went wrong. Please try again.";
    }
}
?>
