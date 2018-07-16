Implement the removeProperty function which takes an object and property name, and does the following:

If the object obj has a property prop, the function removes the property from the object and returns true; in all other cases it returns false.Explanation

function removeProperty(obj, prop) {
 if(prop in obj){
  delete obj[prop];
  return true;
 }
  return false;
}


Explanation


The hasOwnProperty() method returns a Boolean indicating whether the object has the specified property as own (not inherited) property.So to verify own and inherited properties as well use in.

Bracket notation will be the better option than obj.prop. Since Square bracket notation allows use of characters that can't be used with dot notation(like numbers) and it also allows selection of properties using variables. In current scenario bracket notation should be used.