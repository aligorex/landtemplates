<?php
$cl_name   = htmlspecialchars($_GET['name']);
$cl_phone   = htmlspecialchars($_GET['phone']);
$cl_email   = htmlspecialchars($_GET['email']);
 
$to  = 'it@aligorex.com'; 
$subject = 'New website requiest '.$cl_phone.'';
 
// текст письма
$message = '
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    </head>
    <body>
      <p>email.:'.$cl_email.'</p>
      <p>phone.:'.$cl_phone.'</p>
      <p>name.:'.$cl_name.'</p>
      <br>
      <b>Please reply to customer in 7 minutes</p>
    </body>
</html>
';
$headers = "From: it@aligorex.com" . "\r\n" . "Reply-To: $cl_email" . "\r\n" ;
 
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
 
