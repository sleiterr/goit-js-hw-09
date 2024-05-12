const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');

const loadFormDataFromStorage = () => {
  const storedFormData = localStorage.getItem('feedback-form-state');
  if (storedFormData) {
    const parsedFormData = JSON.parse(storedFormData);
    formData.email = parsedFormData.email;
    formData.message = parsedFormData.message;
    emailInput.value = formData.email;
    messageTextarea.value = formData.message;
  }
};

const saveFormDataToStorage = () => {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const handleSubmit = event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageTextarea.value = '';
  formData.email = '';
  formData.message = '';
};

form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value;
  saveFormDataToStorage();
});

form.addEventListener('submit', handleSubmit);

window.addEventListener('load', loadFormDataFromStorage);
