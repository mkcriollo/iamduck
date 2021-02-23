# iamDuck

![altText](https://media.giphy.com/media/3xvNxkQLsTqeVZpIzI/giphy.gif)

## Overview

iamDuck is a easy to learn game, where the user will be playing a baby duck that is trying to escape Hell collecting toast spirtes while he flys around. The user will be face with multiple conflicts like bombs and demons that he/she would have to avoid in order to preserve life. If the user happens to collade with any of these objects the user will lose life from his life bar, collade 3 times and the game is over.The mission of the game is to collect as many toast spirtes as you can without dying.

1) Survival

The longer the user survives the quicker the obstacle will appear making it an repeative game game which is know to highly addictive.Each time the user aiming to achieve a higher score then their last.

![altText](https://media.giphy.com/media/v6UQlTPXQEN6HOW83T/giphy.gif)

2) Story Mode

Collect x amount of toast spirtes in order to face the reaper of hell. To win the boss level the player will have to bounce a soul back and fourth avoiding that the boss doesnt score on the player (not reflecting the soul back). If the player fails to reflect the soul 3 times the game will be over and the player will have the option of starting again from collecting toast spirtes or going back to the Home Page.

![altText](https://media.giphy.com/media/3xvNxkQLsTqeVZpIzI/giphy.gif)    ![altText](https://media.giphy.com/media/3xvNxkQLsTqeVZpIzI/giphy.gif)

## Functionality

- The user will navigate iamDuck by moving the mouse around and iamDuck will responed and follow occurrently.
- Obstacle will appear at random position on the bottom of the screen and will travel to the top of the screen where they will vanish.
- Toast spirtes follow a similar path as the obstacle just at a much frequent pace.
- If the user interacts with 3 obstacles then that will be the end of the game.
- As the player collects more toast spirtes the demons and bombs will appear more frequently and at a higher speed.


## Architecture 

The game will be center on a single page web page. There will be a story mode button that the user could use to start the story mode game. There will also be a survival game button that will allow the user to start the survival game.

- On the top of the page will be a title representing the name if the game and logo 
- On the side of the page will be links the developers LinkedIn and Github Repo as well as the developer profile page once created.

Once the game is started the user will be position at the center of the canvas. The user will have about 2-3 secs to get ready before the game fully starts. As the user plays the score will go up for every single toast that is collected.

Once the game is over and the user has lost all of he/shes life a screen will be display with either a continue yes or no button, allowing the user to start over again or go to Home page.

The boss level is structure after the famous design ping pong game, the player will be a playing a computer ai that is naturally 60% accurate with defelecting the ball. When the ball collades with either the player or the ai the ball speed will increase. As well depending on the location of where the ball hits the player the ball will travel at that angel. 


## Technologies 

- Vanilla JavaScript for game logic.
- HTML5 Canvas for rendering.
- Photoshop for sprites.
- Web Audio API for sound.
- CSS

## Implementation Timeline

- Weekend
  - Brainstorm idea for game.
  - Understand the games basic functionality.
  - Have a image layout on how the Game will look.
 
- Day 1
  - Learn and go over some projects that focus on canvas primarily.
  - Understand basic math needed in order to make the game function propertly 
  - Complete skeleton for project/game.
  - Build out canvas layout center in the screen
 
 - Day 2
   - Go over some more canvas in the morning to get a deeper understanding on Canvas and js.
   - Creating a "user" a circle in order to have visual reperesntation.
   - Start creating the game, starting of with having the functionaly of having the user(duck) move to the user mouse pad.
   - Starting to implement the bombs/droids/gems again just being circles that appear from the bottom of the canvas at random postiton. 
  
- Day 3
  - Start off by doing a bit of research on how to have some response when the user collades with either the bomb or the gems.
  - Start implementing the logic into the game.
  - Once logic is fully functionaly have it where when the user collects a coin his/hers socre goes up by one and if instead he/she collade with an obstacle than the user will lose a life every time, losing 3 lifes will make the game end.
  - Start Boss Level functionality
 
 - Day 4
   - Morning research/ refresh on how to start changing these circles into actual images(sprites)
   - Understanding the logic of how to get the user(sprite) to face the right direction based on the mouse movement including 360 degrees
   - Starting of the logic, as well as start setting up the background in a way where it will appear that the user is continuously flying.
   - Add boss sprites and animations
  
- Day 5
  - Get the start and play again functionality working. 
  - Look over the details and asure if there is any bugs that need to be fix to fix.
  - Working on the logo and title as well as the links to the developer profiles.
 
 ## Bonus
 
 - On the loading page allowing the user to pick different ducks/ backgrounds to allow the game a slight refresh everytime the user plays.
 - Floating powerups that will restore the user life by one.
 - Power up that appear rarely allowing the user to have invincibility and allows the player to be able to destroy these obstacles without being harm
 - Power up that will freeze time for a few seconds allowing the bombs/demons.(demons and bombs still cause damage to life)
 - Power up that will clear everything from the screen and prevent anything from appearing within 1 second.



