import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import {
  Backdrop, Content, Dialog, Footer, Header,
} from './styled';
import IconClose from '@/Icons/Close';

const propTypes = {
  children: PropTypes.node,
  footer: PropTypes.node,
  isActive: PropTypes.bool,
  onClose: PropTypes.func,
};
const defaultProps = {
  children: null,
  footer: null,
  isActive: false,
  onClose: () => {},
};

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

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
