function normalizeString(str) {
  return str.normalize("NFKC"); // Normalize to ensure consistent character representation
}

function transliterate(inputText) {
  inputText = normalizeString(inputText).toLowerCase(); // Normalize and make input case-insensitive
  for (const [key, value] of Object.entries(substitutions)) {
    const regex = new RegExp(key, "gi"); // Case-insensitive replacement
    inputText = inputText.replace(regex, value);
  }
  return inputText;
}

function performTransliteration() {
  const input = document.getElementById("input").value; // Get input text
  const output = transliterate(input); // Perform transliteration
  document.getElementById("output").value = output; // Display the output
}

function copyToClipboard() {
  const output = document.getElementById("output").textContent;
  if (output.trim() !== "") {
    navigator.clipboard
      .writeText(output)
      .then(() => alert("Output copied to clipboard!"))
      .catch(() => alert("Failed to copy. Please try again."));
  } else {
    alert(
      "Output is empty. Nothing to copy. Press Transliterate to copy the output."
    );
  }
}

function resetInput() {
  document.getElementById("input").value = "";
  document.getElementById("output").textContent = "";
}
