<?php
$kullanici = $_POST["kullanici"];
$sifre = $_POST["sifre"];

$dogru_kullanici = "admin";
$dogru_sifre = "1234";

if ($kullanici == $dogru_kullanici && $sifre == $dogru_sifre) {
    echo "<h2>Hoşgeldiniz, $kullanici!</h2>";
} else {
    echo "<h2>Giriş başarısız. Lütfen tekrar deneyin.</h2>";
}
?>
