import { Story, Meta } from '@storybook/react/types-6-0';
import LoadMore from '.';

export default {
  title: 'Atoms/LoadMore',
  component: LoadMore,
} as Meta;

export const Default: Story = (args) => (
  <div style={{ maxWidth: '100%', margin: '0 auto' }}>
    <LoadMore onClick={() => alert('clicou aqui')} />
  </div>
);
