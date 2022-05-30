import { Story, Meta } from '@storybook/react/types-6-0';
import VideoModal from '.';

export default {
  title: 'Molecules/VideoModal',
  component: VideoModal,
} as Meta;

export const Default: Story = (args) => (
  <div style={{ maxWidth: '100%', margin: '0 auto' }}>
    <VideoModal font="https://www.w3schools.com/html/mov_bbb.mp4" {...args} />
  </div>
);
