class Appcomponent {
    name = 'Vagish';
    age = 30;
    company = 'tek'
    getName() {
        console.log(this.name) // obj
        this.getAge()
    }
    getAge() {

        console.log(this.age)
    }
}

// Compile
function Appcomponent() {
    this.name = 'Vagish';
    this.age = 30;
    this.company = 'tek';
    // this.getName = function(){
    //     company = 'tel'
    //     console.log(this) // obj
    //     this.getAge()
    // }
    // this.getAge = function(){
    //     console.log(this.age)
    // }
}	

Appcomponent.prototype.getCompany = function () {
    console.log(this.company);
}

Appcomponent.prototype.getName = function(){
        company = 'tel'
        console.log(this) // obj
        this.getAge()
    }
Appcomponent.prototype.getAge = function(){
        console.log(this.age)
    }



var obj = new Appcomponent();
var test = new Appcomponent();




obj = {
    name: 'Vagish',
    age: 30,
    getName: function(){
        console.log()
    }
}


function sum () {
    var a;
    var b;
    return a + b + c; // error
     a = 5;
     b = 10;
}

sum()


function addMe() {
    if(true) {
        let a;
        a = 5;
        let a = 5;
        let b = 10;
    }
    console.log(az+b);
}

function addMe() {
    var a ;
    var b;
    if(true) {
         a = 5;
         b = 10;
    }
    console.log(a+b);
}


// Inhertiance

function Person(first, last, age, gender, interests) {
    this.name = {
      first,
      last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;

  };
  Person.prototype.company = 'tek'
  Person.prototype.greeting = function() {
    alert('Hi! I\'m ' + this.name.first + '.');
  };
  var myDetail = new Person('Vagish', 'Gupta', 30, 'Male', 'coding');

  myDetail = {
      name: {
          first: 'Vagish',
          last: 'Gupta',
          __proto__: {

          }
      },
      age:30,
      gender: 'Male',
      interests: 'Code',
      __proto__: {
          company: 'tek',
          greeting: function(){

          },
          __proto__: {

          }
      }
  }
  var myDetail1 = new Person('Aditi', 'Gupta', 26, 'feMale', 'coding');


  myDetail1 = {
    name: {
        first: 'Aditi',
        last: 'Gupta',
        __proto__: {

        }
    },
    age:26,
    gender: 'feMale',
    interests: 'Code',
    __proto__: {
        company: 'tek',
        greeting: function(){

        },
        __proto__: {

        }
    }
}


// Event Emitter logic

function Emitter() {
    this.event = {}
}

Emitter.prototype.on = function(type, listner) {
    this.event[type] = this.event[type] || [];
    this.event[type].push(listner);
}

Emitter.prototype.emit = function(type) {
    if(this.event[type]) {
        this.event[type].forEach(function(element) {
            element();   
        });
    }
}

var emtr = new emitter();
emtr.on(config.events.GREET, function() {
    console.log('Somewhere someone said hello')
})
emtr.on(config.events.GREET , function(){
    console.log('A greet occur')
})
emtr.emit(config.events.GREET);


/// Callback


function sum (a , b, callback) {
    return a + b;

    console.log('db operation')
    callback(); 

}

var callback = function() {
    console.log('done');
}

// sum(2 , 4 , callback);

sum(2 ,4 , function() {
    console.log('done');
})

function myFunction() {
    setTimeout(function(){ console.log('in settimeout') }, 3000);
    console.log('after time out')
}


$(document).ready(function(){
    $("button").click(function(){
        $("p").hide("slow", function(){
            alert("The paragraph is now hidden");
        });
    });
});

jquery.js

$.prototype.hide = function(type, callback ) {
    type.css('display', 'none');
    callback()
}


function first(callback){
    // Simulate a code delay
    setTimeout( function(){
      console.log('1');
      callback()
    }, 2000 );
  }
  
//   function second(){
//     console.log('2');
//   }

second = function (){
        console.log('2');
      }
    
  
  first(second);
  // second();







