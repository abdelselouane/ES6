/*
let & const
In ES6, you may declare your variables with var, let or const. Which one
should you choose?

/*** CONST ***/
// const should be chosen if you’re not planning on changing the value of this
// variable (which then becomes a constant). This should be your default
// choice unless you absolutely need to re-assign it during runtime. Why
// should it be the default? Because it keeps your code explicit and clear.

/*** LET ***/
// let should be your second choice – use it whenever you need to re-assign
// variables. This will mostly be the case in mathematical alogrithms or loops.
// var should probably never be chosen. When using it, you may have a
// constant or a variable – but no one knows! Therefore, use const or let
// instead.


