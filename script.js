// Функционал отправки формы
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const submitButton = contactForm.querySelector('.form__button');
    submitButton.disabled = true;

    try {
        const response = await fetch('https://example.com/api/form', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Ошибка при отправке формы.');
        }

        alert('Форма успешно отправлена!');
        contactForm.reset();
    } catch (error) {
        alert('Произошла ошибка. Попробуйте еще раз.');
    } finally {
        submitButton.disabled = false;
    }
});

// Анимация выпадающего меню
const dropdownItems = document.querySelectorAll('.menu__item--dropdown');
dropdownItems.forEach(item => {
    const dropdownMenu = item.querySelector('.menu__dropdown');

    item.addEventListener('mouseover', () => {
        dropdownMenu.style.display = 'block';
    });

    item.addEventListener('mouseout', () => {
        dropdownMenu.style.display = 'none';
    });
});
