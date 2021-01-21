import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Sugarless",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
      artist: "The Field Tapes, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=7814",
      color: ["#DBE8DF", "#837D6A"],
      id: uuidv4(),
      active: true,
    },

    {
      name: "Going Back",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10320",
      color: ["#CDB4C7", "#133768"],
      id: uuidv4(),
      active: false,
    },

    {
      name: "Maple Leaf Pt.2",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
      artist: "Philanthrope",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8607",
      color: ["#B36957", "#772F28"],
      id: uuidv4(),
      active: false,
    },

    {
      name: "Snowstalgia",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",
      artist: "invention_",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=7811",
      color: ["#C7AFC7", "#8A1B22"],
      id: uuidv4(),
      active: false,
    },

    {
      name: "Sleepover",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",
      artist: "Nymano, JK the Sage",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10130",
      color: ["#CDB4C7", "#133768"],
      id: uuidv4(),
      active: false,
    },

    {
      name: "Vibe Vibe",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/4b9345777ac06217801ed6b44c66800829e122c3-1024x1024.jpg",
      artist: "Moods, Yasper",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10000",
      color: ["#C7AFC7", "#8A1B22"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
