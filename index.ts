import { displayReviewTotal, populateUser } from './utils'
let isOpen: boolean

// Reviews
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
    }
]


// user
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

displayReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

populateUser(you.isReturning, you.userName.firstName)
