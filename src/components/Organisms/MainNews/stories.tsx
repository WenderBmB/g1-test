import { Story, Meta } from '@storybook/react/types-6-0';
import MainNews from '.';

export default {
  title: 'Organisms/MainNews',
  component: MainNews,
} as Meta;

export const Default: Story = (args) => (
  <div style={{ maxWidth: '100%', margin: '0 auto' }}>
    <MainNews
      chapeu="Exemplo de label"
      title="Exemplo de título"
      summary="Exemplo de decrição"
      created=""
      id=""
      image=""
      type=""
      url=""
      {...args}
    />
  </div>
);

export const WithoutLabelAndDescription: Story = (args) => (
  <div style={{ maxWidth: '100%', margin: '0 auto' }}>
    <MainNews
      created=""
      id=""
      image=""
      type=""
      url=""
      title="Exemplo de título"
      {...args}
    />
  </div>
);
