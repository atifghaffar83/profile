<?php
include('../config.php');
header('Content-Type: text');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$output = "";

if(isset($_POST['fullname']) && isset($_POST['email']) && isset($_POST['message'])){
    $name = $_POST['fullname'];
    $email = $_POST['email'];
    $message = $_POST['message'];
} else {

    $name = "Atif Test";
    $email = "atifghaffar83@hotmail.com";
    $message = "testing";
}


$html="<table><tr><td>Name</td><td>$name</td></tr><tr><td>Email</td><td>$email</td></tr><tr><td>Message</td><td>$message</td></tr></table>";


require_once "../vendor/autoload.php";

$mail = new PHPMailer(true);

//Enable SMTP debugging.
//$mail->SMTPDebug = 0;                               
//Set PHPMailer to use SMTP.
$mail->isSMTP();            
//Set SMTP host name                          
$mail->Host = "smtp.gmail.com";
//Set this to true if SMTP host requires authentication to send email
$mail->SMTPAuth = true;                          
//Provide username and password     
$mail->Username = "atifghaffar83@gmail.com";                 
$mail->Password = $gmailpass;
//If SMTP requires TLS encryption then set it
$mail->SMTPSecure = "tls";                           
//Set TCP port to connect to
$mail->Port = 587;                                   

$mail->From = "atifghaffar83@gmail.com";
$mail->FromName = "Atif";

$mail->addAddress($email, $name);

$mail->isHTML(true);

$mail->Subject = "New Contact enquiry";
$mail->Body = $html;
$mail->AltBody = "This is the plain text version of the email content";

$result = $mail->send();

if($output == ""){
    echo 200;

} else {
    echo "Good";

}   

?>