<?php
//composer require mailgun/mailgun-php:~1.7.2
# Include the Autoloader (see "Libraries" for install instructions)
require 'vendor/autoload.php';
use Mailgun\Mailgun;
if (isset($_POST['name'])) {
                $sname=$_POST['name'];
                $to = $_POST['email'];
                $subject = $_POST['name'];
                $msg = $_POST['message'];

                $mgClient = new Mailgun('key-ca24133e5be833f25066b71b147301e5');
                $domain = "mg.sundevs.com";

                $result = $mgClient->sendMessage($domain, array(
                "from" => "Sundevs Contact <postmaster@mg.sundevs.com>",
                "to" => "fabian.leon@sundevs.com, jrodriguez@sundevs.com, davi9719@gmail.com",
                "subject" => "$subject",
                "text" => "
                $msg

                $sname
                $to"
));
}
?>