window.onload = function() {
    var foodCost = 0;
    var choreHours = 0;
    var workHours = 0;
    //var category1 = document.querySelector(".default");
    const category1String = "";
    //var category2 = document.querySelector(".groceries");
    const category2String = "<p>Name of Food:</P><br><input type='text' id = 'a'><br><p>Estimated Cost:</p><br><input type='text' id = 'b'><br>";
    //var category3 = document.querySelector(".chores");
    const category3String = "<p>Chore:</P><br><input type='text' id = 'a'><br><p>Estimated Time:</p><br><input type='text' id = 'b'><br>";
    //var category4 = document.querySelector(".work-tasks");
    const category4String = "<p>Job:</P><br><input type='text' id = 'a'><br><p>Estimated Time:</p><br><input type='text' id = 'b'><br>";
    const newNode = document.createElement("form");
    newNode.innerHTML = category1String;
    document.getElementById("todo").appendChild(newNode);
    document.getElementById("selector").onchange = function(){changeEvent()};
    var option;
    
    function changeEvent(e){
        option = document.getElementById("selector");
        if (option.value === '1')
        {
            set1();
        }
        if (option.value === '2')
        {
            set2();
        }if (option.value === '3')
        {
            set3();
        }if (option.value === '4')
        {
            set4();
        }
    }
    function set1(){
        newNode.innerHTML = "";
        newNode.innerHTML = category1String;
        document.getElementById("todo").removeChild(newNode);
        document.getElementById("todo").appendChild(newNode);
    };
    function set2(){
        newNode.innerHTML = "";
        newNode.innerHTML = category2String;
        document.getElementById("todo").removeChild(newNode);
        document.getElementById("todo").appendChild(newNode);
    };
    function set3(){
        newNode.innerHTML = "";
        newNode.innerHTML = category3String;
        document.getElementById("todo").removeChild(newNode);
        document.getElementById("todo").appendChild(newNode);
    };
    function set4(){
        newNode.innerHTML = "";
        newNode.innerHTML = category4String;
        document.getElementById("todo").removeChild(newNode);
        document.getElementById("todo").appendChild(newNode);
    };

    document.querySelector("button").addEventListener("click",function(){
        if (option.value === '2')
        {   
            var food = document.getElementById("a").value;
            const foodNode = document.createElement("p")
            var cost = document.getElementById("b").value;
            foodNode.innerHTML = `<label><input type= "checkbox" class="check"> ${food} -  $${cost}</label>`;    
            foodCost = foodCost + parseFloat(cost, 0);
            document.getElementById("groceriesHead").innerHTML = `Groceries : $${foodCost}`;
            document.getElementById("groceriesDiv").appendChild(foodNode);  
            foodNode.addEventListener("click", removeContent);
        }
        if (option.value === '3')
        {
            var chore = document.getElementById("a").value;
            const choreNode = document.createElement("p")
            var time2 = document.getElementById("b").value;
            choreHours =  choreHours + parseFloat(time2, 0);
            choreNode.innerHTML = `<input type= "checkbox" class="check"> ${chore}: ETA-${time2} hours`;
            document.getElementById("choreHead").innerHTML = `Chores: ETA ${choreHours} hours`;
            document.getElementById("choreDiv").appendChild(choreNode);    
            choreNode.addEventListener("click", removeContent);
        }
        if (option.value === '4')
        {
            var job = document.getElementById("a").value;
            const jobNode =  document.createElement("p");
            var time1 = document.getElementById("b").value;
            workHours = workHours + parseFloat(time1,0);
            jobNode.innerHTML = `<input type= "checkbox" class="check">${job}: ETA-${time1} hours`;
            document.getElementById("workHead").innerHTML = `Work-Tasks: ETA ${workHours} hours`;
            document.getElementById("workDiv").appendChild(jobNode);  
            jobNode.addEventListener("click", removeContent);  
        }
    });

    function removeContent(e){
        if (option.value === '2')
        {   
            //this.innerText;
            var pos = this.innerText.indexOf("$")+1;
            var num = parseFloat(this.innerText.substring(pos));
            foodCost =  foodCost - num;
            document.getElementById("groceriesHead").innerHTML = `Groceries : $${foodCost}`;

            
            console.log(num);
            // alert(numbers);
            document.getElementById("groceriesDiv").removeChild(this);

        }if (option.value === '3')
        {
            var pos = this.innerText.indexOf("ETA")+4;
            var num = parseFloat(this.innerText.substring(pos));
            choreHours =  choreHours - num;
            document.getElementById("choreHead").innerHTML = `Chores: ETA ${choreHours}`;
            document.getElementById("choreDiv").removeChild(this);
        }if (option.value === '4')
        {
            var pos = this.innerText.indexOf("ETA")+4;
            var num = parseFloat(this.innerText.substring(pos));
            workHours =  workHours - num;
            document.getElementById("workHead").innerHTML = `Work-Tasks: ETA ${workHours} hours`;
            document.getElementById("workDiv").removeChild(this);
        }
    }
}