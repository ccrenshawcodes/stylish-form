const experienceSelect = document.querySelector('.experience-select');
const expreienceItem = document.querySelector('.experience-item');

const sourceSelect = document.querySelector('.source-select');
const sourceItem = document.querySelector('.source-item');

const submitBtn = document.querySelector('.submit-btn');
const resub = document.querySelector('.resubmit');

const mainPage = document.querySelector('.main-page');
const successPage = document.querySelector('.post-submit');

const nameInput = document.querySelector('.your-name');
const emailInput = document.querySelector('.your-email');
const phoneInput = document.querySelector('.your-phone');

const calendar = document.querySelector('.cally-button');
const callyPopover = document.querySelector('.cally-popover');
const callyMonth = document.querySelector('.cally-month');

const validityAlert = document.querySelector('.alert-error');
const validityErrorDisplay = document.querySelector('.validation-error');

function resetFields () {
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
    experienceSelect.textContent = 'Select...';
    calendar.textContent = "Pick a date...";
    sourceSelect.textContent = 'Select...';
}

//  replace button text with selected value
function selectItem (display, val) {
    display.textContent = val;
}

expreienceItem.addEventListener('click', (e) => {
    selectItem(experienceSelect, e.target.firstChild.data);
    console.log(e);
    expreienceItem.hidePopover();

})

sourceItem.addEventListener('click', (e) => {
    selectItem(sourceSelect, e.target.firstChild.data);
    sourceItem.hidePopover();
})

//  hide calendar when date is selected
callyMonth.addEventListener('click', () => {
    callyPopover.hidePopover();
})

//  show/hide main content vs success message
submitBtn.addEventListener('click', () => {
    const fieldsAreValid = validity();
    if (!fieldsAreValid) {
        invalidErrorDisplay();
    } else {
        resetFields();
        successPage.style.cssText = 'display: block;';
        mainPage.style.cssText = 'display: none;';
    }
})

resub.addEventListener('click', () => {
    successPage.style.cssText = 'display: none;';
    mainPage.style.cssText = 'display: flex;';
})

function validity () {
    const validName = nameInput.checkValidity();
    const validEmail = emailInput.checkValidity();
    const validExperience = experienceSelect !== 'Select...' || null;

    if (validName && validEmail && validExperience) {
        return true;
    } else {
        return false;
    }
}

function invalidErrorDisplay () {
    validityAlert.style.display = 'block';
    validityErrorDisplay.textContent = 'Please review the fields above and make sure you have a valid name, email, and experience selected.';
}


/* TODO:
- wire up Submit button functionality
    - mvp: sends you to a success page [DONE]
    - future vers: 
        - sends you to a success page that's personalized based on what info you input
        - sends you a personalized email!!!!
- wire up Select... button functionality
    - selected data should be added to the form data
- make responsive for mobile

NIT

BUGS
- technically it is possible to select a blank value for the experience or source

*/