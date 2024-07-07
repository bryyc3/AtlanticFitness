

/*************************** initialize tab ojects and gallery objects ***************************/
function Tab(href, src, alt, header, description){
    this.href = href;
    this.src = src;
    this.alt = alt;
    this.header = header;
    this.description = description;
}
function imageDisplay(array, maxImages, slideNum){
    this.array = array;
    this.maxImages = maxImages;
    this.slideNum = slideNum;
}


const weightsImages = ["images/machine_room.JPG", "images/machine_room2.JPG",
                        "images/machine_room3.JPG", "images/machine_room4.JPG", 
                        "images/middle_area1.JPG","images/middle_area2.JPG", 
                        "images/main_area1.JPG", "images/main_area2.JPG", 
                        "images/main_area3.JPG", "images/main_area4.JPG", 
                        "images/main_area5.JPG", "images/legs_area1.JPG", 
                        "images/legs_area2.JPG", "images/legs_area3.JPG", 
                        "images/nopain.JPG", "images/limitless.jpg"];
const courtImages = ["images/court1.JPG", "images/court2.JPG", "images/court3.JPG"];
const cardioImages = ["images/upstairs1.JPG", "images/stairs.JPG", 
                      "images/dont_quit.JPG", "images/dont_quit2.JPG"]
let weightsMaxImages = (weightsImages.length - 1);
let courtMaxImages = (courtImages.length - 1);
let cardioMaxImages = (cardioImages.length - 1);
let weightsSlideNum = 0;
let courtSlideNum = 0;
let cardioSlideNum = 0; //gallery object information 


const home = new Tab('href="index.html"', "images/IMG_4134.jpg", "Fitness center building", "Come Check Us Out!", "We are located at 31 Shove St, Tiverton, Rhode Island");
const about = new Tab('href="about.html"', "images/silversnkrs.JPG", "Silver sneakers fitness program", "Membership Specials, Hours and More", "We offer Silver Sneakers to our members who fit the criteria!<br>Find out about membership deals and more by clicking here or the About Us tab");
const gallery = new Tab('href="gallery.html"', "images/main_area4.JPG", "Workout area", "Take A Mini Tour!", "See what you're in for and what our facility offers in the Gallery tab");
const contact = new Tab('href="contact.html"', "images/support.jpeg", "Contact us", "Always Here if You Need Us", "Speak with one of our staff members for assitance with any questions you may have<br>You can reach us at: (401) 624-3440");

const weights = new imageDisplay(weightsImages, weightsMaxImages, weightsSlideNum);
const cardio = new imageDisplay(cardioImages, cardioMaxImages, cardioSlideNum);
const court = new imageDisplay(courtImages, courtMaxImages, courtSlideNum);

const tabs = [home, about, gallery, contact];//array of all tabs on homescreen
let index = 0;//index for going through array
/*************************** initialize tab ojects and what they contain ***************************/



/*************************** homescreen functions ***************************/
function slidesCycle(){
    let slides = document.getElementById("slides");
    if (index == 0){
        slides.innerHTML += 
        `<div class ="fade_in" id = "slideElements">
        <a href="${tabs[index].href}">
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2980.2586697601146!2d-71.1845076598009!3d41.6717566713848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e4ff5b3e894021%3A0x3bd4087ccb98b52b!2sAtlantic%20Fitness!5e0!3m2!1sen!2sus!4v1719764646898!5m2!1sen!2sus" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade" class="google_map"></iframe>
        <h3>${tabs[index].header}</h3>
        <p class="preview_desc">${tabs[index].description}</p>
        </a>
        </div>`;
    }
    else{
        slides.innerHTML += 
        `<div class ="fade_in" id = "slideElements">
            <a href="${tabs[index].href}">
            <img src="${tabs[index].src}" alt="${tabs[index].alt}" class="gympic">
            <h3>${tabs[index].header}</h3>
            <p class="preview_desc">${tabs[index].description}</p>
            </a>
        </div>`;
    }
}//create slides associated with specific tab and display it

function removeSlide(){
    let slide = document.getElementById("slideElements");
    slide.remove();
    removeUnderline();
    index++;
    if(index == tabs.length){
        index = 0;
    }
    slidesCycle();
    underline();
}/*remove the slide from the display and the underline on the tab associated with it 
    then call the next slide and underline next tab*/

function underline(){
    let underlinedElement = document.getElementById(`${index}`);
    underlinedElement.classList.add("tab_active");  
}//underline tab associated with slide

function removeUnderline(){
    let underlinedElement = document.getElementById(`${index}`);
    underlinedElement.classList.remove("tab_active"); 

}//remove the underline on a tab
/*************************** homescreen functions ***************************/

/*************************** about screen functions ***************************/
function changeAboutTab(tabNum){
    let overview = document.getElementById("overview");
    let hours = document.getElementById("hours");
    let membership = document.getElementById("membership");
    let trainers = document.getElementById("trainers");

    let overviewCont = document.getElementById("overview_cont");
    let hoursCont = document.getElementById("hours_cont");
    let membershipCont = document.getElementById("memberships");
    let trainersCont = document.getElementById("trainers_cont");

    if(tabNum === 0){
        overview.classList.add("underline");
        hours.classList.remove("underline");
        membership.classList.remove("underline");
        trainers.classList.remove("underline");

        overviewCont.classList.add("active");
        hoursCont.classList.remove("active");
        membershipCont.classList.remove("active");
        trainersCont.classList.remove("active");
    }
    if(tabNum === 1){
        overview.classList.remove("underline");
        hours.classList.add("underline");
        membership.classList.remove("underline");
        trainers.classList.remove("underline");

        overviewCont.classList.remove("active");
        hoursCont.classList.add("active");
        membershipCont.classList.remove("active");
        trainersCont.classList.remove("active");
    }
    if(tabNum === 2){
        overview.classList.remove("underline");
        hours.classList.remove("underline");
        membership.classList.add("underline");
        trainers.classList.remove("underline");

        overviewCont.classList.remove("active");
        hoursCont.classList.remove("active");
        membershipCont.classList.add("active");
        trainersCont.classList.remove("active");
    }
    if(tabNum === 3){
        overview.classList.remove("underline");
        hours.classList.remove("underline");
        membership.classList.remove("underline");
        trainers.classList.add("underline");

        overviewCont.classList.remove("active");
        hoursCont.classList.remove("active");
        membershipCont.classList.remove("active");
        trainersCont.classList.add("active");
    }//depending on which tab was pressed, 
     //remove the display of all other tabs and only display selected tab content
}
/*************************** about screen functions ***************************/


/*************************** gallery screen functions ***************************/
function arrowClicked(operator, id){
    if(id === "weights"){
        let identifier = document.getElementById(`${id}`)
        changeSlide(operator, weights, identifier);
    }
    if(id === "cardio"){
        let identifier = document.getElementById(`${id}`)
        changeSlide(operator, cardio, identifier);
    }
    if(id === "court"){
        let identifier = document.getElementById(`${id}`)
        changeSlide(operator, court, identifier);
    }
}//when arrow is clicked, determine which set of arrows was clicked 
 //send content specific info to the function that will change to the next img 

function changeSlide(operator, typeDisplay, identifier){
    
    if(typeDisplay.slideNum == 0 && operator == '-'){
        typeDisplay.slideNum = typeDisplay.maxImages;
        identifier.src = `${typeDisplay.array[typeDisplay.slideNum]}`;
    }
    else if(typeDisplay.slideNum == typeDisplay.maxImages && operator == '+'){
        typeDisplay.slideNum = 0;
        identifier.src = `${typeDisplay.array[typeDisplay.slideNum]}`;
    }
    else if(typeDisplay.slideNum != typeDisplay.maxImages && operator == '+'){
        typeDisplay.slideNum += 1;
        identifier.src = `${typeDisplay.array[typeDisplay.slideNum]}`;
    }
    else if(typeDisplay.slideNum != 0 && operator == '-'){
        typeDisplay.slideNum -= 1;
        identifier.src = `${typeDisplay.array[typeDisplay.slideNum]}`;
    }
}//change specific image display's image 


/*************************** gallery screen functions ***************************/


/*************************** function calls ***************************/
if(document.getElementById("slides") != null){
    underline();
    slidesCycle();
    setInterval(removeSlide, 6000);
}//if on homescreen, run homescreen functions

/*************************** functions calls ***************************/

