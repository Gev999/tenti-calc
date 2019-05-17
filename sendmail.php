<?php

if (isset($_POST['form_send'])) {
    $name = htmlentities(trim($_POST['user_name']));
    $mail = htmlentities(trim($_POST['user_mail']));
    $phone = htmlentities(trim($_POST['user_tel']));
    $comment = htmlentities(trim($_POST['user_comment']));
    $tenti_data = htmlentities(trim($_POST['tenti_data']));

    $error = false;
    if (isEmpty($name) || isEmpty($mail) || isEmpty($phone) || isEmpty($tenti_data)) {
        $error = true;
    }
    elseif (!filter_var($mail, FILTER_VALIDATE_EMAIL)) {
        $error = true;
    }
    
    if (!$error) {
        $msg = "Имя: $name\n";
        $msg .= "Номер телефона: $phone\n";
        if (!isEmpty($comment)) {
            $msg .= "Комментарий: $comment\n";
        }
        
        $msg .= "\n\nДанные:\n\n$tenti_data";
        $to = 'gevorg.sargsyan999@mail.ru';
        $subject = 'Данные про тенти для вычесление цени';
        $headers = "From: $mail";

        $result = mail($to,$subject,$msg,$headers);
        //var_dump($result);        
    }
}
header("Location: https://".$_SERVER['HTTP_HOST']);

function isEmpty($data) {
    return ($data=='');
}

