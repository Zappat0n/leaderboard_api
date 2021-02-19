const viewHelper = (storage) => {
  const addElement = (container, type, _textContent, classes) => {
    const element = document.createElement(type);
    if (_textContent != null) {
      element.textContent = _textContent;
    }

    if (classes != null) {
      classes.forEach(value => element.classList.add(value));
    }
    container.appendChild(element);
    return element;
  };

  const createForm = (container, id, className, fields, callback, values) => {
    const addButton = () => {
      const button = document.createElement('input');
      button.setAttribute('type', 'submit');
      button.classList.add('button');
      return button;
    };

    const addField = (field, text, type, required, value) => {
      const div = document.createElement('div');
      div.classList.add('form_field');
      const label = document.createElement('label');
      label.setAttribute('for', field);
      label.textContent = text;
      const input = document.createElement('input');
      input.setAttribute('type', type);
      input.setAttribute('name', field);
      input.setAttribute('id', field);
      if (required) {
        input.setAttribute('required', true);
      }
      if (value != null) {
        input.setAttribute('value', value);
      }
      div.appendChild(label);
      div.appendChild(input);
      return div;
    };

    const form = document.createElement('form');
    container.appendChild(form);
    form.setAttribute('id', id);
    form.classList.add(className);
    let i = 0;
    fields.forEach(element => {
      const value = values != null ? values[i] : null;
      const field = addField(element.field, element.text, element.type, element.required, value);
      form.appendChild(field);
      i += 1;
    });
    form.appendChild(addButton());
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      callback(e.target.elements, storage);
      form.classList.add('d-none');
    });
    return form;
  };

  const displayError = (message) => {
    const container = document.querySelector('.warnings');
    container.innerHTML = '';
    addElement(container, 'p', message, ['warning']);
    setTimeout(() => {
      container.innerHTML = '';
    }, 2000);
  };

  return {
    addElement,
    createForm,
    displayError,
  };
};

export { viewHelper as default };
