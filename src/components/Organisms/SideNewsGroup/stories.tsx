import { Story, Meta } from '@storybook/react/types-6-0';
import SideNewsGroup from '.';

export default {
  title: 'Organisms/SideNewsGroup',
  component: SideNewsGroup,
} as Meta;

export const Default: Story = (args) => (
  <div style={{ maxWidth: '100%', margin: '0 auto' }}>
    <SideNewsGroup
      created="2020-06-02T17:26:33.214Z"
      id="07ffb9d0-073c-4695-b774-78b825518ada"
      image="https://s2.glbimg.com/-gcY2NjA3l80jDWCnbn2QjeCAQo=/0x0:798x569/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/J/3/0DoBCLRuWG2TdxQ1aPAA/raio-x-florence.jpg"
      title="Estudo usa raios X para comprovar descoberta da fotografia no Brasil em 1833"
      type="materia"
      url="https://g1.globo.com/olha-que-legal/noticia/2020/05/16/estudo-usa-raios-x-para-comprovar-descoberta-da-fotografia-no-brasil-em-1833.ghtml"
      {...args}
    />
  </div>
);
