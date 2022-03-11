const $form = document.querySelector('.contact-form')
console.log($form)

const $errorMessage = document.createElement('span')
const $errorIcon = document.createElement('img')

$errorMessage.className += `form-error none`
$errorIcon.className += `form-icon none`
$errorIcon.setAttribute('src', './images/icon-error.svg')

$form.insertAdjacentElement('beforeend', $errorIcon)
$form.insertAdjacentElement('beforeend', $errorMessage)

document.addEventListener('keyup', e => {
	if (e.target.matches('.contact-form input')) {
		const $input = e.target
		$errorMessage.id = $input.name
		$errorMessage.innerText = `Please provide a valid email`

		let pattern = $input.pattern
		console.log(pattern)

		if (pattern && $input.value !== '') {
			let regExp = new RegExp(pattern)
			// return !regExp.test($input.value)
			// 	? document.getElementById($input.name).classList.add('is-active')
			// 	: document.getElementById($input.name).classList.remove('is-active')
			if (!regExp.test($input.value)) {
				$input.classList.add('error-outline')
				document.getElementById($input.name).classList.add('is-active')
				document.querySelector('.contact-form img').classList.add('is-active')
			} else {
				$input.classList.remove('error-outline')
				document.getElementById($input.name).classList.remove('is-active')
				document
					.querySelector('.contact-form img')
					.classList.remove('is-active')
			}
		}
	}
})

document.addEventListener('submit', e => {
	// if (e.target.matches('.contact-form')) {
	e.preventDefault()
	console.log(e.target)
	// const $input = $form.querySelector('input[required]')
	const $input = $form.querySelector('input')
	console.log($input)

	$errorMessage.id = $input.name
	$errorMessage.innerText = `Please provide an email`

	// return $input.value === ''
	//   ? document.getElementById($input.name).classList.add('is-active')
	//   : document.getElementById($input.name).classList.remove('is-active')
	if ($input.value === '') {
		$input.classList.add('error-outline')

		document.getElementById($input.name).classList.add('is-active')
		document.querySelector('.contact-form img').classList.add('is-active')
	} else {
		$input.classList.remove('error-outline')

		$errorMessage.innerText = `Thank you for subscribing!`
		document.getElementById($input.name).classList.add('success')
		document.getElementById($input.name).classList.add('is-active')
		// document.querySelector('.contact-form img').classList.remove('is-active')
	}
	// } else {
	// 	document.getElementById($input.name).classList.remove('is-active')
	// 	document.querySelector('.contact-form img').classList.remove('is-active')
	// }
	// }
})
