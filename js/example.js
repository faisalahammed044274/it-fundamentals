// var totalPrice =  26;
// var shippingCost;

// if (totalPrice <= 10) {
//     shippingCost = 5;
// } else if (totalPrice <= 20) {
//     shippingCost = 3;
// } else {
//     shippingCost = 0;
// }

// console.log('Shipping cost:', shippingCost);


// userMembership = 'freemium';
// if (userMembership !== 'premium') {
//     console.log('Upgrade to premium to access more features.');
// } else {
//     console.log('You have access to premium features!');
// } 


//  totalPrice = 21;
//  amazonPrime = false;
//  shippingCost = 5;
// if (totalPrice >= 20 && amazonPrime === true){
//     console.log('Wow ! you can get free shipping with this order!');
// } else {
//     console.log('Sorry! You are not eligible for free shipping. Your shipping cost is :', shippingCost);
// }


// var facebookUser = {userName: 'Faisal', password: '12345', email: 'faisal@example.com', profieImage:"reference-image.jpg", isLoggedIn: true};

// if (facebookUser.userName === 'Faisal' && facebookUser.password === '12345'&& facebookUser.isLoggedIn === true)    {
//     console.log('Welcome back, ' + facebookUser.userName + '!');
// }

// facebookUser.about = "engineer";
// delete facebookUser.about;
// facebookUser.friendList = ['Ali', 'Ahmed', 'Hassan'];

// // console.log(facebookUser);
// // console.log('Friend List:', facebookUser.friendList);

// facebookUser.currentWork = {company: 'Tech Solutions', position: 'Software Engineer', startDate: '2022-01-15'};

// console.log(facebookUser);

// console.log(facebookUser.friendList[0]);

// facebookUser.posts = [
//     {content: 'Had a great day!', timestamp: '2024-06-01 10:00:00'},
//     {content: 'Just finished a project.', timestamp: '2024-06-02 14:30:00'},
//     {content: 'Looking forward to the weekend!', timestamp: '2024-06-03 18:45:00'}
// ];

// console.log('Posts:', facebookUser.posts[2]);

// facebookUser.friendList[facebookUser.friendList.length] = "Mariaa"; 
// facebookUser.friendList[facebookUser.friendList.length] = "Tasfia"; 
// facebookUser.friendList[facebookUser.friendList.length] = "Sadia";
// facebookUser.friendList[facebookUser.friendList.length] = "Sagar";

// console.log( facebookUser.friendList);

// facebookUser.friendList.pop();
// console.log(facebookUser.friendList);


//Loops in JavaScript

var post1 = {content: 'Had a great day!', likes: 10, shares: 5, comments: 3};
var post2 = {content: 'Just finished a project.', likes: 20, shares: 10, comments: 8};
var post3 = {content: 'Looking forward to the weekend!', likes: 15, shares: 7, comments: 4};
var post4 = {content: 'Enjoying a nice meal.', likes: 8, shares: 3, comments: 2};

var facebookUser = {

    userName: 'Faisal',
    password: '12345',
    email: 'faisal@example.com',
    profieImage: "reference-image.jpg",
    isLoggedIn: true,
    posts: [post1, post3, post4]
}

for (var i = 0; i < facebookUser.posts.length; i++) {
    var post = facebookUser.posts[i];
    console.log('Post:', post.content);
    console.log('Likes:', post.likes);
    console.log('Shares:', post.shares);
    console.log('Comments:', post.comments);
    console.log('---');
}



var posts = [post1, post2];
for (var i = 0; i < posts.length; i++) {
    var post = posts[i];
    console.log('Post:', post.content);
    console.log('Likes:', post.likes);
    console.log('Shares:', post.shares);
    console.log('Comments:', post.comments);
    console.log('---');
}