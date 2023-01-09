import styled from 'styled-components';

export const Button = styled.button`
  align-items: center;
  background-color: rgba(255, 255, 255, .9);
  border: thick double rgba(22, 74, 115, .6);
  border-radius: 12px;
  color: rgba(22, 74, 115, .9);
  cursor: pointer;
  font-family: 'Cinzel';
  font-size: 16px;
  font-weight: 600;
  padding: 6px;
  text-align: center;
  text-transform: uppercase;

  @media (max-width: 768px) {
    padding: 12px;
  }

  &:hover {
    background-color: transparent;
    border: thick double rgba(255, 255, 255, .6);
    color: rgba(255, 255, 255, .9);
  }
`;
