import { Story, Meta } from '@storybook/react/types-6-0';
import VideoTime from '.';

export default {
  title: 'Atoms/VideoTime',
  component: VideoTime,
} as Meta;

export const Default: Story = (args) => (
  <div style={{ backgroundColor: '#000', maxWidth: '50px', margin: '0 auto' }}>
    <VideoTime duration={38499} {...args} />
  </div>
);
