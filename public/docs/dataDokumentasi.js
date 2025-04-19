import shuffleArray from "../../src/helpers/shuffleArray";

// const dataDokumentasiImage = [
//   {
//     type: "img",
//     imageUrlSM: "/images/dokumentasi/anangSM.png",
//     imageUrlLG: "/images/dokumentasi/anangLG.png",
//   },
//   {
//     type: "img",
//     imageUrlSM: "/images/dokumentasi/artisSM.png",
//     imageUrlLG: "/images/dokumentasi/artisLG.png",
//   },
//   {
//     type: "img",
//     imageUrlSM: "/images/dokumentasi/bclSM.png",
//     imageUrlLG: "/images/dokumentasi/bclLG.png",
//   },
//   {
//     type: "img",
//     imageUrlSM: "/images/dokumentasi/bimbinganSM.png",
//     imageUrlLG: "/images/dokumentasi/bimbinganLG.png",
//   },
//   {
//     type: "img",
//     imageUrlSM: "/images/dokumentasi/dindaSM.png",
//     imageUrlLG: "/images/dokumentasi/dindaLG.png",
//   },
//   {
//     type: "img",
//     imageUrlSM: "/images/dokumentasi/grupSM.png",
//     imageUrlLG: "/images/dokumentasi/grupLG.png",
//   },
//   {
//     type: "img",
//     imageUrlSM: "/images/dokumentasi/maiaSM.png",
//     imageUrlLG: "/images/dokumentasi/maiaLG.png",
//   },
//   {
//     type: "img",
//     imageUrlSM: "/images/dokumentasi/tikoSM.png",
//     imageUrlLG: "/images/dokumentasi/tikoLG.png",
//   },
//   {
//     type: "img",
//     imageUrlSM: "/images/dokumentasi/wheelchairSM.png",
//     imageUrlLG: "/images/dokumentasi/wheelchairLG.png",
//   },
// ];

// const dataDokumentasiVideo = [
//   {
//     type: "vid",
//     videoUrlSM: "/videos/dokumentasi/pelataran1SM.mp4",
//     videoUrlLG: "/videos/dokumentasi/pelataran1LG.mp4",
//   },
//   {
//     type: "vid",
//     videoUrlSM: "/videos/dokumentasi/pelataran1SM.mp4",
//     videoUrlLG: "/videos/dokumentasi/pelataran1LG.mp4",
//   },
//   {
//     type: "vid",
//     videoUrlSM: "/videos/dokumentasi/pelataran1SM.mp4",
//     videoUrlLG: "/videos/dokumentasi/pelataran1LG.mp4",
//   },
//   {
//     type: "vid",
//     videoUrlSM: "/videos/dokumentasi/pelataran1SM.mp4",
//     videoUrlLG: "/videos/dokumentasi/pelataran1LG.mp4",
//   },
//   {
//     type: "vid",
//     videoUrlSM: "/videos/dokumentasi/tawaf1SM.mp4",
//     videoUrlLG: "/videos/dokumentasi/tawaf1LG.mp4",
//   },
//   {
//     type: "vid",
//     videoUrlSM: "/videos/dokumentasi/tawaf1SM.mp4",
//     videoUrlLG: "/videos/dokumentasi/tawaf1LG.mp4",
//   },
//   {
//     type: "vid",
//     videoUrlSM: "/videos/dokumentasi/tawaf1SM.mp4",
//     videoUrlLG: "/videos/dokumentasi/tawaf1LG.mp4",
//   },
//   {
//     type: "vid",
//     videoUrlSM: "/videos/dokumentasi/tawaf1SM.mp4",
//     videoUrlLG: "/videos/dokumentasi/tawaf1LG.mp4",
//   },
// ];

const dataDokumentasiImage = [
  {
    type: "img",
    imageUrlSM: "/images/dokumentasi/raihanah1SM.jpg",
    imageUrlLG: "/images/dokumentasi/raihanah1LG.jpg",
  },
  {
    type: "img",
    imageUrlSM: "/images/dokumentasi/raihanah2SM.jpg",
    imageUrlLG: "/images/dokumentasi/raihanah2LG.jpg",
  },
  {
    type: "img",
    imageUrlSM: "/images/dokumentasi/raihanah3SM.jpg",
    imageUrlLG: "/images/dokumentasi/raihanah3LG.jpg",
  },
  {
    type: "img",
    imageUrlSM: "/images/dokumentasi/raihanah4SM.jpg",
    imageUrlLG: "/images/dokumentasi/raihanah4LG.jpg",
  },
  {
    type: "img",
    imageUrlSM: "/images/dokumentasi/raihanah5SM.jpg",
    imageUrlLG: "/images/dokumentasi/raihanah5LG.jpg",
  },
  {
    type: "img",
    imageUrlSM: "/images/dokumentasi/raihanah6SM.jpg",
    imageUrlLG: "/images/dokumentasi/raihanah6LG.jpg",
  },
  {
    type: "img",
    imageUrlSM: "/images/dokumentasi/raihanah7SM.jpg",
    imageUrlLG: "/images/dokumentasi/raihanah7LG.jpg",
  },
];

const dataDokumentasiVideo = [
  {
    type: "vid",
    videoUrlSM: "/videos/dokumentasi/raivid1SM.mp4",
    videoUrlLG: "/videos/dokumentasi/raivid1LG.mp4",
  },
  {
    type: "vid",
    videoUrlSM: "/videos/dokumentasi/raivid3SM.mp4",
    videoUrlLG: "/videos/dokumentasi/raivid3LG.mp4",
  },
  {
    type: "vid",
    videoUrlSM: "/videos/dokumentasi/raivid4SM.mp4",
    videoUrlLG: "/videos/dokumentasi/raivid4LG.mp4",
  },
  {
    type: "vid",
    videoUrlSM: "/videos/dokumentasi/raivid5SM.mp4",
    videoUrlLG: "/videos/dokumentasi/raivid5LG.mp4",
  },
  {
    type: "vid",
    videoUrlSM: "/videos/dokumentasi/raivid6SM.mp4",
    videoUrlLG: "/videos/dokumentasi/raivid6LG.mp4",
  },
  {
    type: "vid",
    videoUrlSM: "/videos/dokumentasi/raivid7SM.mp4",
    videoUrlLG: "/videos/dokumentasi/raivid7LG.mp4",
  },
  {
    type: "vid",
    videoUrlSM: "/videos/dokumentasi/raivid8SM.mp4",
    videoUrlLG: "/videos/dokumentasi/raivid8LG.mp4",
  },
  {
    type: "vid",
    videoUrlSM: "/videos/dokumentasi/raivid9SM.mp4",
    videoUrlLG: "/videos/dokumentasi/raivid9LG.mp4",
  },
  {
    type: "vid",
    videoUrlSM: "/videos/dokumentasi/raivid10SM.mp4",
    videoUrlLG: "/videos/dokumentasi/raivid10LG.mp4",
  },
];

const dataDokumentasi = shuffleArray(
  dataDokumentasiImage.concat(dataDokumentasiVideo)
);

export default dataDokumentasi;
