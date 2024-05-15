// Sélectionne l'article et le container du sommaire (TOC)

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Get the article container and the TOC container
  const article = document.querySelector('.blog-article_text');
  const tocContainer = document.querySelector('.blog-article_toc');

  // Create the TOC
  const createTOC = () => {
    const headings = article.querySelectorAll('h2');
    const tocFragment = document.createDocumentFragment();

    headings.forEach((heading) => {
      const title = heading.textContent.trim();
      const anchorId = `toc-${title.toLowerCase().replace(/\s+/g, '-')}`;
      heading.id = anchorId;

      const li = document.createElement('li');
      const anchor = document.createElement('a');
      anchor.textContent = title;
      anchor.href = `#${anchorId}`;
      li.appendChild(anchor);
      tocFragment.appendChild(li);
    });

    const ul = document.createElement('ul');
    ul.appendChild(tocFragment);
    tocContainer.appendChild(ul);
  };

  // Check if the TOC container exists and the article has headings
  if (tocContainer && article) {
    createTOC();
  }

  const tocItems = document.querySelectorAll('[toc-wrap] a');
  const titleElements = document.querySelectorAll('[article] [id]');

  const setActiveItem = (targetId) => {
    tocItems.forEach((item) => {
      item.classList[item.getAttribute('href') === '#' + targetId ? 'add' : 'remove']('active-toc');
    });
  };

  tocItems.forEach((item) => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute('href').substring(1);
      setActiveItem(targetId);
      document.getElementById(targetId).scrollIntoView();
    });
  });

  titleElements.forEach((title) => {
    title.addEventListener('click', () => {
      setActiveItem(title.getAttribute('id'));
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id');
        if (entry.isIntersecting) {
          document
            .querySelectorAll('.active-toc')
            .forEach((activeElement) => activeElement.classList.remove('active-toc'));
          document.querySelector(`a[href="#${id}"]`).classList.add('active-toc');
        }
      });
    },
    { rootMargin: '0px 0px -50% 0px' }
  );

  document
    .querySelector('[article]')
    .querySelectorAll('h2')
    .forEach((heading) => observer.observe(heading));

  // handle anchor position
  const offsetAnchor = () => {
    if (location.hash.length !== 0) {
      const targetId = location.hash.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const offset = targetElement.getBoundingClientRect().top - 100;
        window.scrollTo(window.scrollX, window.scrollY + offset);
      }
    }
  };

  window.addEventListener('hashchange', offsetAnchor);
  window.setTimeout(offsetAnchor, 1);
});
