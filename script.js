function clearnames(e) {
    e.preventDefault();
    document.getElementById("boyname").value = "";
    document.getElementById("girlname").value = "";
    document.getElementById("showresult").innerHTML = "";
}

function findResult(boy, girl, count) {
    let result = document.getElementById("showresult");
    let index  = 0;
    let flames = ['F','L','A','M','E','S']
    while(flames.length > 1) {
        index = (index + count - 1) % flames.length;
        flames.splice(index,1)
    }
    let finalchar = flames[0];
    switch(finalchar){
        case 'F':
            result.style.backgroundColor = "Pink";
            result.innerHTML = "the relationship between" + boy + " and " + girl + " will end up in 'Friends'!";
            break;

        case 'L':
            result.style.backgroundColor = "Pink";
            result.innerHTML = "the relationship between" + boy + " and " + girl + " will end up in 'Love'!"
            break;

        case 'A':
            result.style.backgroundColor = "Pink";
            result.innerHTML = "the relationship between" + boy + " and " + girl + " will end up in 'Affection'!"
            break;

        case 'M':
            result.style.backgroundColor = "Pink";
            result.innerHTML = "the relationship between" + boy + " and " + girl + " will end up in 'Marriage'!"
            break;

        case 'E':
            result.style.backgroundColor = "Pink";
            result.innerHTML = "the relationship between" + boy + " and " + girl + " will end up in 'Enemy'!"
            break;

        case 'S':
            result.style.backgroundColor = "Pink";
            result.innerHTML = "the relationship between" + boy + " and " + girl + " will end up in 'Siblings'!"
            break;
    }

}

function flames(e) {
    e.preventDefault();
    let boyname = document.getElementById("boyname").value;
    let girlname = document.getElementById("girlname").value;
    let laugh = '&#x1F602;'

    if(boyname === "" || girlname === "") {
        alert("Fill the name first (Avlo veri Maplaiku\u{1F602})")
        return;
    }
    if(boyname.length <=1 || girlname <= 1) {
        alert("The name should not contain only one character")
        return;
    }


    let boyarray = boyname.split('');
    let girlarray = girlname.split('');
    let arr;
    let count = 0;

    for(i = 0; i < boyarray.length; i++) {
        for( j = 0; j < girlarray.length; j++) {
            if(boyarray[i] == girlarray[j]) {
                boyarray.splice(i,1);
                girlarray.splice(j,1)
                count++;
                i--;
                j--;
            }
        }
    }
    console.log(boyarray);
    console.log(girlarray);

    findResult(boyname, girlname,count)
}
