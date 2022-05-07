import { Story, Meta } from '@storybook/react/types-6-0';
import NewsTime from '.';

export default {
  title: 'Atoms/NewsTime',
  component: NewsTime,
} as Meta;

export const Default: Story = (args) => (
  <div style={{ maxWidth: '100%', margin: '0 auto' }}>
    <NewsTime text="Exemplo de texto" {...args} />
  </div>
);
