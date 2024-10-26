
# LandingPage

It is a dynamic page for a website built with  JS/HTML and CSS. When you scroll, it highlights a specific section of the menu. The (Activelink) button returns us to the beginning.

## Features

- An interactive moving page
- When you scroll over a specific section, the bar will be shaded
- There is a button that returns you flexibly to the starting point

## Code Highlighting

```javascript
// Get all sections and header nav a classes on the page
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
//do event listener to the window's scroll event
//and forloop for osition of when scroll
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        // if the current section is in view (condation) do remove the 'active' class from all
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });

            // Get the specific nav link that matches the current section's ID and chac if it is(add active) or not 
            let matchingLink = document.querySelector('header nav a[href*="' + id + '"]');
            if (matchingLink) {matchingLink.classList.add('active');}
        };
    });
};
```

## USE

Browse the site and go through all the sections and see the beauty of the interaction

## Check Out These Apps

- [index.html](http://127.0.0.1:5500/index.html)

## Tip

If you like the site, there are also new additions coming soon.! 🎉
