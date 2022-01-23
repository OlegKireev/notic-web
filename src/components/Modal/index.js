import React from 'react';
import Button from '../Button/styled';
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
          <Button
            onClick={onClose}
          >
            Close
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