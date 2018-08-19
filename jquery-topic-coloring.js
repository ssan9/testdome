// Write the function newMessage, which receives the name of the topic as the parameter. Function should change the background-color of the p tag to red where the data-topic-name is topicName.

// For example, if the HTML is:

// <div>
//   <p data-topic-name="discussion">General discussion</p>
//   <p data-topic-name="bugs">Bugs</p>
//   <p data-topic-name="animals">Animals</p>
// </div>
// After calling newMessage("discussion") the HTML should be:

// <div>
//   <p data-topic-name="discussion" style="background-color: red;">General discussion</p>
//   <p data-topic-name="bugs">Bugs</p>
//   <p data-topic-name="animals">Animals</p>
// </div>

function newMessage(topicName) {
  //Write your code here
  $(`p[data-topic-name=${topicName}]`).prop('style', 'background-color: red');
}
//why no single quotes aroung temlate string?

document.body.innerHTML = `<div>
  <p data-topic-name="discussion">General discussion</p>
  <p data-topic-name="bugs">Bugs</p>
  <p data-topic-name="animals">Animals</p>
</div>`;
newMessage("discussion");
console.log(document.body.innerHTML);