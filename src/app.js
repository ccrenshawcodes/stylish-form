const experienceSelect = document.querySelector('.experience-select');
const expreienceItem = document.querySelector('.experience-item');

const sourceSelect = document.querySelector('.source-select');
const sourceItem = document.querySelector('.source-item');

const submitBtn = document.querySelector('.submit-btn');
const mainPage = document.querySelector('.main-page');
const successPage = document.querySelector('.post-submit');
const resub = document.querySelector('.resubmit');

function selectItem (display, val) {
    display.textContent = val;
}

expreienceItem.addEventListener('click', (e) => {
    selectItem(experienceSelect, e.target.firstChild.data);
})

sourceItem.addEventListener('click', (e) => {
    selectItem(sourceSelect, e.target.firstChild.data);
})

submitBtn.addEventListener('click', () => {
    successPage.style.cssText = 'display: block;';
    mainPage.style.cssText = 'display: none;';
})

resub.addEventListener('click', () => {
    successPage.style.cssText = 'display: none;';
    mainPage.style.cssText = 'display: flex;';
})

/* TODO:
- carousel?
- wire up Submit button functionality
    - mvp: sends you to a success page [DONE]
    - future vers: 
        - sends you to a success page that's personalized based on what info you input
        - sends you a personalized email!!!!
- wire up Select... button functionality
    - selected data should be added to the form data
- submit button tooltip to explain what it actually does? 

NIT
- hide popover when an option is selected
- popover elements are hidden behind the bottom of the page :(
- clear inputs on "submit" click
- header image positioning on large screens

BUGS

*/