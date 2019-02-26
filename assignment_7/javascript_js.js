window.onload = function() {
    // const enterButton = document.querySelector("button");
    const name = document.querySelector(".name");
    const age = document.querySelector(".age");
    const basicInfo = document.querySelector(".basicInfo");
    const enterButton = document.querySelector("input[type=button]");
    // debugger;
    enterButton.addEventListener("click", function () {
        var newDiv = document.createElement("div"); 
        //newDiv.appendChild(ageContent);  
        newDiv.innerHTML = `<strong>Name:</strong><br>${name.value}<br><strong>Age:</strong><br>${age.value}<br><strong>Basic-Info:</strong><br>${basicInfo.value}<br>`;
        var formDiv = document.getElementById("form"); 
        document.querySelector("main").insertBefore(newDiv, formDiv); 
        name.value = "";
        age.value = "";
        basicInfo.value= "";
        //alert("foo");
    });
}