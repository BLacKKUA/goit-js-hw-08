import throttle from 'lodash.throttle';

const feedbackFormRef = document.querySelector('.feedback-form')
const emailInputRef = document.querySelector('.feedback-form > label > input')
const textAreaRef = document.querySelector('.feedback-form > label > textarea')

const localSave = {}
const throttleFunctionHalfSecond = throttle(function saveInputToLocalStorage() {
localSave.email = emailInputRef.value;
localSave.textArea = textAreaRef.value;
let saveInfo = JSON.stringify(localSave)
   localStorage.setItem('feedback-form-state', saveInfo)
   Object.assign(saveInfo, localSave)
}, 500)

feedbackFormRef.addEventListener('input', throttleFunctionHalfSecond)

if (localStorage.getItem('feedback-form-state')) {
   const localSavePacked = localStorage.getItem('feedback-form-state')
   const localSaveUnpacked = JSON.parse(localSavePacked)
   emailInputRef.value = localSaveUnpacked.email;
   textAreaRef.value = localSaveUnpacked.textArea;
}


feedbackFormRef.addEventListener('submit', submitFormFeedBack)
function submitFormFeedBack(event) {
   event.preventDefault();
   console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
   localStorage.removeItem('feedback-form-state')
   emailInputRef.value = "";
   textAreaRef.value = "";
}