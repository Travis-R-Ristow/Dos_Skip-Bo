console.log('Hey Puppies');

const cardActions = {
  test: () => 'test from cA :D'
};

function onDrag(event) {
  console.log('oh we dragging', event);

  event.dataTransfer.dropEffect = 'move';
  event.dataTransfer.effectAllowed = 'move';

  event.dataTransfer.setData('thing', 'test');
}

function onDragHover(event) {
  event.preventDefault();

  event.dataTransfer.dropEffect = 'move';
  event.dataTransfer.effectAllowed = 'move';
}

function onDrop(event) {
  console.log('onDrop', event);

  event.dataTransfer.dropEffect = 'move';
  event.dataTransfer.effectAllowed = 'move';

  const testFunc = event.dataTransfer.getData('thing');
  console.log(cardActions[testFunc]());
}
