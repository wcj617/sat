import ReactMarkdown from 'react-markdown';
import {InlineMath, BlockMath} from 'react-katex';
import 'katex/dist/katex.min.css';
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

const _mapProps = (props) => ({
    ...props,
    remarkPlugins: [remarkMath, [remarkGfm, { singleTilde: false }]],
    rehypePlugins: [rehypeKatex],
    components: {
        math: ({ value }) => <BlockMath>{value}</BlockMath>,
        inlineMath: ({ value }) => <InlineMath>{value}</InlineMath>
    }
});

export default function Markdown(props) {
    return <ReactMarkdown {..._mapProps(props)}/>
}

// const Markdown = (props) => <ReactMarkdown {..._mapProps(props)}/>;
//
// export default Markdown;