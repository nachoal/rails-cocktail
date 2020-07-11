require 'open-uri'

doc = JSON.parse(
  open('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list').read
)

doc['drinks'].each do |ingredient|
  Ingredient.create!(name: ingredient['strIngredient1'])
end
