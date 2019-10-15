<?php
if(isset($_POST['email'])) {
    
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to .= $_POST['email'];
    $email_subject = "Join me at Alumni Weekend!";
    
    function died($error) {
        // your error code can go here
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }
     
    // validation expected data exists
    if(!isset($_POST['email']) ||
        !isset($_POST['sender']) ||
        !isset($_POST['card']) ||
        !isset($_POST['comments'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
    }
     
    $email_from = $_POST['email']; // required
    $email_sender = $_POST['sender']; // required
    $post_card = $_POST['card']; // not required
    $comments = $_POST['comments']; // required
     
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= header( "Location: https://events.ucsc.edu/alumniweekend/2013/postcards/error.html");
  }
    $string_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
  if(!preg_match($string_exp,$email_sender)) {
    $error_message .= header( "Location: https://events.ucsc.edu/alumniweekend/2013/postcards/error.html");
  }
 
  if(strlen($error_message) > 0) {
    died($error_message);
  }
    $email_message = "Alumni Weekend Postcard.\n\n";
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
    $email_message  = "<html><head></head><body>";
    $email_message .= "<img src='https://events.ucsc.edu/alumniweekend/2013/postcards/images/email_banner.jpg' alt=''/> <br />";
    $email_message .= '<h3 style="font-color:#00458c;">Join me at Alumni Weekend!</h3>';
    $email_message .= "To: ".clean_string($email_from)."<br />";
    $email_message .= "From: ".clean_string($email_sender)."<br />";
    $email_message .= "View Your Postcard: ".clean_string($post_card)."<br />";
    $email_message .= "Comments: ".clean_string($comments)."<br />";
    $email_message .= "</body></html>";
     
     
// create email headers
$headers = 'From: '.$email_from."\r\n".
$headers .= 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= 'Bcc: skent1@ucsc.edu' . "\r\n";
'Reply-To: '.$email_sender."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to ,$email_subject, $email_message, $headers);  
header( "Location: https://events.ucsc.edu/alumniweekend/2013/postcards/thankyou.html");
?>


<!-- include your own success html here -->


 
<?php
}
?>