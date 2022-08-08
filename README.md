# LHL Snake Client Project

**Version 1.0**

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes a challenge to maneuver. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, or another snake - upon which it dies.

This is simply a multiplayer take on the "snake" genre.

Before you can run this client, you will need to be running the server side which you can download and install from this repository as well. 

## Final Product:

![Snake Client - main interface](./welcome.png)

![Snake Serve - Game Board](./play.png)

## Getting Started:

- Follow steps inside the snake server repo to run the server side.  The modified snake server is required to receive "group messages" when new players join the game, but otherwise is not necessary.
- Run the development snake client using the `node play.js` command.
- You may need to update the server hostname (or IP) and port information in the client side `constants.js` file too once you get that info from the snake server.

## Bonus Features Added:
- Added connection error exit instead of a harsh failure notification
- Added intro with ASCII art
- Stretch feature: receive notfication if others join the game or leave the game
- Added output of score on crash
- Changed the background color & change snakes to automated 

## Future Ideas:
- [ ] "Survived Duration" counter (seconds survived)
- [ ] "Number of Moves" counter (number of direction changes made)
- [ ] Automatic snake movement (via client side) after first keypress
- [ ] Every time you change snake's direction, it gets faster!