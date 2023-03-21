export function onChangeButton(event) {
    const button = event.target;
    if (event.target.classList.contains('delite-button')) {
      const button = event.target;
      button.textContent = 'Add to favorite';
      button.classList.remove('delite-button');
      button.classList.add('add-button');
    } else if (event.target.classList.contains('add-button')) {
      const button = event.target;
      button.textContent = 'Remove from favorite';
      button.classList.remove('add-button');
      button.classList.add('delite-button');
    }
  }