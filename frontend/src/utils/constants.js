export const inputs = [
  {
    name: "title",
    label: "Başlık",
    type: "text",
  },
  {
    name: "description",
    label: "Açıklama",
    type: "text",
  },
  {
    name: "rating",
    label: "Puan",
    type: "number",
    min: 1,
    max: 10,
  },
  {
    name: "year",
    label: "Yıl",
    type: "number",
    min: 1800,
    max: 2025,
  },
  {
    name: "director",
    label: "Yapımcı",
    type: "text",
  },
  {
    name: "duration",
    label: "Süre",
    type: "number",
  },
  {
    name: "language",
    label: "Dil",
    type: "text",
  },
  {
    name: "genre",
    label: "Kategoriler( , ile ayırınız)",
    type: "text",
  },
  {
    name: "cast",
    label: "Ekip ( , ile ayırınız)",
  },
];
