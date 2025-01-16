const shareBtn = document.querySelector('.share-btn')
const shareBox = document.querySelector('.share-box')
const component = document.querySelector('.component')

shareBtn.addEventListener('click', () => {
    console.log("Clicked")
    shareBox.classList.toggle('closed-box');
    shareBox.classList.toggle('open-box');
})