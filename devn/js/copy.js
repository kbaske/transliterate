(function () {
  const substitutions = {
    // Vowels
    अ: "ᱚ",
    आ: "ᱟ",
    इ: "ᱤ",
    ई: "ᱤ", // Could potentially differentiate based on context, but common is just "ᱤ"
    उ: "ᱩ",
    ऊ: "ᱩ", // Same note as above
    ऋ: "ᱨᱤ", // Approximation -  Ol Chiki doesn't have a perfect equivalent
    ए: "ᱮ",
    ऐ: "ᱟᱭ",
    ओ: "ᱳ",
    औ: "ᱟᱣ",

    "ा": "ᱟ",
    "ि": "ᱤ",
    "ी": "ᱤ",
    "ु": "ᱩ",
    "ू": "ᱩ",
    "े": "ᱮ",
    "ै": "ᱟᱭ",
    "ो": "ᱚ",
    "ौ": "ᱟᱣ",

    // Consonants
    क: "ᱠ",
    ख: "ᱠᱷ",
    ग: "ᱜ",
    घ: "ᱜᱷ",
    ङ: "ᱝ",
    च: "ᱪ",
    छ: "ᱪᱷ",
    ज: "ᱡ",
    झ: "ᱡᱷ",
    ञ: "ᱧ",
    ट: "ᱴ",
    ठ: "ᱴᱷ",
    ड: "ᱰ",
    ढ: "ᱰᱷ",
    ण: "ᱬ",
    त: "ᱛ",
    थ: "ᱛᱷ",
    द: "ᱫ",
    ध: "ᱫᱷ",
    न: "ᱱ",
    प: "ᱯ",
    फ: "ᱯᱷ",
    ब: "ᱵ",
    भ: "ᱵᱷ",
    म: "ᱢ",
    य: "ᱭ",
    र: "ᱨ",
    ल: "ᱞ",
    व: "ᱣ",
    श: "ᱥ",
    ष: "ᱥ", // Could potentially differentiate, but for simplicity, same as "श"
    स: "ᱥ",
    ह: "ᱦ",
    ळ: "ᱲ",

    // Exceptions
    क्: "ᱜ",
    ग्: "ᱜ",
    च्: "ᱡ",
    ज्: "ᱡ",
    त्: "ᱫ",
    द्: "ᱫ",
    प्: "ᱵ",
    ब्: "ᱵ",

    // Combined / Half Consonants (using a workaround - adding a virama)
    "्क": "ᱠ",
    "्ख": "ᱠᱷ",
    "्ग": "ᱜ",
    "्घ": "ᱜᱷ",
    "्ङ": "ᱝ",
    "्च": "ᱪ",
    "्छ": "ᱪᱷ",
    "्ज": "ᱡ",
    "्झ": "ᱡᱷ",
    "्ञ": "ᱧ",
    "्ट": "ᱴ",
    "्ठ": "ᱴᱷ",
    "्ड": "ᱰ",
    "्ढ": "ᱰᱷ",
    "्ण": "ᱬ",
    "्त": "ᱛ",
    "्थ": "ᱛᱷ",
    "्द": "ᱫ",
    "्ध": "ᱫᱷ",
    "्न": "ᱱ",
    "्प": "ᱯ",
    "्फ": "ᱯᱷ",
    "्ब": "ᱵ",
    "्भ": "ᱵᱷ",
    "्म": "ᱢ",
    "्य": "ᱭ",
    "्र": "ᱨ",
    "्ल": "ᱞ",
    "्व": "ᱣ",
    "्श": "ᱥ",
    "्ष": "ᱥ",
    "्स": "ᱥ",
    "्ह": "ᱦ",
    // May be used like this
    // ":": "ᱜ",
    ": आ": "ᱜᱼᱟ",
    मितट: "ᱢᱤᱫᱴ",
    //स्क: "ᱥᱠ",
    // Special Characters and numbers
    "ँ": "ᱸ",
    "ं": "ᱸ",
    "ः": "ᱺ",
    "़": "ᱹ", // nukta
    "०": "᱐",
    "१": "᱑",
    "२": "᱒",
    "३": "᱓",
    "४": "᱔",
    "५": "᱕",
    "६": "᱖",
    "७": "᱗",
    "८": "᱘",
    "९": "᱙",

    // Punctuations
    "।": " ᱾",
    "॥": " ᱿",
    ",": ", ",
  };

  const remove_sub_char = ["ᱚ", "ᱟ", "ᱤ", "ᱩ", "ᱮ", "ᱳ"];

  function transliterate(inputText) {
    let outputText = inputText;

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
