import { Story, Meta } from '@storybook/react/types-6-0';
import PlayButtonIcon from '.';

export default {
  title: 'Atoms/PlayButtonIcon',
  component: PlayButtonIcon,
} as Meta;

export const Default: Story = (args) => (
  <div style={{ backgroundColor: '#000', maxWidth: '50px', margin: '0 auto' }}>
    <PlayButtonIcon />
  </div>
);
