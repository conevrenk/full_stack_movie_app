const defaultRequest = (req, res) => {
  // cevabı durum kodunu belirle
  res.statusCode = 404;
  // gönderilecek cevaba içeriğin tipine header olarka ekle
  // res.setHeader("Content-Type", "application/json");
  // cevabın içeriğini belirle
    res.write(JSON.stringify({ message: "istek adres tanımsızzz" }));
    // cevabı cliente gönder
    res.end();
};
module.exports = defaultRequest;