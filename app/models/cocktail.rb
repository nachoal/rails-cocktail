class Cocktail < ApplicationRecord
  validates :name, uniqueness: true, presence: true

  has_many :doses, dependent: :destroy # cuando borremos cocktail, se van a borrar todas las doses que tiene
  has_many :ingredients, through: :doses
  has_many :reviews, dependent: :destroy
end