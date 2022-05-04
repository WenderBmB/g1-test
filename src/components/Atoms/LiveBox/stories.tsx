import { Story, Meta } from '@storybook/react/types-6-0';
import LiveBox from '.';

export default {
  title: 'Atoms/LiveBox',
  component: LiveBox,
} as Meta;

export const Default: Story = (args) => (
  <div style={{ maxWidth: '100%', margin: '0 auto' }}>
    <LiveBox />
  </div>
);
