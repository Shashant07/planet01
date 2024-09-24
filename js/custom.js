(async function () {
    
// Variable Decleration
var homeData = "";
var dt = "";

let homeCarouselData = [];
let homeFeaturedProdData = [];
let homeCategoriesData = [];
let homeServicesData = [];
let homeWhyChooseUsData = [];
let homeCTAData = [];
let homeAllProductsData = [];
let homeAllProductsCategoriesData = [];

// Constant Declaration
const path = "data/";
const fType = ".data";

// Function Definitions

function loadConfig(){
    console.log("Config file loaded");
}

async function loadData(data, encCount) {
    try {
        let a = await $.ajax({
            url: path + data + fType,
            cache: false,
            beforeSend: function () {
                $(".loader").show();
            }
        });
        a = a.substring(encCount);
        dt = JSON.parse(decFunc(a));
        return dt;

    } catch (error) {
        console.error('Error loading data:', error);
    }
}

function decFunc(e) {
    return decodeURIComponent(
        atob(e).split("").map(function (e) {
            return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);
        }).join("")
    );
}

function homeCarousel(homeCarouselData){

    var mainHomeCarouselDiv = document.getElementById("template-mo-zay-hero-carousel");
    mainHomeCarouselDiv.innerHTML = "";

    const olCarouselIndicator = document.createElement("ol");
    olCarouselIndicator.className = "carousel-indicators";

    const carouselInnerDiv = document.createElement("div");
    carouselInnerDiv.className = "carousel-inner";

    for(let i=0; i<homeCarouselData.length; i++){

        // Div1
        const liCarouselIndicator = document.createElement("li");
        if(i==0)
            liCarouselIndicator.className = "active";
        liCarouselIndicator.setAttribute("data-bs-target", "#template-mo-zay-hero-carousel");
        liCarouselIndicator.setAttribute("data-bs-slide-to", i+1);

        olCarouselIndicator.appendChild(liCarouselIndicator);

        // Div2
        const carouselItemDiv = document.createElement("div");
        if(i==0)
            carouselItemDiv.className = "carousel-item active";
        else
            carouselItemDiv.className = "carousel-item";

        const carouselContainer = document.createElement("div");
        carouselContainer.className = "container";

        const carouselRow = document.createElement("div");
        carouselRow.className = "row p-5";

        const carouselCol1 = document.createElement("div");
        carouselCol1.className = "mx-auto col-md-8 col-lg-6 order-lg-last";

        const carouselImg = document.createElement("img");
        carouselImg.className = "img-fluid"; 
        carouselImg.src = "./img/" + homeCarouselData[i].img;
        carouselImg.alt = homeCarouselData[i].alt;

        carouselCol1.appendChild(carouselImg)

        const carouselCol2 = document.createElement("div");
        carouselCol2.className = "col-lg-6 mb-0 d-flex align-items-center";

        const carouselTextAlignDiv = document.createElement("div");
        carouselTextAlignDiv.className = "text-align-left align-self-center";

        const carouselH1 = document.createElement("h1");
        carouselH1.className = "h1 text-success";
        carouselH1.innerHTML = homeCarouselData[i].h1;

        const carouselH3 = document.createElement("h3");
        carouselH3.className = "h2";
        carouselH3.innerHTML = homeCarouselData[i].h3;

        const carouselP = document.createElement("p");
        carouselP.innerHTML = homeCarouselData[i].p;

        carouselTextAlignDiv.appendChild(carouselH1);
        carouselTextAlignDiv.appendChild(carouselH3);
        carouselTextAlignDiv.appendChild(carouselP);

        carouselCol2.appendChild(carouselTextAlignDiv);

        carouselRow.appendChild(carouselCol1);
        carouselRow.appendChild(carouselCol2);

        carouselContainer.appendChild(carouselRow);
        carouselItemDiv.appendChild(carouselContainer);

        carouselInnerDiv.appendChild(carouselItemDiv);
    }

    const carouselLNav = document.createElement("a");
    carouselLNav.className = "carousel-control-prev text-decoration-none w-auto ps-3";
    carouselLNav.href = "#template-mo-zay-hero-carousel";
    carouselLNav.setAttribute("role", "button");
    carouselLNav.setAttribute("data-bs-slide", "prev");

    const carouselPrevIcon = document.createElement("i")
    carouselPrevIcon.className = "fas fa-chevron-left";

    const carouselRNav = document.createElement("a");
    carouselRNav.className = "carousel-control-next text-decoration-none w-auto pe-3";
    carouselRNav.href = "#template-mo-zay-hero-carousel";
    carouselRNav.setAttribute("role", "button");
    carouselRNav.setAttribute("data-bs-slide", "next");

    const carouselNextIcon = document.createElement("i")
    carouselNextIcon.className = "fas fa-chevron-right";

    carouselLNav.appendChild(carouselPrevIcon)
    carouselRNav.appendChild(carouselNextIcon)

    mainHomeCarouselDiv.appendChild(olCarouselIndicator);
    mainHomeCarouselDiv.appendChild(carouselInnerDiv);
    mainHomeCarouselDiv.appendChild(carouselLNav);
    mainHomeCarouselDiv.appendChild(carouselRNav);
    // console.log(mainHomeCarouselDiv)
}

function homeCategories(homeCategoriesData){
    const homeCategoriesMain = document.getElementById("home-categories-main");
    homeCategoriesMain.innerHTML = "";

    const categoriesRow1 = document.createElement("div");
    categoriesRow1.className = "row text-center pt-3";

    const categoriesCol1 = document.createElement("div");
    categoriesCol1.className = "col-lg-6 m-auto";

    const categoriesR1H1 = document.createElement("h1");
    categoriesR1H1.className = "h1";
    categoriesR1H1.innerHTML = "Categories of The Month";

    const categoriesR1P1 = document.createElement("p");
    categoriesR1P1.innerHTML = "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    categoriesCol1.appendChild(categoriesR1H1);
    categoriesCol1.appendChild(categoriesR1P1);
    categoriesRow1.appendChild(categoriesCol1);

    const categoriesRow2 = document.createElement("div");
    categoriesRow2.className = "row";

    for(let i=0; i<homeCategoriesData.length; i++){
        const categoriesCol2 = document.createElement("div");
        categoriesCol2.className = "col-12 col-md-4 p-5 mt-3";
    
        const categoriesA = document.createElement("a");
        categoriesA.href = "#";
    
        const categoriesImg = document.createElement("img");
        categoriesImg.src = "./img/" + homeCategoriesData[i].img;
        categoriesImg.className = "rounded-circle img-fluid border";
        categoriesImg.alt = homeCategoriesData[i].alt;
    
        const categoriesR2H2 = document.createElement("h5");
        categoriesR2H2.className = "text-center mt-3 mb-3";
        categoriesR2H2.innerHTML = homeCategoriesData[i].categoriesTitle;
    
        const categoriesP2 = document.createElement("p");
        categoriesP2.className = "text-center";
        categoriesP2.innerHTML = homeCategoriesData[i].categoriesDesc;

        categoriesA.appendChild(categoriesImg)
        categoriesCol2.appendChild(categoriesA)
        categoriesCol2.appendChild(categoriesR2H2)
        categoriesCol2.appendChild(categoriesP2)

        categoriesRow2.appendChild(categoriesCol2)
    }

    homeCategoriesMain.appendChild(categoriesRow1)
    homeCategoriesMain.appendChild(categoriesRow2)
}

function homeFeaturedProd(homeFeaturedProdData){
    const homeFeaturedProdDiv = document.getElementById("feature-prod-main");
    homeFeaturedProdDiv.innerHTML = "";

    const productContainer = document.createElement("div");
    productContainer.className = "container py-5";

    const productRow1 = document.createElement("div");
    productRow1.className = "row text-center py-3";
    
    const productCol1 = document.createElement("div");
    productCol1.className = "col-lg-6 m-auto";

    const productH1 = document.createElement("h1");
    productH1.className = "h1";
    productH1.innerHTML = "Featured Product";
    
    const productP = document.createElement("p");
    productP.className = "container";
    productP.innerHTML = "Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident.";

    productCol1.appendChild(productH1);
    productCol1.appendChild(productP);

    productRow1.appendChild(productCol1);

    const productRow2 = document.createElement("div");
    productRow2.className = "row";

    for(let i=0; i<homeFeaturedProdData.length; i++){
        const productCol2 = document.createElement("div");
        productCol2.className = "col-12 col-sm-6 col-md-4 mb-4";
        
        const productCard = document.createElement("div");
        productCard.className = "card h-100";

        const productA1 = document.createElement("a");
        productA1.href = "shop-single.html";

        const productImg = document.createElement("img");
        productImg.src = "./img/" + homeFeaturedProdData[i].img;
        productImg.className = "card-img-top";
        productImg.alt = homeFeaturedProdData[i].alt;

        productA1.appendChild(productImg);

        const productCardBody = document.createElement("card-body");
        productCardBody.className = "card-body";

        const productUl = document.createElement("ul");
        productUl.className = "list-unstyled d-flex justify-content-between";

        const productLi1 = document.createElement("li");
        
        const productI1 = document.createElement("i");
        productI1.className = "text-warning fa fa-star";
        const productI2 = document.createElement("i");
        productI2.className = "text-warning fa fa-star";
        const productI3 = document.createElement("i");
        productI3.className = "text-warning fa fa-star";
        const productI4 = document.createElement("i");
        productI4.className = "text-muted fa fa-star";
        const productI5 = document.createElement("i");
        productI5.className = "text-muted fa fa-star";

        const productLi2 = document.createElement("li");
        productLi2.className = "text-muted text-right";
        productLi2.innerHTML = homeFeaturedProdData[i].productPrice;
        
        productLi1.appendChild(productI1);
        productLi1.appendChild(productI2);
        productLi1.appendChild(productI3);
        productLi1.appendChild(productI4);
        productLi1.appendChild(productI5);

        productUl.appendChild(productLi1);
        productUl.appendChild(productLi2);

        const productA2 = document.createElement("a");
        productA2.className = "h2 text-decoration-none text-dark";
        productA2.href = "shop-single.html";
        productA2.innerHTML = homeFeaturedProdData[i].productTitle;

        const productP2 = document.createElement("P");
        productP2.className = "card-text";
        productP2.innerHTML = homeFeaturedProdData[i].productDesc;

        const productP3 = document.createElement("P");
        productP3.className = "text-muted";
        productP3.innerHTML = homeFeaturedProdData[i].productReview;


        productCardBody.appendChild(productUl);
        productCardBody.appendChild(productA2);
        productCardBody.appendChild(productP2);
        productCardBody.appendChild(productP3);

        productCard.appendChild(productA1);
        productCard.appendChild(productCardBody);

        productCol2.appendChild(productCard);
        productRow2.appendChild(productCol2);
    }

    
    productContainer.appendChild(productRow1);
    productContainer.appendChild(productRow2);
    homeFeaturedProdDiv.appendChild(productContainer);
}

function homeServices(homeServicesData){
    const homeServicesMain = document.getElementById("home-services-main");
    homeServicesMain.innerHTML = "";
    homeServicesMain.className = "container py-y";

    const servicesRow1 = document.createElement("div");
    servicesRow1.className = "row text-center pt-5 pb-3";

    const servicesCol1 = document.createElement("div");
    servicesCol1.className = "col-lg-6 m-auto";

    const servicesH1 = document.createElement("h1");
    servicesH1.className = "h1";
    servicesH1.innerHTML = "Our Services";

    const servicesP = document.createElement("p");
    servicesP.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet."

    servicesCol1.appendChild(servicesH1);
    servicesCol1.appendChild(servicesP);
    servicesRow1.appendChild(servicesCol1);

    const servicesRow2 = document.createElement("div");
    servicesRow2.className = "row"

    for(let i=0; i<homeServicesData.length; i++){
        const servicesCol2 = document.createElement("div");
        servicesCol2.className = "col-md-6 col-lg-3 pb-5";

        const servicesWap = document.createElement("div");
        servicesWap.className = "h-100 py-5 services-icon-wap shadow";

        const servicesText = document.createElement("div");
        servicesText.className = "h1 text-success text-center";

        const servicesI = document.createElement("i");
        servicesI.className = homeServicesData[i].faIcon;

        const servicesH2 = document.createElement('h2');
        servicesH2.className = "h5 mt-4 text-center";
        servicesH2.innerHTML = homeServicesData[i].servicesTitle;

        servicesText.appendChild(servicesI);
        servicesWap.appendChild(servicesText);
        servicesWap.appendChild(servicesH2);
        servicesCol2.appendChild(servicesWap);
        servicesRow2.appendChild(servicesCol2);
    }

    homeServicesMain.appendChild(servicesRow1);
    homeServicesMain.appendChild(servicesRow2);

}

function homeWhyChooseUs(homeWhyChooseUsData){
    const homeWhyChooseUsMain = document.getElementById("why-choose-us-main");
    homeWhyChooseUsMain.innerHTML = "";

    const whyChooseUsContainer = document.createElement("div");
    whyChooseUsContainer.className = "container py-5";
    
    const whyChooseUsRow1 = document.createElement("div");
    whyChooseUsRow1.className = "row text-center py-3";

    const whyChooseUsCol1 = document.createElement("div");
    whyChooseUsCol1.className = "col-lg-6 m-auto";

    const whyChooseUsR1H1 = document.createElement("h1");
    whyChooseUsR1H1.className = "h1";
    whyChooseUsR1H1.innerHTML = "Why Choose Us";

    const whyChooseUsR1P1 = document.createElement("p");
    whyChooseUsR1P1.innerHTML = "Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
    
    whyChooseUsCol1.appendChild(whyChooseUsR1H1);
    whyChooseUsCol1.appendChild(whyChooseUsR1P1);

    whyChooseUsRow1.appendChild(whyChooseUsCol1);

    const whyChooseUsRow2 = document.createElement("div");
    whyChooseUsRow2.className = "row";

    const whyChooseUsAcc = document.createElement("div");
    whyChooseUsAcc.className = "accordion accordion-flush";
    whyChooseUsAcc.id = "accordionFlushExample";

    for(let i=0; i<homeWhyChooseUsData.length; i++){
        const whyChooseUsAccItem = document.createElement("div");
        whyChooseUsAccItem.className = "accordion-item";
    
        const whyChooseUsAccH2 = document.createElement("h2");
        whyChooseUsAccH2.className = "accordion-header";
        whyChooseUsAccH2.id = "flush-heading-"+i;
            
        const whyChooseUsAccBtn = document.createElement("button");
        whyChooseUsAccBtn.className = "accordion-button collapsed";
        whyChooseUsAccBtn.type = "button";
        whyChooseUsAccBtn.setAttribute("data-bs-toggle", "collapse");
        whyChooseUsAccBtn.setAttribute("data-bs-target", "#flush-collapse-"+i);
        whyChooseUsAccBtn.setAttribute("aria-expanded", "false");
        whyChooseUsAccBtn.setAttribute("aria-controls", "flush-collapse"+i);
        whyChooseUsAccBtn.innerHTML = homeWhyChooseUsData[i].title;

        const whyChooseUsDesc = document.createElement("div");
        whyChooseUsDesc.className = "accordion-collapse collapse";
        whyChooseUsDesc.id = "flush-collapse-"+i;
        whyChooseUsDesc.setAttribute("aria-labelledby", "flush-heading-"+i);
        whyChooseUsDesc.setAttribute("data-bs-parent", "#accordionFlushExample");
        
        const whyChooseUsDescDiv = document.createElement("div");
        whyChooseUsDescDiv.className = "accordion-body";
        whyChooseUsDescDiv.innerHTML =  homeWhyChooseUsData[i].desc;

        whyChooseUsDesc.appendChild(whyChooseUsDescDiv);
        whyChooseUsAccH2.appendChild(whyChooseUsAccBtn);
        whyChooseUsAccItem.appendChild(whyChooseUsAccH2);
        whyChooseUsAccItem.appendChild(whyChooseUsDesc);
        
        whyChooseUsAcc.appendChild(whyChooseUsAccItem);
    }

    whyChooseUsRow2.appendChild(whyChooseUsAcc);
    whyChooseUsContainer.appendChild(whyChooseUsRow1);
    whyChooseUsContainer.appendChild(whyChooseUsRow2);

    homeWhyChooseUsMain.appendChild(whyChooseUsContainer);
}

function homeCTA(homeCTAData){
    const homeCTAMain = document.getElementById("call-to-action-main");
    homeCTAMain.innerHTML = "";

    const homeCTAContainer = document.createElement("div");
    homeCTAContainer.className = "container my-4";

    const homeCTARow = document.createElement("div");
    homeCTARow.className = "row text-center py-3";

    const homeCTACol1 = document.createElement("div");
    homeCTACol1.className = "col-lg-6 m-auto";

    const homeCTACol1H1 = document.createElement("h1");
    homeCTACol1H1.className = "h1";
    homeCTACol1H1.innerHTML = "Call to Action";

    const homeCTACol1P = document.createElement("p");
    homeCTACol1P.className = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.";

    homeCTACol1.appendChild(homeCTACol1H1);
    homeCTACol1.appendChild(homeCTACol1P);

    const homeCTACol2 = document.createElement("div");
    homeCTACol2.className = "col-lg-9 m-auto tempaltemo-carousel";

    const homeCTACol2Row = document.createElement("div");
    homeCTACol2Row.className = "row d-flex flex-row";

    const homeCTACol2Prev = document.createElement("div");
    homeCTACol2Prev.className = "col-1 align-self-center";

    const homeCTACol2PrevA = document.createElement("a");
    homeCTACol2PrevA.className = "h1";
    homeCTACol2PrevA.href = "#templatemo-slide-brand";
    homeCTACol2PrevA.role = "button";
    homeCTACol2PrevA.setAttribute("data-bs-slide", "prev");

    const homeCTACol2PrevI = document.createElement("i");
    homeCTACol2PrevI.className = "text-dark fas fa-chevron-left";

    homeCTACol2PrevA.appendChild(homeCTACol2PrevI);
    homeCTACol2Prev.appendChild(homeCTACol2PrevA);

// 
    const homeCTACol2Main = document.createElement("div");
    homeCTACol2Main.className = "col";

    const homeCTACol2Carousel = document.createElement("div");
    homeCTACol2Carousel.className = "carousel slide carousel-multi-item pt-2 pt-md-0";
    homeCTACol2Carousel.id = "templatemo-slide-brand";
    homeCTACol2Carousel.setAttribute("data-bs-ride", "carousel");

    const homeCTACol2CarouselInner = document.createElement("div");
    homeCTACol2CarouselInner.className = "carousel-inner product-links-wap";
    homeCTACol2CarouselInner.role = "listbox";

    for(let i=0; i<homeCTAData.length; i++){
        const homeCTACol2CarouselItem = document.createElement("div");
        if(i==0)
            homeCTACol2CarouselItem.className = "carousel-item active";
        else
            homeCTACol2CarouselItem.className = "carousel-item";

        const homeCTACol2CarouselItemRow = document.createElement("div");
        homeCTACol2CarouselItemRow.className = "row";

        const homeCTACol2CarouselItemCol = document.createElement("div");
        homeCTACol2CarouselItemCol.className = "col-12 p-md-5";

        const homeCTACol2CarouselItemH1 = document.createElement("h1");
        homeCTACol2CarouselItemH1.className = "h2";
        homeCTACol2CarouselItemH1.innerHTML = homeCTAData[i].title;

        const homeCTACol2CarouselItemP = document.createElement("p");
        homeCTACol2CarouselItemP.innerHTML = homeCTAData[i].desc;
        
        homeCTACol2CarouselItemCol.appendChild(homeCTACol2CarouselItemH1);
        homeCTACol2CarouselItemCol.appendChild(homeCTACol2CarouselItemP);

        homeCTACol2CarouselItemRow.appendChild(homeCTACol2CarouselItemCol);
        homeCTACol2CarouselItem.appendChild(homeCTACol2CarouselItemRow);

        homeCTACol2CarouselInner.appendChild(homeCTACol2CarouselItem);
    }

    homeCTACol2Carousel.appendChild(homeCTACol2CarouselInner);
    homeCTACol2Main.appendChild(homeCTACol2Carousel);

// 
    const homeCTACol2Next = document.createElement("div");
    homeCTACol2Next.className = "col-1 align-self-center";

    const homeCTACol2NextA = document.createElement("a");
    homeCTACol2NextA.className = "h1";
    homeCTACol2NextA.href = "#templatemo-slide-brand";
    homeCTACol2NextA.role = "button";
    homeCTACol2NextA.setAttribute("data-bs-slide", "next");

    const homeCTACol2NextI = document.createElement("i");
    homeCTACol2NextI.className = "text-dark fas fa-chevron-right";

    homeCTACol2NextA.appendChild(homeCTACol2NextI);
    homeCTACol2Next.appendChild(homeCTACol2NextA);

    homeCTACol2Row.appendChild(homeCTACol2Prev);
    homeCTACol2Row.appendChild(homeCTACol2Main);
    homeCTACol2Row.appendChild(homeCTACol2Next);

    homeCTACol2.appendChild(homeCTACol2Row);

    homeCTARow.appendChild(homeCTACol1);
    homeCTARow.appendChild(homeCTACol2);

    homeCTAContainer.appendChild(homeCTARow);
    homeCTAMain.appendChild(homeCTAContainer);
};

function homeAllProducts(homeAllProductsData){
    const homeAllProductsMain = document.getElementById("all-products-main");
    homeAllProductsMain.innerHTML = "";
    homeAllProductsMain.className = "container";

    const allProductsRow = document.createElement("div");
    allProductsRow.className = "py-5 row";

    const allProductsCol1 = document.createElement("div");
    allProductsCol1.className = "col-lg-3";

    const allProductsCol1H1 = document.createElement("h1");
    allProductsCol1H1.className = "h2 pb-4";
    allProductsCol1H1.innerHTML = "Categories";

    const allProductsCol1Ul = document.createElement("ul");
    allProductsCol1Ul.className = "list-unstyled templatemo-accordion";

    for(let i=0; i<homeAllProductsCategoriesData.length; i++){
        const allProductsCol1Li = document.createElement("li");
        allProductsCol1Li.className = "row";
        allProductsCol1Li.id = homeAllProductsCategoriesData[i];
        allProductsCol1Li.innerHTML = homeAllProductsCategoriesData[i];

        allProductsCol1Ul.appendChild(allProductsCol1Li);
    }
    
    // const allProductsRow = document.createElement("div");
    // allProductsRow.className = "row";

    // const allProductsRow = document.createElement("div");
    // allProductsRow.className = "row";

    // const allProductsRow = document.createElement("div");
    // allProductsRow.className = "row";

    allProductsCol1.appendChild(allProductsCol1H1);
    allProductsCol1.appendChild(allProductsCol1Ul);

    // allProductsRow.appendChild(allProductsCol1)
    const allProductsCol2 = document.createElement("div");
    allProductsCol2.className = "col-lg-9";

    const allProductsCol2Row1 = document.createElement("div");
    allProductsCol2Row1.className = "row";

    const allProductsCol2Row1Col = document.createElement("div");
    allProductsCol2Row1Col.className = "col-md-6 pb-4";

    const allProductsCol2Row1Flex = document.createElement("div");
    allProductsCol2Row1Flex.className = "d-flex";

    const allProductsCol2Row1Select = document.createElement("select");
    allProductsCol2Row1Select.className = "form-control";

    const allProductsSelectOp1 = document.createElement("option");
    allProductsSelectOp1.innerHTML = "All";

    const allProductsSelectOp2 = document.createElement("option");
    allProductsSelectOp2.innerHTML = "A to Z";

    const allProductsSelectOp3 = document.createElement("option");
    allProductsSelectOp3.innerHTML = "Z to A";

    const allProductsSelectOp4 = document.createElement("option");
    allProductsSelectOp4.innerHTML = "New to Old";

    const allProductsSelectOp5 = document.createElement("option");
    allProductsSelectOp5.innerHTML = "Old to New";

    const allProductsSelectOp6 = document.createElement("option");
    allProductsSelectOp6.innerHTML = "Featured";

    allProductsCol2Row1Select.appendChild(allProductsSelectOp1);
    allProductsCol2Row1Select.appendChild(allProductsSelectOp2);
    allProductsCol2Row1Select.appendChild(allProductsSelectOp3);
    allProductsCol2Row1Select.appendChild(allProductsSelectOp4);
    allProductsCol2Row1Select.appendChild(allProductsSelectOp5);
    allProductsCol2Row1Select.appendChild(allProductsSelectOp6);
    allProductsCol2Row1Flex.appendChild(allProductsCol2Row1Select);
    allProductsCol2Row1Col.appendChild(allProductsCol2Row1Flex);
    allProductsCol2Row1.appendChild(allProductsCol2Row1Col);


    const allProductsCol2Row2 = document.createElement("div");
    allProductsCol2Row2.className = "row";

    for(let i=0; i<homeAllProductsData.length; i++){
        const allProductsCol2Row2Col = document.createElement("div");
        allProductsCol2Row2Col.className = "col-md-4";

        const allProductsCol2Row2CardMain = document.createElement("div");
        allProductsCol2Row2CardMain.className = "card mb-4 product-wap rounded-0";

        const allProductsCol2Row2Card1 = document.createElement("div");
        allProductsCol2Row2Card1.className = "card rounded-0";

        const allProductsCol2Row2Card1Img = document.createElement("img");
        allProductsCol2Row2Card1Img.className = "card-img rounded-0 img-fluid";
        allProductsCol2Row2Card1Img.src = "img/"+homeAllProductsData[i].img[0];

        const allProductsCol2Row2Card1ImgOverlay = document.createElement("div");
        allProductsCol2Row2Card1ImgOverlay.className = "card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center";

        const allProductsCol2Row2Card1Ul = document.createElement("ul");
        allProductsCol2Row2Card1Ul.className = "list-unstyled";

        const allProductsCol2Row2Card1Li1 = document.createElement("li");
        
        const allProductsCol2Row2Card1A1 = document.createElement("a");
        allProductsCol2Row2Card1A1.className = "btn btn-success text-white";
        allProductsCol2Row2Card1A1.href = "#FavProduct";
        allProductsCol2Row2Card1A1.id = "product-fav-"+i;

        const allProductsCol2Row2Card1I1 = document.createElement("i");
        allProductsCol2Row2Card1I1.className = "far fa-heart";


        const allProductsCol2Row2Card1Li2 = document.createElement("li");
        
        const allProductsCol2Row2Card1A2 = document.createElement("a");
        allProductsCol2Row2Card1A2.className = "btn btn-success text-white mt-2";
        allProductsCol2Row2Card1A2.href = "#ViewProduct";
        allProductsCol2Row2Card1A2.id = "product-view-"+i;

        const allProductsCol2Row2Card1I2 = document.createElement("i");
        allProductsCol2Row2Card1I2.className = "far fa-eye";


        const allProductsCol2Row2Card1Li3 = document.createElement("li");
        
        const allProductsCol2Row2Card1A3 = document.createElement("a");
        allProductsCol2Row2Card1A3.className = "btn btn-success text-white mt-2";
        allProductsCol2Row2Card1A3.href = "#CartProduct";
        allProductsCol2Row2Card1A3.id = "product-cart-"+i;

        const allProductsCol2Row2Card1I3 = document.createElement("i");
        allProductsCol2Row2Card1I3.className = "fas fa-cart-plus";

        allProductsCol2Row2Card1A1.appendChild(allProductsCol2Row2Card1I1);
        allProductsCol2Row2Card1A2.appendChild(allProductsCol2Row2Card1I2);
        allProductsCol2Row2Card1A3.appendChild(allProductsCol2Row2Card1I3);

        allProductsCol2Row2Card1Li1.appendChild(allProductsCol2Row2Card1A1);
        allProductsCol2Row2Card1Li2.appendChild(allProductsCol2Row2Card1A2);
        allProductsCol2Row2Card1Li3.appendChild(allProductsCol2Row2Card1A3);

        allProductsCol2Row2Card1Ul.appendChild(allProductsCol2Row2Card1Li1);
        allProductsCol2Row2Card1Ul.appendChild(allProductsCol2Row2Card1Li2);
        allProductsCol2Row2Card1Ul.appendChild(allProductsCol2Row2Card1Li3);

        allProductsCol2Row2Card1ImgOverlay.appendChild(allProductsCol2Row2Card1Ul);

        allProductsCol2Row2Card1.appendChild(allProductsCol2Row2Card1Img);
        allProductsCol2Row2Card1.appendChild(allProductsCol2Row2Card1ImgOverlay);


        const allProductsCol2Row2Card2 = document.createElement("div");
        allProductsCol2Row2Card2.className = "card-body";

        const allProductsCol2Row2Card2A = document.createElement("a");
        allProductsCol2Row2Card2A.className = "h3 text-decoration-none";
        allProductsCol2Row2Card2A.innerHTML = "<strong>"+ homeAllProductsData[i].title + "</strong>";
        allProductsCol2Row2Card2A.href = "#ViewProduct";

        const allProductsCol2Row2Card2P = document.createElement("p");
        allProductsCol2Row2Card2P.className = "text-left mb-0";
        allProductsCol2Row2Card2P.innerHTML = (homeAllProductsData[i].desc).substring(0, 50)+"...";

        allProductsCol2Row2Card2.appendChild(allProductsCol2Row2Card2A);
        allProductsCol2Row2Card2.appendChild(allProductsCol2Row2Card2P);

        allProductsCol2Row2CardMain.appendChild(allProductsCol2Row2Card1);
        allProductsCol2Row2CardMain.appendChild(allProductsCol2Row2Card2);

        allProductsCol2Row2Col.appendChild(allProductsCol2Row2CardMain);
        allProductsCol2Row2.appendChild(allProductsCol2Row2Col);
    }

    const allProductsCol2Row3 = document.createElement("div");
    allProductsCol2Row3.className = "row";

    const allProductsCol2PaginUl = document.createElement("ul");
    allProductsCol2PaginUl.className = "pagination pagination-lg justify-content-end";

    const allProductsCol2Paginli1 = document.createElement("li");
    allProductsCol2Paginli1.className = "page-item disabled";

    const allProductsCol2PaginA1 = document.createElement("a");
    allProductsCol2PaginA1.className = "page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0";
    allProductsCol2PaginA1.href = "#";
    allProductsCol2PaginA1.tabIndex = -1;
    allProductsCol2PaginA1.innerHTML = "1";

    const allProductsCol2Paginli2 = document.createElement("li");
    allProductsCol2Paginli2.className = "page-item";

    const allProductsCol2PaginA2 = document.createElement("a");
    allProductsCol2PaginA2.className = "page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark";
    allProductsCol2PaginA2.href = "#";
    allProductsCol2PaginA2.innerHTML = "2";

    const allProductsCol2Paginli3 = document.createElement("li");
    allProductsCol2Paginli3.className = "page-item";

    const allProductsCol2PaginA3 = document.createElement("a");
    allProductsCol2PaginA3.className = "page-link rounded-0 shadow-sm border-top-0 border-left-0 text-dark";
    allProductsCol2PaginA3.href = "#";
    allProductsCol2PaginA3.innerHTML = "3";

    allProductsCol2Paginli1.appendChild(allProductsCol2PaginA1); 
    allProductsCol2Paginli2.appendChild(allProductsCol2PaginA2); 
    allProductsCol2Paginli3.appendChild(allProductsCol2PaginA3); 
    allProductsCol2PaginUl.appendChild(allProductsCol2Paginli1);
    allProductsCol2PaginUl.appendChild(allProductsCol2Paginli2);
    allProductsCol2PaginUl.appendChild(allProductsCol2Paginli3);

    allProductsCol2Row3.appendChild(allProductsCol2PaginUl);
    allProductsCol2.appendChild(allProductsCol2Row1);
    allProductsCol2.appendChild(allProductsCol2Row2);
    allProductsCol2.appendChild(allProductsCol2Row3);

    allProductsRow.appendChild(allProductsCol1);
    allProductsRow.appendChild(allProductsCol2);
    
    homeAllProductsMain.appendChild(allProductsRow);
}


function homeRelatedProducts(homeAllProductsData){
    const homeRelatedProductsMain = document.getElementById("home-related-products");
    homeRelatedProductsMain.innerHTML = "";

    const relatedProductsContainer = document.createElement("div");
    relatedProductsContainer.className = "container py-5";

    const relatedProductsRow = document.createElement("div");
    relatedProductsRow.className = "row text-left p-2 pb-3";

    const relatedProductsH4 = document.createElement("div");
    relatedProductsH4.innerHTML = "Related Products";

    relatedProductsRow.appendChild(relatedProductsH4);

    const relatedProductsCarousel = document.createElement("div");
    relatedProductsCarousel.id = "carousel-related-product";

    for(let i=0; i<homeAllProductsData.length; i++){
        const relatedProductsCarouselProd = document.createElement("div");
        relatedProductsCarouselProd.className = "p-2 pb-3";

        const allProductsCol2Row2Col = document.createElement("div");
        allProductsCol2Row2Col.className = "product-wap card rounded-0";

        const allProductsCol2Row2CardMain = document.createElement("div");
        allProductsCol2Row2CardMain.className = "card rounded-0";

        const allProductsCol2Row2Card1Img = document.createElement("img");
        allProductsCol2Row2Card1Img.className = "card-img rounded-0 img-fluid";
        allProductsCol2Row2Card1Img.src = "img/"+homeAllProductsData[i].img[0];

        const allProductsCol2Row2Card1ImgOverlay = document.createElement("div");
        allProductsCol2Row2Card1ImgOverlay.className = "card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center";

        const allProductsCol2Row2Card1Ul = document.createElement("ul");
        allProductsCol2Row2Card1Ul.className = "list-unstyled";

        const allProductsCol2Row2Card1Li1 = document.createElement("li");
        
        const allProductsCol2Row2Card1A1 = document.createElement("a");
        allProductsCol2Row2Card1A1.className = "btn btn-success text-white";
        allProductsCol2Row2Card1A1.href = "#FavProduct";
        allProductsCol2Row2Card1A1.id = "product-fav-"+i;

        const allProductsCol2Row2Card1I1 = document.createElement("i");
        allProductsCol2Row2Card1I1.className = "far fa-heart";

        const allProductsCol2Row2Card1Li2 = document.createElement("li");
        
        const allProductsCol2Row2Card1A2 = document.createElement("a");
        allProductsCol2Row2Card1A2.className = "btn btn-success text-white mt-2";
        allProductsCol2Row2Card1A2.href = "#ViewProduct";
        allProductsCol2Row2Card1A2.id = "product-view-"+i;

        const allProductsCol2Row2Card1I2 = document.createElement("i");
        allProductsCol2Row2Card1I2.className = "far fa-eye";

        const allProductsCol2Row2Card1Li3 = document.createElement("li");
        
        const allProductsCol2Row2Card1A3 = document.createElement("a");
        allProductsCol2Row2Card1A3.className = "btn btn-success text-white mt-2";
        allProductsCol2Row2Card1A3.href = "#CartProduct";
        allProductsCol2Row2Card1A3.id = "product-cart-"+i;

        const allProductsCol2Row2Card1I3 = document.createElement("i");
        allProductsCol2Row2Card1I3.className = "fas fa-cart-plus";

        allProductsCol2Row2Card1A1.appendChild(allProductsCol2Row2Card1I1);
        allProductsCol2Row2Card1A2.appendChild(allProductsCol2Row2Card1I2);
        allProductsCol2Row2Card1A3.appendChild(allProductsCol2Row2Card1I3);
        
        allProductsCol2Row2Card1Li1.appendChild(allProductsCol2Row2Card1A1);
        allProductsCol2Row2Card1Li2.appendChild(allProductsCol2Row2Card1A2);
        allProductsCol2Row2Card1Li3.appendChild(allProductsCol2Row2Card1A3);
        
        allProductsCol2Row2Card1Ul.appendChild(allProductsCol2Row2Card1Li1);
        allProductsCol2Row2Card1Ul.appendChild(allProductsCol2Row2Card1Li2);
        allProductsCol2Row2Card1Ul.appendChild(allProductsCol2Row2Card1Li3);

        allProductsCol2Row2Card1ImgOverlay.appendChild(allProductsCol2Row2Card1Ul);

        allProductsCol2Row2CardMain.appendChild(allProductsCol2Row2Card1Img);
        allProductsCol2Row2CardMain.appendChild(allProductsCol2Row2Card1ImgOverlay)


        
        const allProductsCol2Row2Card2 = document.createElement("div");
        allProductsCol2Row2Card2.className = "card-body";

        const allProductsCol2Row2Card2A = document.createElement("a");
        allProductsCol2Row2Card2A.className = "h3 text-decoration-none";
        allProductsCol2Row2Card2A.innerHTML = "<strong>"+ homeAllProductsData[i].title + "</strong>";
        allProductsCol2Row2Card2A.href = "#ViewProduct";

        const allProductsCol2Row2Card2P = document.createElement("p");
        allProductsCol2Row2Card2P.className = "text-left mb-0";
        allProductsCol2Row2Card2P.innerHTML = (homeAllProductsData[i].desc).substring(0, 50)+"..."

        allProductsCol2Row2Card2.appendChild(allProductsCol2Row2Card2A);
        allProductsCol2Row2Card2.appendChild(allProductsCol2Row2Card2P);




        allProductsCol2Row2Col.appendChild(allProductsCol2Row2CardMain);
        allProductsCol2Row2Col.appendChild(allProductsCol2Row2Card2);


        relatedProductsCarouselProd.appendChild(allProductsCol2Row2Col);
        relatedProductsCarousel.appendChild(relatedProductsCarouselProd);
    }
    
    relatedProductsContainer.appendChild(relatedProductsRow);
    relatedProductsContainer.appendChild(relatedProductsCarousel);

    homeRelatedProductsMain.appendChild(relatedProductsContainer);

    $('#carousel-related-product').slick({
        infinite: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 3,
        dots: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3
                }
            }
        ]
    });
}

function homeProductDetails(item){
    console.log(item)
    const homeProductDetailsMain = document.getElementById("home-product-details-main");
    homeProductDetailsMain.innerHTML = "";

    const productDetailsContainer = document.createElement("div");
    productDetailsContainer.className = "container pb-5";

    const productDetailsRow = document.createElement("div");
    productDetailsRow.className = "row";

    const productDetailsCol1 = document.createElement("div");
    productDetailsCol1.className = "col-lg-5 mt-5";

    const productDetailsCol1Card = document.createElement("div");
    productDetailsCol1Card.className = "card mb-3";

    const productDetailsCol1CardImg = document.createElement("img");
    productDetailsCol1CardImg.className = "card-img img-fluid";
    productDetailsCol1CardImg.src = "";
    productDetailsCol1CardImg.alt = "";
    productDetailsCol1CardImg.id = "product-detail";

    productDetailsCol1Card.appendChild(productDetailsCol1CardImg);


    const productDetailsCol1Row = document.createElement("div");
    productDetailsCol1Row.className = "row";

    const productDetailsCol1RowCol1 = document.createElement("div");
    productDetailsCol1RowCol1.className = "col-1 align-self-center";

    const productDetailsCol1RowCol1A = document.createElement("a");
    productDetailsCol1RowCol1A.className = "col-1 align-self-center";
    productDetailsCol1RowCol1A.href = "#multi-item-example";
    productDetailsCol1RowCol1A.role = "button";
    productDetailsCol1RowCol1A.setAttribute("data-bs-slide", "prev");

    const productDetailsCol1RowCol1I = document.createElement("i");
    productDetailsCol1RowCol1I.className = "text-dark fas fa-chevron-left";

    const productDetailsCol1RowCol1Span = document.createElement("span");
    productDetailsCol1RowCol1Span.className = "sr-only";
    productDetailsCol1RowCol1Span.innerHTML = "Previous";

    productDetailsCol1RowCol1A.appendChild(productDetailsCol1RowCol1I);
    productDetailsCol1RowCol1A.appendChild(productDetailsCol1RowCol1Span);
    productDetailsCol1RowCol1.appendChild(productDetailsCol1RowCol1A);


    const productDetailsCol1RowMitem = document.createElement("div");
    productDetailsCol1RowMitem.className = "col-10 carousel slide carousel-multi-item";
    productDetailsCol1RowMitem.id = "multi-item-example";
    productDetailsCol1RowMitem.setAttribute("data-bs-ride", "carousel");

    const productDetailsCol1RowCol2 = document.createElement("div");
    productDetailsCol1RowCol2.className = "carousel-inner product-links-wap";
    productDetailsCol1RowCol2.role = "listbox";

    // for(let i=0; i<3; i++){
        const productDetailsCol1RowCol2Item = document.createElement("div");
        productDetailsCol1RowCol2Item.className = "carousel-item active";

        const productDetailsCol1RowCol2ItemRow = document.createElement("div");
        productDetailsCol1RowCol2ItemRow.className = "row";

        for(let j=0; j<3; j++){
            const productDetailsCol1RowCol2ItemRowColJ = document.createElement("div");
            productDetailsCol1RowCol2ItemRowColJ.className = "col-4";

            const productDetailsCol1RowCol2ItemRowA = document.createElement("a");
            productDetailsCol1RowCol2ItemRowA.href = "#";

            const productDetailsCol1RowCol2ItemRowAImg = document.createElement("img");
            productDetailsCol1RowCol2ItemRowAImg.className = "card-img img-fluid";
            productDetailsCol1RowCol2ItemRowAImg.src = "img/"+item.img[j];
            productDetailsCol1RowCol2ItemRowAImg.alt = "Product Image";
            productDetailsCol1RowCol2ItemRowA.appendChild(productDetailsCol1RowCol2ItemRowAImg);
            productDetailsCol1RowCol2ItemRowColJ.appendChild(productDetailsCol1RowCol2ItemRowA);
            productDetailsCol1RowCol2ItemRow.appendChild(productDetailsCol1RowCol2ItemRowColJ);
        }
        productDetailsCol1RowCol2Item.appendChild(productDetailsCol1RowCol2ItemRow);

        const productDetailsCol1RowCol2Item2 = document.createElement("div");
        productDetailsCol1RowCol2Item2.className = "carousel-item";

        const productDetailsCol1RowCol2ItemRow2 = document.createElement("div");
        productDetailsCol1RowCol2ItemRow2.className = "row";

        for(let j=0; j<3; j++){
            const productDetailsCol1RowCol2ItemRowColJ2 = document.createElement("div");
            productDetailsCol1RowCol2ItemRowColJ2.className = "col-4";

            const productDetailsCol1RowCol2ItemRowA2 = document.createElement("a");
            productDetailsCol1RowCol2ItemRowA2.href = "#";

            const productDetailsCol1RowCol2ItemRowAImg2 = document.createElement("img");
            productDetailsCol1RowCol2ItemRowAImg2.className = "card-img img-fluid";
            productDetailsCol1RowCol2ItemRowAImg2.src = "img/"+item.img[j];
            productDetailsCol1RowCol2ItemRowAImg2.alt = "Product Image";
            productDetailsCol1RowCol2ItemRowA2.appendChild(productDetailsCol1RowCol2ItemRowAImg2);
            productDetailsCol1RowCol2ItemRowColJ2.appendChild(productDetailsCol1RowCol2ItemRowA2);
            productDetailsCol1RowCol2ItemRow.appendChild(productDetailsCol1RowCol2ItemRowColJ2);
        }
        productDetailsCol1RowCol2Item.appendChild(productDetailsCol1RowCol2ItemRow);

        const productDetailsCol1RowCol2Item3 = document.createElement("div");
        productDetailsCol1RowCol2Item3.className = "carousel-item";

        const productDetailsCol1RowCol2ItemRow3 = document.createElement("div");
        productDetailsCol1RowCol2ItemRow3.className = "row";

        for(let j=0; j<3; j++){
            const productDetailsCol1RowCol2ItemRowColJ3 = document.createElement("div");
            productDetailsCol1RowCol2ItemRowColJ3.className = "col-4";

            const productDetailsCol1RowCol2ItemRowA3 = document.createElement("a");
            productDetailsCol1RowCol2ItemRowA3.href = "#";

            const productDetailsCol1RowCol2ItemRowAImg3 = document.createElement("img");
            productDetailsCol1RowCol2ItemRowAImg3.className = "card-img img-fluid";
            productDetailsCol1RowCol2ItemRowAImg3.src = "img/"+item.img[j];
            productDetailsCol1RowCol2ItemRowAImg3.alt = "Product Image";
            productDetailsCol1RowCol2ItemRowA3.appendChild(productDetailsCol1RowCol2ItemRowAImg3);
            productDetailsCol1RowCol2ItemRowColJ3.appendChild(productDetailsCol1RowCol2ItemRowA3);
            productDetailsCol1RowCol2ItemRow.appendChild(productDetailsCol1RowCol2ItemRowColJ3);
        }
        productDetailsCol1RowCol2Item.appendChild(productDetailsCol1RowCol2ItemRow);
        
        productDetailsCol1RowCol2.appendChild(productDetailsCol1RowCol2Item);
        productDetailsCol1RowMitem.appendChild(productDetailsCol1RowCol2);


        const productDetailsCol1RowCol3 = document.createElement("div");
        productDetailsCol1RowCol3.className = "col-1 align-self-center";

        const productDetailsCol1RowCol3A = document.createElement("a");
        productDetailsCol1RowCol3A.className = "col-1 align-self-center";
        productDetailsCol1RowCol3A.href = "#multi-item-example";
        productDetailsCol1RowCol3A.role = "button";
        productDetailsCol1RowCol3A.setAttribute("data-bs-slide", "next");

        const productDetailsCol1RowCol3I = document.createElement("i");
        productDetailsCol1RowCol3I.className = "text-dark fas fa-chevron-right";

        const productDetailsCol1RowCol3Span = document.createElement("span");
        productDetailsCol1RowCol3Span.className = "sr-only";
        productDetailsCol1RowCol3Span.innerHTML = "Next";

        productDetailsCol1RowCol3A.appendChild(productDetailsCol1RowCol3I);
        productDetailsCol1RowCol3A.appendChild(productDetailsCol1RowCol3Span);
        productDetailsCol1RowCol3.appendChild(productDetailsCol1RowCol3A);

        productDetailsCol1Row.appendChild(productDetailsCol1RowCol1);
        productDetailsCol1Row.appendChild(productDetailsCol1RowMitem);
        productDetailsCol1Row.appendChild(productDetailsCol1RowCol3);

        productDetailsCol1.appendChild(productDetailsCol1Card);
        productDetailsCol1.appendChild(productDetailsCol1Row);

        const productDetailsCol02 = document.createElement("div");
        productDetailsCol02.className = "col-lg-7 mt-5";

        const productDetailsCol02Card = document.createElement("div");
        productDetailsCol02Card.className = "card";

        const productDetailsCol02CardBody = document.createElement("div");
        productDetailsCol02CardBody.className = "card-body";

        const productDetailsCol02H1 = document.createElement("h1");
        productDetailsCol02H1.className = "h2";

        const productDetailsCol02p1 = document.createElement("p");
        productDetailsCol02p1.className = "h3 py-2";




        const productDetailsCol02p2 = document.createElement("p");
        productDetailsCol02p2.className = "py-2";

        const productDetailsCol02P2i1 = document.createElement("i");
        productDetailsCol02P2i1.className = "fa fa-star text-warning";

        const productDetailsCol02P2i2 = document.createElement("i");
        productDetailsCol02P2i2.className = "fa fa-star text-warning";

        const productDetailsCol02P2i3 = document.createElement("i");
        productDetailsCol02P2i3.className = "fa fa-star text-warning";

        const productDetailsCol02P2i4 = document.createElement("i");
        productDetailsCol02P2i4.className = "fa fa-star text-warning";

        const productDetailsCol02P2i5 = document.createElement("i");
        productDetailsCol02P2i5.className = "fa fa-star text-warning";

        const productDetailsCol2Span = document.createElement("span");
        productDetailsCol2Span.className = "list-inline-item text-dark";
        productDetailsCol2Span.innerHTML = "Rating 4.8 | 36 Comments";

        productDetailsCol02p2.appendChild(productDetailsCol02P2i1)
        productDetailsCol02p2.appendChild(productDetailsCol02P2i2)
        productDetailsCol02p2.appendChild(productDetailsCol02P2i3)
        productDetailsCol02p2.appendChild(productDetailsCol02P2i4)
        productDetailsCol02p2.appendChild(productDetailsCol02P2i5)
        productDetailsCol02p2.appendChild(productDetailsCol2Span)




        const productDetailsCol2Ul = document.createElement("ul");
        productDetailsCol2Ul.className = "list-inline";
        
        const productDetailsCol2UlLi1 = document.createElement("li");
        productDetailsCol2UlLi1.className = "list-inline-item";

        const productDetailsCol2UlLi1H6 = document.createElement("h6");
        productDetailsCol2UlLi1H6.innerHTML = "Brand:";

        const productDetailsCol2UlLi2= document.createElement("li");
        productDetailsCol2UlLi2.className = "list-inline-item";

        const productDetailsCol2UlLi2P = document.createElement("p");
        productDetailsCol2UlLi2P.className = "text-muted";
        productDetailsCol2UlLi2P.innerHTML = "<strong>Easy Wear</strong>";

        productDetailsCol2UlLi2.appendChild(productDetailsCol2UlLi2P);
        productDetailsCol2UlLi1.appendChild(productDetailsCol2UlLi1H6);

        productDetailsCol2Ul.appendChild(productDetailsCol2UlLi1)
        productDetailsCol2Ul.appendChild(productDetailsCol2UlLi2)




        const productDetailsCol2H6 = document.createElement("h6");
        productDetailsCol2H6.innerHTML = "Description:";


        const productDetailsCol2P = document.createElement("span");
        productDetailsCol2P.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse. Donec condimentum elementum convallis. Nunc sed orci a diam ultrices aliquet interdum quis nulla.";





        const productDetailsCol2Ul2 = document.createElement("ul");
        productDetailsCol2Ul2.className = "list-inline";

        const productDetailsCol2Ul2Li1 = document.createElement("li");
        productDetailsCol2Ul2Li1.className = "list-inline-item";

        const productDetailsCol2Li1H6 = document.createElement("h6");
        productDetailsCol2Li1H6,innerHTML = "Avaliable Color:";

        const productDetailsCol2Ul2Li2 = document.createElement("li");
        productDetailsCol2Ul2Li2.className = "list-inline-item";

        const productDetailsCol2Li2P = document.createElement("p");
        productDetailsCol2Li2P.innerHTML = "<strong>White / Black</strong>";
        
        productDetailsCol2Ul2Li2.appendChild(productDetailsCol2Li2P);
        productDetailsCol2Ul2Li1.appendChild(productDetailsCol2Li1H6);

        productDetailsCol2Ul2.appendChild(productDetailsCol2Ul2Li1)
        productDetailsCol2Ul2.appendChild(productDetailsCol2Ul2Li2)




        const productDetailsCol21H6 = document.createElement("h6");
        productDetailsCol21H6.productDetailsCol2Li1H6 = "Specification:";




        const productDetailsCol2Ul3 = document.createElement("ul");
        productDetailsCol2Ul3.className = "list-unstyled pb-3";

        const productDetailsCol2Ul3Li1 = document.createElement("li");
        productDetailsCol2Ul3Li1.innerHTML = "productDetailsCol2Ul3Li1";

        const productDetailsCol2Ul3Li2 = document.createElement("li");
        productDetailsCol2Ul3Li2.innerHTML = "productDetailsCol2Ul3Li2";

        const productDetailsCol2Ul3Li3 = document.createElement("li");
        productDetailsCol2Ul3Li3.innerHTML = "productDetailsCol2Ul3Li3";

        const productDetailsCol2Ul3Li4 = document.createElement("li");
        productDetailsCol2Ul3Li4.innerHTML = "productDetailsCol2Ul3Li4";

        const productDetailsCol2Ul3Li5 = document.createElement("li");
        productDetailsCol2Ul3Li5.innerHTML = "productDetailsCol2Ul3Li5";

        const productDetailsCol2Ul3Li6 = document.createElement("li");
        productDetailsCol2Ul3Li6.innerHTML = "productDetailsCol2Ul3Li6";

        const productDetailsCol2Ul3Li7 = document.createElement("li");
        productDetailsCol2Ul3Li7.innerHTML = "productDetailsCol2Ul3Li7";

        productDetailsCol2Ul3.appendChild(productDetailsCol2Ul3Li1)
        productDetailsCol2Ul3.appendChild(productDetailsCol2Ul3Li2)
        productDetailsCol2Ul3.appendChild(productDetailsCol2Ul3Li3)
        productDetailsCol2Ul3.appendChild(productDetailsCol2Ul3Li4)
        productDetailsCol2Ul3.appendChild(productDetailsCol2Ul3Li5)
        productDetailsCol2Ul3.appendChild(productDetailsCol2Ul3Li6)
        productDetailsCol2Ul3.appendChild(productDetailsCol2Ul3Li7)



        const productDetailsCol2RowPB3 = document.createElement("div");
        productDetailsCol2RowPB3.className = "row pb-3";

        const productDetailsCol2RowPB3Grid = document.createElement("div");
        productDetailsCol2RowPB3Grid.className = "col d-grid";

        const productDetailsCol2RowPB3Btn = document.createElement("button");
        productDetailsCol2RowPB3Btn.className = "btn btn-success btn-lg";
        productDetailsCol2RowPB3Btn.type = "submit";
        productDetailsCol2RowPB3Btn.name = "submit";
        productDetailsCol2RowPB3Btn.value = "addtocard";
        productDetailsCol2RowPB3Btn.innerHTML = "Place Order";
        
        productDetailsCol2RowPB3Grid.appendChild(productDetailsCol2RowPB3Btn)
        productDetailsCol2RowPB3.appendChild(productDetailsCol2RowPB3Grid);

        productDetailsCol02CardBody.appendChild(productDetailsCol02H1)
        productDetailsCol02CardBody.appendChild(productDetailsCol02p1)
        productDetailsCol02CardBody.appendChild(productDetailsCol02p2)
        productDetailsCol02CardBody.appendChild(productDetailsCol2Ul)
        productDetailsCol02CardBody.appendChild(productDetailsCol2H6)
        productDetailsCol02CardBody.appendChild(productDetailsCol2P)
        productDetailsCol02CardBody.appendChild(productDetailsCol2Ul2)
        productDetailsCol02CardBody.appendChild(productDetailsCol21H6)
        productDetailsCol02CardBody.appendChild(productDetailsCol2Ul3)
        productDetailsCol02CardBody.appendChild(productDetailsCol2RowPB3)
        productDetailsCol02Card.appendChild(productDetailsCol02CardBody)
        productDetailsCol02.appendChild(productDetailsCol02Card)

        productDetailsRow.appendChild(productDetailsCol1)
        productDetailsRow.appendChild(productDetailsCol02)

        productDetailsContainer.appendChild(productDetailsRow)
        homeProductDetailsMain.appendChild(productDetailsContainer)
}


function homeOurLocation(){
    const homeOurLocationMain = document.getElementById("home-our-location");
    // homeOurLocationMain.innerHTML = "";
    homeOurLocationMain.style = "display:block; width: 60%; height: 75vh; align-items: center; margin: 0 auto 5% auto;";

    mapInitialize();
    
}

function homeContactForm(){
    const homeContactFormMain = document.getElementById("contact-form-main");
    homeContactFormMain.innerHTML = "";

    const contactFormH1 = document.createElement("h1");
    contactFormH1.className = "h1 text-center";
    contactFormH1.innerHTML = "Have any Questions?";
    contactFormH1.style = "padding-top:25px;";

    const contactFormRow = document.createElement("div");
    contactFormRow.className = "row py-5";

    const contactFormForm = document.createElement("form");
    contactFormForm.className = "col-md-9 m-auto";
    contactFormForm.method = "post";
    contactFormForm.role = "form";

    const contactFormFormRow = document.createElement("div");
    contactFormFormRow.className = "row";

    const contactFormGroup1 = document.createElement("div");
    contactFormGroup1.className = "form-group col-md-6 mb-3";

    const contactFormLabel1 = document.createElement("label");
    contactFormLabel1.for = "inputname";
    contactFormLabel1.innerHTML = "Name";

    const contactFormInput1 = document.createElement("input");
    contactFormInput1.type = "text";
    contactFormInput1.name = "name";
    contactFormInput1.id = "name";
    contactFormInput1.className = "form-control mt-1";
    contactFormInput1.placeholder = "Enter your name";
   
    contactFormGroup1.appendChild(contactFormLabel1);
    contactFormGroup1.appendChild(contactFormInput1);


    const contactFormGroup2 = document.createElement("div");
    contactFormGroup2.className = "form-group col-md-6 mb-3";

    const contactFormLabel2 = document.createElement("label");
    contactFormLabel2.for = "inputemail";
    contactFormLabel2.innerHTML = "Email";

    const contactFormInput2 = document.createElement("input");
    contactFormInput2.type = "email";
    contactFormInput2.name = "email";
    contactFormInput2.id = "email";
    contactFormInput2.className = "form-control mt-1";
    contactFormInput2.placeholder = "Enter your email";

    contactFormGroup2.appendChild(contactFormLabel2);
    contactFormGroup2.appendChild(contactFormInput2);
    contactFormFormRow.appendChild(contactFormGroup1);
    contactFormFormRow.appendChild(contactFormGroup2);

    const contactFormGroup3 = document.createElement("div");
    contactFormGroup3.className = "mb-3";
    
    const contactFormLabel3 = document.createElement("label");
    contactFormLabel3.for = "inputsubject";
    contactFormLabel3.innerHTML = "Subject";

    const contactFormInput3 = document.createElement("input");
    contactFormInput3.type = "text";
    contactFormInput3.name = "subject";
    contactFormInput3.id = "subject";
    contactFormInput3.className = "form-control mt-1";
    contactFormInput3.placeholder = "Enter your subject";

    contactFormGroup3.appendChild(contactFormLabel3);
    contactFormGroup3.appendChild(contactFormInput3);

    const contactFormGroup4 = document.createElement("div");
    contactFormGroup4.className = "mb-3";

    const contactFormLabel4 = document.createElement("label");
    contactFormLabel4.for = "inputmessage";
    contactFormLabel4.innerHTML = "Message";

    const contactFormInput4 = document.createElement("textarea");
    contactFormInput4.type = "text";
    contactFormInput4.name = "message";
    contactFormInput4.id = "message";
    contactFormInput4.className = "form-control mt-1";
    contactFormInput4.placeholder = "Enter your message";
    contactFormInput4.rows = 5;

    contactFormGroup4.appendChild(contactFormLabel4);
    contactFormGroup4.appendChild(contactFormInput4);


    const contactFormGroup5 = document.createElement("div");
    contactFormGroup5.className = "row";

    const contactFormGroup5Col = document.createElement("div");
    contactFormGroup5Col.className = "col text-end mt-2";

    const contactFormGroup5Btn = document.createElement("button");
    contactFormGroup5Btn.className = "btn btn-success btn-lg px-3";
    contactFormGroup5Btn.type = "submit";
    contactFormGroup5Btn.innerHTML = "Let’s Talk";

    contactFormGroup5Col.appendChild(contactFormGroup5Btn);
    contactFormGroup5.appendChild(contactFormGroup5Col);

    contactFormForm.appendChild(contactFormFormRow)
    contactFormForm.appendChild(contactFormGroup3)
    contactFormForm.appendChild(contactFormGroup4)
    contactFormForm.appendChild(contactFormGroup5)

    contactFormRow.appendChild(contactFormForm);

    homeContactFormMain.appendChild(contactFormH1);
    homeContactFormMain.appendChild(contactFormRow);
}

function homeContactDetails(){
    const homeContactDetailsMain = document.getElementById("contact-details-main");
    homeContactDetailsMain.innerHTML = "";

    const contactFormContainer = document.createElement("div");
    contactFormContainer.className = "container py-5";
    
    const contactFormRow1 = document.createElement("div");
    contactFormRow1.className = "row text-center py-3";

    const contactFormCol1 = document.createElement("div");
    contactFormCol1.className = "col-lg-6 m-auto";

    const contactFormR1H1 = document.createElement("h1");
    contactFormR1H1.className = "h1";
    contactFormR1H1.innerHTML = "Contact Details";

    const contactFormR1P1 = document.createElement("p");
    contactFormR1P1.innerHTML = "Our Details will help you to directly call or drop email to us for further communication."
    
    contactFormCol1.appendChild(contactFormR1H1);
    contactFormCol1.appendChild(contactFormR1P1);

    contactFormRow1.appendChild(contactFormCol1);

    const contactFormRow2 = document.createElement("div");
    contactFormRow2.className = "row text-center py-3";

    const contactFormCol2 = document.createElement("div");
    contactFormCol2.className = "col-lg-6 m-auto";

    const contactFormH41 = document.createElement("h4");
    contactFormH41.className = "h2";
    contactFormH41.innerHTML = "Address: Manish Nagar, Nagpur, 440015";

    const contactFormH42 = document.createElement("h4");
    contactFormH42.className = "h2";
    contactFormH42.innerHTML = "Phone: +91 77777 77777";

    const contactFormH43 = document.createElement("h4");
    contactFormH43.className = "h2";
    contactFormH43.innerHTML = "Email: [info@yourdomain.com](mailto:info)";

    contactFormCol2.appendChild(contactFormH41);
    contactFormCol2.appendChild(contactFormH42);
    contactFormCol2.appendChild(contactFormH43);

    contactFormRow2.appendChild(contactFormCol2);

    contactFormContainer.appendChild(contactFormRow1);
    contactFormContainer.appendChild(contactFormRow2);

    homeContactDetailsMain.appendChild(contactFormContainer);
}

function homeContactUsMainHeading(){
    const homeContactUsMainHeading = document.getElementById("contact-us-heading-main");
    homeContactUsMainHeading.innerHTML = "";
    homeContactUsMainHeading.className = "contact bg-light";

    const contactUsHeadingContainer = document.createElement("div");
    contactUsHeadingContainer.className = "container  py-5";
    
    const contactUsHeadingRow = document.createElement("div");
    contactUsHeadingRow.className = "row";
    
    const contactUsHeading2 = document.createElement("h2");
    contactUsHeading2.innerHTML = "Contact Us";
    contactUsHeading2.className = "h1 text-success";

    const contactUsHeadingP= document.createElement("p");
    contactUsHeadingP.innerHTML = "Planet0ne was born out of a passion for helping businesses grow and succeed in the digital age. We are more than just a web development team—we are your partners in creating a thriving online presence. Our mission is to empower entrepreneurs and business owners by providing innovative, tailor-made digital solutions that bring their visions to life.";
    contactUsHeadingRow.appendChild(contactUsHeading2);
    contactUsHeadingRow.appendChild(contactUsHeadingP);

    contactUsHeadingContainer.appendChild(contactUsHeadingRow);
    homeContactUsMainHeading.appendChild(contactUsHeadingContainer);

}
function allSectionHidden(){
    const mainHomeCarouselDiv = document.getElementById("template-mo-zay-hero-carousel");
    mainHomeCarouselDiv.innerHTML = "";

    const homeCategoriesMain = document.getElementById("home-categories-main");
    homeCategoriesMain.innerHTML = "";

    const homeFeaturedProdDiv = document.getElementById("feature-prod-main");
    homeFeaturedProdDiv.innerHTML = "";

    const homeServicesMain = document.getElementById("home-services-main");
    homeServicesMain.innerHTML = "";

    const homeWhyChooseUsMain = document.getElementById("why-choose-us-main");
    homeWhyChooseUsMain.innerHTML = "";

    const homeCTAMain = document.getElementById("call-to-action-main");
    homeCTAMain.innerHTML = "";

    const homeAllProductsMain = document.getElementById("all-products-main");
    homeAllProductsMain.innerHTML = "";

    const homeContactFormMain = document.getElementById("contact-form-main");
    homeContactFormMain.innerHTML = "";

    const homeContactDetailsMain = document.getElementById("contact-details-main");
    homeContactDetailsMain.innerHTML = "";

    const homeContactUsMainHeading = document.getElementById("contact-us-heading-main");
    homeContactUsMainHeading.innerHTML = "";

    const homeOurLocationMain = document.getElementById("home-our-location");
    homeOurLocationMain.style = "display:none;";
}

function mapInitialize() {
    var parliament = new google.maps.LatLng(30, -20);
    var myOptions = {
        zoom: 12,
        center: parliament,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"),
        myOptions);

    var marker = new google.maps.Marker({
        position: parliament,
        map: map,
        title: "Name of Location"
    });
}


// jQuery Event Functions

// $("#showAllProducts").

$("#showHomePage").click(() => {
    $("#hamburger-icon-sidebar").click();
    allSectionHidden();
    homeCarousel(homeCarouselData);
    homeFeaturedProd(homeFeaturedProdData);
    homeCategories(homeCategoriesData);
    homeServices(homeServicesData);
    homeWhyChooseUs(homeWhyChooseUsData);
    homeCTA(homeCTAData);

});

$("#showAllProducts").click(() => {
    $("#hamburger-icon-sidebar").click();
    allSectionHidden();
    homeAllProducts(homeAllProductsData);

    // aboutUsPageFunc()
    // $(".fa-times").click();
});

$("#showContactDetails").click(() => {
    $("#hamburger-icon-sidebar").click();
    allSectionHidden();
    homeContactUsMainHeading();
    homeOurLocation();
    homeContactDetails();
    homeContactForm();

    // aboutUsPageFunc()
    // $(".fa-times").click();
});


// Footer links
$("#showHomePageFooter").click(() => {
    allSectionHidden();
    homeCarousel(homeCarouselData);
    homeFeaturedProd(homeFeaturedProdData);
    homeCategories(homeCategoriesData);
    homeServices(homeServicesData);
    homeWhyChooseUs(homeWhyChooseUsData);
    homeCTA(homeCTAData);

});

$("#showAllProductsFooter").click(() => {
    allSectionHidden();
    homeAllProducts(homeAllProductsData);

    // aboutUsPageFunc()
    // $(".fa-times").click();
});

$("#showContactDetailsFooter").click(() => {
    allSectionHidden();
    homeContactUsMainHeading();
    homeOurLocation();
    homeContactDetails();
    homeContactForm();

    // aboutUsPageFunc()
    // $(".fa-times").click();
});





// function calling
homeData = await loadData("home", 6);
if(homeData != ''){

    for(let i=0; i<homeData.length; i++){
        if(homeData[i].type == "carousel"){
            homeCarouselData.push(homeData[i]);
        }else if(homeData[i].type == "featuredProduct"){
            homeFeaturedProdData.push(homeData[i]);
        }else if(homeData[i].type == "categories"){
            homeCategoriesData.push(homeData[i]);
        }else if(homeData[i].type == "services"){
            homeServicesData.push(homeData[i]);
        }else if(homeData[i].type == "why-choose-us"){
            homeWhyChooseUsData.push(homeData[i]);
        }else if(homeData[i].type == "call-to-action"){
            homeCTAData.push(homeData[i]);
        }else if(homeData[i].type == "products"){
            homeAllProductsData.push(homeData[i]);

            if (!homeAllProductsCategoriesData.includes(homeData[i].categories)) {
                homeAllProductsCategoriesData.push(homeData[i].categories);
            }
        }
    }

    allSectionHidden();
    homeCarousel(homeCarouselData);
    homeFeaturedProd(homeFeaturedProdData);
    homeCategories(homeCategoriesData);
    homeServices(homeServicesData);
    homeWhyChooseUs(homeWhyChooseUsData);
    homeCTA(homeCTAData);
    homeRelatedProducts(homeAllProductsData)

    // homeProductDetails(homeAllProductsData[1])
    // homeAllProducts(homeAllProductsData)
    
}


})();