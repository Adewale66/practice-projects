
const img = document.querySelector('.img')

const advice = async () => {
    try {
        const url = 'https://api.adviceslip.com/advice'
        const randomNumber = Math.floor((Math.random() * (201 - 1 + 1)) + 1);
        const data = await fetch(`${url}/${randomNumber}`);
        const response =  await data.json()
        const span = document.querySelector('span');
        const para = document.querySelector('p');
        span.innerHTML = `A D V I C E  &nbsp # ${response['slip']['id']}`;
        para.textContent = `"${response['slip']['advice']}"`;

    }catch (err) {
        console.log(err);
    }
}

img.addEventListener('click', advice)