for(let i=1; i<=50; i++){
    if(i % 3===0 && i % 5===0 ){
        console.log('foodbar');
    }
    else if(i % 3 === 0){
        console.log('food');
    }
    else if(i % 5 ===0){
        console.log('bar');
    } 
    else{
        console.log(i);
    }
    
}