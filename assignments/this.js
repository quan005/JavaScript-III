/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When in the global scope, the value of “this” will be the window/console Object
* 2. Whenever a function is called by a preceding dot, the object before that dot is this.
* 3. Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
* 4. Whenever JavaScript’s call or apply method is used, this is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1 -- Window Binding
// code example for Window Binding

function global(object) {
  console.log(this);
  return object;
}
global("objectName");

// Principle 2 -- Implicit Binding
// code example for Implicit Binding

const myObj = {
  firstName: 'DaQuan',
  introduction: function(lastName) {
    console.log(this);
  }
};
myObj.introduction('Freeman');

// Principle 3 -- New Binding
// code example for New Binding

function BasketBall(player) {
  this.scored = ' Scored';
  this.player = player;
  this.announcer = function() {
    console.log(this.player + this.scored);
    console.log(this);
  };
}

const lebron = new BasketBall('Lebron');
const kobe = new BasketBall('Kobe');

lebron.announcer();
kobe.announcer();

// Principle 4 -- Explicit Binding
// code example for Explicit Binding

lebron.announcer.call(kobe);
kobe.announcer.apply(lebron);
