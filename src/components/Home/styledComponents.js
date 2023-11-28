import styled from 'styled-components'

export const MainDiv = styled.div`
  background-color: #25262c;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px;
`
export const ContentDiv = styled.div`
  background-color: #1b1c22;
  border-radius: 20px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const FirstDiv = styled.div`
  padding: 10px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 50%;
`
export const MainHead = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: white;
  font-weight: bold;
`
export const Image = styled.img`
  width: 100%;
`
export const SecondDiv = styled.div`
  background-color: #25262c;
  border-radius: 20px;
  padding: 10px;
  border: 1px solid #cbd5e1;
  width: 50%;
`
export const ToolsDiv = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  padding: 0px;
  list-style-type: none;
`

export const ListItem = styled.li`
  padding: 0;
`
export const HorizontalLine = styled.hr`
  color: #cbd5e1;
`
export const BoldBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => (props.bold ? '#faff00' : '#f1f5f9')};
`
export const ItalicBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => (props.italic ? '#faff00' : '#f1f5f9')};
`
export const UnderlineBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => (props.underline ? '#faff00' : '#f1f5f9')};
`
export const TextArea = styled.textarea`
  height: 330px;
  width: 100%;
  outline: none;
  border: none;
  color: #f1f5f9;
  padding: 10px;
  font-size: 15px;
  font-family: 'Roboto';
  background-color: transparent;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underline ? 'underline' : 'normal')};
`
