import { Story, Meta } from '@storybook/react/types-6-0';
import HomeTemplate from '.';

export default {
  title: 'Templates/Home',
  component: HomeTemplate,
} as Meta;

export const Home: Story = (args) => (
  <div style={{ maxWidth: '100%', margin: '0 auto' }}>
    <HomeTemplate
      mainNews={[
        {
          chapeu: 'Blog do Mauro Ferreira',
          image:
            'https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/T/Y/fUGYJQRMGS3YPeNeNxkQ/salmasojoyce.jpg',
          section: 'Blog do Mauro Ferreira',
          summary:
            'Promovidos somente em nome da arte, os encontros virtuais da cantora sobressaem na quarentena pela combinação de  rigor estilístico e informalidade.',
          title:
            "Mônica Salmaso revê amigos e o melhor da música brasileira na série 'Ô de casas'",
          url: 'https://g1.globo.com/pop-arte/musica/blog/mauro-ferreira/post/2020/04/12/monica-salmaso-reve-amigos-e-o-melhor-da-musica-brasileira-na-serie-o-de-casas.ghtml',
          video: {
            duration: 38499,
            programTitle: 'Jornal Hoje',
            source:
              'https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4',
          },
          group: [],
          type: 'materia',
          created: '2020-04-13T14:29:12.836Z',
          id: 'eebe07c9-2a8b-4aaf-a72f-4a07cafa1c62',
        },
        {
          chapeu: 'Blog do Mauro Ferreira',
          image:
            'https://s2.glbimg.com/9Gn2CCZj9e4pyoG7b2rSDm2Ejf8=/0x0:960x960/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/7/t/rkngbIQAyAm1iAtsavBA/frejatleoaversa2020.jpg',
          section: 'Blog do Mauro Ferreira',
          summary:
            'Com repertório quase todo inédito e lançamento previsto para maio, é o primeiro álbum solo desde Intimidade entre estranhos (2008)',
          title:
            "Frejat lança canção 'Amar um pouco mais', segundo single do álbum 'Ao redor do precipício'",
          url: 'https://g1.globo.com/pop-arte/musica/blog/mauro-ferreira/post/2020/04/12/frejat-lanca-cancao-amar-um-pouco-mais-segundo-single-do-album-ao-redor-do-precipicio.ghtml',
          video: null,
          group: [],
          type: 'materia',
          created: '2020-04-13T14:32:20.174Z',
          id: '1e307a4b-3186-4dfc-a268-ffaee374411a',
        },
      ]}
    />
  </div>
);
