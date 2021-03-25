let friends = ['Colton', 'Dylan', 'Will', 'Aaron', 'Bryant'];

var count = 99;

for (var i=0;i<99;i++){
    console.log(friends[i%friends.length] + ':');

    if (count > 0){
    

        console.log(count + " line of code in the file, "
            + count + " line of code; " + friends[i%friends.length] + 
            " strikes one out, clears it all out " + --count 
            + " line of code in the file.");

        console.log("******");
    }
    

}
