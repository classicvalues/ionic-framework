import { Animation } from '../../../interface';
import { createAnimation } from '../../../utils/animation/animation';
import { calculateWindowAdjustment, getPopoverDimensions, getPopoverPosition } from '../utils';

const POPOVER_MD_BODY_PADDING = 12;

/**
 * Md Popover Enter Animation
 */
export const mdEnterAnimation = (baseEl: HTMLElement, opts?: any): Animation => {
  const { event: ev, size, trigger, reference, side, align } = opts;
  const doc = (baseEl.ownerDocument as any);
  const isRTL = doc.dir === 'rtl';
  const bodyWidth = doc.defaultView.innerWidth;
  const bodyHeight = doc.defaultView.innerHeight;

  const contentEl = baseEl.querySelector('.popover-content') as HTMLElement;
  const { contentWidth, contentHeight } = getPopoverDimensions(size, contentEl, trigger);

  const defaultPosition = {
    top: bodyHeight / 2 - contentHeight / 2,
    left: bodyWidth / 2 - contentWidth / 2
  }

  const results = getPopoverPosition(isRTL, contentEl, reference, side, align, defaultPosition, trigger, ev);

  const { originX, originY, top, left, bottom } = calculateWindowAdjustment(results.top, results.left, POPOVER_MD_BODY_PADDING, bodyWidth, bodyHeight, contentWidth, contentHeight, isRTL, 0, results.referenceCoordinates);

  const baseAnimation = createAnimation();
  const backdropAnimation = createAnimation();
  const wrapperAnimation = createAnimation();
  const contentAnimation = createAnimation();
  const viewportAnimation = createAnimation();

  backdropAnimation
    .addElement(baseEl.querySelector('ion-backdrop')!)
    .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
    .beforeStyles({
      'pointer-events': 'none'
    })
    .afterClearStyles(['pointer-events']);

  wrapperAnimation
    .addElement(baseEl.querySelector('.popover-wrapper')!)
    .fromTo('opacity', 0.01, 1);

  contentAnimation
    .addElement(contentEl)
    .beforeStyles({
      'top': `calc(${top}px + var(--offset-y, 0px))`,
      'left': `calc(${left}px + var(--offset-x, 0px))`,
      'transform-origin': `${originY} ${originX}`
    })
    .beforeAddWrite(() => {
      if (bottom !== undefined) {
        contentEl.style.setProperty('bottom', `${bottom}px`);
      }
    })
    .fromTo('transform', 'scale(0.001)', 'scale(1)');

  viewportAnimation
    .addElement(baseEl.querySelector('.popover-viewport')!)
    .fromTo('opacity', 0.01, 1);

  return baseAnimation
    .addElement(baseEl)
    .easing('cubic-bezier(0.36,0.66,0.04,1)')
    .duration(300)
    .beforeAddWrite(() => {
      if (size === 'cover') {
        baseEl.style.setProperty('--width', `${contentWidth}px`);
      }
      if (originY === 'bottom') {
        baseEl.classList.add('popover-bottom');
      }
    })
    .addAnimation([backdropAnimation, wrapperAnimation, contentAnimation, viewportAnimation]);
};
