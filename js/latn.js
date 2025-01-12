(function () {
  const substitutions = {
    // Add your substitution rules here
    // variations of a
    a: "ᱟ",
    ạ: "ᱟᱹ",
    ã: "ᱟᱸ",
    ạ̃: "ᱟᱺ",
    ae: "ᱟᱭ",
    ạe: "ᱟᱹᱭ",
    ãe: "ᱟᱸᱭ",
    ạ̃e: "ᱟᱺᱭ",
    aẽ: "ᱟᱸᱭ",
    aẹ: "ᱟᱭ",
    ae̱: "ᱟᱭ",
    ae̠: "ᱟᱭ",
    aẽ̱: "ᱟᱭ",
    aẽ̱: "ᱟᱭ",
    ạẽ: "ᱟᱹᱭ",
    ạẹ: "ᱟᱹᱭ",
    ạe̱: "ᱟᱹᱭ",
    ạe̠: "ᱟᱹᱭ",
    ạẽ̱: "ᱟᱹᱭ",
    ạẽ̱: "ᱟᱹᱭ",
    ãẽ: "ᱟᱸᱭ",
    ãẹ: "ᱟᱸᱭ",
    ãe̱: "ᱟᱸᱭ",
    ãe̠: "ᱟᱸᱭ",
    ãẽ̱: "ᱟᱸᱭ",
    ãẽ̱: "ᱟᱸᱭ",
    ạ̃ẽ: "ᱟᱺᱭ",
    ạ̃ẹ: "ᱟᱺᱭ",
    ạ̃e̱: "ᱟᱺᱭ",
    ạ̃e̠: "ᱟᱺᱭ",
    ạ̃ẽ̱: "ᱟᱺᱭ",
    ạ̃ẽ̱: "ᱟᱺᱭ",
    ai: "ᱟᱭ",
    ại: "ᱟᱹᱭ",
    ãi: "ᱟᱸᱭ",
    ạ̃i: "ᱟᱺᱭ",
    ao: "ᱟᱣ",
    ạo: "ᱟᱹᱣ",
    ão: "ᱟᱶ",
    ạ̃o: "ᱟᱹᱶ",
    aõ: "ᱟᱶ",
    ạõ: "ᱟᱹᱶ",
    ãõ: "ᱟᱶ",
    ạ̃õ: "ᱟᱹᱶ",
    ao̱: "ᱟᱣ",
    ạo̱: "ᱟᱹᱣ",
    ão̱: "ᱟᱶ",
    ạ̃o̱: "ᱟᱹᱶ",
    ao̠: "ᱟᱣ",
    ạo̠: "ᱟᱹᱣ",
    ão̠: "ᱟᱶ",
    ạ̃o̠: "ᱟᱹᱶ",
    aọ: "ᱟᱣ",
    ạọ: "ᱟᱹᱣ",
    ãọ: "ᱟᱶ",
    ạ̃ọ: "ᱟᱹᱶ",
    aõ̱: "ᱟᱶ",
    ạõ̱: "ᱟᱹᱶ",
    ãõ̱: "ᱟᱶ",
    ạ̃õ̱: "ᱟᱹᱶ",
    aõ̱: "ᱟᱶ",
    ạõ̱: "ᱟᱹᱶ",
    ãõ̱: "ᱟᱶ",
    ạ̃õ̱: "ᱟᱹᱶ",
    au: "ᱟᱣ",
    ãu: "ᱟᱶ",
    ạu: "ᱟᱹᱣ",
    ạ̃u: "ᱟᱹᱶ",
    aũ: "ᱟᱶ",
    ãũ: "ᱟᱶ",
    ạũ: "ᱟᱹᱶ",
    ạ̃ũ: "ᱟᱹᱶ",
    aea: "ᱟᱭᱟ",
    ạea: "ᱟᱹᱭᱟ",
    aoae: "ᱟᱣᱟᱭ",
    aoiạ: "ᱟᱣᱤᱭᱟᱹ",

    // variations of b
    bh: "ᱵᱷ",
    b: "ᱵᱽ",
    // variations of c
    c: "ᱪ",
    ch: "ᱪᱷ",
    c̕: "ᱡ",
    ć: "ᱡ",
    "c’": "ᱡ",
    cʼ: "ᱡ",
    "c‘": "ᱡ",
    "c'": "ᱡ",
    c̕a: "ᱡᱼᱟ",
    ća: "ᱡᱼᱟ",
    "c’a": "ᱡᱼᱟ",
    cʼa: "ᱡᱼᱟ",
    "c‘a": "ᱡᱼᱟ",
    "c'a": "ᱡᱼᱟ",
    c̕ạ: "ᱡᱼᱟᱹ",
    ćạ: "ᱡᱼᱟᱹ",
    "c’ạ": "ᱡᱼᱟᱹ",
    cʼạ: "ᱡᱼᱟᱹ",
    "c‘ạ": "ᱡᱼᱟᱹ",
    "c'ạ": "ᱡᱼᱟᱹ",
    c̕ã: "ᱡᱼᱟᱸ",
    ćã: "ᱡᱼᱟᱸ",
    "c’ã": "ᱡᱼᱟᱸ",
    cʼã: "ᱡᱼᱟᱸ",
    "c‘ã": "ᱡᱼᱟᱸ",
    "c'ã": "ᱡᱼᱟᱸ",
    c̕ạ̃: "ᱡᱼᱟᱺ",
    ćạ̃: "ᱡᱼᱟᱺ",
    "c’ạ̃": "ᱡᱼᱟᱺ",
    cʼạ̃: "ᱡᱼᱟᱺ",
    "c‘ạ̃": "ᱡᱼᱟᱺ",
    "c'ạ̃": "ᱡᱼᱟᱺ",
    c̕e: "ᱡᱼᱮ",
    će: "ᱡᱼᱮ",
    "c’e": "ᱡᱼᱮ",
    cʼe: "ᱡᱼᱮ",
    "c‘e": "ᱡᱼᱮ",
    "c'e": "ᱡᱼᱮ",
    c̕ẽ: "ᱡᱼᱮᱸ",
    ćẽ: "ᱡᱼᱮᱸ",
    "c’ẽ": "ᱡᱼᱮᱸ",
    cʼẽ: "ᱡᱼᱮᱸ",
    "c‘ẽ": "ᱡᱼᱮᱸ",
    "c'ẽ": "ᱡᱼᱮᱸ",
    c̕ẹ: "ᱡᱼᱮᱹ",
    ćẹ: "ᱡᱼᱮᱹ",
    "c’ẹ": "ᱡᱼᱮᱹ",
    cʼẹ: "ᱡᱼᱮᱹ",
    "c‘ẹ": "ᱡᱼᱮᱹ",
    "c'ẹ": "ᱡᱼᱮᱹ",
    c̕e̱: "ᱡᱼᱮ",
    će̱: "ᱡᱼᱮ",
    "c’e̱": "ᱡᱼᱮ",
    cʼe̱: "ᱡᱼᱮ",
    "c‘e̱": "ᱡᱼᱮ",
    "c'e̱": "ᱡᱼᱮ",
    c̕e̠: "ᱡᱼᱮᱹ",
    će̠: "ᱡᱼᱮᱹ",
    "c’e̠": "ᱡᱼᱮᱹ",
    cʼe̠: "ᱡᱼᱮᱹ",
    "c‘e̠": "ᱡᱼᱮᱹ",
    "c'e̠": "ᱡᱼᱮᱹ",
    c̕ẽ̱: "ᱡᱼᱮᱸ",
    ćẽ̱: "ᱡᱼᱮᱸ",
    "c’ẽ̱": "ᱡᱼᱮᱸ",
    cʼẽ̱: "ᱡᱼᱮᱸ",
    "c‘ẽ̱": "ᱡᱼᱮᱸ",
    "c'ẽ̱": "ᱡᱼᱮᱸ",
    c̕ẽ̱: "ᱡᱼᱮᱸ",
    ćẽ̱: "ᱡᱼᱮᱸ",
    "c’ẽ̱": "ᱡᱼᱮᱸ",
    cʼẽ̱: "ᱡᱼᱮᱸ",
    "c‘ẽ̱": "ᱡᱼᱮᱸ",
    "c'ẽ̱": "ᱡᱼᱮᱸ",
    c̕i: "ᱡᱼᱤ",
    ći: "ᱡᱼᱤ",
    "c’i": "ᱡᱼᱤ",
    cʼi: "ᱡᱼᱤ",
    "c‘i": "ᱡᱼᱤ",
    "c'i": "ᱡᱼᱤ",
    c̕o: "ᱡᱼᱳ",
    ćo: "ᱡᱼᱳ",
    "c’o": "ᱡᱼᱳ",
    cʼo: "ᱡᱼᱳ",
    "c‘o": "ᱡᱼᱳ",
    "c'o": "ᱡᱼᱳ",
    c̕õ: "ᱡᱼᱳᱸ",
    ćõ: "ᱡᱼᱳᱸ",
    "c’õ": "ᱡᱼᱳᱸ",
    cʼõ: "ᱡᱼᱳᱸ",
    "c‘õ": "ᱡᱼᱳᱸ",
    "c'õ": "ᱡᱼᱳᱸ",
    c̕o̱: "ᱡᱼᱚ",
    ćo̱: "ᱡᱼᱚ",
    "c’o̱": "ᱡᱼᱚ",
    cʼo̱: "ᱡᱼᱚ",
    "c‘o̱": "ᱡᱼᱚ",
    "c'o̱": "ᱡᱼᱚ",
    c̕o̠: "ᱡᱼᱚ",
    ćo̠: "ᱡᱼᱚ",
    "c’o̠": "ᱡᱼᱚ",
    cʼo̠: "ᱡᱼᱚ",
    "c‘o̠": "ᱡᱼᱚ",
    "c'o̠": "ᱡᱼᱚ",
    c̕ọ: "ᱡᱼᱚᱹ",
    ćọ: "ᱡᱼᱚᱹ",
    "c’ọ": "ᱡᱼᱚᱹ",
    cʼọ: "ᱡᱼᱚᱹ",
    "c‘ọ": "ᱡᱼᱚᱹ",
    "c'ọ": "ᱡᱼᱚᱹ",
    c̕õ̱: "ᱡᱼᱚᱸ",
    ćõ̱: "ᱡᱼᱚᱸ",
    "c’õ̱": "ᱡᱼᱚᱸ",
    cʼõ̱: "ᱡᱼᱚᱸ",
    "c‘õ̱": "ᱡᱼᱚᱸ",
    "c'õ̱": "ᱡᱼᱚᱸ",
    c̕õ̱: "ᱡᱼᱚᱸ",
    ćõ̱: "ᱡᱼᱚᱸ",
    "c’õ̱": "ᱡᱼᱚᱸ",
    cʼõ̱: "ᱡᱼᱚᱸ",
    "c‘õ̱": "ᱡᱼᱚᱸ",
    "c'õ̱": "ᱡᱼᱚᱸ",
    c̕u: "ᱡᱼᱩ",
    ću: "ᱡᱼᱩ",
    "c’u": "ᱡᱼᱩ",
    cʼu: "ᱡᱼᱩ",
    "c‘u": "ᱡᱼᱩ",
    "c'u": "ᱡᱼᱩ",
    c̕ũ: "ᱡᱼᱩᱸ",
    ćũ: "ᱡᱼᱩᱸ",
    "c’ũ": "ᱡᱼᱩᱸ",
    cʼũ: "ᱡᱼᱩᱸ",
    "c‘ũ": "ᱡᱼᱩᱸ",
    "c'ũ": "ᱡᱼᱩᱸ",

    // variations of d
    dh: "ᱫᱷ",
    ḍh: "ᱰᱷ",
    d: "ᱫᱽ",
    ḍ: "ᱰ",
    ḍea: "ᱰᱟᱭᱟ",

    // variations of e
    e: "ᱮ",
    ẽ: "ᱮᱸ",
    ẹ: "ᱮᱹ",
    e̱: "ᱮ",
    e̠: "ᱮᱹ",
    ẽ̱: "ᱮᱸ",
    ẽ̱: "ᱮᱸ",
    ea: "ᱮᱭᱟ",
    eạ: "ᱮᱭᱟᱹ",
    ei: "ᱮᱭ",
    eo: "ᱮᱣ",
    eu: "ᱮᱣ",
    earch: "ᱟᱨᱪ",
    // variations of f
    f: "ᱯᱷ",
    // variations of g
    g: "ᱜᱽ",
    gh: "ᱜᱷ",
    gʼa: "ᱜᱼᱟ", // Extra if used...
    gʼe: "ᱜᱼᱮ",
    gʼi: "ᱜᱼᱤ",
    gʼo: "ᱜᱼᱚ",
    gʼu: "ᱜᱼᱩ",

    // variations of h
    h: "ᱦ",
    h̕: "ᱦ",
    // variations of i
    i: "ᱤ",
    ĩ: "ᱤᱸ",
    ia: "ᱤᱭᱟ",
    iạ: "ᱤᱭᱟᱹ",
    ie: "ᱤᱭᱮ",
    io: "ᱤᱭᱚ",
    io̱: "ᱤᱭᱚ",
    iu: "ᱤᱣ",
    iạu: "ᱭᱟᱹᱣ",
    // variations of j
    j: "ᱡᱽ",
    jh: "ᱡᱷ",
    jo: "ᱡᱚ",
    jʼa: "ᱡᱼᱟ", // Extra if used
    jʼe: "ᱡᱼᱮ",
    jʼi: "ᱡᱼᱤ",
    jʼo: "ᱡᱼᱚ",
    jʼu: "ᱡᱼᱩ",

    // variations of k
    k: "ᱠ",
    kh: "ᱠᱷ",
    k̕: "ᱜ",
    ḱ: "ᱜ",
    "k’": "ᱜ",
    kʼ: "ᱜ",
    "k‘": "ᱜ",
    "k'": "ᱜ",
    k̕a: "ᱜᱼᱟ",
    ḱa: "ᱜᱼᱟ",
    "k’a": "ᱜᱼᱟ",
    kʼa: "ᱜᱼᱟ",
    "k‘a": "ᱜᱼᱟ",
    "k'a": "ᱜᱼᱟ",
    k̕ạ: "ᱜᱼᱟᱹ",
    ḱạ: "ᱜᱼᱟᱹ",
    "k’ạ": "ᱜᱼᱟᱹ",
    kʼạ: "ᱜᱼᱟᱹ",
    "k‘ạ": "ᱜᱼᱟᱹ",
    "k'ạ": "ᱜᱼᱟᱹ",
    k̕ã: "ᱜᱼᱟᱸ",
    ḱã: "ᱜᱼᱟᱸ",
    "k’ã": "ᱜᱼᱟᱸ",
    kʼã: "ᱜᱼᱟᱸ",
    "k‘ã": "ᱜᱼᱟᱸ",
    "k'ã": "ᱜᱼᱟᱸ",
    k̕ạ̃: "ᱜᱼᱟᱺ",
    ḱạ̃: "ᱜᱼᱟᱺ",
    "k’ạ̃": "ᱜᱼᱟᱺ",
    kʼạ̃: "ᱜᱼᱟᱺ",
    "k‘ạ̃": "ᱜᱼᱟᱺ",
    "k'ạ̃": "ᱜᱼᱟᱺ",
    k̕e: "ᱜᱼᱮ",
    ḱe: "ᱜᱼᱮ",
    "k’e": "ᱜᱼᱮ",
    kʼe: "ᱜᱼᱮ",
    "k‘e": "ᱜᱼᱮ",
    "k'e": "ᱜᱼᱮ",
    k̕ẽ: "ᱜᱼᱮᱸ",
    ḱẽ: "ᱜᱼᱮᱸ",
    "k’ẽ": "ᱜᱼᱮᱸ",
    kʼẽ: "ᱜᱼᱮᱸ",
    "k‘ẽ": "ᱜᱼᱮᱸ",
    "k'ẽ": "ᱜᱼᱮᱸ",
    k̕ẹ: "ᱜᱼᱮᱹ",
    ḱẹ: "ᱜᱼᱮᱹ",
    "k’ẹ": "ᱜᱼᱮᱹ",
    kʼẹ: "ᱜᱼᱮᱹ",
    "k‘ẹ": "ᱜᱼᱮᱹ",
    "k'ẹ": "ᱜᱼᱮᱹ",
    k̕e̱: "ᱜᱼᱮ",
    ḱe̱: "ᱜᱼᱮ",
    "k’e̱": "ᱜᱼᱮ",
    kʼe̱: "ᱜᱼᱮ",
    "k‘e̱": "ᱜᱼᱮ",
    "k'e̱": "ᱜᱼᱮ",
    k̕e̠: "ᱜᱼᱮᱹ",
    ḱe̠: "ᱜᱼᱮᱹ",
    "k’e̠": "ᱜᱼᱮᱹ",
    kʼe̠: "ᱜᱼᱮᱹ",
    "k‘e̠": "ᱜᱼᱮᱹ",
    "k'e̠": "ᱜᱼᱮᱹ",
    k̕ẽ̱: "ᱜᱼᱮᱸ",
    ḱẽ̱: "ᱜᱼᱮᱸ",
    "k’ẽ̱": "ᱜᱼᱮᱸ",
    kʼẽ̱: "ᱜᱼᱮᱸ",
    "k‘ẽ̱": "ᱜᱼᱮᱸ",
    "k'ẽ̱": "ᱜᱼᱮᱸ",
    k̕ẽ̱: "ᱜᱼᱮᱸ",
    ḱẽ̱: "ᱜᱼᱮᱸ",
    "k’ẽ̱": "ᱜᱼᱮᱸ",
    kʼẽ̱: "ᱜᱼᱮᱸ",
    "k‘ẽ̱": "ᱜᱼᱮᱸ",
    "k'ẽ̱": "ᱜᱼᱮᱸ",
    k̕i: "ᱜᱼᱤ",
    ḱi: "ᱜᱼᱤ",
    "k’i": "ᱜᱼᱤ",
    kʼi: "ᱜᱼᱤ",
    "k‘i": "ᱜᱼᱤ",
    "k'i": "ᱜᱼᱤ",
    k̕o: "ᱜᱼᱳ",
    ḱo: "ᱜᱼᱳ",
    "k’o": "ᱜᱼᱳ",
    kʼo: "ᱜᱼᱳ",
    "k‘o": "ᱜᱼᱳ",
    "k'o": "ᱜᱼᱳ",
    k̕õ: "ᱜᱼᱳᱸ",
    ḱõ: "ᱜᱼᱳᱸ",
    "k’õ": "ᱜᱼᱳᱸ",
    kʼõ: "ᱜᱼᱳᱸ",
    "k‘õ": "ᱜᱼᱳᱸ",
    "k'õ": "ᱜᱼᱳᱸ",
    k̕o̱: "ᱜᱼᱚ",
    ḱo̱: "ᱜᱼᱚ",
    "k’o̱": "ᱜᱼᱚ",
    kʼo̱: "ᱜᱼᱚ",
    "k‘o̱": "ᱜᱼᱚ",
    "k'o̱": "ᱜᱼᱚ",
    k̕o̠: "ᱜᱼᱚ",
    ḱo̠: "ᱜᱼᱚ",
    "k’o̠": "ᱜᱼᱚ",
    kʼo̠: "ᱜᱼᱚ",
    "k‘o̠": "ᱜᱼᱚ",
    "k'o̠": "ᱜᱼᱚ",
    k̕ọ: "ᱜᱼᱚᱹ",
    ḱọ: "ᱜᱼᱚᱹ",
    "k’ọ": "ᱜᱼᱚᱹ",
    kʼọ: "ᱜᱼᱚᱹ",
    "k‘ọ": "ᱜᱼᱚᱹ",
    "k'ọ": "ᱜᱼᱚᱹ",
    k̕õ̱: "ᱜᱼᱚᱸ",
    ḱõ̱: "ᱜᱼᱚᱸ",
    "k’õ̱": "ᱜᱼᱚᱸ",
    kʼõ̱: "ᱜᱼᱚᱸ",
    "k‘õ̱": "ᱜᱼᱚᱸ",
    "k'õ̱": "ᱜᱼᱚᱸ",
    k̕õ̱: "ᱜᱼᱚᱸ",
    ḱõ̱: "ᱜᱼᱚᱸ",
    "k’õ̱": "ᱜᱼᱚᱸ",
    kʼõ̱: "ᱜᱼᱚᱸ",
    "k‘õ̱": "ᱜᱼᱚᱸ",
    "k'õ̱": "ᱜᱼᱚᱸ",
    k̕u: "ᱜᱼᱩ",
    ḱu: "ᱜᱼᱩ",
    "k’u": "ᱜᱼᱩ",
    kʼu: "ᱜᱼᱩ",
    "k‘u": "ᱜᱼᱩ",
    "k'u": "ᱜᱼᱩ",
    k̕ũ: "ᱜᱼᱩᱸ",
    ḱũ: "ᱜᱼᱩᱸ",
    "k’ũ": "ᱜᱼᱩᱸ",
    kʼũ: "ᱜᱼᱩᱸ",
    "k‘ũ": "ᱜᱼᱩᱸ",
    "k'ũ": "ᱜᱼᱩᱸ",

    // variations of l
    l: "ᱞ",
    // variations of m
    m: "ᱢ",
    // variations of n
    ṇ: "ᱬ",
    ṅ: "ᱝ",
    ń: "ᱧ",
    ñ: "ᱧ",
    n: "ᱱ",
    // variations of o
    o: "ᱳ",
    õ: "ᱳᱸ",
    o̱: "ᱚ",
    o̠: "ᱚ",
    ọ: "ᱚᱹ",
    õ̱: "ᱚᱸ",
    õ̱: "ᱚᱸ",
    oa: "ᱳᱣᱟ",
    o̱a: "ᱚᱣᱟ",
    o̠a: "ᱚᱣᱟ",
    ọa: "ᱚᱹᱣᱟ",
    õa: "ᱳᱶᱟ",
    õ̱a: "ᱚᱶᱟ",
    õ̱a: "ᱚᱶᱟ",
    oe: "ᱳᱭ",
    õe: "ᱳᱸᱭ",
    o̠e: "ᱚᱭ",
    o̱e: "ᱚᱭ",
    õ̱e: "ᱚᱸᱭ",
    õ̱e: "ᱚᱸᱭ",
    oi: "ᱳᱭ",
    õi: "ᱳᱸᱭ",
    o̱i: "ᱚᱭ",
    o̠i: "ᱚᱭ",
    ọi: "ᱚᱹᱭ",
    õ̱i: "ᱚᱸᱭ",
    õ̱i: "ᱚᱸᱭ",
    oo: "ᱩ",
    ou: "ᱳᱣ",
    õu: "ᱳᱶ",
    o̱u: "ᱚᱣ",
    o̠u: "ᱚᱣ",
    ọu: "ᱚᱹᱣ",
    õ̱u: "ᱚᱶ",
    õ̱u: "ᱚᱶ",
    o̠ń: "ᱚᱸ",
    o̠ae: "ᱚᱣᱟᱭ",
    oae: "ᱳᱣᱟᱭ",
    // variations of p
    p: "ᱯ",
    ph: "ᱯᱷ",
    p̕: "ᱵ",
    ṕ: "ᱵ",
    "p’": "ᱵ",
    pʼ: "ᱵ",
    "p‘": "ᱵ",
    "p'": "ᱵ",
    p̕a: "ᱵᱼᱟ",
    ṕa: "ᱵᱼᱟ",
    "p’a": "ᱵᱼᱟ",
    pʼa: "ᱵᱼᱟ",
    "p‘a": "ᱵᱼᱟ",
    "p'a": "ᱵᱼᱟ",
    p̕ạ: "ᱵᱼᱟᱹ",
    ṕạ: "ᱵᱼᱟᱹ",
    "p’ạ": "ᱵᱼᱟᱹ",
    pʼạ: "ᱵᱼᱟᱹ",
    "p‘ạ": "ᱵᱼᱟᱹ",
    "p'ạ": "ᱵᱼᱟᱹ",
    p̕ã: "ᱵᱼᱟᱸ",
    ṕã: "ᱵᱼᱟᱸ",
    "p’ã": "ᱵᱼᱟᱸ",
    pʼã: "ᱵᱼᱟᱸ",
    "p‘ã": "ᱵᱼᱟᱸ",
    "p'ã": "ᱵᱼᱟᱸ",
    p̕ạ̃: "ᱵᱼᱟᱺ",
    ṕạ̃: "ᱵᱼᱟᱺ",
    "p’ạ̃": "ᱵᱼᱟᱺ",
    pʼạ̃: "ᱵᱼᱟᱺ",
    "p‘ạ̃": "ᱵᱼᱟᱺ",
    "p'ạ̃": "ᱵᱼᱟᱺ",
    p̕e: "ᱵᱼᱮ",
    ṕe: "ᱵᱼᱮ",
    "p’e": "ᱵᱼᱮ",
    pʼe: "ᱵᱼᱮ",
    "p‘e": "ᱵᱼᱮ",
    "p'e": "ᱵᱼᱮ",
    p̕ẽ: "ᱵᱼᱮᱸ",
    ṕẽ: "ᱵᱼᱮᱸ",
    "p’ẽ": "ᱵᱼᱮᱸ",
    pʼẽ: "ᱵᱼᱮᱸ",
    "p‘ẽ": "ᱵᱼᱮᱸ",
    "p'ẽ": "ᱵᱼᱮᱸ",
    p̕ẹ: "ᱵᱼᱮᱹ",
    ṕẹ: "ᱵᱼᱮᱹ",
    "p’ẹ": "ᱵᱼᱮᱹ",
    pʼẹ: "ᱵᱼᱮᱹ",
    "p‘ẹ": "ᱵᱼᱮᱹ",
    "p'ẹ": "ᱵᱼᱮᱹ",
    p̕e̱: "ᱵᱼᱮ",
    ṕe̱: "ᱵᱼᱮ",
    "p’e̱": "ᱵᱼᱮ",
    pʼe̱: "ᱵᱼᱮ",
    "p‘e̱": "ᱵᱼᱮ",
    "p'e̱": "ᱵᱼᱮ",
    p̕e̠: "ᱵᱼᱮᱹ",
    ṕe̠: "ᱵᱼᱮᱹ",
    "p’e̠": "ᱵᱼᱮᱹ",
    pʼe̠: "ᱵᱼᱮᱹ",
    "p‘e̠": "ᱵᱼᱮᱹ",
    "p'e̠": "ᱵᱼᱮᱹ",
    p̕ẽ̱: "ᱵᱼᱮᱸ",
    ṕẽ̱: "ᱵᱼᱮᱸ",
    "p’ẽ̱": "ᱵᱼᱮᱸ",
    pʼẽ̱: "ᱵᱼᱮᱸ",
    "p‘ẽ̱": "ᱵᱼᱮᱸ",
    "p'ẽ̱": "ᱵᱼᱮᱸ",
    p̕ẽ̱: "ᱵᱼᱮᱸ",
    ṕẽ̱: "ᱵᱼᱮᱸ",
    "p’ẽ̱": "ᱵᱼᱮᱸ",
    pʼẽ̱: "ᱵᱼᱮᱸ",
    "p‘ẽ̱": "ᱵᱼᱮᱸ",
    "p'ẽ̱": "ᱵᱼᱮᱸ",
    p̕i: "ᱵᱼᱤ",
    ṕi: "ᱵᱼᱤ",
    "p’i": "ᱵᱼᱤ",
    pʼi: "ᱵᱼᱤ",
    "p‘i": "ᱵᱼᱤ",
    "p'i": "ᱵᱼᱤ",
    p̕o: "ᱵᱼᱳ",
    ṕo: "ᱵᱼᱳ",
    "p’o": "ᱵᱼᱳ",
    pʼo: "ᱵᱼᱳ",
    "p‘o": "ᱵᱼᱳ",
    "p'o": "ᱵᱼᱳ",
    p̕õ: "ᱵᱼᱳᱸ",
    ṕõ: "ᱵᱼᱳᱸ",
    "p’õ": "ᱵᱼᱳᱸ",
    pʼõ: "ᱵᱼᱳᱸ",
    "p‘õ": "ᱵᱼᱳᱸ",
    "p'õ": "ᱵᱼᱳᱸ",
    p̕o̱: "ᱵᱼᱚ",
    ṕo̱: "ᱵᱼᱚ",
    "p’o̱": "ᱵᱼᱚ",
    pʼo̱: "ᱵᱼᱚ",
    "p‘o̱": "ᱵᱼᱚ",
    "p'o̱": "ᱵᱼᱚ",
    p̕o̠: "ᱵᱼᱚ",
    ṕo̠: "ᱵᱼᱚ",
    "p’o̠": "ᱵᱼᱚ",
    pʼo̠: "ᱵᱼᱚ",
    "p‘o̠": "ᱵᱼᱚ",
    "p'o̠": "ᱵᱼᱚ",
    p̕ọ: "ᱵᱼᱚᱹ",
    ṕọ: "ᱵᱼᱚᱹ",
    "p’ọ": "ᱵᱼᱚᱹ",
    pʼọ: "ᱵᱼᱚᱹ",
    "p‘ọ": "ᱵᱼᱚᱹ",
    "p'ọ": "ᱵᱼᱚᱹ",
    p̕õ̱: "ᱵᱼᱚᱸ",
    ṕõ̱: "ᱵᱼᱚᱸ",
    "p’õ̱": "ᱵᱼᱚᱸ",
    pʼõ̱: "ᱵᱼᱚᱸ",
    "p‘õ̱": "ᱵᱼᱚᱸ",
    "p'õ̱": "ᱵᱼᱚᱸ",
    p̕õ̱: "ᱵᱼᱚᱸ",
    ṕõ̱: "ᱵᱼᱚᱸ",
    "p’õ̱": "ᱵᱼᱚᱸ",
    pʼõ̱: "ᱵᱼᱚᱸ",
    "p‘õ̱": "ᱵᱼᱚᱸ",
    "p'õ̱": "ᱵᱼᱚᱸ",
    p̕u: "ᱵᱼᱩ",
    ṕu: "ᱵᱼᱩ",
    "p’u": "ᱵᱼᱩ",
    pʼu: "ᱵᱼᱩ",
    "p‘u": "ᱵᱼᱩ",
    "p'u": "ᱵᱼᱩ",
    p̕ũ: "ᱵᱼᱩᱸ",
    ṕũ: "ᱵᱼᱩᱸ",
    "p’ũ": "ᱵᱼᱩᱸ",
    pʼũ: "ᱵᱼᱩᱸ",
    "p‘ũ": "ᱵᱼᱩᱸ",
    "p'ũ": "ᱵᱼᱩᱸ",

    // variations of q
    q: "ᱠ",
    // variations of r
    ṛ: "ᱲ",
    ṛh: "ᱲᱷ",
    r: "ᱨ",
    // variations of s
    s: "ᱥ",
    sh: "ᱥ",
    saḍea: "ᱥᱟᱰᱮᱭᱟ",
    // variations of t
    t: "ᱛ",
    th: "ᱛᱷ",
    ṭ: "ᱴ",
    ṭh: "ᱴᱷ",
    t̕: "ᱫ",
    t́: "ᱫ",
    "t’": "ᱫ",
    tʼ: "ᱫ",
    "t‘": "ᱫ",
    "t'": "ᱫ",
    t̕a: "ᱫᱼᱟ",
    t́a: "ᱫᱼᱟ",
    "t’a": "ᱫᱼᱟ",
    tʼa: "ᱫᱼᱟ",
    "t‘a": "ᱫᱼᱟ",
    "t'a": "ᱫᱼᱟ",
    t̕ạ: "ᱫᱼᱟᱹ",
    t́ạ: "ᱫᱼᱟᱹ",
    "t’ạ": "ᱫᱼᱟᱹ",
    tʼạ: "ᱫᱼᱟᱹ",
    "t‘ạ": "ᱫᱼᱟᱹ",
    "t'ạ": "ᱫᱼᱟᱹ",
    t̕ã: "ᱫᱼᱟᱸ",
    t́ã: "ᱫᱼᱟᱸ",
    "t’ã": "ᱫᱼᱟᱸ",
    tʼã: "ᱫᱼᱟᱸ",
    "t‘ã": "ᱫᱼᱟᱸ",
    "t'ã": "ᱫᱼᱟᱸ",
    t̕ạ̃: "ᱫᱼᱟᱺ",
    t́ạ̃: "ᱫᱼᱟᱺ",
    "t’ạ̃": "ᱫᱼᱟᱺ",
    tʼạ̃: "ᱫᱼᱟᱺ",
    "t‘ạ̃": "ᱫᱼᱟᱺ",
    "t'ạ̃": "ᱫᱼᱟᱺ",
    t̕e: "ᱫᱼᱮ",
    t́e: "ᱫᱼᱮ",
    "t’e": "ᱫᱼᱮ",
    tʼe: "ᱫᱼᱮ",
    "t‘e": "ᱫᱼᱮ",
    "t'e": "ᱫᱼᱮ",
    t̕ẽ: "ᱫᱼᱮᱸ",
    t́ẽ: "ᱫᱼᱮᱸ",
    "t’ẽ": "ᱫᱼᱮᱸ",
    tʼẽ: "ᱫᱼᱮᱸ",
    "t‘ẽ": "ᱫᱼᱮᱸ",
    "t'ẽ": "ᱫᱼᱮᱸ",
    t̕ẹ: "ᱫᱼᱮᱹ",
    t́ẹ: "ᱫᱼᱮᱹ",
    "t’ẹ": "ᱫᱼᱮᱹ",
    tʼẹ: "ᱫᱼᱮᱹ",
    "t‘ẹ": "ᱫᱼᱮᱹ",
    "t'ẹ": "ᱫᱼᱮᱹ",
    t̕e̱: "ᱫᱼᱮ",
    t́e̱: "ᱫᱼᱮ",
    "t’e̱": "ᱫᱼᱮ",
    tʼe̱: "ᱫᱼᱮ",
    "t‘e̱": "ᱫᱼᱮ",
    "t'e̱": "ᱫᱼᱮ",
    t̕e̠: "ᱫᱼᱮᱹ",
    t́e̠: "ᱫᱼᱮᱹ",
    "t’e̠": "ᱫᱼᱮᱹ",
    tʼe̠: "ᱫᱼᱮᱹ",
    "t‘e̠": "ᱫᱼᱮᱹ",
    "t'e̠": "ᱫᱼᱮᱹ",
    t̕ẽ̱: "ᱫᱼᱮᱸ",
    t́ẽ̱: "ᱫᱼᱮᱸ",
    "t’ẽ̱": "ᱫᱼᱮᱸ",
    tʼẽ̱: "ᱫᱼᱮᱸ",
    "t‘ẽ̱": "ᱫᱼᱮᱸ",
    "t'ẽ̱": "ᱫᱼᱮᱸ",
    t̕ẽ̱: "ᱫᱼᱮᱸ",
    t́ẽ̱: "ᱫᱼᱮᱸ",
    "t’ẽ̱": "ᱫᱼᱮᱸ",
    tʼẽ̱: "ᱫᱼᱮᱸ",
    "t‘ẽ̱": "ᱫᱼᱮᱸ",
    "t'ẽ̱": "ᱫᱼᱮᱸ",
    t̕i: "ᱫᱼᱤ",
    t́i: "ᱫᱼᱤ",
    "t’i": "ᱫᱼᱤ",
    tʼi: "ᱫᱼᱤ",
    "t‘i": "ᱫᱼᱤ",
    "t'i": "ᱫᱼᱤ",
    t̕o: "ᱫᱼᱳ",
    t́o: "ᱫᱼᱳ",
    "t’o": "ᱫᱼᱳ",
    tʼo: "ᱫᱼᱳ",
    "t‘o": "ᱫᱼᱳ",
    "t'o": "ᱫᱼᱳ",
    t̕õ: "ᱫᱼᱳᱸ",
    t́õ: "ᱫᱼᱳᱸ",
    "t’õ": "ᱫᱼᱳᱸ",
    tʼõ: "ᱫᱼᱳᱸ",
    "t‘õ": "ᱫᱼᱳᱸ",
    "t'õ": "ᱫᱼᱳᱸ",
    t̕o̱: "ᱫᱼᱚ",
    t́o̱: "ᱫᱼᱚ",
    "t’o̱": "ᱫᱼᱚ",
    tʼo̱: "ᱫᱼᱚ",
    "t‘o̱": "ᱫᱼᱚ",
    "t'o̱": "ᱫᱼᱚ",
    t̕o̠: "ᱫᱼᱚ",
    t́o̠: "ᱫᱼᱚ",
    "t’o̠": "ᱫᱼᱚ",
    tʼo̠: "ᱫᱼᱚ",
    "t‘o̠": "ᱫᱼᱚ",
    "t'o̠": "ᱫᱼᱚ",
    t̕ọ: "ᱫᱼᱚᱹ",
    t́ọ: "ᱫᱼᱚᱹ",
    "t’ọ": "ᱫᱼᱚᱹ",
    tʼọ: "ᱫᱼᱚᱹ",
    "t‘ọ": "ᱫᱼᱚᱹ",
    "t'ọ": "ᱫᱼᱚᱹ",
    t̕õ̱: "ᱫᱼᱚᱸ",
    t́õ̱: "ᱫᱼᱚᱸ",
    "t’õ̱": "ᱫᱼᱚᱸ",
    tʼõ̱: "ᱫᱼᱚᱸ",
    "t‘õ̱": "ᱫᱼᱚᱸ",
    "t'õ̱": "ᱫᱼᱚᱸ",
    t̕õ̱: "ᱫᱼᱚᱸ",
    t́õ̱: "ᱫᱼᱚᱸ",
    "t’õ̱": "ᱫᱼᱚᱸ",
    tʼõ̱: "ᱫᱼᱚᱸ",
    "t‘õ̱": "ᱫᱼᱚᱸ",
    "t'õ̱": "ᱫᱼᱚᱸ",
    t̕u: "ᱫᱼᱩ",
    t́u: "ᱫᱼᱩ",
    "t’u": "ᱫᱼᱩ",
    tʼu: "ᱫᱼᱩ",
    "t‘u": "ᱫᱼᱩ",
    "t'u": "ᱫᱼᱩ",
    t̕ũ: "ᱫᱼᱩᱸ",
    t́ũ: "ᱫᱼᱩᱸ",
    "t’ũ": "ᱫᱼᱩᱸ",
    tʼũ: "ᱫᱼᱩᱸ",
    "t‘ũ": "ᱫᱼᱩᱸ",
    "t'ũ": "ᱫᱼᱩᱸ",

    // variations of u
    u: "ᱩ",
    ũ: "ᱩᱸ",
    ua: "ᱩᱣᱟ",
    uạ: "ᱩᱣᱟᱹ",
    uã: "ᱩᱶᱟ",
    uạ̃: "ᱩᱶᱟᱹ",
    ũa: "ᱩᱶᱟ",
    ũạ: "ᱩᱶᱟᱹ",
    ũã: "ᱩᱶᱟ",
    ũạ̃: "ᱩᱶᱟᱹ",
    ue: "ᱩᱭ",
    uẽ: "ᱩᱸᱭ",
    uẹ: "ᱩᱭ",
    ue̱: "ᱩᱭ",
    ue̠: "ᱩᱭ",
    uẽ̱: "ᱩᱸᱭ",
    uẽ̱: "ᱩᱸᱭ",
    ũe: "ᱩᱸᱭ",
    ũẽ: "ᱩᱸᱭ",
    ũẹ: "ᱩᱸᱭ",
    ũe̱: "ᱩᱸᱭ",
    ũe̠: "ᱩᱸᱭ",
    ũẽ̱: "ᱩᱸᱭ",
    ũẽ̱: "ᱩᱸᱭ",
    ui: "ᱩᱭ",
    ũi: "ᱩᱸᱭ",
    uo: "ᱩᱣ",
    uõ: "ᱩᱶ",
    uo̱: "ᱩᱣ",
    uo̠: "ᱩᱣ",
    uọ: "ᱩᱣ",
    uõ̱: "ᱩᱶ",
    uõ̱: "ᱩᱶ",
    ũo: "ᱩᱶ",
    ũõ: "ᱩᱶ",
    ũo̱: "ᱩᱶ",
    ũo̠: "ᱩᱶ",
    ũọ: "ᱩᱶ",
    ũõ̱: "ᱩᱶ",
    ũõ̱: "ᱩᱶ",

    // variations of v
    v: "ᱵᱷ",
    video: "ᱵᱷᱤᱰᱤᱭᱳ",
    // variations of w
    w: "ᱣ",
    w̃: "ᱶ",
    // variations of x
    x: "ᱠᱥ",
    // variations of y
    y: "ᱭ",
    // variations of z
    zh: "ᱡᱷ",
    z: "ᱡᱽ",

    // Numerical goes here...
    1: "᱑",
    2: "᱒",
    3: "᱓",
    4: "᱔",
    5: "᱕",
    6: "᱖",
    7: "᱗",
    8: "᱘",
    9: "᱙",
    0: "᱐",

    // Punctuations goes here...
    "\\.": " ᱾ ",
    // "\\..": " ᱿ ",
  };

  const remove_sub_char = ["ᱚ", "ᱟ", "ᱤ", "ᱩ", "ᱮ", "ᱳ"];

  function transliterate(inputText) {
    inputText = inputText.toLowerCase();
    let outputText = inputText;

    // Handle specific pair substitutions first
    outputText = outputText.replace(/ia/g, "ᱤᱭᱟ");
    outputText = outputText.replace(/ea/g, "ᱮᱭᱟ");

    outputText = outputText.replace(/oa/g, "ᱳᱣᱟ");
    outputText = outputText.replace(/o̠a/g, "ᱚᱣᱟ");
    outputText = outputText.replace(/o̱a/g, "ᱚᱣᱟ");
    outputText = outputText.replace(/aa/g, "ᱟᱣᱟ");
    outputText = outputText.replace(/ạa/g, "ᱟᱹᱣᱟ");
    outputText = outputText.replace(/ua/g, "ᱩᱣᱟ");

    // Sort keys by length in descending order to handle longer matches first
    const sortedKeys = Object.keys(substitutions).sort(
      (a, b) => b.length - a.length
    );

    for (const key of sortedKeys) {
      const regex = new RegExp(key, "g");
      outputText = outputText.replace(regex, substitutions[key]);
    }
    // Remove ᱽ before specific characters
    for (const char of remove_sub_char) {
      outputText = outputText.replace(new RegExp(`ᱽ${char}`, "g"), char);
    }

    return outputText;
  }

  window.performTransliteration = function () {
    const input = document.getElementById("input").value;
    const outputText = transliterate(input);
    document.getElementById("output").textContent = outputText;
  };

  window.copyToClipboard = function () {
    const output = document.getElementById("output").textContent;
    navigator.clipboard
      .writeText(output)
      .then(() => alert("ᱚᱨᱡᱚ ᱨᱮᱴᱟᱵ ᱵᱚᱰᱨᱮ ᱦᱟᱞᱟᱝᱮᱱᱟ!"))
      .catch((err) => console.error("ᱦᱟᱞᱟᱝ ᱦᱩᱲᱟᱹᱜᱼᱮᱱᱟ: ", err));
  };

  window.resetInput = function () {
    document.getElementById("input").value = "";
    document.getElementById("output").textContent =
      "ᱟᱢᱟᱜ ᱪᱤᱠᱤ ᱵᱚᱱᱚᱫᱚᱞᱚᱜ ᱚᱱᱚᱞ ᱠᱚ ᱱᱚᱸᱰᱮᱭ ᱩᱫᱩᱜᱟ...";
  };
})();
