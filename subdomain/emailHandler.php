<?php

function sendMail($toEmail, $fromEmail, $subject, $message)
{
    $headers = "From: $fromEmail\r\n";
    $headers .= "Reply-To: $fromEmail\r\n";
    $headers .= "Return-Path: $fromEmail\r\n";
    $headers .= "CC: $fromEmail\r\n";
    $headers .= "BCC: $fromEmail\r\n";
    $headers.= "MIME-version: 1.0\r\n";
    $headers.= "Content-type: text/html; charset= iso-8859-1\r\n";

    mail($toEmail, $subject, $message, $headers);
    
}

$name = $_POST['senderName'];
$srcEmail = $_POST['emailSender'];
$emailMsg = $_POST['emailMsg'];

$name = strip_tags($name);
$srcEmail = strip_tags($srcEmail);
$emailMsg = strip_tags($emailMsg);
$destEmail = "ieshikawa@upciem.org";
$subject = "IEShikawa - Contact Us - ".$name;

sendMail($destEmail, $srcEmail, $subject, $emailMsg);

header("Location: http://ieshikawa.upciem.org");
exit;

?>