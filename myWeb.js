//scrolling effect
window.addEventListener('scroll',function(){
    let navbar = document.querySelector('navbar');

    navbar.classList.toggle('scrolling-active', window.scrollY > 10);
})
//end effect
//calculate bmi and output
function bmiCalc(){
    var height = parseFloat(document.bmiForm.height.value);
    var weight = parseFloat(document.bmiForm.weight.value);
    var gender = document.bmiForm.gender.value;

    var tips;
    var bmi = 0;
    var category;
    bmi = weight/Math.pow(height,2);
    if(bmi <= 18.5){
        category = "Underweight";
        tips = "Your BMI is Underweight eat more!"
    }
    if(bmi > 18.5 && bmi < 25){
        category = "Normal";
        tips = "Your BMI is Normal stay fit and healthy!"
    }
    if(bmi >= 25 && bmi < 30){
        category = "Overweight";
        tips = "Your BMI is Overweight, lets exercise!"
    }
    if(bmi >= 30){
        category = "Obesity";
        tips = "Your BMI is Obesity, lets exercise and eat healthy food!"
    }
    document.getElementById('height').innerHTML = "Your height is " + height;
    document.getElementById('weight').innerHTML = "Your weight is " + weight;
    document.getElementById('gender').innerHTML = "Your gender is " + gender;
    document.getElementById('bmi').innerHTML = "Your BMI is " + bmi.toFixed(2);
    document.getElementById('cat').innerHTML = "Your BMI category is " + category;
    document.getElementById('tips').innerHTML = tips;
}
//change Form base on shape
function selectedShape(){
    var shape = document.getElementById("shapeChoice").value;
    var display;
    var x;
    if(shape == "circle"){
        document.getElementById("h").style.visibility = "hidden";
        document.getElementById("b").style.visibility = "hidden";
        document.getElementById("r").style.visibility = "visible";
        document.getElementById("r").style.transform = "translateY(-150px)";
        document.getElementById("button").style.transform = "translateY(-150px)";
        document.getElementById("formula").innerHTML = "A = &pi;r<sup>2</sup>";

    }
    if(shape == "triangle"){
        document.getElementById("h").style.visibility = "visible";
        document.getElementById("b").style.visibility = "visible";
        document.getElementById("r").style.visibility = "hidden";
        document.getElementById("b").style.transform = "translateY(0px)";
        document.getElementById("button").style.transform = "translateY(-80px)";
        document.getElementById("formula").innerHTML = "A = 1/2*Base*Height";

    }
    if(shape == "rectangle"){
        document.getElementById("h").style.visibility = "visible";
        document.getElementById("b").style.visibility = "visible";
        document.getElementById("r").style.visibility = "hidden";
        document.getElementById("b").style.transform = "translateY(0px)";
        document.getElementById("button").style.transform = "translateY(-80px)";
        document.getElementById("formula").innerHTML = "A = Base * Height";

    }
    if(shape == "square"){
        document.getElementById("h").style.visibility = "hidden";
        document.getElementById("b").style.visibility = "visible";
        document.getElementById("r").style.visibility = "hidden";
        document.getElementById("b").style.transform = "translateY(-70px)";
        document.getElementById("button").style.transform = "translateY(-150px)";
        document.getElementById("formula").innerHTML = "A = Base<sup>2</sup>";

    }
    
}
//calculate shape
function calcShape(){
    var shape = document.getElementById("shapeChoice").value;
    var area,rad,base,height;

    if(shape == "circle"){
        rad = parseFloat(document.getElementById("rad").value);
        area = Math.PI*Math.pow(rad,2);
        document.getElementById("formula").innerHTML = "A = &pi;"+rad+"<sup>2</sup>";
    }
    if(shape == "square"){
        base = parseFloat(document.getElementById("base").value);
        area = Math.pow(base,2);
        document.getElementById("formula").innerHTML = "A = "+base+"<sup>2</sup>";
    }
    if(shape == "rectangle"){
        height = parseFloat(document.getElementById("height").value);
        base = parseFloat(document.getElementById("base").value);
        area = base*height;
        document.getElementById("formula").innerHTML = "A =" + base + " * " + height;
    }
    if(shape == "triangle"){
        height = parseFloat(document.getElementById("height").value);
        base = parseFloat(document.getElementById("base").value);
        area = 1/2 * base * height;
        document.getElementById("formula").innerHTML = "A = 1/2*"+base+"*"+height;
    }
        document.getElementById("shpResult").innerHTML = "Area = "+ area.toFixed(2); 
}
//validate email(){
    /*
function emailValidation(){
  var emailValid = document.getElementById("email").pattern;
}*/
function formValidation(){
    var emailValid = document.getElementById("email").pattern;
    var email = document.getElementById("email").value;
    var fname = document.getElementById("fname").value;
    var title = document.getElementById("title").value;
    var msg = document.getElementById("msg").value;

    if(email == ""){
        alert("Email must be filled out");
        return false;
    }
    if(fname == ""){
        alert("Name must be filled out");
        return false;
    }
    if(title == ""){
        alert("Title must be filled out");
        return false;
    }
    if(msg == ""){
        alert("Message must be filled out");
        return false;
    }
}