<?php

	define("CONTACT_FORM", 'wfn@mail.ru');

	function ValidateEmail($value){
		$regex = '/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i';

		if($value == '') {
			return false;
		} else {
			$string = preg_replace($regex, '', $value);
		}

		return empty($string) ? true : false;
	}

	$post = (!empty($_POST)) ? true : false;

	if($post){

		$name = stripslashes($_POST['name']);
		$phone = stripslashes($_POST['phone']);
		$email = stripslashes($_POST['email']);
		$massage = stripslashes($_POST['massage']);
		$mail_server = 'postmaster@suvarlog.nichost.ru';
		$name_server = 'siburo.info';
		$subject = 'Заявка с сайта SIB.RU';
		$error = '';
		$message = '
			<html>
					<head>
							<title>Заявка для ответного звонка</title>
					</head>
					<body>
							<p>Имя: '.$name.'</p>
							<p>Телефон : '.$phone.'</p>
							<p>Email : '.$email.'</p>
							<p>Сообщение : '.$massage.'</p>
					</body>
			</html>';

		if (!ValidateEmail($email)){
			$error = 'Email введен неправильно!';
		}

		if(!$error){
			$mail = mail(CONTACT_FORM, $subject, $message,
			     "From: ".$name_server." <".$mail_server.">\r\n"
			    ."Reply-To: ".$mail_server."\r\n"
			    ."Content-type: text/html; charset=utf-8 \r\n"
			    ."X-Mailer: PHP/" . phpversion());

			if($mail){
				echo 'OK';
			}
		}else{
			echo '<div class="bg-danger">'.$error.'</div>';
		}

	}
?>
