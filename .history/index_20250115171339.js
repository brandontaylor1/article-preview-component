const shareBtn = document.querySelector('.share-btn')
const shareBox = document.querySelector('.share-box')

shareBtn.addEventListener('click', () => {
    console.log("Clicked")
    shareBox.classList.remove('closed-box');
    shareBox.classList.add('open-box');
})