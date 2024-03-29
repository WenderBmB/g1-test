import React, { useCallback, useState } from 'react';
import {
  CardLeftContent,
  CardRightContent,
  Container,
  SideNewsModalTitle,
  Thumb,
} from './styles';
import LiveBox from '../../Atoms/LiveBox';
import SideNewsTitle from '../../Atoms/SideNewsTitle';
import TimeAgoFontNews from '../../Atoms/TimeAgoFontNews';
import PlayButton from '../../Atoms/PlayButton';
import VideoTime from '../../Atoms/VideoTime';
import Label from '../../Atoms/Label';
import { ISideNews } from './types';
import GroupList from '../../Molecules/GroupList';
import Description from '../../Atoms/Description';
import Modal from '../Modal';
import VideoModal from '../../Molecules/VideoModal';

const SideNews: React.FC<ISideNews> = ({
  created,
  id,
  image,
  title,
  type,
  url,
  chapeu,
  children,
  group,
  section,
  summary,
  video,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleShowModal = useCallback(() => {
    setModalIsOpen(!modalIsOpen);
  }, [modalIsOpen]);

  if (group && group?.length > 0) {
    return (
      <Container>
        <CardLeftContent>
          <Thumb src={image} alt={title} />
        </CardLeftContent>
        <CardRightContent>
          {chapeu && <Label text={chapeu} />}
          <SideNewsTitle text={title} />
          <GroupList group={group} />
          <div>
            <TimeAgoFontNews duration={created} />
          </div>
        </CardRightContent>
      </Container>
    );
  }
  if (video !== null || undefined) {
    return (
      <>
        <Container onClick={handleShowModal}>
          <CardLeftContent>
            <Thumb src={image} alt={title} />
            <div>
              <PlayButton />
              {video && <VideoTime duration={video?.duration} />}
            </div>
          </CardLeftContent>
          <CardRightContent>
            {chapeu && <Label text={chapeu} />}
            <SideNewsTitle text={title} />
            {summary && <Description text={summary} />}
            <div>
              <TimeAgoFontNews duration={created} />
            </div>
          </CardRightContent>
        </Container>
        {video && (
          <Modal
            showModal={modalIsOpen}
            handleShowModal={handleShowModal}
            headerContent={<SideNewsModalTitle>{title}</SideNewsModalTitle>}
            // closeModal={handleHideModal}
            // title={title}
            // clicked={isClicked}
            // videoFont={video?.source}
          >
            <VideoModal font={video?.source} />
          </Modal>
        )}
      </>
    );
  }
  return (
    <Container>
      <CardLeftContent>
        <Thumb src={image} alt={title} />
      </CardLeftContent>
      <CardRightContent>
        {chapeu && <Label text={chapeu} />}
        <SideNewsTitle text={title} />
        {summary && <Description text={summary} />}
        <div>
          <TimeAgoFontNews duration={created} />
        </div>
      </CardRightContent>
    </Container>
  );
};

export default SideNews;
