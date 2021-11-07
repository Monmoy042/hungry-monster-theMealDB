// Search Meals by Name
const mealSearch = document.getElementById('meal-search');
mealSearch.addEventListener('click', () => {
	const mealInput = document.getElementById('meal-input').value;

	const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealInput}`;
	fetch(url)
		.then((res) => res.json())
		.then((data) => showMeals(data));

	document.getElementById('meal-input').value = ``;
});

// Show Meals Thumbnail and Title
const showMeals = (foods) => {
	// console.log(foods);
	const mealDiv = document.getElementById('show-meal-info');
	const mealThumbnail = `${foods.meals[0].strMealThumb}`;
	const mealName = `${foods.meals[0].strMeal}`;
	const mealID = `${foods.meals[0].idMeal}`;

	const showMealImgName = `
		<img src='${mealThumbnail}' class="img-fluid rounded" />
		<h5 id="mealTitle" class="text-center meal-title">${mealName}</h5>
	`;
	const showMealInfoDiv = document.createElement('div');
	showMealInfoDiv.className = 'col col-3';
	showMealInfoDiv.innerHTML = showMealImgName;
	mealDiv.appendChild(showMealInfoDiv);
};

