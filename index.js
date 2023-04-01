function bmi() {
    //Get feet and inches Value
    const feet = document.querySelector(".feet").value;
    const inch = document.querySelector(".inch").value;
    // Merge feet and inches Value in one
    const metre = feet + "." + inch;
    //feet to metre conversion and get The height in metre
    const height = metre / 3.2808;
    // Get Weight Value
    const weight = document.querySelector(".weight").value;
    //BMI Calculation
    const bmi = weight / Math.pow(height, 2);

    if(feet == 0 || inch == 0 || weight == 0){
      alert("Please Enter all Credentials...");                       
    }else if (bmi < 18.5) {                                           //BMI Showing in P Tag With condition
        document.querySelector("p").innerHTML ="Your Body Mass Index (BMI) is-: " + (Math.round(bmi * 100) / 100).toFixed(2) + "<br>" +" Index Value is in Under Weight";
    } else if (bmi > 18.5 && bmi <= 24.9) {
        document.querySelector("p").innerHTML ="Your Body Mass Index (BMI) is-: " +(Math.round(bmi * 100) / 100).toFixed(2) +"<br>" +" Index Value is in Normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
        document.querySelector("p").innerHTML ="Your Body Mass Index (BMI) is-: " +(Math.round(bmi * 100) / 100).toFixed(2) +"<br>" +" Index Value is in Over Weight";
    } else if (bmi > 30) {
        document.querySelector("p").innerHTML ="Your Body Mass Index (BMI) is-: " +(Math.round(bmi * 100) / 100).toFixed(2) +"<br>" +" Index Value is in Obesity";
  }
  }
//Click Event on Calculate Button
document.querySelector(".btn").addEventListener("click", bmi);
