function MyClass() {

}

MyClass.prototype = {
  method : method
};

var myClass = new MyClass();

module.exports = myClass;

///////////// Methods
function method() {
  return 'Hello';
}
