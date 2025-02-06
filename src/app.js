const experienceSelect = document.querySelector('.experience-select');
const expreienceItem = document.querySelector('.experience-item');

const sourceSelect = document.querySelector('.source-select');
const sourceItem = document.querySelector('.source-item');

function selectItem (display, val) {
    display.textContent = val;
}

// expreienceItem.addEventListener('click', (e) => console.log(typeof e.target.firstChild.data));

expreienceItem.addEventListener('click', (e) => {
    selectItem(experienceSelect, e.target.firstChild.data);
})

sourceItem.addEventListener('click', (e) => {
    selectItem(sourceSelect, e.target.firstChild.data);
})


/* TODO:
-Figure out the best way to have multiple pages
- spin up a "submission success" page
- wire up Submit button functionality
    - mvp: sends you to a success page
    - future vers: 
        - sends you to a success page that's personalized based on what info you input
        - sends you a personalized email!!!!
- wire up Select... button functionality
    - selected data should be added to the form data

- hide popover when an option is selected
- image positioning on large screens
- carousel?
- submit button tooltip to explain what it actually does? 
*/