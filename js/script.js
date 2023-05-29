// script.js

function copyTextToClipboard() {
  var text = 'Hello, World!'; // 복사할 텍스트

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text)
      .then(function () {
        console.log('Text copied to clipboard: ' + text);
      })
      .catch(function (err) {
        console.error('Failed to copy text: ', err);
      });
  } else {
    console.log('Clipboard writeText is not supported.');
  }
}
