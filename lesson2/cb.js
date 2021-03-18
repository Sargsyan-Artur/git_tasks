// the result of the following code will be (1 4 3 2)

function printing() {
    console.log(1);
    setTimeout(function() {console.log(2)}, 1000);
    setTimeout(function() {console.log(3)}, 0);
    console.log(4);
}

// vice versa of the result with callbacks

function first (){
    setTimeout(function() {
        console.log(2)
        second ()
    }, 1000);
}


function second (){
    setTimeout(function() { 
        console.log(3)
        third()
    }, 0);
}

function third(){
    console.log(4);
    fourth()
}


function fourth(){
    console.log(1);
}


first()
