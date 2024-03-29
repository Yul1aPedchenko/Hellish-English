(() => {
  const refs = {
    openModalBtn: document.querySelector('[reviews-modal-open]'),
    closeModalBtn: document.querySelector('[reviews-modal-close]'),
    modal: document.querySelector('[reviews-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();
