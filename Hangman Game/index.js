var btn=document.querySelectorAll(".btn")
var scr=document.getElementById("scr")
var lengthGuess=document.getElementById("length")
var chances=document.getElementById("chances")
var hint=document.getElementById("hint")
var storeCityName=""
var wrongAudio=new Audio("./audio/wronganswer-37702.mp3")
var rightAudio=new Audio("./audio/correct.mp3")
var victoryAudio=new Audio("./audio/victory.mp3")
var gameOver=new Audio("./audio/gameover.mp3")
var guess=[
    {
        type: "Pakistan's City",
        names: ["Karachi","Lahore","Islamabad","Sahiwal","Hyderabad","Rawalpindi","Sialkot","Muree","Peshawar","Quetta","Gilgit","Faisalabad","Multan","Jhang","Sahiwal","Mardan","Sukkur","Rohri"]
    },
    {
        type: "Asian country",
        names: ["Pakistan","India","China","Japan","Srilanka","Bangladesh","Nepal","Indonesia","Qatar","Singapore","Iran","Afghanistan","Iraq","Syria","Kuwait","Bahrain","Turkey","Thailand","Malaysia","Oman","Maldives","Bhutan"]
    },
    {
        type: "Body Part",
        names: ["Nose","Eye","Ear","Leg","Arm","Shoulder","Hair","Foot","Hand","Finger","Nail","Lip","Wrist","Chest","Chin","Elbow","Toes","Ankle","Waist","Thigh","Knee","Thumb","Teeth","Face","Mouth","Tongue","Lungs","Heart","Throat"]
    },
    {
        type: "Animal",
        names: ["Frog","Lion","Tiger","Elephant","Fox","Zebra","Bear","Cobra","Cat","Dog","Leopard","Cow","Sheep","Goat","Hen","Rabbit","Turtle","Monkey","Rhinoceros","Horse","Buffalo","Donkey","Deer","Rat","Lamb"]
    },
    {
        type: "Bird",
        names: ["Duck","Parrot","Eagle","Ostrich","Bat","Peacock","Hen","Koel","Dove","Kiwi","Sparrow","Owl"]
    },
    {
        type: "Fruit",
        names: ["Apple","Banana","Grapes","Orange","Pineapple","Mango","Pear","Cherry","Strawberry","Watermelon","Pear","Avocado","Coconut","Papaya","Blueberry","Blackberry","Apricot","Peach","Guava"]
    },
    {
        type: "Vegetable",
        names: ["Spinach","Peas","Cabbage","Carrot","Tomato","Potato","Garlic","Ginger","Cucumber","Ladyfinger","Onion","Radish","Turnip","Mint","Mushroom",""]
    },
    {
        type: "European Contry",
        names: ["Russia","France","Italy","Poland","Belgium","Sweden","Switzerland","Hungary","Denmark","Netherlands","Ireland","Croatia","Germany","Portugal","Belgium","Spain"]
    },
    {
        type: "Flowers",
        names: ["Rose","Lily","Tulip","Orchid","Carnation","Fresia","Daffodil","Poppy","Sunflower"]
    },
    {
        type: "Utensils",
        names: ["Kettle","Toaster","Spatula","Plate","Glass","Cup","Spoon","Fork","Knife","Teapot","Blender","Jug","Bottle","Fryingpan","Bowl","Jar","Whisk"]
    },
    {
        type: "Room Furniture",
        names: ["Table","Wardrobe","Armchair","Bed","Bookcase","Chair","cupboard","desk","drawers","Shelf","Sofa","Stool","Carpet","Curtains"]
    },
    {
        type: "Electronic Devices",
        names: ["Clock","Television","Mouse","Printer","Microwave","Fan","Iron","Laptop","Camera","Speakers","Webcam","Drone","Oven","Lamp","Bulb","Computer","Radio","Refrigerator","Transistor"]
    }
]
window.addEventListener("load",()=>{
    var j=Math.floor(Math.random()*guess.length)
    var i=Math.floor(Math.random()*guess[j].names.length)
    var guessCity=guess[j].names[i]
    storeCityName=guessCity
    lengthGuess.innerHTML=guessCity.length

    for(k=0;k<guessCity.length;k++){
        var span=document.createElement("span")
        span.innerText="-"
        span.setAttribute("class","fakespan")
        scr.appendChild(span)
        
    }
    
    hint.addEventListener("click",()=>{
        alert(guess[j].type +" name")
    })

    storeCityName=storeCityName.toLowerCase()

    Array.from(btn).forEach(btns=>{
        btns.addEventListener("click",()=>{
            var getSpan=document.querySelectorAll(".fakespan")
            var storeBtnValue=btns.innerHTML
            
            
            if(storeCityName.includes(storeBtnValue)){
                rightAudio.play()
                var index=storeCityName.indexOf(storeBtnValue)
                console.log(index)
                getSpan[index].innerHTML=storeBtnValue
                storeCityName= storeCityName.replace(storeCityName.charAt(index),storeCityName.charAt(index).toUpperCase())
                lengthGuess.innerHTML= --lengthGuess.innerHTML
                if(lengthGuess.innerHTML==0){
                    victoryAudio.play()
                    alert("You won")
                    setTimeout(()=>{

                        location.reload()
                    },3000)
                }
            }else{
                wrongAudio.play()
                // alert("Your answer is wrong")
                chances.innerHTML= --chances.innerHTML
                btns.setAttribute("disabled","true")
                btns.classList.add("disabled")

            }

            if(chances.innerHTML==0){
                gameOver.play()
                alert("You lose")
                alert("The correct answer is " + storeCityName.toUpperCase())
                setTimeout(()=>{
                    location.reload()
                },3000)
                    
            }
        })
        
    })
    
    
})
            
                
            

            
            