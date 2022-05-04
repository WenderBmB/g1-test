import { Story, Meta } from '@storybook/react/types-6-0';
import PlayButton from '.';

export default {
  title: 'Atoms/PlayButton',
  component: PlayButton,
} as Meta;

export const Default: Story = (args) => (
  <div style={{ backgroundColor: '#000', maxWidth: '50px', margin: '0 auto' }}>
    <PlayButton />
  </div>
);
