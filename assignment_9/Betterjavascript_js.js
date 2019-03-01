window.onload = function() {
    var foodCost = 0;
    var choreHours = 0;
    var workHours = 0;
    //var category1 = document.querySelector(".default");
    const category1String = "";
    //var category2 = document.querySelector(".groceries");
    const category2String = "<p>Name of Food:</P><br><input type='text' id = '11'><br><p>Estimated Cost:</p><br><input type='text' id = '22'><br>";
    //var category3 = document.querySelector(".chores");
    const category3String = "<p>Chore:</P><br><input type='text' id = '12'><br><p>Estimated Time:</p><br><input type='text' id = '23'><br>";
    //var category4 = document.querySelector(".work-tasks");
    const category4String = "<p>Job:</P><br><input type='text' id = '11'><br><p>Estimated Time:</p><br><input type='text' id = '22'><br>";
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
            var food = document.getElementById("11").value;
            const foodNode = document.createElement("p")
            var cost = document.getElementById("22").value;
            foodNode.innerHTML = `<input type= "checkbox" class="check"> ${food} -  $${cost}`;
            foodCost = foodCost + parseFloat(cost, 0);
            document.getElementById("groceriesHead").innerHTML = `Groceries : $${foodCost}`
            document.getElementById("groceriesDiv").appendChild(foodNode);    
        }
        if (option.value === '3')
        {
            var chore = document.getElementById("12");
            const choreNode = document.createElement("p")
            var time2 = document.getElementById("23");
            choreHours =  choreHours + parseFloat(time2, 0);
            choreNode.innerHTML = `<input type= "checkbox" class="check"> ${chore}: ETA-${time2} hours`;
            document.getElementById("choreHead").innerHTML = `Chores: ETA -${choreHours} hours`;
            document.getElementById("choreDiv").appendChild(choreNode);    
        }
        if (option.value === '4')
        {
            var job = document.getElementById("11");
            var time1 = document.getElementById("22");
        }
        document.querySelector(".check").addEventListener("click", function(){
            alert("hello");
        });
    });
    


}