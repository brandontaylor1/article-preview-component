const shareBtn = document.querySelector('.share-btn')
const shareBox = document.querySelector('.share-box')

shareBtn.addEventListener('click', () => {
    shareBox.classList.toggle('active-btn')
})