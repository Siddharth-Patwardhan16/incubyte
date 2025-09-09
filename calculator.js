function add(number){
    if(number === ''){
        return 0;
    }
const numArray = number.split(/,|\n/); 

return numArray.reduce((sum, num) => sum + parseInt(num), 0);
}

module.exports = {add  };