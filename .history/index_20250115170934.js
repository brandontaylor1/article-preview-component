const shareBtn = document.querySelector('.share-btn')
const shareBox = document.querySelector('.share-box')

shareBtn.addEventListener('click', () => {
    console.log("Clicked")
    shareBox.style.display = "flex"
})