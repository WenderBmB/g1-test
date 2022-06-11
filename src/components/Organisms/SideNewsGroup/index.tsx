import React from 'react';
import SideNews from '../SideNews';

import { Container } from './styles';

interface ISideNewsGroup {
  created: string;
  id: string;
  image: string;
  title: string;
  type: string;
  url: string;
}

const SideNewsGroup: React.FC<ISideNewsGroup> = ({
  created,
  id,
  image,
  title,
  type,
  url,
}) => {
  return (
    <Container>
      <SideNews
        created={created}
        id={id}
        image={image}
        title={title}
        type={type}
        url={url}
      />
      <SideNews
        created={created}
        id={id}
        image={image}
        title={title}
        type={type}
        url={url}
      />
      <SideNews
        created={created}
        id={id}
        image={image}
        title={title}
        type={type}
        url={url}
      />
      <SideNews
        created={created}
        id={id}
        image={image}
        title={title}
        type={type}
        url={url}
      />
    </Container>
  );
};

export default SideNewsGroup;
