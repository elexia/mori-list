import { trigger, state, style, animate, transition } from '@angular/animations';

export const SimpleFade = trigger('simpleFade', [
  // States
  state('in', style({opacity: 1})),
  state('out', style({opacity: 0})),
  // Fade in
  transition('out => in', [ animate(600) ]),
  // Fade out
  transition('in => out', [ animate(600) ])
]);
