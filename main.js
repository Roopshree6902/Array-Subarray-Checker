var btn = document.getElementById("check");

//if subarray is found then do this
function doChange(i, subArr) {
    var newElement = document.createElement("p");
    newElement.innerHTML = "[" + subArr + "]" + " is found at " + i + "th index.";
    newElement.style.padding = '10px 10px';
    newElement.style.border = 'solid 1px rgb(167, 238, 214)';
    newElement.style.borderRadius = '4px';
    newElement.style.boxShadow=' 0 0 10px rgb(167, 238, 214)';
    document.getElementById("res").appendChild(newElement);
}

//if subarray not found do this
function sendMessage(subArr) {
    var newElement = document.createElement("p");
    newElement.innerHTML = "[" + subArr + "]" + " is not a sub-array of given array.";
    newElement.style.padding = '10px 10px';
    newElement.style.border = 'solid 1px rgb(167, 238, 214)';
    newElement.style.borderRadius = '4px';
    newElement.style.boxShadow=' 0 0 10px rgb(167, 238, 214)';
    document.getElementById("res").appendChild(newElement);
    document.getElementById("res").style.height = '3rem';
}

//checking for validation & Subarray
btn.addEventListener("click", function (e) {
    e.preventDefault();
    if (document.getElementById("inputArr").value === "") {
        window.alert("input array can't be empty.");
        return;
    }
    else if (document.getElementById("subArr").value === "") {
        window.alert("sub-array can't be empty.");
        return;
    }
    else if ((document.getElementById("inputArr").value.length) < (document.getElementById("subArr").value.length)) {
        window.alert("sub-array size can't exceed input array size.");
        return;
    }
    
    var inputArray = document.getElementById("inputArr").value.split(" "); 
    var subArray = document.getElementById("subArr").value.split(" ");
  
    let index = Number.MAX_VALUE;
    for (var i = 0; i < inputArray.length;){
        if (inputArray[i] === subArray[0]) {
            var j;
            for (j = 0; j < subArray.length; j++){
                if (inputArray[i] != subArray[j]) {
                    break;
                }
                i++;
            }
            if (j === subArray.length) {
                index = i - j;
                doChange(Number(index),subArray);
                break;
            }
        }
        else {
            i++;
        }   
    }
    if (index === Number.MAX_VALUE) {
        sendMessage(subArray);
    }

});