import { ConfirmationModalProps } from './ConfirmationModal.types';
import React from 'react';

import * as Styled from './ConfirmationModal.styles';

export const ConfirmationModal = ({
  title,
  description,
  cancel,
  onCancel,
  confirm,
  onConfirm,
  disableConfirm = false,
  onXClick = onCancel,
}: ConfirmationModalProps) => {
  return (
    <Styled.BackgroundModal>
    <Styled.Modal >
        <h2>{title}</h2>
      <div>
        <Styled.Body>{description}</Styled.Body>

        <Styled.Footer>
          <Styled.Buttons>
            {cancel && (
              <Styled.ConfirmButton onClick={onCancel}>
                {cancel}
              </Styled.ConfirmButton>
            )}

            <Styled.ConfirmButton disabled={disableConfirm} onClick={onConfirm} >
              {confirm}
            </Styled.ConfirmButton>
          </Styled.Buttons>
        </Styled.Footer>
      </div>
    </Styled.Modal>
    </Styled.BackgroundModal>
  );
};
