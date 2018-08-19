// An HTML div element contains lists of endangered species grouped by continent and the species population status.

// <div>
//     <ul data-continent="North America">
//         <li data-species="California condor">Critically Endangered</li>
//         <li data-species="American bison">Near Threatened</li>
//     </ul>
//     <ul data-continent="Europe">
//         <li data-species="Cave bear">Extinct</li>
//     </ul>
// </div>
// Write a function that returns how endangered a species is on a particular continent. For example endangeredSpecies('North America', 'American bison') would return 'Near Threatened'.

function endangeredSpecies(continent, species) {
  // Implement the function here.
    return $( `ul[data-continent='${continent}'] li[data-species='${species}']` ).html();
}
//why single quotes aroung template string?

/* HTML code for testing purposes (do not submit uncommented):
<div>
  <ul data-continent="North America">
    <li data-species="California condor">Critically Endangered</li>
    <li data-species="American bison">Near Threatened</li>
  </ul>
  <ul data-continent="Europe">
    <li data-species="Cave bear">Extinct</li>
  </ul>
</div>
*/
