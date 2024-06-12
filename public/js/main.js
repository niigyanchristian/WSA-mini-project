window.onscroll = () =>{
    // Add Sticky class to header
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100)
}


var container = document.querySelector('.body_container');

const Items = [
    {id:4,path:'nikeaf1.jpg',title:'Nike AF1 Triple White',snippet:'GH₵ 300.00'},
    {id:4,path:'laptop.jpg',title:'HP Laptop',snippet:'GH₵ 300.00'},
    {id:4,path:'laptop2.jpg',title:'HP Laptop',snippet:'GH₵ 300.00'},
    {id:4,path:'laptop3.jpg',title:'HP Laptop',snippet:'GH₵ 300.00'},
    {id:4,path:'foamcleaner.jpg',title:'Foam Cleaner',snippet:'GH₵ 300.00'},
    {id:4,path:'iphone14promax.jpg',title:'Iphone 14 Pro Max',snippet:'GH₵ 15,000.00'},
    {id:1,path:'bottle-5689969_1280.png',title:'Bottle',snippet:'GH₵ 300.00'},
    {id:2,path:'monitor-2004457_1280.png',title:'Apple Monitor',snippet:'GH₵ 300.00'},
    {id:3,path:'running-clock-1329309_640.png',title:'Watch',snippet:'GH₵ 300.00'},
    {id:3,path:'ps4.jpg',title:'Ps4 Gaming Console'},
    {id:3,path:'PS5.jpg',title:'Ps5 Gaming Console',snippet:'GH₵ 300.00'},
    {id:4,path:'nikeaf1.jpg',title:'Nike AF1 Triple White',snippet:'GH₵ 300.00'},
]


window.onscroll = () =>{
    if (window.innerWidth < 1280) return;

    // // Add Sticky class to header
    let header = document.querySelector('.navs');
    let body = document.querySelector('.body');
    if(window.scrollY<308){
        header.classList.remove('sticky');
        body.classList.remove('stickys');
    }else{
        header.classList.add('sticky');
        body.classList.add('stickys');
    }
    if(window.scrollY>800){
        header.classList.remove('sticky');
        body.classList.remove('stickys');
    }
}




// ===================================
var currentSlide = 0;
var carousel = document.getElementById('carousel');
var slides = document.querySelectorAll('.carousel-item');
var totalSlides = slides.length;

function showSlide(index) {
  if (index < 0) {
    index = totalSlides - 1;
  } else if (index >= totalSlides) {
    index = 0;
  }

  var offset = -index * 100 + '%';
  carousel.querySelector('.carousel-inner').style.transform = 'translateX(' + offset + ')';
  currentSlide = index;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}
setInterval(nextSlide, 3000); 


// =====================================
const navs = [
    {img:'/images/vehicles.png',title:'Vehicles'},
    {img:'/images/vehicles.png',title:'Vehicles'},
    {img:'/images/vehicles.png',title:'Vehicles'},
    {img:'/images/vehicles.png',title:'Vehicles'},
    {img:'/images/vehicles.png',title:'Vehicles'},
    {img:'/images/vehicles.png',title:'Vehicles'},
]

// ======================================================


const selectCat = document.getElementById('select-cat');
const selectRegion = document.getElementById('select-region');
const selectPrice = document.getElementById('select-price');
const applyFiltersButton = document.getElementById('apply-filters');
const classifiedsContainer = document.getElementById('classifieds-container');

applyFiltersButton.addEventListener('click', () => {
    const selectedCategory = selectCat.value;
    const selectedRegion = selectRegion.value;
    const selectedPrice = selectPrice.value;

    fetch('http://localhost:3000/filter', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ region:selectedRegion,category:selectedCategory,price:selectedPrice })
    })
    .then(response => response.json())
    .then(data => {
        displayClassifieds(data);
    })
    .catch(error => console.error('Error fetching classifieds:', error.message));
});

function displayClassifieds(classifieds) {
    classifiedsContainer.innerHTML = '';
    classifieds.forEach(item => {
        const itemElement = document.createElement('a');
        itemElement.className = 'item';
        itemElement.dataset.category = item.category_id;
        itemElement.dataset.region = item.region;
        itemElement.dataset.price = item.price;

        itemElement.innerHTML = `
            <div class="image">
                <img src="/images/${item.image_path}" alt="">
                <div class="tag">
                <p>Top</p>
                </div>
            </div>
                <div class="main">
                    <p class="snippet">${item.name}</p>
                    <p class="price">${item.description}</p>
                    <p class="price"><strong style="color: black;">Price </strong>${item.price}</p>
                    <p class="price"><strong style="color: black;">Qut. Stock </strong>${item.stock_quantity}</p>
                    <div class="bookmark">
                        <img src="/images/icons/bookmark.svg" alt="">
                    </div>
                </div>
            </a>
        `;
        classifiedsContainer.appendChild(itemElement);
    });
}