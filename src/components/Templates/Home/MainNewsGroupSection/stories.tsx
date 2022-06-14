import { Story, Meta } from '@storybook/react/types-6-0';
import MainNewsGroupSection from '.';

export default {
  title: 'Templates/MainNewsGroupSection',
  component: MainNewsGroupSection,
} as Meta;

export const Default: Story = (args) => (
  <div style={{ maxWidth: '100%', margin: '0 auto' }}>
    <MainNewsGroupSection
      mainNews={[
        {
          titleText: 'exemple title',
          descriptionText: 'descrição',
          imgUrl:
            'https://static.remove.bg/remove-bg-web/eb1bb48845c5007c3ec8d72ce7972fc8b76733b1/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg',
          labelText: 'label 1',
        },
        {
          titleText: 'exemple title 2',
          descriptionText: 'descrição 2',
          imgUrl:
            'https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg',
          labelText: 'label 2',
        },
      ]}
      {...args}
    />
  </div>
);
