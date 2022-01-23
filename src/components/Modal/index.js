import React from 'react';
import Button from '../Button';
import { Backdrop, Content, Dialog, Footer, Header } from './styled';

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
          <Button kind="close"
            onClick={onClose}
          >
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