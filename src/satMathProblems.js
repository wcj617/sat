const satMathProblems = [
    {
        question: `If a car travels at a speed of $v$ kilometers per hour for $t$ hours, the distance traveled can be calculated using the formula $d = vt$. What is the distance traveled by the car in kilometers if $v = 60$ and $t = 2$?`,
        answer: `The distance is $d = (60)(2) = 120$ kilometers.`
    },
    {
        question: `The formula for the volume $V$ of a cone with radius $r$ and height $h$ is given by $V = \\frac{1}{3}\\pi r^2 h$. What is the volume of a cone with a radius of $3$ cm and a height of $4$ cm?`,
        answer: `The volume is $V = \\frac{1}{3}\\pi (3)^2 (4) = 12\\pi$ cubic centimeters.`
    },
    {
        question: "Given a linear equation of a line in slope-intercept form: $y = mx + b$. If a line passes through the points $(1, 3)$ and $(2, 5)$, what is the slope $m$ of this line?",
        answer: "The slope $m$ is $\\frac{5 - 3}{2 - 1} = 2$."
    },
    {
        question: "The quadratic formula is given by: $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$. Given a quadratic equation $ax^2 + bx + c = 0$ where $a = 1$, $b = -3$, and $c = 2$, find the solutions for $x$.",
        answer: "The solutions are $x = 1$ and $x = 2$."
    },
    {
        question: "The area $A$ of a circle with radius $r$ is given by the formula: $A = \\pi r^2$. If the diameter of the circle is $10$ units, what is the area of the circle?",
        answer: "The radius $r = 5$ units. So, the area is $A = \\pi (5)^2 = 25\\pi$ square units."
    },
    {
        question: "If $\\sin(\\theta) = \\frac{1}{2}$ and the hypotenuse $h$ is $10$ units, what is the length of the side opposite to $\\theta$?",
        answer: "The length of the opposite side is $h \\times \\sin(\\theta) = 10 \\times \\frac{1}{2} = 5$ units."
    },
    {
        question: "Evaluate the definite integral of the function $f(x) = 3x^2$ from $0$ to $1$.",
        answer: "The definite integral is $\\int_{0}^{1} 3x^2 dx = [x^3]_{0}^{1} = 1^3 - 0^3 = 1$."
    },
    { equation: "$E = mc^2$" },
    { equation: "$\\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$" },
    { equation: "$\\sin^2(\\theta) + \\cos^2(\\theta) = 1$" },
    { equation: "$a^2 + b^2 = c^2$" },
    { equation: "$\\int_0^\\infty e^{-x^2} dx = \\frac{\\sqrt{\\pi}}{2}$" },
    { equation: "$\\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}$" },
    { equation: "$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$" },
    { equation: "$\\vec{\\nabla} \\cdot \\vec{F} = \\frac{\\partial F_x}{\\partial x} + \\frac{\\partial F_y}{\\partial y} + \\frac{\\partial F_z}{\\partial z}$" },
    { equation: "$\\oint_C \\vec{F} \\cdot d\\vec{r} = 0$" },
    { equation: "$\\frac{d}{dx}e^x = e^x$" }
];

export default satMathProblems;
