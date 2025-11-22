import React from 'react'

export function WelcomeView() {
  return (
    <div className="p-4 md:p-6 max-w-full md:max-w-4xl mx-auto flex flex-col gap-6 md:gap-8 min-h-screen">
      {/* Header */}
      <div className="text-center mb-4 mt-8 md:mt-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Alix Paradis
        </h1>
        <p className="text-base md:text-lg text-gray-500 m-0">
          Welcome to my personal homepage
        </p>
      </div>

      {/* Projects Section */}
      <div className="flex flex-col gap-5">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
          Projects
        </h2>
        
        {/* Japanese Writing Practice Project */}
        <div className="border border-gray-200 rounded-xl p-4 md:p-5 bg-white shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-xl flex-shrink-0">
              📝
            </div>
            <h3 className="m-0 text-lg md:text-xl text-gray-900 font-semibold">Japanese Writing Practice</h3>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base">
            A writing dictation application that lets you play dictations with custom configurations or generate your own dictations based on the vocabulary you want to practice.
            <br />
            By default, some dictations are provided based on WaniKani vocabulary per level.
          </p>
          <div className="flex flex-col gap-2">
            <a 
              href="https://jwp.alixparadis.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm md:text-base text-blue-600 hover:text-blue-800 no-underline border border-gray-200 rounded-lg p-2 hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <span>🌐</span>
              <span className="flex-1">https://jwp.alixparadis.com</span>
            </a>
            <a 
              href="https://github.com/AlixPa/japanese-writing-practice"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm md:text-base text-blue-600 hover:text-blue-800 no-underline border border-gray-200 rounded-lg p-2 hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <span>🔗</span>
              <span className="flex-1">https://github.com/AlixPa/japanese-writing-practice</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-5 border-t border-gray-200 text-gray-400 text-xs md:text-sm mt-auto">
        © {new Date().getFullYear()} Alix Paradis
      </div>
    </div>
  )
}

