import { Story, Meta } from '@storybook/react/types-6-0';
import MainNewsTitle from '.';

export default {
  title: 'Atoms/MainNewsTitle',
  component: MainNewsTitle,
} as Meta;

export const WithoutImage: Story = (args) => (
  <div style={{ maxWidth: '100%', margin: '0 auto' }}>
    <MainNewsTitle />
  </div>
);
