# odin-rock-paper-scissors

This project helped reinforece the following lessons:

- Problem Solving
  - Understanding and thinking through the problem on paper
  - Planning out my approach & tackling the easiest problems first
  - Thinking about more efficient solutions
- Debugging
- Passing Arguments

Before starting this course, I didn't fully understand how to pass arguments and set parameters. This lesson really clarified that concept for me. This project also solidified the lesson of, "functions should do exactly what is expected by it's name, no more". I had originally coded the game function to count score and display the record. I realized it would be easier to read the code if I created seperate functions for keeping score and displaying the record.

Throughout this project I spent the most time trying to figure out how to keep score. I knew I could accomplish this with global variables but remembered that you should avoid global variables whenever possible. I was unable to think of a simple alternative so I decided to proceed with using global variables. I initially encountered some errors related to scope but was able to resolve after researching on stackoverflow and discord.

Things to consider moving forward:

- I should have added comments earlier in the process
- I forgot to follow some of the rules for creating good commit messages
- I used the math.random and switch functions to determine the computers play. After looking at some other examples, I found someone who chose a string randomly out of an array - which seems to be a better approach.
