import { Story, Meta } from '@storybook/react/types-6-0';
import MainNewsTitle from '.';

export default {
  title: 'Atoms/MainNewsTitle',
  component: MainNewsTitle,
} as Meta;

export const Default: Story = (args) => (
  <div style={{ background: '#000', maxWidth: '100%', margin: '0 auto' }}>
    <MainNewsTitle text="Exemplo de texto" haveImg={false} {...args} />
  </div>
);
