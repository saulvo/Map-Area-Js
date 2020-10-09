const mapArea = AreaElementList => {
   if (AreaElementList.length === 0) return;

   AreaElementList
      .forEach(ID => mapHightlight(document.querySelector(ID)));
}

const mapHightlight = areaElement => {
   if (!areaElement) return;

   const currentImg = document.querySelector('#mapImg');
   const tempSrc = currentImg.src;

   const imgChange = src => {
      if (currentImg) currentImg.src = src;
   }

   areaElement.addEventListener('mouseover', e => {
      const srcArea = e.target.getAttribute('data-src');
      if (srcArea) imgChange(srcArea);
   });

   areaElement.addEventListener('mouseleave', () => {
      imgChange(tempSrc);
   });
}