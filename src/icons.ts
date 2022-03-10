const icons: { [key: string]: { svg: string } } = {
  '1-48': { svg: require('./icons/1-48.svg') },
  '2-48': { svg: require('./icons/2-48.svg') },
  '3-48': { svg: require('./icons/3-48.svg') },
  'arrow-right-14': { svg: require('./icons/arrow-right.svg') },
  'arrow-right-24': { svg: require('./icons/arrow_right_24.svg') },
  'bitum-64': { svg: require('./icons/bitum.svg') },
  'brochure-64': { svg: require('./icons/brochure-64.svg') },
  'cables-64': { svg: require('./icons/cables_64.svg') },
  'certificates-64': { svg: require('./icons/certificates-64.svg') },
  'concrete-64': { svg: require('./icons/concrete.svg') },
  'checked-24': { svg: require('./icons/checked_24.svg') },
  'cheklists-64': { svg: require('./icons/cheklists-64.svg') },
  'connected-64': { svg: require('./icons/connected_64.svg') },
  'droplets-64': { svg: require('./icons/droplets_64.svg') },
  'digiBA-64': { svg: require('./icons/digiBA-64.svg') },
  'digiDO-64': { svg: require('./icons/digiDO.svg') },
  'foil-64': { svg: require('./icons/foil.svg') },
  'flatroof-64': { svg: require('./icons/flatroof.svg') },
  'floating-64': { svg: require('./icons/floating.svg') },
  'fibercement-64': { svg: require('./icons/fibercement-64.svg') },
  'green-64': { svg: require('./icons/green_64.svg') },
  'greenroof-64': { svg: require('./icons/greenroof-64.svg') },
  'happy-64': { svg: require('./icons/happy_64.svg') },
  'katalog-64': { svg: require('./icons/katalog-64.svg') },
  'katalog-slim-24': { svg: require('./icons/katalog-slim-24.svg') },
  'layers-64': { svg: require('./icons/layers_64.svg') },
  'location-64': { svg: require('./icons/location-64.svg') },
  'mail-24': { svg: require('./icons/mail_24.svg') },
  'metalroof-64': { svg: require('./icons/metalroof-64.svg') },
  'outdoor-64': { svg: require('./icons/outdoor.svg') },
  'pitchroof-64': { svg: require('./icons/pitchroof.svg') },
  'pin-64': { svg: require('./icons/pin-64.svg') },
  'play-24': { svg: require('./icons/play_24.svg') },
  'plus-24': { svg: require('./icons/plus_24.svg') },
  'power-48': { svg: require('./icons/power_48.svg') },
  'power-64': { svg: require('./icons/power_64.svg') },
  'search-slim-24': { svg: require('./icons/search_slim_24.svg') },
  'secured-64': { svg: require('./icons/secured_64.svg') },
  'slidetiltroof-64': { svg: require('./icons/slidetiltroof-64.svg') },
  'special-64': { svg: require('./icons/special.svg') },
  'tileroof-64': { svg: require('./icons/tileroof-64.svg') },
  'train1-64': { svg: require('./icons/train1-64.svg') },
  'train2-64': { svg: require('./icons/train2-64.svg') },
  'train3-64': { svg: require('./icons/train3-64.svg') },
  'trapezodialroof-64': { svg: require('./icons/trapezodialroof-64.svg') },
  'turnoff-64': { svg: require('./icons/turnoff_64.svg') },
  'user-slim-24': { svg: require('./icons/user_slim_24.svg') },
  'wavyroof-64': { svg: require('./icons/wavyroof-64.svg') },
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
