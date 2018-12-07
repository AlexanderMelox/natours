// Runs when the document is ready
ready(() => {
  // Contains all the UI elements
  const DOMStrings = {
    navigationContainer: document.querySelector('.navigation'),
    navigationButton: document.querySelector('.navigation__button'),
    navigationBackground: document.querySelector('.navigation__background'),
    navigationNav: document.querySelector('.navigation__nav')
  };

  // Function that handles when the navigation button is clicked
  const handleButtonClick = (event) => {
    const navigation = DOMStrings.navigationContainer;
    console.log(navigation.dataset.toggle);

    // Checks if the navigation is closed then open it
    if (navigation.getAttribute('data-toggle') === 'closed') {
      navigation.setAttribute('data-toggle', 'open');
      // Disables the user from scrolling the page when the navigation is open
      document.body.style.overflowY = 'hidden';
    } else {
      // Sets back the navigation to closed
      navigation.setAttribute('data-toggle', 'closed');
      // Returns the normal scroll of the page
      document.body.style.overflowY = 'scroll';
    }
  };
  DOMStrings.navigationButton.addEventListener('click', handleButtonClick);
});

// Checks if the document has loaded the content and runs a callback function
function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}