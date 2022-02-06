const questions = document.querySelectorAll('.question');


questions.forEach((question) => 
    question.addEventListener('click', () => {
        // console.log(question.nextElementSibling);
        question.nextElementSibling.classList.toggle('hidden');
        question.querySelector('.button').classList.toggle('rotate');
        question.classList.toggle('active-bold');
    })
);
