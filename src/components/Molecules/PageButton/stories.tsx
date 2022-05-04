import { Story, Meta } from '@storybook/react/types-6-0';
import PageButton from '.';

export default {
  title: 'Molecules/PageButton',
  component: PageButton,
} as Meta;

export const Default: Story = (args) => (
  <div style={{ maxWidth: '100%', margin: '0 auto' }}>
    <PageButton />
  </div>
);
