import { Story, Meta } from '@storybook/react/types-6-0';
import SideNews from '.';

export default {
  title: 'Molecules/SideNews',
  component: SideNews,
} as Meta;

export const Default: Story = (args) => (
  <div style={{ maxWidth: '100%', margin: '0 auto' }}>
    <SideNews {...args} />
  </div>
);
