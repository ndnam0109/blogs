import markdownStyles from './markdown-styles.module.css'
import { PortableText } from '@portabletext/react'
import SyntaxHighlighter from 'react-syntax-highlighter';
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
export default function PostBody({ content }) {

  return (
    <div className="mx-auto max-w-2xl" className={markdownStyles.markdown}>
      <PortableText components={components} value={content} />
    </div>
  )
}

const CodeComponent = (props) => {
  console.log(props)
  return (
    <SyntaxHighlighter language="javascript" >
      {props.value.code}
    </SyntaxHighlighter>
  )
}

const components = {
  types: {
    code: CodeComponent,
    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  },
}

