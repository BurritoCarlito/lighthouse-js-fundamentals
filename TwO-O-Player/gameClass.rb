# game Class that will have all game features 

class Game 

  def initialize(player1, player2)
    @player1 = player1
    @player2 = player2
    @current_player = player1
  end

  def change_of_player
    @current_player = 
    if @current_player == @player1
      @player2
    else
      @player1
  end
end

  #logic to ask question
  def generate_question
    # generates the two random numbers for the question
    number1 = rand(20)
    number2 = rand(20)

    question_answer = number1 + number2

    # asks the question
    question = "#{@current_player.name}: What is #{number1} + #{number2} equal to?"
    puts question

    print 'Answer: '
    # gets the other player's input
    answer = gets.chomp

    # logic to answer question and score message
    if answer.to_i == question_answer.to_i
      puts "YES! You are correct."
      puts "P1: #{@player1.lives}/3 vs P2:#{@player2.lives}/3"
    else 
      puts "Seriously? No. Lost a life."
      @current_player.lives -= 1
      puts "P1: #{@player1.lives}/3 vs P2:#{@player2.lives}/3"
  end

  change_of_player
    puts "----- NEW TURN -----"
  end

  # to start the game 
  def game_start 
    puts "----- START GAME -----"

    while @player1.lives > 0 && @player2.lives > 0
    generate_question
  end

  # logic if game ends due to a player reaching 0
  puts "#{@current_player.name} wins with a score of #{@current_player.lives}/3. Congratulations!"
  puts "----- GAME OVER -----"
  puts "Good Bye!"
  end
end
  
