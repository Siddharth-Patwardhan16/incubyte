function add(number){
    if(number === ''){
        return 0;
    }
const numArray = number.split(',');
let sum = 0;
for(const num of numArray){
    sum += parseInt(num);
}
return sum; 
}

module.exports = {add  };