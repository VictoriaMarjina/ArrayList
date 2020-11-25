function ArrayList() {
    this.array = [];
    this.size = 0;
}
ArrayList.prototype.init = function(array) {
    this.array = array;
    this.size = array.length;
} 

ArrayList.prototype.getPush = function (arg) {
    this.array[this.array.length] = arg;
    this.size = this.size + 1;

    return this.size;
}

ArrayList.prototype.getPop = function () {
    let deletedElement = this.array[this.array.length - 1];
    this.array.length = this.array.length - 1;
    this.size = this.size - 1;

    return deletedElement;
}

ArrayList.prototype.getShift = function () {
    let deletedElement = this.array[0];

    for(let i = 1; i < this.array.length; i++) {
        this.array[i-1] = this.array[i];
    }

    this.array.length = this.array.length - 1;
    this.size = this.size - 1;

    return deletedElement;
}

ArrayList.prototype.getUnShift = function (arg) {
    let length = this.array.length ;

    for(let i = length; i >= 0; i--) {
        this.array[i] = this.array[i - 1];
    }
    this.array[0] = arg;
    this.size = this.size + 1;

    return this.size;
}

ArrayList.prototype.getClear = function() {
    this.array.length = 0;
    this.size = 0;
}

ArrayList.prototype.toString = function() {
    let listString = '[';

    for(let i = 0; i < this.array.length; i++) {
        if(i === this.size - 1) {
        listString += this.array[i]; 
        } else {
            listString += `${this.array[i]}, `; 
        }
    }
    listString += ']'

    return listString;
}

ArrayList.prototype.getRevers = function() {
    const boxArray = [];
    let x = 0;

    for(let i = this.array.length - 1; i >= 0; i--) {
        boxArray[x++] = this.array[i];
    }
    this.array = boxArray;

    return this.array;
}

ArrayList.prototype.getSlice = function(index1, index2) {
    
    this.newArr = [];

    if(index2 === undefined){
        for(let i = 0; i < this.array.length; i++) { 
            this.newArr[i] = this.array[i+index1];
        }
    
        this.newArr.length = this.array.length - index1;

    return this.newArr;
    }

    this.newArr.length = index2;
    for(let i = 0; i < this.array.length; i++) { 
        this.newArr[i] = this.array[i+index1];
    }
    this.newArr.length = index2 - index1;

    return this.newArr;
    
}
 
const arrayList = new ArrayList;
arrayList.init([8, 7, 77, 896, 890, 899]);

//console.log(arrayList.getSlice(2, 4));

module.exports = ArrayList;