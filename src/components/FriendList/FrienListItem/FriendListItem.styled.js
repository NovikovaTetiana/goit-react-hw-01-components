import styled from '@emotion/styled';

export const Container = styled.div`
width: 70px;
height:70px;
margin:10px 30px;
display:flex;
align-items: center;
gap: 30px

`
export const Status = styled.div`
display: block;
  width: 15px;
  height: 15px;
  margin-right: 20px;

  border-radius: 50%;
`
  

export const List = styled.div`
list-style: none;
`


export const StatusTrue = styled.span`
display: block;
  width: 15px;
  height: 15px;
  margin-right: 20px;

  border-radius: 50%;
background-color: #1b9c26;
`

export const StatusFalse = styled.span`
display: block;
  width: 15px;
  height: 15px;
  margin-right: 20px;

  border-radius: 50%;
background-color: #a82929;
`