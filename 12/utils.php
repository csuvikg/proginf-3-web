<?php

function array_all_keys_exist($array, ...$required_keys) {
    foreach ($required_keys as $key) {
        if (!isset($array[$key])) {
            return false;
        }
    }

    return true;
}

function verify_post(...$required_keys) {
    return array_all_keys_exist($_POST, ...$required_keys);
}

function verify_get(...$required_keys) {
    return array_all_keys_exist($_GET, ...$required_keys);
}

function array_contains($array, $condition) {
    return count(array_filter($array, $condition)) > 0;
}

function redirect($url) {
    header("Location: " . $url);
    exit;
}

function is_logged_in() {
    return isset($_SESSION["user"]);
}

const IS_LOGGED_IN = 1;
const NOT_LOGGED_IN = 2;

function authorize($auth_type) {
    if ($auth_type & IS_LOGGED_IN && !is_logged_in()) {
        redirect("login.php");
    }

    if ($auth_type & NOT_LOGGED_IN && is_logged_in()) {
        redirect("index.php");
    }
}
