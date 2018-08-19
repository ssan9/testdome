// The following XML represents a family tree:

// <James>
//     <Dave></Dave>
//     <Mike></Mike>
//     <Sarah></Sarah>
// </James>
// Implement the closestRelative function so that it returns the parent's closest relative whose name matches the relativeName and obeys the following rules:

// The parent parameter is a jQuery selector of which the closest relative will be a descendant.
// Each member of the family, including children, may also be a parent to one or more children.
// Children are more closely related to the parent than grandchildren.
// If several children in the same generation have the same name then the first child in the tree is considered the closer.
// If no matching relative is found the function should return an empty jQuery object.
// For example, closestRelative($('James'), 'Mike') should return the jQuery object wrapping <Mike></Mike>.



$result= $(parent).find(relativeName).first();
  if($result) return $result;
  else return $([]);

  /* HTML code for testing purposes (do not submit uncommented):
<James>
  <Dave></Dave>
  <Mike></Mike>
  <Sarah></Sarah>
</James>
*/