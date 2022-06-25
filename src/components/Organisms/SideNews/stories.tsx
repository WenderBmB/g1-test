import { Story, Meta } from '@storybook/react/types-6-0';
import SideNews from '.';
import { newsDefaultMock, newsWithGroupMock, newsWithVideoMock } from './mocks';

export default {
  title: 'Organisms/SideNews',
  component: SideNews,
} as Meta;

export const Default: Story = (args) => {
  const mockedData = newsDefaultMock;
  return (
    <div style={{ maxWidth: '100%' }}>
      <SideNews
        id={mockedData.id}
        image={mockedData.image}
        type={mockedData.type}
        title={mockedData.title}
        url={mockedData.url}
        created={mockedData.created}
        chapeu={mockedData.chapeu}
        group={mockedData.group}
        section={mockedData.section}
        summary={mockedData.summary}
        video={mockedData.video}
        {...args}
      />
    </div>
  );
};

export const NewsWithGroup: Story = (args) => {
  const mockedData = newsWithGroupMock;
  return (
    <div style={{ maxWidth: '100%' }}>
      <SideNews
        id={mockedData.id}
        image={mockedData.image}
        type={mockedData.type}
        title={mockedData.title}
        url={mockedData.url}
        created={mockedData.created}
        chapeu={mockedData.chapeu}
        group={mockedData.group}
        section={mockedData.section}
        summary={mockedData.summary}
        video={mockedData.video}
        {...args}
      />
    </div>
  );
};

export const NewsWithVideo: Story = (args) => {
  const mockedData = newsWithVideoMock;
  return (
    <div style={{ maxWidth: '100%' }}>
      <SideNews
        id={mockedData.id}
        image={mockedData.image}
        type={mockedData.type}
        title={mockedData.title}
        url={mockedData.url}
        created={mockedData.created}
        chapeu={mockedData.chapeu}
        group={mockedData.group}
        section={mockedData.section}
        summary={mockedData.summary}
        video={mockedData.video}
        {...args}
      />
    </div>
  );
};
