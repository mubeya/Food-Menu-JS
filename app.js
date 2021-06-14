let menus =  [{
    Id: "1",
    title:"Tteokbokki",
    category:"Korea",
    price: "10.99",
    img:"/images/tteokbokki.jpg",
    desc:"Spicy rice cakes, serving with fish cake."
}, 
{
    Id: "2",
    title:"Chicken Ramen",
    category:"Japan",
    price: "7.99",
    img:"/images/chicken-ramen.jpg",
    desc:"Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg."
},
{
    Id: "3",
    title:"Bibimbap",
    category:"Korea",
    price: "8.99",
    img:"/images/bibimbap.jpg",
    desc:"Boiling vegetables, serving with special hot sauce"
},
{
    Id: "4",
    title:"Dan Dan Mian",
    category:"China",
    price: "5.99",
    img:"/images/Dan-Dan-Noodles-10.jpg",
    desc:"Dan dan noodle, serving with green onion"
} ,
{
    Id: "5",
    title:"Yangzhou Fried Rice",
    category:"China",
    price: "12.99",
    img:"/images/Yangzhou-Fried-Rice.jpg",
    desc:"Yangzhou style fried rice, serving with bean and pickles"
} ,
{
    Id: "6",
    title:"Onigiri",
    category:"Japan",
    price: "9.99",
    img:"/images/Onigiri.jpg",
    desc:"Rice Sandwich, serving with soy sauce"
} ,
{
    Id: "7",
    title:"Jajangmyeon",
    category:"Korea",
    price: "15.99",
    img:"/images/Jajangmyeon.jpg",
    desc:"Black bean sauce noodle, serving with green onion"
} ,
{
    Id: "8",
    title:"Ma Yi Shang Shu",
    category:"China",
    price: "12.99",
    img:"/images/ma-yi-shang-shu.jpg",
    desc:"Hot pepper sauce noodle, serving with soy bean and onion"
} ,
{
    Id: "9",
    title:"Doroyaki",
    category:"Japan",
    price: "3.99",
    img:"/images/Dorayaki.jpg",
    desc:"Red bean paste dessert, serving with honey."
}   
]

const sectionCenter = document.querySelector(".section-center");
const allBtn = document.getElementById("all");  
const koreaBtn = document.getElementById("korea");  
const japanBtn = document.getElementById("japan");  
const chinaBtn = document.getElementById("china");  

showMenu(menus);
console.log(menus);

allBtn.addEventListener("click", function(){
    showMenu(menus);
});

koreaBtn.addEventListener("click", function(){
    const koreaMenu = menus.filter(item => {
        if(item.category === "Korea"){return true;}
    })
    showMenu(koreaMenu);
});

japanBtn.addEventListener("click", function(){
    const japanMenu = menus.filter(item => {
        if(item.category === "Japan"){return true;}
    })
    showMenu(japanMenu);
});

chinaBtn.addEventListener("click", function(){
    const chinaMenu = menus.filter(item => {
        if(item.category === "China"){return true;}
    })
    showMenu(chinaMenu);
});


function showMenu(menum){
    sectionCenter.innerHTML= "";
    menum.forEach(function(menu){
        const  menuEL = document.createElement("div");
        menuEL.classList.add("col-lg-6","col-sm-12", "mb-5");
            let {Id, title, category, price, img,desc} = menu;
            menuEL.innerHTML = `<div class="row">
                                    <div class="col-4 ">
                                        <img class="rounded-circle image" src="${img}" alt="${title}">
                                    </div>
                                    <div class="col-8">
                                        <div class="menu-header">
                                            <h2>${title}</h2>
                                            <h3>${price}</h3>
                                        </div>
                                        <hr>
                                        <div class="menu-desc">
                                            <p>${desc}</p>
                                        </div>
                                    </div>
                                </div>`
            sectionCenter.appendChild(menuEL);     
    });                 
}      