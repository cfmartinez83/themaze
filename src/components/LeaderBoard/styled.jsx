import styled from 'styled-components';

export const Wrapper = styled.div`
`;

Wrapper.displayName = 'Wrapper';

export const Title = styled.div`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  padding: 20px;
  color: #212121;
`;

Title.displayName = 'Title';

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div:not(:last-child) {
    margin-bottom: 10px;
  }
`;

Table.displayName = 'Table';

export const Empty = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  padding: 20px;
  color: #212121;
`;

Empty.displayName = 'Empty';
