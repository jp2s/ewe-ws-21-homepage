<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"><title>12.1. Registrierung mit PHP (3 Punkte)</title>
    <style>
        html {
            font-family: Helvetica Neue, serif;
            font-size: 30px;
        }
        body {
            margin: 0;
        }
        .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .mainContentWrapper {
            row-gap: 48px;
            margin: 64px;
        }
        .contentWrapper {
            row-gap: 40px;
        }
        #title {
            font-weight: bold;
            font-size: 50px;
            border-bottom: 8px solid hotpink;
            padding-bottom: 4px;
        }
        #fieldSet {
            row-gap: 16px;
            border: 8px solid turquoise;
            padding: 32px;
        }
        #legend {
            padding: 16px;
            font-size: 40px;
        }
        .formItem {
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            row-gap: 8px;
        }
        #submitButton {
            border: 4px solid hotpink;
            color: black;
            background: white;
            font-size: 20px;
            padding: 8px 16px 8px 16px;
        }
        #submitButton:hover {
            transition: all 0.3s;
            background: turquoise;
            cursor: pointer;
            color: white;
        }
        #successMessage {
            color: limegreen;
        }
        #warningMessage {
            color: dodgerblue;
        }
        #errorMessage {
            color: red;
        }
    </style>
</head>
<body>
<div class="mainContentWrapper container">
    <div id="title">Register</div>

    <div class="contentWrapper container">
        <div id="formWrapper" class="container">
            <form id="registrationForm" method="post">
                <fieldset id="fieldSet" class="container">
                    <legend id="legend">Register a new Account:</legend>

                    <div class="container formItem">
                        <div class="formLabel">Username:</div>
                        <input type="text" name="username">
                    </div>

                    <div class="container formItem">
                        <div class="formLabel">Password:</div>
                        <input type="password" name="password">
                    </div>

                    <input id="submitButton" type="submit" value="SUBMIT">
                </fieldset>
            </form>
        </div>
    </div>
</div>
</body>
</html>

<?php
    if (isset($_POST["username"]) && isset($_POST["password"])) {
        $file = "./pw.csv";
        $lines = file($file);

        $entered_username = $_POST["username"];
        $entered_password = $_POST["password"];

        foreach ($lines as $line_num => $line) {
            list($username, $password) = explode(",", $line);

            if ($username === $entered_username) {
                echo "<script>
                    const fieldSet = document.getElementById('fieldSet');
                    const warningMessage = document.createElement('div');
                    warningMessage.setAttribute('id', 'warningMessage');
                    warningMessage.innerText = 'You already registered';
                    fieldSet.appendChild(warningMessage);
                </script>";

                return;
            }
        }

        if ($entered_username === "" || $entered_password === "") {
            echo "<script>
                const fieldSet = document.getElementById('fieldSet');
                const errorMessage = document.createElement('div');
                errorMessage.setAttribute('id', 'errorMessage');
                errorMessage.innerText = 'All fields must be filled out';
                fieldSet.appendChild(errorMessage);
            </script>";

            return;
        }

        $entered_password_hashed = hash("sha384", $entered_password);

        $new_line = $entered_username . "," . $entered_password_hashed . ",\n";

        if (file_put_contents($file, $new_line, FILE_APPEND | LOCK_EX)) {
            echo "<script>
                const fieldSet = document.getElementById('fieldSet');
                const successMessage = document.createElement('div');
                successMessage.setAttribute('id', 'successMessage');
                successMessage.innerText = 'Registered successfully';
                fieldSet.appendChild(successMessage);
            </script>";
        }
    }
?>