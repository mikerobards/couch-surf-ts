
const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')
const reviewTotalDisplay = document.querySelector('#reviews')
let isOpen: boolean

const reviews: {
    name: string;
    stars: number;
    loyaltyUser: boolean;
    date: string;
}[] = [
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
    age: number;
    stayedAt: string[];
} = {
    userName: {firstName: 'Mike', lastName: 'Brown'},
    isReturning: true,
    age: 50,
    stayedAt: [
        'florida-home', 'oman-flat', 'tokyo-bungalow'
    ]
}


function populateUser(isReturning: boolean, userName: string ) {
    if (isReturning){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

populateUser(you.isReturning, you.userName.firstName)
