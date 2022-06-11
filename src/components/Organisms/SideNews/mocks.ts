import { ISideNews } from './types';

export const newsDefaultMock: ISideNews = {
  chapel: 'Blog do Mauro Ferreira',
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
};

export const newsWithGroupMock: ISideNews = {
  id: '123',
  image:
    'https://static3.depositphotos.com/1004325/185/i/450/depositphotos_1853470-stock-photo-news.jpg',
  type: 'materia',
  title: 'Titulo fake',
  url: 'https://g1.globo.com/ba/bahia/noticia/2022/05/18/extinta-na-caatinga-nos-anos-2000-araras-azuis-vindas-da-europa-serao-devolvidas-a-natureza-no-mes-de-junho-na-bahia.ghtml',
  created: '2020-04-13T14:29:12.836Z',
  chapel: undefined,
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
    {
      content: {
        section: 'Moradores processam a COELBA por falta de atendimento',
        summary: 'lorem ipsum dolor sit amet...',
        title: 'Titulo de exemplo ',
        url: 'https://g1.globo.com/se/sergipe/especial-publicitario/energisa/noticia/2020/03/03/concerto-marca-inicio-das-atividades-2020-da-filarmonica-nossa-senhora-da-conceicao.ghtml',
      },
      type: 'materia',
    },
  ],
  section: undefined,
  summary: undefined,
  video: null,
};

export const newsWithVideoMock: ISideNews = {
  chapel: 'Blog do Mauro Ferreira',
  image:
    'https://static3.depositphotos.com/1004325/185/i/450/depositphotos_1853470-stock-photo-news.jpg',
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
};
