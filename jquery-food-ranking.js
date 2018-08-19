// A website needs a list where users can rank their favorite foods. Write the setup function, which should register click handlers on all Up! and Down! buttons. The Up! button should move the list item one place up in the list, while Down! button should move the list item one place down in the list.

// For example, consider this code:

// document.body.innerHTML = `<ol>
//   <li><button>Up!</button>Taco<button>Down!</button></li>
//   <li><button>Up!</button>Pizza<button>Down!</button></li>
//   <li><button>Up!</button>Eggs<button>Down!</button></li>
// </ol>`;

// setup();
// If the button Up! button in Pizza list item is clicked, Pizza should be the first item in the list, while Taco should be the second item.

function setup() {
  //Write your code here

  // $('ol li').click('button:contains(text="Up")', function(e) {
  //   $('ol').prepend(this)
  // })
  
  $('ol li').click('button:contains(text="Up")', function(e) {
    var current = $(this).closest('li');
    current.prev().before(current);
  });
  
  $('ol li').click('button:contains(text="Down")', function(e) {
    var current = $(this).closest('li');
    current.next().after(current);
  });
}

