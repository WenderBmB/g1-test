import { Story, Meta } from '@storybook/react/types-6-0';
import { useCallback, useState } from 'react';
import Modal from '.';

export default {
  title: 'Organisms/Modal',
  component: Modal,
} as Meta;

export const Default: Story = (args) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleMockClick = useCallback(() => {
    setModalIsOpen(!modalIsOpen);
  }, [modalIsOpen]);

  return (
    <div style={{ maxWidth: '100%', margin: '0 auto' }}>
      <Modal
        handleShowModal={handleMockClick}
        showModal
        headerContent={<div>header content</div>}
        footerContent={<div>footer content</div>}
        {...args}
      >
        <div>child content</div>
      </Modal>
    </div>
  );
};
