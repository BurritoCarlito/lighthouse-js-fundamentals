# This is the playerClass, each player has a name, and 3 lives at the start of the game

class Player 
  
  def initialize(name)
    @name = name
    @lives = 3
  end

  def name
    @name
  end

  def minusLife
    @lives = @lives - 1
  end
end
