//Exercise 1 
// Here’s your first exercise for this section. I want you to create an address object 
// with three properties, street, city, and zip code using the object literal syntax. 
// When you do that, then create a function called showAddress that takes an address object 
// and displays all the properties of this object along with their value.
let address = {
    street: 'Lake Shore Drive',
    city: 'Chicago',
    zipCode: 14217,
    showAddress: function (street) {
        return 'My street is: ' + address.street;
    }
};
let myAddress = address.showAddress();
console.log(myAddress)

//Exercise 2 
// So your exercise is to write two different functions, 
// one is a factory function, 
 function getAddress () {
    return {
        street: 'Lake Shore Drive',
        city: 'Chicago',
        zipCode: 14217,
        showAddress () {
            console.log(address)
        }
    }
 }
 const findAddress = getAddress();

//the other is a constructor function, to initialize an address object. 
 function MyAddress(address) {
    this.street = 'Lake Shore Drive';
    this.city = 'Chicago';
    this.zipCode =  14217;
    this.showAddress = function () {
        console.log(address);
    }
 }

// Exercise 3
// create a blog post object with these properties. title, body, author, views, 
// which represents the number of times this post has been viewed. 
// Comments, now each comment should have a couple properties, author and body. 
// And finally, another property, that each post should have is isLive. 
// Now that can be either true or false. So once again you should use the object literal 
// syntax to create and initialize a blog post. Give each property some value, the actual value doesn't really matter.

let blogPost = {
    title: 'Yes, Chief',
    body: 'The conversation touches on outlasting competitors pandemic-defined community, the duality unicorn valuations and the word girlboss.',
    author: 'Natasha Mascarenhas',
    views: 24,
    comments: {
        author: 'Michelle Dante',
        body: 'Great post'
    },
    isLive: true,
};


//Exercise 4


//Exercise 5
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes:"http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};
//Write the command to add the language "Go" to the end of the languages array.
programming.languages.push('Go')

// Change the difficulty to the value of 7.
programming.difficulty = 7;

// Using the delete keyword, write the command to remove the jokes key from the programming object.
delete programming.jokes;

// Write the command to add a new key called isFun and a value of true to the programming object.
programming.isFun = true;

// Using a loop, iterate through the languages array and console.log all of the languages.
for (let allLanguages in programming.languages) {
    console.log(`${allLanguages}: ${programming.languages[allLanguages]} `);
}

// Using a loop, console.log all of the keys in the programming object.
for (let key of Object.keys(programming))
    console.log(key)

// Using a loop, console.log all of the values in the programming object.
for (let entry of Object.entries(programming))
    console.log(entry)
