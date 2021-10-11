<<<<<<< HEAD
import { displayReviewTotal, populateUser } from './utils'
import { Permissions, LoyaltyUser } from './enums'

const propertyContainer = document.querySelector('.properties')
const footer = document.querySelector('.footer')


=======
import { displayReviewTotal, populateUser, displayProperties } from './utils'
>>>>>>> f97279fd34595ba5b4595539bd795e075a5c4c71
let isOpen: boolean
let isLoggedIn: boolean


// Reviews
const reviews: ({
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
} |
{
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
    description: string;
})[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: LoyaltyUser.SILVER_USER,
        date: '27-03-2021',
        description: 'AWESOME COUCH!!!!!!'
    }
]


// user
// const you: {
//     userName: {firstName : string, lastName : string};
//     isReturning: boolean;
//     age: number;
//     stayedAt: string[];
// } = {
//     userName: {firstName: 'Mike', lastName: 'Brown'},
//     isReturning: true,
//     age: 50,
//     stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
// }


const you = {
    userName: {firstName: 'Mike', lastName: 'Brown'},
    permissions: Permissions.ADMIN, 
    isReturning: true,
    age: 50,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}





const properties: {
        img: string;
        title: string;
        price: number;
        location: {
            streetAddress: string;
            city: string;
            state: string;
            zipcode: number;
            country: string;
        };
        contactDetails: [number, string];
        isAvailableToRent: boolean;
}[] = [
    {
        img: './images/todd-kent-178j8tJrNlc-unsplash.jpg',
        title: 'Lovely Country Home!',
        price: 500,
        location: {
            streetAddress: '123 Main Street',
            city: 'Niceville',
            state: 'Florida',
            zipcode: 12345,
            country: 'USA'
        },
        contactDetails: [8506521687, 'landlord@home.com'],
        isAvailableToRent: true
    },
    {
        img: './images/ralph-ravi-kayden-2d4lAQAlbDA-unsplash.jpg',
        title: 'Super Posh Bungaloo!',
        price: 1500,
        location: {
            streetAddress: '123 Beach Drive',
            city: 'South Beach',
            state: 'Florida',
            zipcode: 65432,
            country: 'USA'
        },
        contactDetails: [7706548451, 'madoff@aol.com'],
        isAvailableToRent: true
    },
    {
        img: './images/sieuwert-otterloo-aren8nutd1Q-unsplash.jpg',
        title: 'Charming Family Dwelling!',
        price: 7500,
        location: {
            streetAddress: '123 Country Avenue',
            city: 'Youngstown',
            state: 'Alabama',
            zipcode: 98745,
            country: 'USA'
        },
        contactDetails: [6652125481, 'bobbyjoe@yahoo.com'],
        isAvailableToRent: false
    }

]

displayReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)
populateUser(you.isReturning, you.userName.firstName)

<<<<<<< HEAD
let authStatus : any

isLoggedIn = true;

function showDetails(authorityStatus: any, element : HTMLDivElement, price: number) {
    if (authorityStatus) {
        const priceDisplay = document.createElement('div')
        priceDisplay.innerHTML = price.toString() + '/night'
        element.appendChild(priceDisplay)
    }
 }

for (let i=0; i < properties.length; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = properties[i].title
    const image = document.createElement('img')
    image.setAttribute('src', properties[i].img)
    card.appendChild(image)
    propertyContainer.appendChild(card)
    showDetails(authStatus, card, properties[i].price)
}

//use your location, your current time, and the current temp
let currentLocation : [string, string, number] = ['Kennesaw, GA', '2:23PM', 75]
footer.innerHTML = `${currentLocation[0]} ${currentLocation[1]} ${currentLocation[2]}°F`
=======
displayProperties(properties);
>>>>>>> f97279fd34595ba5b4595539bd795e075a5c4c71
