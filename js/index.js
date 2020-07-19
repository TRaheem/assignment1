//hamburger menu.

//This line of code runs when the bar is clicked
$('.menu-toggle').click(function(){
  $(".nav").toggleClass("portrait-nav");
  $(this).toggleClass("is-active");
});
 
// javascript for gallery section

// object definition.
const imgList = [{id: 'one', website: 'https://www.britannica.com/place/South-America', name: 'South America', source: 'images/des1_small.jpg', description: '<br>Argentine Patagonia is a true treat<br>for all travelers, not just those with<br> a penchant for adventure. From its<br> diverse wildlife to its majestic<br> mountains and jaw-dropping glaciers,<br>nature is at its best.'},
{id:'two', website: 'https://viewfinder.expedia.com/top-rated-vacation-destinations-in-north-america/', name: 'North America', source: 'images/des2_small.jpg', description: '<br>Wailea, apparently, is never the bridesmaid,<br> always the bride. Blessed with five stunning<br> crescent-shaped beaches, luxuriously stylish<br> resorts, & Ahihi-Kinau Natural Area Reserve,<br> this destination pampers all travelers’ senses<br> with world-class food, beautiful sights, fresh<br> ocean scents, and inviting weather.'}, 
{id: 'three', website: 'https://travel.usnews.com/Paris_France/', name: 'Europe', source: 'images/des3_small.jpg', description: '<br>Paris, the City of Light draws millions<br> of visitors every year with its<br> unforgettable ambiance. Of course,<br> the divine cuisine and vast art<br> collections deserve some of the credit<br> as well. '},
{id: 'four', website: 'https://www.planetware.com/tourist-attractions-/queensland-aus-qld-qld.htm', name: 'Australia', source: 'images/des4_small.jpg', description: '<br>Queensland, the Sunshine State, is Australia<br> most popular vacation destination.<br> Golden beaches, idyllic tropical islands,<br> fantastic surf breaks, World Heritage-listed<br> rainforests, rivers, reefs, and waterfalls are <br>just some of the natural jewels.'},
{id: 'five', website: 'https://travel.usnews.com/Cairo_Egypt/', name: 'Africa', source: 'images/des5_small.jpg', description: '<br>The desert heat, the noisy streets and<br> the sheer size of Cairo will leave even<br> the most adaptable traveler with very<br> serious case of culture shock.'},
{id: 'six', website: 'https://www.tripsavvy.com/chiang-mai-travel-guide-1458476', name: 'Asia', source: 'images/des6_small.jpg', description: '<br>Thailand, northern capital of Chiang Mai<br> attracts nearly 2 million foreign tourists a<br> year -- double the entire metropolitan<br> area population of just under one<br> million people!'}] 

// Variable where we will store img tags
let imgTemplate = ''; 

// Flex container for images
const gallery = document.querySelector('.gallery'); 

// Loop through items using forEach 
imgList.forEach(function(item){
  console.log(item);
  
// output variable (imgTemplate)
imgTemplate += `<img src="${item.source}" alt=${item.name}><div><h5>${item.description}</h5><a href=${item.website} target ="_blank">${item.name}</a></div>`
});

// Add HTML img string to gallery container
gallery.innerHTML = imgTemplate;

