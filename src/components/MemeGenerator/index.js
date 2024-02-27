import {Component} from 'react'
import {
  AppContainer,
  MemeGeneratorContainer,
  Heading,
  FormAndMemeContainer,
  MemeContainer,
  TextContent,
  MemeGeneratorForm,
  CustomLabel,
  CustomInput,
  CustomSelect,
  CustomOption,
  GenerateButton,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    backgroundImgUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    activeFontSizeOptionId: fontSizesOptionsList[0].optionId,
    backgroundImgUrl: '',
    topText: '',
    bottomText: '',
    activeFontSizeId: '',
  }

  onChangeBackgroundImage = e => {
    this.setState({backgroundImgUrlInput: e.target.value})
  }

  onChangeTopTextInput = e => {
    this.setState({topTextInput: e.target.value})
  }

  onChangeBottomTextInput = e => {
    this.setState({bottomTextInput: e.target.value})
  }

  onChangeActiveFontSizeOptionID = e => {
    this.setState({activeFontSizeOptionId: e.target.value})
  }

  onGeneratorForm = e => {
    e.preventDefault()
    const {
      backgroundImgUrlInput,
      topTextInput,
      bottomTextInput,
      activeFontSizeOptionId,
    } = this.state
    this.setState({
      backgroundImgUrl: backgroundImgUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      activeFontSizeId: activeFontSizeOptionId,
    })
  }

  renderMemeGeneratorForm = () => {
    const {
      activeFontSizeOptionId,
      backgroundImgUrlInput,
      topTextInput,
      bottomTextInput,
    } = this.state
    return (
      <MemeGeneratorForm onSubmit={this.onGeneratorForm}>
        <CustomLabel htmlFor="backgroundImgUrl">Image Url</CustomLabel>
        <CustomInput
          type="text"
          id="backgroundImgUrl"
          value={backgroundImgUrlInput}
          onChange={this.onChangeBackgroundImage}
          placeholder="Enter the Image Url"
        />
        <CustomLabel htmlFor="topText">Top Text</CustomLabel>
        <CustomInput
          type="text"
          id="topText"
          value={topTextInput}
          onChange={this.onChangeTopTextInput}
          placeholder="Enter the Top Text"
        />
        <CustomLabel htmlFor="bottomText">Bottom Text</CustomLabel>
        <CustomInput
          type="text"
          id="bottomText"
          value={bottomTextInput}
          onChange={this.onChangeBottomTextInput}
          placeholder="Enter the Bottom Text"
        />
        <CustomLabel htmlFor="select">Font Size</CustomLabel>
        <CustomSelect
          id="select"
          value={activeFontSizeOptionId}
          onChange={this.onChangeActiveFontSizeOptionID}
        >
          {fontSizesOptionsList.map(each => (
            <CustomOption key={each.optionId} value={each.optionId}>
              {each.displayText}
            </CustomOption>
          ))}
        </CustomSelect>
        <GenerateButton type="submit">Generate</GenerateButton>
      </MemeGeneratorForm>
    )
  }

  renderMeme = () => {
    const {backgroundImgUrl, topText, bottomText, activeFontSizeId} = this.state
    console.log(backgroundImgUrl)
    console.log(activeFontSizeId)
    return (
      <MemeContainer data-testid="meme" backgroundImage={backgroundImgUrl}>
        <TextContent activeFontSizeId={activeFontSizeId}>{topText}</TextContent>
        <TextContent activeFontSizeId={activeFontSizeId}>
          {bottomText}
        </TextContent>
      </MemeContainer>
    )
  }

  render() {
    return (
      <AppContainer>
        <MemeGeneratorContainer>
          <Heading>Meme Generator</Heading>
          <FormAndMemeContainer>
            {this.renderMeme()}
            {this.renderMemeGeneratorForm()}
          </FormAndMemeContainer>
        </MemeGeneratorContainer>
      </AppContainer>
    )
  }
}
export default MemeGenerator
