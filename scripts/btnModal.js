const btnModal = document.querySelector('.btn-info');
const contentModal = document.querySelector('.text-info');

function toggleModal() {
    contentModal.classList.toggle('hide');
}

btnModal.addEventListener('click', toggleModal, false);