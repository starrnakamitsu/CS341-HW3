function readNotesFunction(){
    // gets the words within the note box
    let notes = document.getElementById("message").value;

    // sets the text in the box to lowercase and searches for the word vegan
    if(notes.toLowerCase().includes("vegan")){
        alert("Note: cheesecake contains dairy!");
    }
    
    // removes form section of page and replace w/ thank you text and order details
    else{
        let quantity = document.getElementById('quantity').value; // get the drop down value before deleting
        let topping = document.querySelector('input[type=radio][name=toppings]:checked'); // get the radio button value before deleting
        let note = document.getElementById('message').value; // get the notes before deleting

        $("tr").remove(); // removes text from table
        $("p").remove(); // removes "Notes:" text
        $("textarea").remove(); // removes text box
        document.getElementById('orderButton').remove(); // removes order button

        // gets the table and creates the new text for the table header
        let table = document.getElementById("table");

        // rows to make it look nice
        let row1 = document.createElement("tr");
        let row2 = document.createElement("tr");
        let row3 = document.createElement("tr");

        let newText = document.createElement("th");
        newText.innerHTML = "Thank you for ordering!\n";
        table.appendChild(newText);

        // adds information from drop down list
        let userQuantity = document.createElement("deets");
        userQuantity.innerHTML = "Number of cakes: " + quantity + "\n";
        row1.appendChild(userQuantity);

        // adds information from radio buttons
        let userTopping = document.createElement("deets");
        if (topping == null){
            userTopping.innerHTML = "Topping: None"
        }
        else{
            userTopping.innerHTML = "Topping: " + topping.value;
        }
        row2.appendChild(userTopping);

        // adds information from notes
        let userNotes = document.createElement("deets");
        userNotes.innerHTML = "Notes: " + note + "\n";
        row3.appendChild(userNotes);

        table.appendChild(row1);
        table.appendChild(row2);
        table.appendChild(row3);

    }
}
