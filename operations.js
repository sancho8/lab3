module.exports = {

    multiply: function(x, y) {
        return x * y;
    },
  
    factorial: function(n){
        return n ? n * this.factorial(n - 1) : 1;
    }
  }