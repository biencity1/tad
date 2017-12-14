<?php

  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");
  header("Access-Control-Allow-Methods: POST");
  header("Access-Control-Max-Age: 3600");
  header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

  

//Receive the RAW post data.
$data = json_decode(file_get_contents("php://input"));

$name = $data->form_name;
$tel = $data->form_phone;

// $name = $data->$form_name;
// $p_num = $data->$form_phone;
$email = $data->form_email;
$message = $data->form_msg;
// $temp = "temp contsents"
  // trim() function strips any white space from beginning and end of the string
  // $email = filter_var(trim($_POST["form_email"]), FILTER_SANITIZE_EMAIL);
  //  strip_tags() function strips all HTML and PHP tags from a variable.
  // $message = strip_tags($_POST["form_msg"]);
  

  // Check that data was sent to the mailer.
  // if ( empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  //   // Set a 400 (bad request) response code and exit.
  //   http_response_code(400);
  //   echo "Oops! There was a problem with your submission. Please complete the form and try again.";
  //   exit;
  // }

  // Set the recipient email address.
  $recipient = "biencity@gmail.com";
  // Set the email subject.
  $subject = "[TAD]".$name ."님의 홈페이지 문의 접수";

  // Build the email content.
  $body .= "Name : $name\n\n";
  $body .= "Phone Num. : $tel\n\n";
  $body .= "Email : $email\n\n";
  $body .= "Message : \n\n$message\n";

  // success
  $success = mail($recipient, $subject, $body, "From:" . $email);

  // Send the email.
  if ($success) {
    // Set a 200 (okay) response code.
    http_response_code(200);
    echo "Thank You! Your message has been sent. with!!";
  } else {
    // Set a 500 (internal server error) response code.
    http_response_code(500);
    echo "Oops! Something went wrong and we couldn’t send your message.";
  }

?>