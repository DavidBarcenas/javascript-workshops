import { $, createElement } from './helpers.js';

function renderSkeleton(section, totalItems, wrapper) {
  let range = {
    from: 1,
    to: totalItems,

    [Symbol.iterator]() {
      this.current = this.from;
      return this;
    },

    next() {
      if (this.current <= this.to) {
        return {
          done: false,
          value: this.current++,
        };
      }
      return { done: true };
    },
  };

  Array.from(range).forEach(() => {
    const skeleton = createElement('div');
    skeleton.classList.add('skeleton');
    if (wrapper) {
      wrapper.appendChild(skeleton);
      $(section).appendChild(wrapper);
    } else {
      $(section).appendChild(skeleton);
    }
  });
}

export default renderSkeleton;
