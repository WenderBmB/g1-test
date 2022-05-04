import { Story, Meta } from '@storybook/react/types-6-0';
import NewsGrouper from '.';

export default {
  title: 'Atoms/NewsGrouper',
  component: NewsGrouper,
} as Meta;

export const Default: Story = (args) => (
  <div style={{ maxWidth: '50px', margin: '0 auto' }}>
    <NewsGrouper />
  </div>
);
