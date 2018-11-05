var operations = require("./operations");

it("should multiply two numbers", function(){
     
    var expectedResult = 15;
    var result = operations.multiply(3, 5);
    if(result!==expectedResult){
        throw new Error(`Expected ${expectedResult}, but got ${result}`);
    }
});

it('should find factorial', function(){
    let expectedResult = 120;
    let result = operations.factorial(5);
    if(result !== expectedResult) {
        throw new Error(`Expected ${expectedResult}, but got ${result}`);
    }
});