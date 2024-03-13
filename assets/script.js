/*Tableau des images à afficher dans le carrousel*/
const slides = [
	{
		"image": "./assets/images/slideshow/slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "./assets/images/slideshow/slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "./assets/images/slideshow/slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "./assets/images/slideshow/slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];


/*Longueur du tableau*/
console.log(slides);

/*Récupération des flêches du carrousel*/
const classArrow = document.querySelectorAll(".arrow");
console.log(classArrow);

/*Ajout de l'event listener,
différenciation flêche gauche et droite au clique
et ajout valeur +1 ou -1 selon la flêche cliqué au niveau de l'index*/
classArrow.forEach(function (arrow) {
	arrow.addEventListener('click', function () {
		if (arrow.classList.contains('arrow_left')) {
			console.log("Bouton gauche cliqué.");
			indexSlides(-1);
		}
		else if (arrow.classList.contains('arrow_right')) {
			console.log("Bouton droit cliqué.");
			indexSlides(1);
		}
	});
});


/*Variable qui stock l'index (qui commence à 0) du tableau slides*/
let currentIndex = 0;

/*Création d'une function nommé "indexSlides" qui prend pour
paramêtre "direction" afin de gérer les slides au niveau de l'index*/
function indexSlides(direction) {
	currentIndex = currentIndex + direction;
	/*Si index inférieur à 0, alors index = longueur du tableau(4) - 1*/
	if (currentIndex < 0) {
		currentIndex = slides.length - 1
	};

	/*Si index supérieur à (longueur tableau - 1(donc 3)) alors index = 0*/
	if (currentIndex > (slides.length - 1)) {
		currentIndex = 0
	};
	console.log(currentIndex);

	/*Changement des images*/
	slidesImages(currentIndex);

}

/*Récupération de la class .banner-img contenant le chemin de la 1ère image*/
const carrouselImages = document.querySelector(".banner-img");

/*Récupération du paragraphe contenu dans l'id #banner de la div*/
const carrousselContent = document.querySelector('div#banner>p');

/*Paramètres changement des images (Ligne 65 du code)*/
function slidesImages(currentIndex) {
	/*Récupération chemin des images du tableau slides*/
	let image = slides[currentIndex].image;

	/*Récupération texte associé à l'image du même tableau*/
	let tagLine = slides[currentIndex].tagLine;

	carrouselImages.src = image;
	carrousselContent.innerHTML = tagLine;

	/*Changement des bullets points actif*/
	showActiveBullet(currentIndex);
}

/*Récupération des classes .dot contenant les bullets points du carrousel,
conversion en un tableau js grâce à la méthode "Array.from"*/
const bulletsCarrousel = Array.from(document.querySelectorAll(".dot"));
console.log(bulletsCarrousel);

/*Paramètres changement des bullets points actif (Ligne 87 du code)*/
function showActiveBullet(currentIndex) {
	/*si l'index n'est pas le current index je supprime la classe active sinon je la rajoute */
	/*Création d'une boucle pour gérer les bullets points actif*/
	bulletsCarrousel.forEach((element, index) => {
		/*Si currentIndex est strictement égal à index, alors la classe s'active*/
		if (currentIndex === index) {
			element.classList.add('dot_selected');
		}
		/*Sinon, elle se déplace sur celle active*/
		else {
			element.classList.remove('dot_selected');
		}
		console.log(element, index, currentIndex);
	});
}