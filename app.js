//BUDGET CONTROLLER
var budgetController = (function(){
    //some code here

})();


//UI CONTROLLER
var UIController = (function() {
    //some code here

})();


//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var ctrlAddItem = function(){

        //1. Get the field input data

        //2. Add the item to the controller

        //3. Add new item to the user interface

        //4. Calculate the budget

        //5. Display the budget on the user interface

    }
    
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {

        if (event.keyCode === 13 || event.which === 13){
            ctrlAddItem();

        }

    });



})(budgetController, UIController);






