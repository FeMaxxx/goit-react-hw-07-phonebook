import styled from "@emotion/styled";

export const ContactListBox = styled.ul`
  font-size: 16px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:last-child) {
    padding-bottom: 5px;
    border-bottom: 1px dashed rgba(255, 115, 0, 0.8);
    margin-bottom: 5px;
  }
`;

export const Name = styled.p`
  width: 130px;
  text-align: start;
`;

export const Number = styled.span`
  width: 100px;
  text-align: center;
`;

export const Button = styled.button`
  width: 50px;
  height: 25px;

  color: rgba(242, 255, 0, 0.5);
  background: none;
  border: 1px solid rgba(242, 255, 0, 0.8);
  border-radius: 5px;

  transition: border-color var(--animation), background-color var(--animation),
    color var(--animation);

  &:hover,
  &:focus {
    border-color: rgba(165, 0, 0, 0.8);
    background-color: rgba(165, 0, 0, 0.2);
    color: rgba(242, 255, 0, 0.8);
  }
`;
