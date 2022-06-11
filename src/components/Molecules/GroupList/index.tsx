import React from 'react';
import ItemList, { IGroup } from '../../Atoms/ItemList';

import { Container } from './styles';

interface IGroupList {
  group: IGroup[];
}

const GroupList: React.FC<IGroupList> = ({ group }) => {
  return (
    <Container>
      {group?.map((groupItem) => (
        <ItemList content={groupItem.content} type={groupItem.type} />
      ))}
    </Container>
  );
};

export default GroupList;
