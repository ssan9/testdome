An image gallery is a set of images with corresponding remove buttons. This is the HTML code for a gallery with two images:

<div class="image">
  <img src="https://goo.gl/kjzfbE" alt="First">
  <button class="remove">X</button>
</div>
<div class="image">
  <img src="https://goo.gl/d2JncW" alt="Second">
  <button class="remove">X</button>
</div>
Implement the setup function that registers a click event handler and implements the following logic: When the button of class remove is clicked, its parent <div> element should be removed from the gallery.

For example, after the first image has been removed from the gallery above, it's HTML code should look like this:

<div class="image">
  <img src="https://goo.gl/d2JncW" alt="Second">
  <button class="remove">X</button>
</div>


function setup() {
  x = document.getElementsByClassName("remove") 
  for(var i = 0; i<x.length; i++){ 
           x[i].addEventListener("click",function(current){
               current.srcElement.parentElement.remove();
           });
          }
}

// or using jQuery

$('remove').click(function(e) {
    $(this).parent().remove();
  });

// Example case. 
document.body.innerHTML = `
<div class="image">
  <img src="https://goo.gl/kjzfbE" alt="First">
  <button class="remove">X</button>
</div>
<div class="image">
  <img src="https://goo.gl/d2JncW" alt="Second">
  <button class="remove">X</button>
</div>`;

setup();

document.getElementsByClassName("remove")[0].click();
console.log(document.body.innerHTML);