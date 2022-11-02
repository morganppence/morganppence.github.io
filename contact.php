<?php
$action=$_REQUEST['action'];

    $name=$_REQUEST['fname'];
    $email=$_REQUEST['email'];
    $subject=$_REQUEST['subject'];
    $message=$_REQUEST['message'];
    if (($name=="")||($email=="")||($message==""))
        {
        echo "All fields are required, please fill <a href=\"\">the form</a> again.";
        }
    else{
        $from="From: $name<$email>\r\nReturn-path: $email";
        $subject="Message sent using your contact form";
        mail("morganppence@gmail.com", $subject, $message, $from);
        echo "Email sent!";
        }

?>
