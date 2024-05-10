const names = ['karim', 'selim', 'rahim', 'jabbar', 'karim', 'karim', 'rahim', 'selim'];
function removeDuplicate(names){
    const unique = [];
    for (let i=0; i< names.length; i++){
        const name = names[i];
        // console.log(name);
        if(unique.includes(name)=== false){
            unique.push(name);
        }
    }
    return unique;
}
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);