
  const nameText = "Akash Meesarapu";
  let index = 0;

  function typeWriter() {
    const typedNameElement = document.getElementById("typed-name");
    if (index < nameText.length) {
      typedNameElement.innerHTML += nameText.charAt(index);
      index++;
      setTimeout(typeWriter, 100);
    }
  }

  window.addEventListener("load", typeWriter);
