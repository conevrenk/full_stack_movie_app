const http = require("http");
const getRequest = require("./methods/get");
const postRequest = require("./methods/post");
const deleteRequest = require("./methods/delete");
const defaultRequest = require("./methods/default");
const optionRequest= require("./methods/options");
// 1-server oluştur
const server = http.createServer((req, res) => {
 
  // bütün cevaplara ortak veri tipi header ekleyeli
  res.setHeader("Content-Type", "application/json");
  // kaynak paylaşımında sorun yaşamamak içim(CORS)
  res.setHeader("Access-Control-Allow-Origin", "*");
  console.log("istek geldi",req.method)
  // gelen isteğin method turune göre cliente a  farklı cevapşar göndereceğiz

  switch (req.method) {
    // case "OPTIONS":
    //   res.setHeader(
    //     "Access-Control-Allow-Methods",
    //     "GET, POST, DELETE, PUT, PATCH, OPTIONS"
    //   );
    //   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    //   res.end();
    //   break;
    case "GET":
      return getRequest(req, res);
    case "POST":
      return postRequest(req, res);
    case "DELETE":
      return deleteRequest(req, res); 
    
    case "OPTIONS":
      return optionRequest(req,res)
    
    default:
      return defaultRequest(req, res);
  }
});
// belli bir porta gelen istekleri dinle
const port = 4090;
server.listen(port, () => {
  console.log(`😊server ${port} ' gelen istekleri dinlemeye başladı `);
});
