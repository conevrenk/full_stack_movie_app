const optionRequest = (req, res) => {
  /* frontend bir post/put/patch/delete isteği atıldıgı zaman tarayıcı öncelikle server bu istek tiplerini kabul ettiğini kontrol etmek amacıyla options http metoduyla istek atıyor.
   *eğer options isteğine cevap göndermezsek yukarıdaki istek türlerini API kabul etmediğini zannediyorr ve asıl isteği hiçbir zaman atmıyor.
   * options isteğ gelince dogru hgeaderlar cevap gönderşrsek options arkasında asıl isteği atıyor
   */
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.end();
};

module.exports = optionRequest;
