document.querySelectorAll('.shipingDetails').forEach(input => input.addEventListener('blur', validateForm))

const form = document.forms[0]

function validateForm(event) {
	const currentInput = event.currentTarget
	const nameValid = inputValid(
		'name',
		!(form.name.value.length < 4 || form.name.value.match(/[^A-Za-z]/)),
		'The field is invalid (minimum 4 letters, no spaces)'
	)
	const surnameValid = inputValid(
		'surname',
		!(form.surname.value.length < 5 || form.surname.value.match(/[^A-Za-z]/)),
		'The field is invalid (minimum 5 letters, no spaces)'
	)
	const dateValid = inputValid(
		'date',
		Date.parse(form.date.value) >= Date.parse(tomorrowStr),
		'The field is invalid (not earlier than tomorrow)'
	)
	const streetValid = inputValid(
		'street',
		!(form.street.value.length < 5 || form.street.value.match(/[^A-Za-z0-9. ]/)),
		'The field is invalid (minimum 5 letters/numbers)'
	)
	const houseValid = inputValid(
		'house',
		form.house.value.match(/^[1-9][0-9]*/),
		'The field is invalid (positive numbers only)'
	)
	const flatValid = inputValid(
		'flat',
		form.flat.value.match(/^[1-9](\-?[1-9][0-9]*)*$/),
		'The field is invalid (positive numbers and dash only)'
	)
	const formValid = true && nameValid && surnameValid && dateValid && streetValid && houseValid && flatValid
    
	if (formValid) {
		form.submit.removeAttribute('disabled')
		const purchase = document.querySelector('.purchase')
		purchase.style = 'cursor: pointer'
	} else {
		form.submit.setAttribute('disabled', '')
        const purchase = document.querySelector('.purchase')
	}
	function setInvalid(message) {
		if(!currentInput.classList.contains('invalid'))
        {
            currentInput.style = "border: 2px solid red";
            currentInput.classList.add('invalid');
            let errorMsg = document.createElement('div');
            errorMsg.classList.add('info');
            errorMsg.textContent = message;
            currentInput.after(errorMsg);

        }
	}

	function setValid() {
		if(currentInput.classList.contains('invalid')) {
            currentInput.style = "border: 1px solid green";
            currentInput.nextElementSibling.remove();
            currentInput.classList.remove('invalid');
            errorMsg.textContent = " ";
        }
	}

	function inputValid(fieldName, condition, message) {
		if (!condition) {
			if (currentInput.name == fieldName) setInvalid(message)
			return false
		}
		if (currentInput.name == fieldName) setValid()
		return true
	}
}


const tomorrow = new Date()
tomorrow.setDate(tomorrow.getDate() + 1)
const tomorrowStr = `${tomorrow.getFullYear()}-${tomorrow.getMonth() + 1}-${tomorrow.getDate()}`
form.date.setAttribute('value', tomorrowStr)
form.date.setAttribute('min', tomorrowStr)