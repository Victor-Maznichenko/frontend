type EventCallback = () => void;

export const addHoverListeners = (elements: HTMLCollectionOf<HTMLElement>, callbackEnter: EventCallback, callbackLeave: EventCallback) => {
   requestIdleCallback(() => {
      for (const element of elements) {
         element.addEventListener('mouseenter', () => {
            callbackEnter();
         }, { passive: true });
         element.addEventListener('mouseleave', () => {
            callbackLeave();
         }, { passive: true });
      }
   });
};

export const removeHoverListeners = (elements: HTMLCollectionOf<HTMLElement>, callbackEnter: EventCallback, callbackLeave: EventCallback) => {
   requestIdleCallback(() => {
      for (const element of elements) {
         element.removeEventListener('mouseenter', () => {
            callbackEnter();
         });
         element.removeEventListener('mouseleave', () => {
            callbackLeave();
         });
      }
   });
};
