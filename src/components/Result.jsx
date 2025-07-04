import React from 'react'

const Result = ({ results }) => {
  if (!results) {
    return (
      <div className="bg-gray-800 rounded-lg p-6 mb-6 shadow text-center">
        <span className="text-gray-400">Analyzing page...</span>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-lg p-6 mb-6 shadow">
      <h2 className="text-2xl font-bold mb-4 text-white">Accessibility & SEO Report</h2>
      <ul className="space-y-2 text-white">
        <li>
          <span className="font-semibold">Images without alt:</span> {results.imagesWithoutAlt.length}
        </li>
        <li>
          <span className="font-semibold">Images with suspicious alt:</span> {results.imagesWithBadAlt.length}
        </li>
        <li>
          <span className="font-semibold">Links without descriptive text:</span> {results.linksWithoutText.length}
        </li>
        <li>
          <span className="font-semibold">Missing <code>lang</code> attribute:</span> {results.missingLang ? 'Yes' : 'No'}
        </li>
        <li>
          <span className="font-semibold">Missing <code>&lt;title&gt;</code>:</span> {results.missingTitle ? 'Yes' : 'No'}
        </li>
        <li>
          <span className="font-semibold">Missing meta description:</span> {results.missingMetaDescription ? 'Yes' : 'No'}
        </li>
        <li>
          <span className="font-semibold">Missing <code>&lt;h1&gt;</code>:</span> {results.missingH1 ? 'Yes' : 'No'}
        </li>
        <li>
          <span className="font-semibold">Buttons without accessible label:</span> {results.buttonsWithoutLabel.length}
        </li>
      </ul>
    </div>
  )
}

export default Result
