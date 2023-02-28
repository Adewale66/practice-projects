const changeColor = () => {
    let randomNumber = Math.floor(Math.random() * (255 - 0)) + 0;
    return randomNumber;
}




const btn = document.querySelector('button').addEventListener('click' , () => {
    
    const num1 = changeColor();
    const num2 = changeColor();
    const num3 = changeColor();
    document.querySelector('button').style.backgroundColor = `rgb(${num1}, ${num2}, ${num3})`;
    document.querySelector('body').style.backgroundColor = `rgb(${num1}, ${num2}, ${num3})`;
})