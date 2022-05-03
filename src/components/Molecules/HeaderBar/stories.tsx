import { Story, Meta } from '@storybook/react/types-6-0';
import HeaderBar from '.';

export default {
  title: 'Molecules/HeaderBar',
  component: HeaderBar,
} as Meta;

export const Default: Story = (args) => (
  <div style={{ maxWidth: '100%', margin: '0 auto' }}>
    <HeaderBar />
  </div>
);
