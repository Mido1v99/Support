document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const responseMessage = document.getElementById('responseMessage');
  responseMessage.style.color = 'green';
  responseMessage.textContent = 'جارٍ إرسال الرسالة...';

  // هنا يمكنك إضافة كود لإرسال البيانات لخادم أو API إذا أردت (مثلاً باستخدام fetch)

  // مثال محاكاة إرسال الرسالة وتأخير 2 ثانية
  setTimeout(() => {
    responseMessage.textContent = 'تم إرسال رسالتك بنجاح، شكرًا لتواصلك معنا!';
    this.reset();
  }, 2000);
});
