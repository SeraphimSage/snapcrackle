function snapCrackle(maxValue){
    var output = "";
    for (let count = 1; count <= maxValue; count ++){
        if (count % 2 === 1 && count % 5 === 0){
            output += "SnapCrackle, ";
        }
        else if (count % 5 === 0){
            output += "Crackle, ";
        }
        else if(count % 2 === 0 || count % 5 === 0){
            output += count + ", ";
        }
        else if (count % 2 === 1){
            output += "Snap, ";
        }
    }
    console.log(output)
}
snapCrackle(12);