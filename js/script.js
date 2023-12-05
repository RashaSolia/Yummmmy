let content=document.getElementById('content')
let searchInputs=document.getElementById('searchInputs')
let submitBtn 
$(document).ready(()=>{
searchByName('').then(()=>{
    $('.loadingScreen').fadeOut(500)
    $('body').css("overflow","visible")
        $(".inner-loading-screen").fadeOut(300)

})

})
// openNav
function openSideNav(){
    $('.sideNan ').animate({left:0},500)
        $('.open-close-icon').removeClass('fa-bars')
        $('.open-close-icon').addClass('fa-x')
        for( let i=0;i<5;i++){
            $('.links li').eq(i).animate({top:0},(i+5)*120)
        }
}
// close nav
function closeSideNav(){
    let navTabWidth= $('.sideNan .navTab').outerWidth()
    $('.sideNan ').animate({left:-navTabWidth},500)
    $('.open-close-icon').addClass('fa-bars')
   $('.open-close-icon').removeClass('fa-x')
   $('.links li').animate({top:300},500)
}
// close and open nav on click
$('.sideNan .open-close-icon').click((function(){
    if($('.sideNan ').css('left')=="0px"){
        closeSideNav()
    }
    else{
    
        openSideNav()
    }
}))
// make default closeSideNav
closeSideNav() 

//  get Categories
async function getCategories(){
    content.innerHTML = ""
    $(".inner-loading-screen").fadeIn(300)

    searchInputs.innerHTML = "";

      let response=await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      let data=await response.json()
    console.log(data.categories)
    displayCategories(data.categories)
    $(".inner-loading-screen").fadeOut(300)
    
    }
// display Categories
   function displayCategories(arr){
    let cartonaa=''
    for(let i=0 ;i<arr.length ;i++){
     cartonaa+=`  
      <div class="col-md-3 ">
     <div class="meal position-relative overflow-hidden rounded-2" onclick="getCategoryMeals('${arr[i].strCategory}')">
         <img src="${arr[i].strCategoryThumb}" alt="" class="w-100">
    
         <div class="mealLayer position-absolute text-center p-2">
    <h3>${arr[i].strCategory}</h3>
    
    <p> ${arr[i].strCategoryDescription.split(" ").slice(0,20).join(" ")}</p>
         </div>
     </div>
    </div>`
    }
    content.innerHTML=cartonaa
searchInputs.innerHTML=''

    } 
// get Area
   async function getArea(){
    content.innerHTML = ""
    $(".inner-loading-screen").fadeIn(300)

    searchInputs.innerHTML = "";

let response =await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
let data =await response.json()
console.log(data)
dispalyArea(data.meals)
    $(".inner-loading-screen").fadeOut(300)
    }

// dispaly Area
    function dispalyArea(arr){
        let cartonaa=''
        for(let i=0 ;i<arr.length ;i++){
         cartonaa+= 
         
         `  
      <div class="col-md-3 p-5 ">
     <div class="meal  rounded-2 text-center" onclick="getAreaMeals('${arr[i].strArea}')">
    <i class="fa-solid fa-house-laptop fa-4x"></i>
         <h3 class="py-2">${arr[i].strArea}</h3>
     
     </div>
    </div>`
         
        }
        content.innerHTML=cartonaa
searchInputs.innerHTML=''

        
    }
  //  get Categories
async function getIngredient(){
    content.innerHTML = ""
    $(".inner-loading-screen").fadeIn(300)

    searchInputs.innerHTML = "";

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    let data=await response.json()
  console.log(data.meals)
  displayIngredient(data.meals.slice(0,20))
      $(".inner-loading-screen").fadeOut(300)
  }
// display Ingredient
 function displayIngredient(arr){
    let cartonaa=''
        for(let i=0 ;i<arr.length ;i++){
         cartonaa+= 
         
         `  
      <div class="col-md-3 p-3  ">
     <div class="meal  rounded-2 text-center " onclick="getIngredientMeals('${arr[i].strIngredient}')">
    <i class="fa-solid fa-drumstick-bite fa-4x"></i>
         <h3 class="py-2">${arr[i].strIngredient}</h3>
     <p> ${arr[i].strDescription.split(" ").slice(0,20).join(" ")}</p>
     </div>
    </div>`
         
        }
        content.innerHTML=cartonaa
searchInputs.innerHTML=''

        
  }
    //  get Category Meals
  
 async function getCategoryMeals(category){
    content.innerHTML = ""
    $(".inner-loading-screen").fadeIn(300)

    searchInputs.innerHTML = "";

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    let data=await response.json()
    console.log(data.meals)
    displayMeals(data.meals.slice(0,20))
        $(".inner-loading-screen").fadeOut(300)
  }
//   get Area Meals
  async function getAreaMeals(Area){
    content.innerHTML = ""
    $(".inner-loading-screen").fadeIn(300)

    searchInputs.innerHTML = "";

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${Area}`)
    let data=await response.json()
    console.log(data.meals)
    displayMeals(data.meals.slice(0,20))
        $(".inner-loading-screen").fadeOut(300)
  }
//   get Ingredient Meals
  async function getIngredientMeals(Ingredient){
    content.innerHTML = ""
    $(".inner-loading-screen").fadeIn(300)

    searchInputs.innerHTML = "";

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${Ingredient}`)
    let data=await response.json()
    console.log(data.meals)
    displayMeals(data.meals.slice(0,20))
        $(".inner-loading-screen").fadeOut(300)
  }


//   get Meal Details
async function getMealDetails(mealID){
    content.innerHTML = ""
    $(".inner-loading-screen").fadeIn(300)

    searchInputs.innerHTML = "";

    let respone = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`);
     let data= await respone.json()
     console.log(data.meals[0])
     displayMealsDetails(data.meals[0])
        $(".inner-loading-screen").fadeOut(300)
}

// display Meals Details
function displayMealsDetails(meal){
    let Ingredient=''
for(let i=1;i<=20;i++){
if(meal[`strIngredient${i}`] ){
    Ingredient+=`<li class="alert alert-info m-2 p-2 ">${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]} </li>`
    
    // Ingredient.push()
}
console.log(Ingredient)

}


let tags=meal.strTags?.split(',')
if(!tags) tags=[]
let tagStr=''
for(i=0;i<tags.length;i++){
    tagStr+=`<li class="alert alert-danger m-2 p-2 ">${tags[i]} </li>
    `
}


    let cartonaa=`
    <div class="col-md-4">
    <img class="w-100 rounded-3" src="${meal.strMealThumb}"  alt="">   
     <h2 class="py-3"> ${meal.strMeal} </h2>
 </div>
     <div class="col-md-8 px-3">
        <h2 >Instructions</h2>
        <p class="py-3">${meal.strInstructions}
        </p>

        <h3> <span class="fa-bolder"> area : </span>${meal.strArea} </h3>
        <h3> <span class="fw-bolder">Category : </span>${meal.strCategory}</h3>
        <h3> Recipes </h3>
        <ul class="list-unstyled d-flex g-3 flex-wrap">
          
         ${Ingredient}
        </ul>
        <h3> Tags </h3>
        <ul class="list-unstyled d-flex g-3 flex-wrap">
        ${tagStr}
            </ul>
        <a href="${meal.strSource}" class="btn btn-success">Source</a>
        <a href=" ${meal.strYoutube}" class="btn btn-danger">Youtub</a>
     </div> 
    
         `

         content.innerHTML=cartonaa
searchInputs.innerHTML=''


}
  
function showSearchInput(){
    content.innerHTML=''
    searchInputs.innerHTML=`
   
    <div class="row py-5 ">
        <div class="col-md-6 ">
            <input type="text" onkeyup="searchByName(this.value)" class="form-control p-2 border-top-0 border-start-0 border-end-0" placeholder="Search By Name">
        </div>
        <div class="col-md-6">
            <input type="text" onkeyup="searchByName(this.value)"  maxlenght="1"  class="form-control p-2 border-top-0 border-start-0 border-end-0" placeholder="Search By Frist Litter">
        </div>
    </div>
 
    `
}

// search By Name
async function searchByName(term){
    content.innerHTML = ""
    $(".inner-loading-screen").fadeIn(300)

    let response=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
   let data = await response.json()
   data.meals ? displayMeals(data.meals) :displayMeals([])
   $(".inner-loading-screen").fadeOut(300)

    }

// search By Frist Litter
async function searchByFristLitter(term){
    content.innerHTML = ""
    $(".inner-loading-screen").fadeIn(300)

    searchInputs.innerHTML = "";

        term == "" ? term="a" :""
        let response=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${term}`)
       let data = await response.json()
       data.meals ? displayMeals(data.meals) :displayMeals([])

    }
    
    

 //  dispaly meals in home
 function displayMeals(arr){
   let cartonaa=''
   for(let i=0 ;i<arr.length ;i++){
    cartonaa+=`  
     <div class="col-md-3 ">
    <div class="meal position-relative overflow-hidden rounded-2" onclick="getMealDetails('${arr[i].idMeal}')">
        <img src="${arr[i].strMealThumb}" alt="" class="w-100">
   
        <div class="mealLayer position-absolute d-flex align-items-center justify-content-center p-2">
   <h3>${arr[i].strMeal}</h3>
        </div>
    </div>
   </div>`
   }
   content.innerHTML=cartonaa
    }


// contact us
function showContact(){
    content.innerHTML=`<div class="contact d-flex justify-content-center align-items-center ">
    <div class="container w-75 text-center ">
        <div class="row">
            <div class="col-md-6 py-4">
    <input type="text" class="form-control" placeholder="Enter Your Name" onkeyup="inputsVaildation()" id="nameInput">
           
    <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
    Special characters and numbers not allowed
</div>
 
    </div>
            <div class="col-md-6 py-4">
                <input type="email" class="form-control" placeholder="Enter Your Email" onkeyup="inputsVaildation()" id="emailInput">
                <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
                Email not valid *exemple@yyy.zzz
            </div>        
                </div>
                        <div class="col-md-6 py-4">
                            <input type="number" class="form-control" placeholder="Enter Your Phone" onkeyup="inputsVaildation()" id="phoneInput">
                            <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
                            Enter valid Phone Number
                        </div>        
                            </div>
                                    <div class="col-md-6 py-4">
                                        <input type="number" class="form-control" placeholder="Enter Your Age" onkeyup="inputsVaildation()" id="ageInput">
                                        <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
                                        Enter valid age
                                    </div>     
                                        </div>
                                                <div class="col-md-6 py-4">
                                                    <input type="password" class="form-control" placeholder="Enter Your Password" onkeyup="inputsVaildation()" id="PasswordInput">
                                                    <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid password *Minimum eight characters, at least one letter and one number:*
                </div>     
                                                    </div>
                                                            <div class="col-md-6 py-4">
                                                                <input type="password" class="form-control" placeholder="Repassword" onkeyup="inputsVaildation()" id="repasswordInput">
                                                                <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
                                                                Enter valid repassword 
                                                            </div>       
                                                                </div>
        </div>
        <button class="btn btn-outline-danger px-2 mt-3" disabled id="submitBtn" >submit </button>
    </div>
    
</div>`
 submitBtn=document.getElementById('submitBtn')

 document.getElementById("nameInput").addEventListener("focus", () => {
    nameInputTouched = true
})

document.getElementById("emailInput").addEventListener("focus", () => {
    emailInputTouched = true
})

document.getElementById("phoneInput").addEventListener("focus", () => {
    phoneInputTouched = true
})

document.getElementById("ageInput").addEventListener("focus", () => {
    ageInputTouched = true
})

document.getElementById("passwordInput").addEventListener("focus", () => {
    passwordInputTouched = true
})

document.getElementById("repasswordInput").addEventListener("focus", () => {
    repasswordInputTouched = true
})

}
let nameInputTouched = false;
let emailInputTouched = false;
let phoneInputTouched = false;
let ageInputTouched = false;
let passwordInputTouched = false;
let repasswordInputTouched = false;

 

function inputsVaildation(){
    if (nameInputTouched) {
if(NameValidation()){
    document.getElementById('nameAlert').classList.replace("d-block","d-none")
}
else{
    document.getElementById('nameAlert').classList.replace("d-none","d-block")
}} 
if (emailInputTouched) {

    if (emailValidation()) {
        document.getElementById("emailAlert").classList.replace("d-block", "d-none")
    } else {
        document.getElementById("emailAlert").classList.replace("d-none", "d-block")

    }
}
if (phoneInputTouched) {

    if (phoneValidation()) {
        document.getElementById("phoneAlert").classList.replace("d-block", "d-none")
    } else {
        document.getElementById("phoneAlert").classList.replace("d-none", "d-block")

    }}
    if (ageInputTouched) {

    if (ageValidation()) {
        document.getElementById("ageAlert").classList.replace("d-block", "d-none")
    } else {
        document.getElementById("ageAlert").classList.replace("d-none", "d-block")

    }
    }
    if (passwordInputTouched) {

    if (passwordValidation()) {
        document.getElementById("passwordAlert").classList.replace("d-block", "d-none")
    } else {
        document.getElementById("passwordAlert").classList.replace("d-none", "d-block")
}}
if (passwordInputTouched) {

    if (rePasswordValidation()) {
        document.getElementById("repasswordAlert").classList.replace("d-block", "d-none")
    } else {
        document.getElementById("repasswordAlert").classList.replace("d-none", "d-block")

    }
}





// console.log(rePasswordValidation())
if(rePasswordValidation()&&
NameValidation()&&
emailValidation() &&
phoneValidation()&&
ageValidation()&&
passwordValidation() ) {
console.log('true')
submitBtn.removeAttribute('disabled')
}
else{
    console.log('false')
submitBtn.setAttribute('disabled',true)

}


}
function NameValidation(){
    return /^[a-zA-Z ]{3,}$/.test( document.getElementById('nameInput').value)
   }
 
function emailValidation() {
    return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("emailInput").value))
}

function phoneValidation() {
    return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.getElementById("phoneInput").value))
}

function ageValidation() {
    return (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(document.getElementById("ageInput").value))
}

function passwordValidation() {
    return (/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(document.getElementById("PasswordInput").value))
}
function rePasswordValidation() {
    return document.getElementById("repasswordInput").value==document.getElementById("PasswordInput").value
}
