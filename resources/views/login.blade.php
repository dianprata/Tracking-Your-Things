<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <form action="/api/login" method="POST">
        {{ csrf_field() }}
        <p>Email : <input type="text" name="email" value=""></p>
        <p>Password : <input type="password" name="password"></p><br>
        <input type="submit" value="Login">
    </form>
</body>
</html>
