// Array of texts to cycle through
const texts = [
    "Modded by CyberVortex",
    "press insert to open the menu",
    "modded by CyberVortex lol",
    "smsoftware get better security lol",
    "modded lol"
  ];

  const changingTextElement = document.getElementById("topText");
  let currentIndex = 0;

  function changeText() {
    changingTextElement.textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
  }

  // Initial call
  changeText();

  // Call changeText function every 5000 milliseconds (5 seconds)
  setInterval(changeText, 5000);