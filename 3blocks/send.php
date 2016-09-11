<?php
$cl_name   = htmlspecialchars($_GET['name']);
$cl_phone   = htmlspecialchars($_GET['phone']);
$cl_email   = htmlspecialchars($_GET['email']);
$cl_time   = htmlspecialchars($_GET['time2']);
$cl_lang   = htmlspecialchars($_GET['lang']);
 
$to  = 'aligorex@gmail.com'; 
$subject = 'New website requiest '.$cl_phone.'';
 
// текст письма
$message = '
    email.:'.$cl_email.', phone.:'.$cl_phone.', name.:'.$cl_name.', === '.$cl_name;


$headers = "From: info@igotclients.com" . "\r\n" . "Reply-To: info@igotclients.com" . "\r\n" ;

$thanks = 'thanks-'.$cl_lang.'.html';
if (mail($to, $subject, $message, $headers)) {
?>
        <script type="text/javascript">
            window.location = "<?=$thanks ?>";
        </script>
    <?php }else { ?>
        <script type="text/javascript">
            window.location = "failed.html";
        </script>
    <?php } ?>
 
