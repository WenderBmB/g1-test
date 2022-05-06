import { Story, Meta } from '@storybook/react/types-6-0';
import G1Icon from '.';

export default {
  title: 'Atoms/G1Icon',
  component: G1Icon,
} as Meta;

export const Default: Story = (args) => (
  <div style={{ backgroundColor: '#900', maxWidth: '50px', margin: '0 auto' }}>
    <G1Icon />
  </div>
);
