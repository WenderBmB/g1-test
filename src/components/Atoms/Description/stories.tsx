import { Story, Meta } from '@storybook/react/types-6-0';
import Description from '.';

export default {
  title: 'Atoms/Description',
  component: Description,
} as Meta;

export const Default: Story = (args) => (
  <div style={{ maxWidth: '100%', margin: '0 auto' }}>
    <Description />
  </div>
);
