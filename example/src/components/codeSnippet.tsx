import React, { useEffect } from 'react'
import Prism from 'prismjs'

type codeProps = {
  theme: Theme
  title: string
}

type Theme = {
  primaryColor?: string
  primaryFont?: string
  inputBorderRadius?: string
  inputBorder?: string
  inputBackgroundColor?: string
  width?: string
  fontWeight?: string
  buttonFontColor?: string
  headingColor?: string
  headingSize?: string
  backgroundColor?: string
  buttonBackgroundColor?: string
  formPadding?: string
  formBorderRadius?: string
  headingBackgroundColor?: string
  headingBorderRadius?: string
  buttonPadding?: string
  buttonLetterSpacing?: string
  messageInputHeight?: string
  formBorderColor?: string
  formBorderWeight?: string
  headingBorderBottom?: string
  headingBorderColor?: string
  inputBorderWeight?: string
  inputBorderColor?: string
}

const CodeSnippet = ({ theme, title }: codeProps) => {
  useEffect(() => {
    Prism.highlightAll()
  })

  const codeOutput = `
  <Form theme={
    primaryColor: '${theme.primaryColor}',
    primaryFont: '${theme.primaryFont}',
    inputBorderRadius: '${theme.inputBorderRadius}',
    inputBorder: '${theme.inputBorder}',
    inputBackgroundColor: '${theme.inputBackgroundColor}',
    width: '${theme.width}',
    fontWeight: '${theme.fontWeight}',
    buttonFontColor: '${theme.buttonFontColor}',
    headingColor: '${theme.headingColor}',
    headingSize: '${theme.headingSize}',
    backgroundColor: '${theme.backgroundColor}',
    buttonBackgroundColor: '${theme.buttonBackgroundColor}',
    formPadding: '${theme.formPadding}',
    formBorderRadius: '${theme.formBorderRadius}',
    headingBackgroundColor: '${theme.headingBackgroundColor}',
    headingBorderRadius: '${theme.headingBorderRadius}',
    buttonPadding: '${theme.buttonPadding}',
    buttonLetterSpacing: '${theme.buttonLetterSpacing}',
    messageInputHeight: '${theme.messageInputHeight}',
    formBorderColor: '${theme.formBorderColor}',
    formBorderWeight: '${theme.formBorderWeight}',
    headingBorderBottom: '${theme.headingBorderBottom}',
    headingBorderColor: '${theme.headingBorderColor}',
    inputBorderWeight: '${theme.inputBorderWeight}',
    inputBorderColor: '${theme.inputBorderColor}'

    }
  <Heading title='${title}'/>
  <FirstName/>
  <LastName/>
  <Email/>
  <Message/>
  <SubmitButton/>
  />
  `
  return (
    <div className='code'>
      <pre>
        <code>{codeOutput}</code>
      </pre>
    </div>
  )
}

export default CodeSnippet
