import styled from '@emotion/styled';

export const Container = styled.div`
display: flex;
justify-content: center;
border: 1px solid #e9eef3;
border-radius: 5px;
box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.75);
width: 300px;
margin:50px auto;
`;

export const Description = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 5px;
margin-bottom:10px;
`

export const List = styled.div`
list-style: none;
display: flex;
justify-content: center;
gap: 10px;
`
export const ListItem = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`