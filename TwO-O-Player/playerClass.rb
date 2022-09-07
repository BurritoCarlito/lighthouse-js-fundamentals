# This is the playerClass, each player has a name, and 3 lives at the start of the game

class Player 
  attr_accessor :name, :lives
  
  def initialize(name)
    @name = name
    @lives = 3
  end
end

player1 = Player.new('Carlo')
puts player1.name
