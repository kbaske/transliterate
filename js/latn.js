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
    ại: "ᱟᱹᱭ",
    ai: "ᱟᱭ",
    ao: "ᱟᱣ",
    ạo: "ᱟᱹᱣ",
    ão: "ᱟᱶ",
    ãu: "ᱟᱶ",
    ạu: "ᱟᱹᱣ",
    ạ̃u: "ᱟᱹᱶ",
    au: "ᱟᱣ",
    // variations of b
    bh: "ᱵᱷ",
    b: "ᱵᱽ",
    // variations of c
    ch: "ᱪᱷ",
    c̕a: "ᱡᱼᱟ",
    c̕e: "ᱡᱼᱮ",
    c: "ᱪ",
    c̕: "ᱡ",
    ć: "ᱡ",
    cʼ: "ᱡ",
    "c’": "ᱡ",
    "c'": "ᱡ",

    // variations of d
    dh: "ᱫᱷ",
    ḍh: "ᱰᱷ",
    d: "ᱫᱽ",
    ḍ: "ᱰ",
    ḍea: "ᱰᱟᱭᱟ",
    saḍea: "ᱥᱟᱰᱮᱭᱟ",

    // variations of e
    e: "ᱮ",
    ẽ: "ᱮᱸ",
    ẹ: "ᱮᱹ",
    e̱: "ᱮ",
    e̠: "ᱮᱹ",
    ẽ̱: "ᱮᱸ",
    ẽ̱: "ᱮᱸ",
    ei: "ᱮᱭ",
    eo: "ᱮᱣ",
    eu: "ᱮᱣ",
    earch: "ᱟᱨᱪ",
    // variations of f
    f: "ᱯᱷ",
    // variations of g
    gh: "ᱜᱷ",
    gʼa: "ᱜᱼᱟ", // Extra if used...
    gʼe: "ᱜᱼᱮ",
    gʼi: "ᱜᱼᱤ",
    gʼo: "ᱜᱼᱚ",
    gʼu: "ᱜᱼᱩ",
    g: "ᱜᱽ",

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
    jh: "ᱡᱷ",
    jo: "ᱡᱚ",
    jʼa: "ᱡᱼᱟ", // Extra if used
    jʼe: "ᱡᱼᱮ",
    jʼi: "ᱡᱼᱤ",
    jʼo: "ᱡᱼᱚ",
    jʼu: "ᱡᱼᱩ",
    j: "ᱡᱽ",
    // variations of k
    kʼa: "ᱜᱼᱟ",
    "k'a": "ᱜᱼᱟ",
    kʼe: "ᱜᱼᱮ",
    kʼi: "ᱜᱼᱤ",
    kʼo: "ᱜᱼᱚ",
    kʼu: "ᱜᱼᱩ",
    k̕a: "ᱜᱼᱟ",
    k̕e: "ᱜᱼᱮ",
    "k'e": "ᱜᱼᱮ",
    k: "ᱠ",
    k̕: "ᱜ",
    ḱ: "ᱜ",
    "k’": "ᱜ",
    "k‘": "ᱜ",
    "k'": "ᱜ",
    kh: "ᱠᱷ",
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
    oe: "ᱚᱭ",
    o̠e: "ᱚᱭ",
    o̱e: "ᱚᱭ",
    oi: "ᱚᱭ",
    ou: "ᱚᱣ",
    o̠ń: "ᱚᱸ",
    // variations of p
    ph: "ᱯᱷ",
    pʼa: "ᱵᱼᱟ",
    pʼe: "ᱵᱼᱮ",
    pʼi: "ᱵᱼᱤ",
    pʼo: "ᱵᱼᱚ",
    pʼu: "ᱵᱼᱩ",
    ṕa: "ᱵᱼᱟ",
    ṕe: "ᱵᱼᱮ",
    p: "ᱯ",
    p̕: "ᱵ",
    Ṕ: "ᱵ",
    ṕ: "ᱵ",
    "p’": "ᱵ",
    pʼ: "ᱵ",
    // variations of q
    q: "ᱠ",
    // variations of r
    ṛ: "ᱲ",
    r: "ᱨ",
    // variations of s
    sh: "ᱥ",
    s: "ᱥ",
    // variations of t
    th: "ᱛᱷ",
    ṭh: "ᱴᱷ",
    tʼa: "ᱫᱼᱟ",
    tʼe: "ᱫᱼᱮ",
    tʼi: "ᱫᱼᱤ",
    tʼo: "ᱫᱼᱚ",
    tʼu: "ᱫᱼᱩ",
    ťạ: "ᱫᱼᱟ",
    ťe: "ᱫᱼᱮ",
    t: "ᱛ",
    ṭ: "ᱴ",
    t̕: "ᱫ",
    t́: "ᱫ",
    "t’": "ᱫ",
    "t'": "ᱫ",
    // variations of u
    u: "ᱩ",
    ũ: "ᱩᱸ",
    ui: "ᱩᱭ",
    uo: "ᱩᱣᱚ",
    // variations of v
    v: "ᱵᱷ",
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
