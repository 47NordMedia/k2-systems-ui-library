const icons: { [key: string]: { svg: any } } = {
  'secured-64': { svg: require('./icons/secured_64.svg') },
};

function initIcons() {
  const span = document.querySelectorAll('span.icon') as NodeListOf<HTMLElement>;

  Array.from(span).forEach((el) => {
    const match = el.className.match(/icon-(\w|-){1,}/);

    if (match && match.length > 0) {
      const icon = match[0].split('icon-')[1];
      const iconData = icons[icon];

      if (iconData) {
        el.innerHTML = '';
        el.innerHTML = iconData.svg;
      }
    }
  });
}

initIcons();

export { icons, initIcons };
