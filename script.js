document.getElementById('searchBtn').addEventListener('click', function() {
    const ingredients = document.getElementById('ingredients').value;
    const recipeList = document.getElementById('recipeList');

    // Очистка предыдущих результатов
    recipeList.innerHTML = '';

    if (ingredients) {
        fetchRecipes(ingredients);
    } else {
        recipeList.innerHTML = '<li>Пожалуйста, введите ингредиенты.</li>';
    }
});

function fetchRecipes(ingredients) {
    // Здесь вы должны заменить URL на ваш API
    const apiUrl = `https://api.example.com/recipes?ingredients=${encodeURIComponent(ingredients)}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayRecipes(data);
        })
        .catch(error => {
            console.error('Ошибка:', error);
            document.getElementById('recipeList').innerHTML = '<li>Не удалось загрузить рецепты. Попробуйте еще раз позже.</li>';
        });
}

function displayRecipes(recipes) {
    const recipeList = document.getElementById('recipeList');

    if (recipes.length === 0) {
        recipeList.innerHTML = '<li>Рецепты не найдены.</li>';
        return;
    }

    recipes.forEach(recipe => {
        const li = document.createElement('li');
        li.textContent = recipe.title; // Предполагается, что у вашего объекта есть свойство "title"
        recipeList.appendChild(li);
    });
}