const icons: { [key: string]: { svg: string } } = {
  'arrow-right-24': { svg: require('./icons/arrow_right_24.svg') },
  'cables-64': { svg: require('./icons/cables_64.svg') },
  'checked-24': { svg: require('./icons/checked_24.svg') },
  'connected-64': { svg: require('./icons/connected_64.svg') },
  'droplets-64': { svg: require('./icons/droplets_64.svg') },
  'green-64': { svg: require('./icons/green_64.svg') },
  'happy-64': { svg: require('./icons/happy_64.svg') },
  'layers-64': { svg: require('./icons/layers_64.svg') },
  'mail-24': { svg: require('./icons/mail_24.svg') },
  'play-24': { svg: require('./icons/play_24.svg') },
  'plus-24': { svg: require('./icons/plus_24.svg') },
  'power-48': { svg: require('./icons/power_48.svg') },
  'power-64': { svg: require('./icons/power_64.svg') },
  'search-slim-24': { svg: require('./icons/search_slim_24.svg') },
  'secured-64': { svg: require('./icons/secured_64.svg') },
  'turnoff-64': { svg: require('./icons/turnoff_64.svg') },
  'user-slim-24': { svg: require('./icons/user_slim_24.svg') },
  'world-48': { svg: require('./icons/world_48.svg') },
  'world-64': { svg: require('./icons/world_64.svg') },
  'world-slim-24': { svg: require('./icons/world_slim_24.svg') },
};

function initIcons() {
  const span = document.querySelectorAll('span.icon') as NodeListOf<HTMLElement>;

  Array.from(span).forEach((el) => {
    const match = el.className.match(/icon-(\w|-){1,}/);
    const svgClasses = el.className;

    if (match && match.length > 0) {
      const icon = match[0].split('icon-')[1];
      const iconData = icons[icon];
      const svg = svgClasses ? iconData.svg.replace('<svg ', `,<svg class="${svgClasses}" `) : iconData.svg;

      if (iconData && el.parentNode !== null) {
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
