const recipe = {
    title : "Tomato Pasta",
    imageSrc : "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
}

const recipeHeading = document.getElementById("recipeHeading");
recipeHeading.textContent = recipe.title;

const imageContainer = document.getElementById("imageContainer");
const image = document.createElement("img")
image.setAttribute("src", recipe.imageSrc);
image.className = "image";
imageContainer.appendChild(image);

const ingredientsList = document.getElementById("ingredientsList");
for(let list of recipe.ingredients) {
    let listItem = document.createElement("li");
    listItem.className = "list-item";
    listItem.textContent = list;
    ingredientsList.appendChild(listItem)    
}