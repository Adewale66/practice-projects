const buttons = document.querySelectorAll('button');


function addclick(ele) {
    buttons.forEach(elements => {
        elements.classList.remove('clicked');
    })
    ele.classList.add('clicked')
}
buttons.forEach(ele => {
    ele.classList.remove('clicked');
    console.log(ele)
    ele.addEventListener('click', () => {
        addclick(ele)
    })
})


const submit = document.querySelector('input').addEventListener('click', () => {
    const submitForm = document.querySelector('.submit-container');
    const form = document.querySelector('.form-container');
    form.style.display = 'none'

    const span = document.querySelector('span');
    buttons.forEach(ele => {
        if(ele.classList.contains('clicked')) {
            span.textContent = `You have selected ${ele.value} out of  5`
        }
    })
    submitForm.style.display = 'flex';
})