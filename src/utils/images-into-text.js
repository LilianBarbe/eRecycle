const codeElements = document.querySelectorAll('code');
const spanElements = document.querySelectorAll('.u-span-el');

export const putImagesIntoText = () => {
  codeElements.forEach((codeEl, index) => {
    codeEl.classList.add('quote_title_span', 'u-span-wrap');
    const relatedEl = spanElements[index];
    if (relatedEl) {
      codeEl.appendChild(relatedEl);
    }
  });
};
