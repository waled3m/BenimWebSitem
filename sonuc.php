<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <title>Form Sonuçları</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">
  <div class="container mt-5">
    <h2 class="mb-4 text-success">Gönderilen Bilgiler</h2>

    <ul class="list-group">
      <li class="list-group-item"><strong>Ad:</strong> <?= htmlspecialchars($_POST['ad'] ?? '') ?></li>
      <li class="list-group-item"><strong>Soyad:</strong> <?= htmlspecialchars($_POST['soyad'] ?? '') ?></li>
      <li class="list-group-item"><strong>Cinsiyet:</strong> <?= htmlspecialchars($_POST['gender'] ?? '') ?></li>
      <li class="list-group-item"><strong>Şehir:</strong> <?= htmlspecialchars($_POST['sehir'] ?? '') ?></li>
      <li class="list-group-item"><strong>Telefon:</strong> <?= htmlspecialchars($_POST['telefon'] ?? '') ?></li>
      <li class="list-group-item"><strong>Email:</strong> <?= htmlspecialchars($_POST['email'] ?? '') ?></li>
      <li class="list-group-item"><strong>Üniversite:</strong> <?= htmlspecialchars($_POST['universite'] ?? '') ?></li>
      <li class="list-group-item"><strong>Diller:</strong>
        <ul>
          <?php
          $diller = ['cpp', 'python', 'csharp', 'js'];
          foreach ($diller as $dil) {
            if (isset($_POST[$dil])) {
              echo "<li>" . htmlspecialchars($dil) . "</li>";
            }
          }
          ?>
        </ul>
      </li>
      <li class="list-group-item"><strong>Diller Özeti:</strong> <?= htmlspecialchars($_POST['ozet'] ?? '') ?></li>
      <li class="list-group-item"><strong>Mesaj:</strong> <?= htmlspecialchars($_POST['mesaj'] ?? '') ?></li>
    </ul>

    <a href="iletisim.html" class="btn btn-primary mt-4">Geri Dön</a>
  </div>
</body>
</html>
