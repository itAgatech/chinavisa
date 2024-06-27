<?php
	header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
    header("Content-type:application/json");
    $data = json_decode(file_get_contents("php://input"));
    // $data['status']="ok";
    include("mailer.php");

    if ($data->name) {
    $name = $data->name;
    $tel = $data->tel;
    $mail = $data->mail;
    $type = $data->type;


    $dateTime = date("m.d.Y [H:i]");





    

    /*ЕСЛИ ВСЕ ПОЛЯ ЗАПОЛНЕНЫ НАЧИНАЕМ СОБИРАТЬ ДАННЫЕ ДЛЯ ОТПРАВКИ*/
    $to = "support@agatech.ru"; /* Адрес, куда отправляем письма*/
    $to2 = "visa@raspp.ru"; /* Адрес, куда отправляем письма*/
    /*visa@chinavisacenter.ru";*/
    $subject = "Заявка на сайте от ".$dateTime; /*Тема письма*/
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n";
    $headers .= "From: <mailer@agatech.ru>\r\n";/*ОТ КОГО*/

    /*ВО ВНУТРЬ ПЕРЕМЕННОЙ $message ЗАПИСЫВАЕМ ДАННЫЕ ИЗ ПОЛЕЙ */


        $message = '

        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        </head>
        <body style="text-align: center; font-family: arial;">

        <div style="width:100%; background: #eee; padding:30px; display: inline-block;">
        <div  style="width:600px; background: #eee; padding:0px; display: inline-block;">

        <div style="text-align: center; background-color: #fff;padding: 30px;border-radius: 3px;color: #fff;line-height: 24px; margin: 0px 0px 0px 0px;">
        <h2 style="margin-top: 10px; color:#000">Заявка на сайте <span style="color: #203c97;text-shadow: 1px 1px 0px #000000a8;">Китайский визовый центр в Москве</span></h2>

        <table style=" margin-top: 20px; text-align: left; width: 100%;">
        <tr>
        <td style="width: 100%; color: #000;">
        <ul style="list-style-type: none; margin: 0px;padding: 0px; font-size: 12px;">
        <li style="width: 100%; padding: 0px 0px; border-bottom:1px solid #eee;"><span>Форма:</span> <b style="float: right;">'.$type.'</b></li>
        <li style="width: 100%; padding: 0px 0px; border-bottom:1px solid #eee;"><span>Имя:</span> <b style="float: right;">'.$name.'</b></li>
        <li style="width: 100%; padding: 0px 0px; border-bottom:1px solid #eee;"><span>Телефон:</span> <b style="float: right;">'.$tel.'</b></li>
        <li style="width: 100%; padding: 0px 0px; border-bottom:1px solid #eee;"><span>Адрес электронной почты:</span> <b style="float: right;">'.$mail.'</b></li>

        </ul>
        </td>
        </tr>
        </table>

        </div>



        <table style="text-align: center; font-size: 10px; width: 100%; padding: 10px 0px;">
        <tr>
        <td>Техподдержка </td>
        <td>ООО "Агатеч Корпорейшн"</td>
        <td>+7 (927) 2<b>70-53-30</b></td>
        <td>support@agatech.ru</td>
        <td><a style="" href="https://agatech.ru/">www.agatech.ru</a></td>
        </tr>
        </table>




        </div>
        </div>



        </body>
        </html>


        ';
    


    $send = smtpmail($to, $subject , $message , $headers);
    $send2 = smtpmail($to2, $subject , $message , $headers);
    // $send3 = smtpmail($to3, $subject , $message , $headers);

    echo true;
    }

?>