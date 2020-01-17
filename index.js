exports.printMsg = () => {
  console.log("this is a message from a demo package");

  const mapKeys = (myArray, action) => {
    try {
      return myArray.map(action);
    } catch (exception) {
      console.log("Error Caught in safeMap: ", exception.message);
    }
  };

  Array.prototype.safeMap = function(action) {
    return mapKeys(this, action);
  };
};
