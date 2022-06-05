import SyntaxHighlighter from 'react-syntax-highlighter'
import xcode from 'react-syntax-highlighter/dist/cjs/styles/hljs/xcode'

const Code = ({ source }: { source: string }) => {
    return (
        <>
            <SyntaxHighlighter
                language="swift"
                style={xcode}
                showLineNumbers
                className="min-h-full w-full"
            >
                {source}
            </SyntaxHighlighter>
        </>
    )
}

export default Code
