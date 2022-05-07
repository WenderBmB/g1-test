import { Story, Meta } from '@storybook/react/types-6-0';
import MainNews from '.';

export default {
  title: 'Molecules/MainNews',
  component: MainNews,
} as Meta;

export const Default: Story = (args) => (
  <div style={{ maxWidth: '100%', margin: '0 auto' }}>
    <MainNews
      labelText="Exemplo de label"
      titleText="Exemplo de título"
      descriptionText="Exemplo de decrição"
      {...args}
    />
  </div>
);
