console.log('Hey Puppies');

function ondrag(event) {
  console.log('oh we dragging');
  console.log(event.dataTransfer.effectAllowed());
}
