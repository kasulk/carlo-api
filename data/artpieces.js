const imagePath = "https://carlo-api.vercel.app/assets/art/";

export const data = [
  {
    slug: "pink-revolution",
    artist: "Carlo Kozlovic",
    name: "Pink Revolution",
    year: "2012",
    genre: "Abstract Painting",
    colors: ["#1c2026", "#fe449b", "#681703", "#b9ddfe", "#f6f5e1"],
    dimensions: { height: 3116, width: 4620, type: "jpg" },

    dpi: 72,
    technique: "copics-crayon-acryl-neon",
    repro: true,
    price: 15320,
    currency: "Euro",
    dimensionsCM: { height: 27.7, width: 42 },

    get imageSource() {
      return imagePath + this.slug + "." + this.dimensions.type;
    },
  },
  {
    slug: "shessobuttelfly",
    artist: "Carlo Kozlovic",
    name: "shessobutterfly",
    year: "2023",
    genre: "Abstract Painting",
    colors: ["#fcdcf0", "#feefc6", "#fc5a70", "#a06d6c", "#da6b33"],
    dimensions: { height: 1080, width: 806, type: "jpg" },

    dpi: 72,
    technique: "digital-painting",
    repro: false,
    price: 50000,
    currency: "Euro",
    dimensionsCM: { height: 29.7, width: 21 },

    get imageSource() {
      return imagePath + this.slug + "." + this.dimensions.type;
    },
  },
];
