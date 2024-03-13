import React from 'react';
import {InlineMath, BlockMath} from 'react-katex';
import satMathProblems from "./satMathProblems";
import 'katex/dist/katex.min.css';
import Markdown from "./Markdown";
const SATMathQeustions = () => {
    return (
    <div>
        {satMathProblems.map((problem, index) => (
            <div key={index} style={{marginBottom: '20px', paddingBottom: '10px', borderBottom: '1px solid #ccc'}}>
                <Markdown children ={problem.question} />
                <Markdown children = {problem.answer} />
                <Markdown children = {problem.equation} />
            </div>
        ))}

    </div>
    );
};

export default SATMathQeustions;