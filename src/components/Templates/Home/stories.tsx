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
      sideNews={[
        {
          chapeu: 'Receitas',
          image:
            'https://s2.glbimg.com/RlZ-taxWm6v3CX7voqWx86Gjpc=/0x0:652x434/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb 4708aeebdf1c68c6cbd6/internal_photos/bs/2020/I/d/v6Il8jREmphR71cYHPXQ/1600799599003-jw7393receita.jpg',
          section: 'Receitas',
          summary:
            'Essa receita é pra fazer do simples, um banquete! Rita Lobo mostra como preparar uma OMELETE de mandioquinha e alho-poró, acompanhada de uma salada morna de tomate. Um assado delicioso !',
          title: 'Omelete de forno da Rita Lobo',
          url: 'https://receitas.globo.com/omelete-de-forno-da-rita-lobo.ghtml',
          video: null,
          group: [],
          type: 'recipe',
          created: '2020-12-14T13:29:12.836Z',
          id: 'eebj57c9-2a8b-7aaf-a72f-4a07cafw6l92',
        },
        {
          chapeu: 'Olha que legal',
          image:
            'https://s2.glbimg.com/-gcY2NjA3l80jDWCnbn2QjeCAQo=/0x0:798x569/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/J/3/0DoBCLRuWG2TdxQ1aPAA/raio-x-florence.jpg',
          section: 'Olha que legal',
          summary:
            'Física da USP utilizou tecnologia para identificar elementos presentes em imagens fotogáficas feitas por Hercule Florence, comprovando suas anotações.',
          title:
            'Estudo usa raios X para comprovar descoberta da fotografia no Brasil em 1833',
          url: 'https://g1.globo.com/olha-que-legal/noticia/2020/05/16/estudo-usa-raios-x-para-comprovar-descoberta-da-fotografia-no-brasil-em-1833.ghtml',
          video: null,
          group: [],
          type: 'materia',
          created: '2020-06-02T17:26:33.214Z',
          id: '07ffb9d0-073c-4695-b774-78b825518ada',
        },
        {
          chapeu: 'Lollapalooza 2020',
          image:
            'https://s2.glbimg.com/CSO7TPAAze8wO0edsG7sdjjK4XI=/0x0:2000x1333/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/v/0/ngYRL1QAGAzt0F5O0hvA/gerais-lolla-132a0274-fabio-tito-g1.jpg',
          section: 'Lollapalooza 2020',
          summary:
            'Doação para o Criança Esperança garante 45% de desconto na compra de ingressos. ',
          title:
            'Globo e Lollapalooza renovam parceria para entrada social com desconto para festival ',
          url: 'https://g1.globo.com/pop-arte/musica/lollapalooza/2020/noticia/2019/09/27/globo-e-lollapalooza-renovam-parceria-para-entrada-social-com-desconto-para-festival.ghtml',
          video: null,
          group: [
            {
              content: {
                section: 'Especial Publicitário - ENERGISA  ',
                summary:
                  'Neste ano, a instituição conta com o patrocínio da Energisa para manutenção do projeto musical',
                title:
                  'Concerto marca início das atividades 2020 da Filarmônica Nossa Senhora da Conceição',
                url: 'https://g1.globo.com/se/sergipe/especial-publicitario/energisa/noticia/2020/03/03/concerto-marca-inicio-das-atividades-2020-da-filarmonica-nossa-senhora-da-conceicao.ghtml',
              },
              type: 'materia',
            },
          ],
          type: 'materia',
          created: '2020-03-09T14:38:46.541Z',
          id: 'c2db0c50-9f23-46ce-a5ed-41d3ad96fb7f',
        },
        {
          chapeu: '',
          image:
            'https://s2.glbimg.com/UFGfEIZ1KkmhL0nTiI111xzEhfc=/0x0:2000x1333/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/1/B/QL2XXsSiGsqxftYnRakA/corgi2.jpg',
          section: 'Planeta Bizarro',
          summary:
            'Filhote da raça corgi, comeu frutas e dormiu manchado de vermelho. Após susto, vietnamitas desvendaram a cena em post.',
          title: 'Cachorrinho dá susto em donos e viraliza na web',
          url: 'https://g1.globo.com/planeta-bizarro/noticia/2020/03/24/cachorrinho-da-susto-em-donos-e-viraliza-na-web.ghtml',
          video: null,
          group: [],
          type: 'materia',
          created: '2020-03-24T22:42:45.224Z',
          id: 'ed4cfc6de1b1294379fe25abd2ffe4d0',
        },
      ]}
    />
  </div>
);
