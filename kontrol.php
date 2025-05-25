<?php
$dogru_email = "waled.amouri@ogr.sakarya.edu.tr";
$dogru_sifre = "b231210585";

$kullanici = $_POST["kullanici"];
$sifre = $_POST["sifre"];

// تحقق من الفراغات
if (empty($kullanici) || empty($sifre)) {
  header("Location: login.html");
  exit();
}

// تحقق من البريد
if (!filter_var($kullanici, FILTER_VALIDATE_EMAIL)) {
  header("Location: login.html");
  exit();
}

// التحقق من البيانات
if ($kullanici == $dogru_email && $sifre == $dogru_sifre) {
  echo "<h2 style='text-align:center; margin-top:50px;'>Hoşgeldiniz $kullanici!</h2>";
} else {
  header("Location: login.html");
  exit();
}
?>
