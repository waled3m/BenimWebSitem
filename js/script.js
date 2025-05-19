<!-- فقط أضف هذا قبل </body> مباشرة -->
<script>
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // منع الإرسال مؤقتًا للتحقق

  const ad = document.querySelector('input[placeholder="Adınız"]');
  const soyad = document.querySelector('input[placeholder="Soyadınız"]');
  const email = document.querySelector('input[type="email"]');
  const numara = document.querySelector('input[type="tel"]');
  const diller = document.querySelectorAll('input[type="checkbox"]');
  const mesaj = document.querySelector("textarea");

  let errors = [];

  if (ad.value.trim() === "") errors.push("Ad boş olamaz.");
  if (soyad.value.trim() === "") errors.push("Soyad boş olamaz.");
  if (!email.value.includes("@")) errors.push("Geçerli bir e-mail giriniz.");
  if (!/^\d{10}$/.test(numara.value.replace(/\D/g, ""))) errors.push("Geçerli bir 10 haneli numara girin.");

  let dilSecili = false;
  diller.forEach(ch => { if (ch.checked) dilSecili = true; });
  if (!dilSecili) errors.push("En az bir dil seçmelisiniz.");

  if (errors.length > 0) {
    alert(errors.join("\n"));
  } else {
    alert("Form başarıyla gönderildi!");
    this.submit(); // إرسال فعلي إن تم التحقق
  }
});
</script>
