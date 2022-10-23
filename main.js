var members = [
    "grandpa.jpeg", 
    "Grandma.jpg.jpeg", 
    "uncle.jpeg", 
    "aunty.jpeg", 
    "cousin.jpeg",
    "mother.jpeg",
    "dad.jpeg",
    "myself.jpeg",
    ];

    var names = [
 
    "1.Varsha Vannarth(Aunty)", 
    "2.Ithal PV(cousin baby-sister)", 
    "3.T.Jaideep Kumar (father)", 
    "4.Vanaja PV(Grandma)", 
    "5.Gopalan PV(Grandpa)",
    "6.Aswathy PV(mother)",
    "7.Nithin PV(uncle)",
    "8.Devika PV(myself)"

    ];

    var count = 0;

    function nextslide () {

    document.getElementById("members").src = members[count];

    document.getElementById("names").innerHTML = names[count];
    
    count++;

    if (count == 6) {
    
    count = 0;

    }

    }

    button-onclick()
    {
    
    }