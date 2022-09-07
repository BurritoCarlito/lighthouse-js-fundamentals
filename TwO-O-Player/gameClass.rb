# game Class that will have all game features 

class Game 

  def initialize(player1, player2)
    @player1 = player1
    @player2 = player2
  end

  def new_question(player)
    number1 = rand(20)
    number2 = rand(20)

    puts "#{player.name}: What is #{number1} + #{number2} equal to?"
    answer = gets.chomp.to_i
  end
end

  
