import { Story, Meta } from '@storybook/react/types-6-0';
import NewsGroup from '.';

export default {
  title: 'Atoms/NewsGroup',
  component: NewsGroup,
} as Meta;

export const Default: Story = (args) => (
  <div style={{ maxWidth: '100%', margin: '0 auto' }}>
    <NewsGroup text="Exemplo de texto" {...args} />
  </div>
);
