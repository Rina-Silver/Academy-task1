export function openSection() {
  const featureBtnRef = document.querySelector('.features__button');
  const featureBlockRef = document.querySelector('.features');

  featureBtnRef.addEventListener('click', () => {
    const expanded =
      featureBlockRef.getAttribute('aria-expanded') === 'true' || false;

    featureBtnRef.classList.toggle('is-open');
    featureBtnRef.setAttribute('aria-expanded', !expanded);

    featureBlockRef.classList.toggle('is-open');
  });
}
