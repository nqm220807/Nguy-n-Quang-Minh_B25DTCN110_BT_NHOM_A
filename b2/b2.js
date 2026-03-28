const successMsg = 'Thành Công';
const errorMsg = 'Lỗi'; 
const inforMsg = 'Thông tin'; 
const warningMsg = 'Cảnh báo';

const toastBox = document.getElementById('toast-box');
const duration = 4000;
const fadeTime = 400;

function showToast(message, type = "info") {
    const toast = document.createElement('div');
    toast.classList.add('toast', type);

    const icons = {
        success: '<i class="fa-solid fa-circle-check"></i>',
        error: '<i class="fa-solid fa-circle-xmark"></i>',
        info: '<i class="fa-solid fa-circle-info"></i>',
        warning: '<i class="fa-solid fa-triangle-exclamation"></i>'
    };

   
    const icon = icons[type] || '';

    toast.innerHTML = `${icon} <span>${message}</span>`;

    toastBox.appendChild(toast);

   
    if (toastBox.children.length > 5) {
        const firstToast = toastBox.firstElementChild;
        firstToast.classList.add('hide');
        setTimeout(() => {
            firstToast.remove();
        }, fadeTime);
    }

   
    const hideTimeout = setTimeout(() => {
        toast.classList.add('hide');
    }, duration - fadeTime);

    
    const removeTimeout = setTimeout(() => {
        toast.remove();
    }, duration);

    toast.addEventListener('click', () => {
        clearTimeout(hideTimeout);
        clearTimeout(removeTimeout);
        toast.remove();
    });
}