// ==========================================
//  İletişim Formu - jQuery Doğrulama
// ==========================================

$(document).ready(function () {
  $("#kontrolBtn").click(function () {
    let hatalar = [];

    const ad = $("#ad").val().trim();
    const soyad = $("#soyad").val().trim();
    const email = $("#email").val().trim();
    const telefon = $("#telefon").val().trim();

    if (ad === "") hatalar.push("Ad boş olamaz.");
    if (soyad === "") hatalar.push("Soyad boş olamaz.");
    if (!email.includes("@")) hatalar.push("Geçerli bir e-posta giriniz.");
    if (!/^[0-9]{10,11}$/.test(telefon))
      hatalar.push("Telefon sadece rakamlardan oluşmalı (10-11 hane).");

    if (hatalar.length > 0) {
      alert("Hatalar:\n" + hatalar.join("\n"));
    } else {
      alert("Tüm alanlar doğru görünüyor ✅");
    }
  });

  // ✅ Form Gönderilince
  // $("#iletisimForm").submit(function (e) {
  //   e.preventDefault(); // Gerçek gönderimi engelle
  //   alert("Form başarıyla gönderildi!");
  // });
});
