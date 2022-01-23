import React from 'react';
import Button from '../Button';
import { Backdrop, Content, Dialog, Footer, Header } from './styled';
import IconClose from '@/Icons/Close';

const Modal = ({
  children,
  footer,
  isActive,
  onClose,
}) => {
  if (!isActive) return null;
  return (
    <Backdrop>
      <Dialog>
        <Header>
          <Button kind="ghost"
            onClick={onClose}
          >
            <IconClose />
          </Button>
        </Header>
        <Content>
          {children}
        </Content>
        <Footer>
          {footer}
        </Footer>
      </Dialog>
    </Backdrop>
  )
}

export default Modal;