import React from 'react';

import * as Styled from "./Modal.style";
import { IModalProps } from './IModalProps';

const ModalComponent: React.FC<IModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <Styled.ModalOverlay>
      <Styled.ModalContent>
        {children}
        <Styled.Button onClick={onClose}>Fechar</Styled.Button>
      </Styled.ModalContent>
    </Styled.ModalOverlay>
  );
};

export default ModalComponent;
