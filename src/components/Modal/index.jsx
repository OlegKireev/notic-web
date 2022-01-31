import React, { useEffect } from 'react';
import Button from '../Button';
import {
  Backdrop, Content, Dialog, Footer, Header,
} from './styled';
import IconClose from '@/Icons/Close';

function Modal({
  children,
  footer,
  isActive,
  onClose,
}) {
  if (!isActive) return null;

  const handleEssKeydown = (e) => {
    if (e.key !== 'Escape') { return; }
    onClose();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEssKeydown);
    return () => {
      window.removeEventListener('keydown', handleEssKeydown);
    };
  });

  return (
    <Backdrop>
      <Dialog>
        <Header>
          <Button
            kind="ghost"
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
  );
}

export default Modal;
