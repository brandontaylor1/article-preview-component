const shareBtn = document.querySelector('.share-btn')
const shareBox = document.querySelector('.share-box')
const component = document.querySelector('.component-content')

shareBtn.addEventListener('click', () => {
    console.log("Clicked")
    shareBox.classList.toggle('closed-box');
    shareBox.classList.toggle('open-box');
    component.classList.toggle('elevated');
})