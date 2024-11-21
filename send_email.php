<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    $to = 'augustoerrobidarte@gmail.com';
    $subject = 'Nuevo mensaje desde el formulario de contacto';
    $message = "Nombre: $nombre\nEmail: $email\nMensaje: $mensaje";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo 'Mensaje enviado exitosamente!';
    } else {
        echo 'Hubo un error al enviar el mensaje.';
    }
}
?>
