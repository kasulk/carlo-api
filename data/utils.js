import { imagePath, artist } from "./artpieces.js";

export function addArtistSlugAndImageSource(data) {
  data.forEach((artpiece) => {
    artpiece.artist = artist;
    artpiece.slug = createSlug(artpiece.name);
    artpiece.imageSource =
      imagePath + artpiece.slug + "." + artpiece.dimensions.type;
  });
}

export function createSlug(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}
