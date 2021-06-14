import { TweenMax, Expo, Power3 } from 'gsap';

export const animationHeader = (logo, search) => {
  TweenMax.from(logo.current, 1, {
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut,
  });
  TweenMax.from(search.current, 1, {
    delay: 0.1,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut,
  });
};

export const animationItems = items => {
  TweenMax.staggerFrom(
    items.current,
    1,
    {
      delay: 0.2,
      opacity: 0,
      y: -20,
      ease: Power3.easeInOut,
    },
    0.08
  );
};
