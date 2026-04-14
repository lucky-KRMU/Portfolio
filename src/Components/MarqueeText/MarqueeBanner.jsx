import React from 'react'
import Marquee from 'react-fast-marquee'

function MarqueeBanner() {

  const MarqueeComponent = Marquee.default || Marquee ;

//   The error you encountered is a classic issue in modern JavaScript development, specifically when using a build tool like Vite with certain NPM packages. [1] 
// ## 1. What was the "Actual Error"?
// The error "Element type is invalid: expected a string... but got: object" means React tried to render your component, but instead of finding a function (the Marquee component), it found a plain JavaScript object. [2] 
// This happens because of a Module Mismatch:

// * CommonJS (CJS): Some older packages export their code as an object (e.g., { default: function Marquee() { ... } }).
// * ES Modules (ESM): Modern tools like Vite expect a clean, direct function export.
// * The Conflict: When you imported Marquee, Vite gave you the whole "package" object instead of just the component inside it. Since React cannot "render" a plain object, it crashed. [2, 3, 4, 5] 

// ## 2. What did the Marquee.default line do?
// That line acts as a safety bridge to ensure you get the actual component regardless of how the package was bundled.

// const MarqueeComponent = Marquee.default || Marquee;


// * Marquee.default: This checks if the component is hidden inside a .default property (common in CommonJS-to-ESM translations). If it is, that's what we use.
// * || Marquee: If there is no .default property, it means the import worked perfectly as a standard function, so we just use Marquee as is.

// By doing this, you're telling your code: "Check if the component is wrapped in a 'default' box; if it is, take it out. If not, just take the component itself."
// ## Summary of the Flow

//    1. The Error: You imported an object, but React wanted a function.
//    2. The Cause: A compatibility glitch between the library's format and Vite's expectations.
//    3. The Fix: Manually extracting the function using .default to satisfy React's requirements. [2, 3, 6] 

// Would you like to know how to avoid this by configuring Vite to handle these packages automatically in the future?

// [1] [https://www.youtube.com](https://www.youtube.com/watch?v=1NvNr5E_P-0)
// [2] [https://stackoverflow.com](https://stackoverflow.com/questions/71454705/element-type-is-invalid-expected-a-string-for-built-in-components-or-a-class)
// [3] [https://github.com](https://github.com/facebook/react/issues/13445)
// [4] [https://dev.to](https://dev.to/jolodev/oh-commonjs-why-are-you-mesming-with-me-reasons-to-ditch-commonjs-enh#:~:text=CommonJS%20is%20here%20to%20stay%20However%2C%20there,of%20the%20CJS%2Donly%20packages%20are%20actively%20maintained.)
// [5] [https://blog.logrocket.com](https://blog.logrocket.com/commonjs-vs-es-modules-node-js/#:~:text=js%20projects%2C%20ES%20modules%20provide%20a%20good,ECMAScript%20modules%20are%20the%20future%20of%20JavaScript.)
// [6] [https://vite.dev](https://vite.dev/guide/features)


  return (
    <>

    <MarqueeComponent speed={40}>
    </MarqueeComponent>
    </>
  )
}

export default MarqueeBanner;