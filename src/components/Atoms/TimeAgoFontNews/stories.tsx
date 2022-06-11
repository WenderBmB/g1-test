import { Story, Meta } from '@storybook/react/types-6-0';
import TimeAgoFontNews from '.';

export default {
  title: 'Atoms/TimeAgoFontNews',
  component: TimeAgoFontNews,
} as Meta;

export const Seconds: Story = (args) => {
  const dateTime = new Date();
  dateTime.setHours(dateTime.getHours() - 3);
  dateTime.setSeconds(dateTime.getSeconds() - 10);
  return (
    <div style={{ maxWidth: '100%', margin: '0 auto' }}>
      <TimeAgoFontNews duration={String(dateTime)} {...args} />
    </div>
  );
};

export const Minutes: Story = (args) => {
  const dateTime = new Date();
  dateTime.setHours(dateTime.getHours() - 3);
  dateTime.setMinutes(dateTime.getMinutes() - 10);
  return (
    <div style={{ maxWidth: '100%', margin: '0 auto' }}>
      <TimeAgoFontNews duration={String(dateTime)} {...args} />
    </div>
  );
};

export const Hours: Story = (args) => {
  const dateTime = new Date();
  dateTime.setHours(dateTime.getHours() - 13);
  return (
    <div style={{ maxWidth: '100%', margin: '0 auto' }}>
      <TimeAgoFontNews duration={String(dateTime)} {...args} />
    </div>
  );
};

export const Days: Story = (args) => {
  const dateTime = new Date();
  dateTime.setHours(dateTime.getHours() - 3);
  dateTime.setDate(dateTime.getDate() - 10);
  return (
    <div style={{ maxWidth: '100%', margin: '0 auto' }}>
      <TimeAgoFontNews duration={String(dateTime)} {...args} />
    </div>
  );
};
