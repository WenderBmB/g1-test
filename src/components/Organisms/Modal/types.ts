import { ComponentType, Ref } from 'react';

export interface IModalProps {
  icon?: string;
  children: JSX.Element;
  headerContent?: JSX.Element;
  footerContent?: JSX.Element;
  ref?: Ref<HTMLDivElement>;
  showModal: boolean;
  handleShowModal: () => void;
}
