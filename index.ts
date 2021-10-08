// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to 
// all TypeScript weakness flags.

// String Types mini-challenge
// Write a function that will display the most recent reviewers name next to the review total,
// making sure to assign a type to the parameter, to prevent unwanted behaviour.

// Boolean Types mini-challenge
// if the last reviewer is a loyalty User, can you add a star to the end of their name?
// please do so in the existing function, and make sure to declare what type of 
// parameters the function takes.
// : boolean
const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')
const reviewTotalDisplay = document.querySelector('#reviews')
let isOpen: boolean

const reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]

function displayReviewTotal(value: number, reviewer: string, loyalty: boolean) {
    const iconDisplay = loyalty ? '🌟' : ''
    reviewTotalDisplay.innerHTML = 
        `review total ${value.toString()} | last reviewed by ${reviewer} ${iconDisplay}`
}

displayReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

const you: {
    userName: {firstName : string, lastName : string};
    isReturning: boolean;
} = {
    userName: {firstName: 'Mike', lastName: 'Brown'},
    isReturning: true,
}


function populateUser(isReturning: boolean, userName: string ) {
    if (isReturning){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

populateUser(you.isReturning, you.userName.firstName)
