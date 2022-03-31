import icons from './iconList';

function initIcons({ label }: IParams = { label: 'icon' }) {
  const span = document.querySelectorAll(`span.${label}`) as NodeListOf<HTMLElement>;

  Array.from(span).forEach((el) => {
    const match = el.className.match(/icon-(\w|-){1,}/);
    const svgClasses = el.className;

    if (match && match.length > 0) {
      const icon = match[0].split('icon-')[1];
      const iconData = icons[icon];

      if (iconData && el.parentNode !== null) {
        const svg = svgClasses ? iconData.svg.replace('<svg ', `,<svg class="${svgClasses}" `) : iconData.svg;
        const placeholder = document.createElement('div');
        placeholder.innerHTML = svg;
        const node = placeholder.firstElementChild;

        if (node !== null) {
          el.parentNode.replaceChild(node, el);
        }
      }
    }
  });
}

initIcons();

export { icons, initIcons };
