function transliterate(inputText) {
  inputText = inputText.toLowerCase(); // Make input case-insensitive
  for (const [key, value] of Object.entries(substitutions)) {
    const regex = new RegExp(key, "gi"); // Case-insensitive replacement
    inputText = inputText.replace(regex, value);
  }
  return inputText;
}

function performTransliteration() {
  const input = document.getElementById("input").value;
  const output = transliterate(input);
  document.getElementById("output").textContent = output;
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
