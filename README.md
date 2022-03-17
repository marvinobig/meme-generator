# Meme Generator
A react app that recives data from the Giphy API and then displays it on the users screen. It allows the user to add text to whatever image is produced.

## What I've learned
1. How would you describe the concept of "state"?
State is an object or variable that is able to be changed (mutated) by the component unlike props. It is also managed by the component internally like a variable declared within a function in vanilla javascript.


2. When would you want to use props instead of state?
When you don't expect the data a component is recieving to change according to the user's input or actions.


3. When would you want to use state instead of props?
When you expect data in an application to change according to user input and actions.


4. What does "immutable" mean? Are props immutable? Is state immutable?
Immutable is when a variable or object in javascript is not able to be changed. Props in react are immutable and state is not immutable.

5. You have 2 options for what you can pass in to a
   state setter function (e.g. `setCount`). What are they?
You can pass in the variable you are trying to update e.g. setCount(count + 1) or you can pass in a callback function e.g. setCount(() => {code...})


6. When would you want to pass the first option (from answer
   above) to the state setter function?
You use this when you already know what the previous value of state is.


7. When would you want to pass the second option (from answer
   above) to the state setter function?
You use this when you don't know what the previous value of state is and need the set function to callback to the previous state and return it so it is ready to be updated.