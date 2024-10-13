const fs = require("fs");

const getRequest = (req, res) => {
  // url in sondaki id değerini değişkenen aktar
  const path = req.url.slice(0, 11);

  // url in sonundaki id değerini değişkene aktar
  const id = req.url.split("/")[3];

  // url in sonundaki parametrenin değerini al
  const param = req.url.split("=").pop().toLowerCase().trim();

  // yola id eklenirse bir filmi gönder
  if (path == "/api/movies" && id) {
    // 1-json dosyasından filmleri al
    const data = JSON.parse(
      fs.readFileSync("./data/movies.json", "utf-8"));
    // 2 url deki id karşılık gelen elemanı dizide ara
    const movie = data.find((i) => i.id === id);
    // eger film bulunursa cliente gönder
    if (movie) {
      return res.end(JSON.stringify(movie));
    }
    // 4-eger film bulunamazsa hata gönder
    res.writeHead(404);
    return res.end(
      JSON.stringify({ message: "aranılan film bulunamadı" }));
  }
  // temel url istek atılırsa bütün filemleri gönder
  if (path === "/api/movies") {
    // 1-json dosyasında filmleri al
    const movies = JSON.parse
      (fs.readFileSync("./data/movies.json", "utf-8"));

    // 2-cliente cevap gönder
    if (param && param !== "/api/movies") {
      const filtred = movies.filter((movie) =>
        movie.title.toLowerCase().includes(param)
      );
      // eğer parametre varsa filtrelenmiş filmleri gönder
      return res.end(JSON.stringify(filtred));
    } else {
      // eğer parametre yoksa tüm filmleri gönder
      return res.end(JSON.stringify(movies));
    }
  }

  // yol yanlışsa hata gönder
  res.writeHead(404);

  res.end(JSON.stringify({ message: "yol bulunamadı" }));
};
module.exports = getRequest;
