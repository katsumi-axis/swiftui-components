import SyntaxHighlighter from 'react-syntax-highlighter'
import vs2015 from 'react-syntax-highlighter/dist/cjs/styles/hljs/vs2015'

const Code = ({ source }: { source: string }) => {
    return (
        <>
            <SyntaxHighlighter
                language="swift"
                style={vs2015}
                showLineNumbers
                className="min-h-full w-full"
            >
                {source}
            </SyntaxHighlighter>
        </>
    )
}

export default Code
