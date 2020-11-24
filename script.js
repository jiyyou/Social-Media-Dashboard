let body = document.querySelector('.body');
let followerCard = document.querySelectorAll('.followercard');
let updateCard = document.querySelectorAll('.updatecard');
let toggleButton = document.querySelector('.header__togglebutton');
let toggleCircle = document.querySelector('.header__togglecircle');
let lightText = document.querySelectorAll('.lighttext');
let darkText = document.querySelectorAll('.darktext');

console.log(followerCard);

const toggleDark = () => {
	toggleButton.addEventListener('click', () => {
		if (body.classList.contains('body--dark')) {
			body.classList.remove('body--dark');
			followerCard.forEach(card => {
				card.classList.remove('followercard--dark');
			})
			updateCard.forEach(card => {
				card.classList.remove('updatecard--dark');
			})
			toggleButton.classList.remove('header__togglebutton--dark');
			toggleCircle.classList.remove('header__togglecircle--dark');
			lightText.forEach(text => {
				text.classList.remove('lighttext--dark');
			})
			darkText.forEach(text => {
				text.classList.remove('darktext--dark');
			});
		}
		else {
			body.classList.add('body--dark');
			followerCard.forEach(card => {
				card.classList.add('followercard--dark');
			})			
			updateCard.forEach(card => {
				card.classList.add('updatecard--dark');
			})
			toggleButton.classList.add('header__togglebutton--dark');
			toggleCircle.classList.add('header__togglecircle--dark');
			lightText.forEach(text => {
				text.classList.add('lighttext--dark');
			})
			darkText.forEach(text => {
				text.classList.add('darktext--dark');
			})
		}
	})
}

toggleDark();