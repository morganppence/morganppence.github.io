
const form = document.getElementsById('my_form');

form.addEventListener('submit', function handleSubmit(event)){
  event.preventDefault();


  form.reset();
}
