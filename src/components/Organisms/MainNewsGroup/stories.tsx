import { Story, Meta } from '@storybook/react/types-6-0';
import MainNewsGroup from '.';

export default {
  title: 'Organisms/MainNewsGroup',
  component: MainNewsGroup,
} as Meta;

export const Default: Story = (args) => (
  <div style={{ maxWidth: '100%', margin: '0 auto' }}>
    <MainNewsGroup {...args} />
  </div>
);
