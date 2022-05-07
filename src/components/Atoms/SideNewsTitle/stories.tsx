import { Story, Meta } from '@storybook/react/types-6-0';
import SideNewsTitle from '.';

export default {
  title: 'Atoms/SideNewsTitle',
  component: SideNewsTitle,
} as Meta;

export const Default: Story = (args) => (
  <div style={{ maxWidth: '100%', margin: '0 auto' }}>
    <SideNewsTitle text="Exemplo de texto" {...args} />
  </div>
);
