import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  width: 640px;
  margin: 0 auto;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const Wrapper = styled.div``;

export const Title = styled.div`
  font-size: 25px;
  font-weight: 600;
`;

export const Label = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 5px;
`;

export const ID = styled.input`
  width: 300px;
  height: 30px;
  margin-bottom: 5px;
`;

export const Pwd = styled.input`
  width: 300px;
  height: 30px;
`;
