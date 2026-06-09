/** Global decorators + the real design-system CSS, loaded once for every story.
   These are the SAME files shipped in the package and used by the UI kits —
   Storybook is a true mirror of production, not a reimplementation. */
import '../styles.css';
import '../components/components.css';

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'paper',
      values: [
        { name: 'paper',  value: '#fdfdfb' },
        { name: 'sunken', value: '#f6f6f7' },
        { name: 'ink',    value: '#1d2126' }
      ]
    },
    controls: { expanded: true, sort: 'requiredFirst' },
    options: {
      storySort: {
        order: ['Foundations', 'Actions', 'Forms', 'Surfaces', 'Navigation', 'Feedback']
      }
    }
  }
};
export default preview;
