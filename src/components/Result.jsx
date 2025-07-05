import React from 'react'

const Result = ({ results }) => {
  if (!results) {
    return (
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 rounded-lg p-6 mb-6 shadow-2xl text-center">
        <span className="text-blue-200">Analyzing page...</span>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 rounded-2xl p-8 mb-8 shadow-2xl border border-blue-700/40">
      <h2 className="text-3xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 drop-shadow-lg tracking-wide text-center">
        Accessibility &amp; SEO Report
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-white">
        <li>
          <div className={`rounded-xl p-4 bg-zinc-900/80 backdrop-blur 
            ${results.imagesWithoutAlt.length > 0 
              ? "text-red-400 shadow-lg shadow-red-500/30 border border-red-500/30" 
              : "text-green-400 shadow-lg shadow-green-500/30 border border-green-500/30"}`}>
            <span className="font-semibold">Images without alt:</span> {results.imagesWithoutAlt.length}
          </div>
        </li>
        <li>
          <div className={`rounded-xl p-4 bg-zinc-900/80 backdrop-blur 
            ${results.imagesWithBadAlt.length > 0 
              ? "text-red-400 shadow-lg shadow-red-500/30 border border-red-500/30" 
              : "text-green-400 shadow-lg shadow-green-500/30 border border-green-500/30"}`}>
            <span className="font-semibold">Images with suspicious alt:</span> {results.imagesWithBadAlt.length}
          </div>
        </li>
        <li>
          <div className={`rounded-xl p-4 bg-zinc-900/80 backdrop-blur 
            ${results.linksWithoutText.length > 0 
              ? "text-red-400 shadow-lg shadow-red-500/30 border border-red-500/30" 
              : "text-green-400 shadow-lg shadow-green-500/30 border border-green-500/30"}`}>
            <span className="font-semibold">Links without descriptive text:</span> {results.linksWithoutText.length}
          </div>
        </li>
        <li>
          <div className={`rounded-xl p-4 bg-zinc-900/80 backdrop-blur 
            ${results.missingLang 
              ? "text-red-400 shadow-lg shadow-red-500/30 border border-red-500/30" 
              : "text-green-400 shadow-lg shadow-green-500/30 border border-green-500/30"}`}>
            <span className="font-semibold">Missing <code>lang</code> attribute:</span> {results.missingLang ? 'Yes' : 'No'}
          </div>
        </li>
        <li>
          <div className={`rounded-xl p-4 bg-zinc-900/80 backdrop-blur 
            ${results.missingTitle 
              ? "text-red-400 shadow-lg shadow-red-500/30 border border-red-500/30" 
              : "text-green-400 shadow-lg shadow-green-500/30 border border-green-500/30"}`}>
            <span className="font-semibold">Missing <code>&lt;title&gt;</code>:</span> {results.missingTitle ? 'Yes' : 'No'}
          </div>
        </li>
        <li>
          <div className={`rounded-xl p-4 bg-zinc-900/80 backdrop-blur 
            ${results.missingMetaDescription 
              ? "text-red-400 shadow-lg shadow-red-500/30 border border-red-500/30" 
              : "text-green-400 shadow-lg shadow-green-500/30 border border-green-500/30"}`}>
            <span className="font-semibold">Missing meta description:</span> {results.missingMetaDescription ? 'Yes' : 'No'}
          </div>
        </li>
        <li>
          <div className={`rounded-xl p-4 bg-zinc-900/80 backdrop-blur 
            ${results.missingH1 
              ? "text-red-400 shadow-lg shadow-red-500/30 border border-red-500/30" 
              : "text-green-400 shadow-lg shadow-green-500/30 border border-green-500/30"}`}>
            <span className="font-semibold">Missing <code>&lt;h1&gt;</code>:</span> {results.missingH1 ? 'Yes' : 'No'}
          </div>
        </li>
        <li>
          <div className={`rounded-xl p-4 bg-zinc-900/80 backdrop-blur 
            ${results.buttonsWithoutLabel.length > 0 
              ? "text-red-400 shadow-lg shadow-red-500/30 border border-red-500/30" 
              : "text-green-400 shadow-lg shadow-green-500/30 border border-green-500/30"}`}>
            <span className="font-semibold">Buttons without accessible label:</span> {results.buttonsWithoutLabel.length}
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Result
