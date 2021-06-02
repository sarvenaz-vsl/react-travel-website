import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MutedLink = styled.a`
  color: rgba(200, 200, 200, 1);
  font-size: 11px;
  font-weight: 500;
  margin: 10px 0;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  color: #095c79;
  font-weight: 600;
  font-size: 11px;
  text-decoration: none;
  margin: 0 3px;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.03);
  padding: 0 10px;
  transition: all, 200ms ease-in-out;
  box-sizing: border-box;
  border-bottom: 1.4px solid transparent;
  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }
  &:not(:last-of-type) {
    border-bottom: 1.4px solid rgba(200, 200, 200, 0.4);
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid #095c79;
  }
`;

export const SubmitButton = styled.button`
  padding: 11px 40%;
  width: 100%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(9,92,121);
  background: linear-gradient(90deg, rgba(9,92,121,1) 0%, rgba(47,150,171,1) 89%);
  &:focus {
    outline: none;
  }
  &:hover {
    filter: brightness(1.03);
  }
  &:disabled {
    filter: contrast(0.7);
  }
`;

export const FieldContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FieldError = styled.span`
  color: #b32e2e;
  font-size: 11px;
  min-height: 18px;
`;

export const FormSuccess = styled.span`
  color: #28a828;
  font-size: 12px;
  min-height: 20px;
  font-weight: 600;
`;

export const FormError = styled.span`
  color: #b32e2e;
  font-size: 12px;
  min-height: 20px;
  font-weight: 600;
`;