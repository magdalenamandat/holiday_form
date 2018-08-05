document.addEventListener('DOMContentLoaded', () => {
  const commentList = document.querySelector('#comment-list');
  const form = document.querySelector('#new-form');
  const deleteButton = document.querySelector('#delete-all');


  const dealWithForm = function (event) {
    event.preventDefault();
    const form = event.target;
    console.log(form);
    console.dir(form);

    const nameInput = form.name.value;
    const nameFilled = `Name: ${nameInput}`;
    const name = document.createElement('p');
    name.textContent = nameFilled;
    commentList.append(name);

    const bookingInput = form.booking.value;
    const bookingField = `Booking number: ${bookingInput}`;
    const booking = document.createElement('p');
    booking.textContent = bookingField;
    commentList.append(booking);

    const rateInput = form.fieldset.value;
    const rateFilled = `Our rate: ${rateInput}`;
    const rate = document.createElement('p');
    rate.textContent = rateFilled;
    commentList.append(rate);



    const ratingInput = form.rating.value;
    const ratingFilled = `Rating: ${ratingInput}`;
    const rating = document.createElement('p');
    rating.textContent = ratingFilled;
    commentList.append(rating);

    const commentInput = form.comment.value;
    const commentFilled = `Comment: ${commentInput}`;
    const comment = document.createElement('p');
    comment.textContent = commentFilled;
    commentList.append(comment);

    const line = document.createElement('hr');
    commentList.append(line);
    form.reset();

  }

  const resetForm = function (event) {
    commentList.innerHTML = "previous comments have been deleted";
  }

  form.addEventListener('submit', dealWithForm);
  deleteButton.addEventListener('click', resetForm);
})
