developermode = true;
// Create a function to handle the menu
function toggleMenu() {
  // Check if developermode is true
  if (developermode) {
    // Get the menu container element
    const ccontainer = document.querySelector('.injector-container');

    // Toggle the menu state
    if (ccontainer.style.display === 'none') {
      ccontainer.style.display = 'block';
    } else {
      ccontainer.style.display = 'none';
    }
  }
}

// Handle the "Insert" key press event
document.addEventListener('keydown', (event) => {
  if (event.key === 'Insert') {
    toggleMenu();
  }
});

// Create the container element for the menu
const ccontainer = document.createElement('div');
ccontainer.classList.add('injector-container');
ccontainer.style.position = 'fixed';
ccontainer.style.top = '50px';
ccontainer.style.left = '50px';
ccontainer.style.width = '300px';
ccontainer.style.backgroundColor = 'white';
ccontainer.style.border = '1px solid black';
ccontainer.style.zIndex = '9999';
ccontainer.style.userSelect = 'none';

// Create the top bar element
const topbar = document.createElement('div');
topbar.classList.add('injector-topbar');
topbar.textContent = 'JInject by CyberVortex';
topbar.style.backgroundColor = '#f1f1f1';
topbar.style.padding = '5px';
topbar.style.fontSize = '16px';

// Create the syntax-highlighted multiline text box
const textBox = document.createElement('textarea');
textBox.classList.add('injector-textbox');
textBox.spellcheck = false;
textBox.style.width = '93%';
textBox.style.height = '175px';
textBox.style.padding = '10px';
textBox.style.fontFamily = 'monospace';
textBox.style.border = 'none';
textBox.style.resize = 'none';
textBox.style.backgroundColor = 'lightgray';

// Create the "Inject" button
const button = document.createElement('button');
button.classList.add('injector-button');
button.textContent = 'Run';
button.style.backgroundColor = 'green';
button.style.color = 'white';
button.style.padding = '10px';
button.style.border = 'none';
button.style.cursor = 'pointer';
button.style.width = '100%';
button.style.fontSize = '24px';

// Append the elements to the container
ccontainer.appendChild(topbar);
ccontainer.appendChild(textBox);
ccontainer.appendChild(button);

// Append the container to the document body
document.body.appendChild(ccontainer);

// Hide the menu initially
ccontainer.style.display = 'none';

// Handle the "Inject" button click event
button.addEventListener('click', () => {
  const code = textBox.value;
  eval(code);
});