document.getElementById("calc").addEventListener ('click', allexpenses);
function allexpenses(){
    var flight = parseInt(document.getElementById("input1").value);
    var carfuel = parseInt(document.getElementById("input2").value);
    var carrent = parseInt(document.getElementById("input3").value);
    var bus = parseInt(document.getElementById("input4").value);
    var train = parseInt(document.getElementById("input5").value);
    var taxi = parseInt(document.getElementById("input6").value);
    var hotel = parseInt(document.getElementById("input7").value);
    var attractions = parseInt(document.getElementById("input8").value);
    var shopping = parseInt(document.getElementById("input9").value);
    var otherexpenses = parseInt(document.getElementById("input10").value);
    var everything = (flight + carfuel + carrent + bus + train + taxi + hotel + attractions + shopping + otherexpenses);
    document.getElementById("result").innerHTML = everything;
}
function myFunction() {
    document.getElementById("myForm").reset();
}


