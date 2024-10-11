const recipe = {
    title : "Tomato Pasta",
    imageSrc : "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
}

const recipeHeading = document.getElementById("recipeHeading");
recipeHeading.textContent = recipe.title;

const image = document.getElementsByTagName("img");
image.src = recipe.imageSrc;