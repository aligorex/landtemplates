<?php
$cl_name   = htmlspecialchars($_GET['name']);
$cl_phone   = htmlspecialchars($_GET['phone']);
$cl_email   = htmlspecialchars($_GET['email']);
$cl_time   = htmlspecialchars($_GET['time2']);
 
$to  = 'ask@wellhome.lv'; 
$subject = 'New website requiest '.$cl_phone.'';
 
// текст письма
$message = '
    email.:'.$cl_email.', phone.:'.$cl_phone.', name.:'.$cl_name.', === '.$cl_name;
$headers = "From: ask@wellhome.lv" . "\r\n" . "Reply-To: $cl_email" . "\r\n" ;
 
if (mail($to, $subject, $message, $headers)) {
?>
        <script type="text/javascript">
            window.location = "thanks.html";
        </script>
    <?php }else { ?>
        <script type="text/javascript">
            window.location = "failed.html";
        </script>
    <?php } ?>
 
