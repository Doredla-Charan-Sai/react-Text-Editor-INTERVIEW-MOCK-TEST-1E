import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {AiOutlineUnderline} from 'react-icons/ai'
import {GoItalic} from 'react-icons/go'
import {
  MainDiv,
  ContentDiv,
  FirstDiv,
  MainHead,
  Image,
  SecondDiv,
  ToolsDiv,
  HorizontalLine,
  TextArea,
  BoldBtn,
  ItalicBtn,
  UnderlineBtn,
  ListItem,
} from './styledComponents'

class Home extends Component {
  state = {bold: false, italic: false, underline: false}

  onBold = () => {
    this.setState(prevState => ({
      bold: !prevState.bold,
    }))
  }

  onItalic = () => {
    this.setState(prevState => ({italic: !prevState.italic}))
  }

  onUnderline = () => {
    this.setState(prevState => ({underline: !prevState.underline}))
  }

  render() {
    const {bold, italic, underline} = this.state
    return (
      <MainDiv>
        <ContentDiv>
          <FirstDiv>
            <MainHead>Text Editor</MainHead>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </FirstDiv>
          <SecondDiv>
            <ToolsDiv>
              <ListItem>
                <BoldBtn data-testid="bold" onClick={this.onBold} bold={bold}>
                  <VscBold />
                </BoldBtn>
              </ListItem>
              <ListItem>
                <ItalicBtn
                  data-testid="italic"
                  onClick={this.onItalic}
                  italic={italic}
                >
                  <GoItalic />
                </ItalicBtn>
              </ListItem>
              <ListItem>
                <UnderlineBtn
                  data-testid="underline"
                  onClick={this.onUnderline}
                  underline={underline}
                >
                  <AiOutlineUnderline />
                </UnderlineBtn>
              </ListItem>
            </ToolsDiv>
            <HorizontalLine />
            <TextArea bold={bold} italic={italic} underline={underline} />
          </SecondDiv>
        </ContentDiv>
      </MainDiv>
    )
  }
}
export default Home
