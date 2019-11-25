<?php
session_start();
require_once("utils.php");
require_once("filestorage.php");

authorize(NOT_LOGGED_IN);

$user_store = new FileStorage("storage/users.json");

function isUserRegistered($email, $password) {
    return function ($user) use ($email, $password) {
        return $email === $user["email"] &&
        password_verify($password, $user["password"]);
    };
}

$errors = [];
if (verify_post("email", "password")) {
    $email = trim($_POST["email"]);
    $password = $_POST["password"];

    $users = $user_store->getContents();
    if (!array_contains($users, isUserRegistered($email, $password))) {
        $errors[] = "Invalid username or password";
    }

    if (count($errors) === 0) {
        $_SESSION["user"] = $email;
        redirect("index.php");
    }
}
?>

<?php require("partials/header.php") ?>

<form action="login.php" method="post">
    <label for="email">Email:</label>
    <input type="email" name="email">
    <br/>
    <label for="password">Password:</label>
    <input type="password" name="password">
    <br/>
    <button type="submit">Login</button>
</form>

<?php require("partials/footer.php") ?>