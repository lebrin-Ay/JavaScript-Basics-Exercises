// Exercise 1
// Write a function called extractKey which accepts two parameters, an array of objects, 
// and the name of a key and returns an array with just the values for that key.
function extractKey (arr, key) {
    let returnValue = arr.map(names => names[key]); //using map method 
    return returnValue;
}
extractKey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name")


// Exercise 2
// Write a function called filterLetters which accepts an array of letters and returns 
// the number of occurrences of a specific letter. This function should be case insensitive
function filterLetters () {

}


// Exercise 3
// Write a function called printFirstAndLast which accepts an array (of objects) 
// and console.logs a new string with the first character and the last character of each value.



// Exercise 4



// Exercise 5
// Write a function called addKeyAndValue which accepts three parameters, an array (of objects), 
// a key and a value. This function should return the array of objects after each key and value has 
// been added. 
function addKeyAndValue (arr, key, value) {  
    let returnedValue = arr.forEach(element => element[key] = value)
    return returnedValue;   
}
addKeyAndValue([{name:'Joshua'},{name:'Mark'},{name:'Arthur'}],"isInstructor", true);

// Exercise 6
let users = [
    {
      username: 'larry',
      email: 'larry@foo.com',
      yearsExperience: 22.1,
      favoriteLanguages: ['Perl', 'Java', 'C++'],
      favoriteEditor: 'Vim',
      hobbies: ['Fishing', 'Sailing', 'Hiking'],
      hometown: {
        city: 'San Francisco',
        state: 'CA'
      }
    },
    {
      username: 'jane',
      email: 'jane@test.com',
      yearsExperience: 33.9,
      favoriteLanguages: ['Haskell', 'Clojure', 'PHP'],
      favoriteEditor: 'Emacs',
      hobbies: ['Swimming', 'Biking', 'Hiking'],
      hometown: {
        city: 'New York',
        state: 'NY'
      }
    },
    {
      username: 'sam',
      email: 'sam@test.com',
      yearsExperience: 8.2,
      favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],
      favoriteEditor: 'Atom',
      hobbies: ['Golf', 'Cooking', 'Archery'],
      hometown: {
        city: 'Fargo',
        state: 'SD'
      }
    },
    {
      username: 'anne',
      email: 'anne@test.com',
      yearsExperience: 4,
      favoriteLanguages: ['C#', 'C++', 'F#'],
      favoriteEditor: 'Visual Studio Code',
      hobbies: ['Tennis', 'Biking', 'Archery'],
      hometown: {
        city: 'Albany',
        state: 'NY'
      }
    },
    {
      username: 'david',
      email: 'david@test.com',
      yearsExperience: 12.5,
      favoriteLanguages: ['JavaScript', 'C#', 'Swift'],
      favoriteEditor: 'VS Code',
      hobbies: ['Volunteering', 'Biking', 'Coding'],
      hometown: {
        city: 'Los Angeles',
        state: 'CA'
      }
    }
  ];
// Write a function called printEmails which console.log's each email for the users.
function printEmails() {
    users.forEach(function(users){
    console.log(users.email)
});
}
printEmails();

// Write a function called printHobbies which console.log's 
// each hobby for each user.
function printHobbies() {
    users.forEach(function(users){
    console.log(users.hobbies)
});
}
printHobbies();

// Write a function called findHometownByState which returns the 
// first user which has a hometown of the state that is passed in
function findHometownByState('CA') {

}

console.log(users.find(users.state['CA']));

// Write a function called allLanguages which returns an array of 
// all of the unique values
function allLanguages () {

}
users.forEach(function (users) {
    console.log(users.favoriteLanguages)
}