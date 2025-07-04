import React from 'react'
import Result from './Result'

const Home = ({ inputUrl, setInputUrl, handleSubmit, loading, results }) => {
  return (
    <div className='home'>
      <section className='text-center p-8 h-[80vh]'>
        <h1 className="text-4xl sm:text-6xl md:text-[5rem] lg:text-[5rem] mt-[70px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-blue-800 drop-shadow-[0_0_4px_rgba(59,130,246,0.4)] w-3/4 mx-auto">
          Test Your Site. Empower Every User
        </h1>
        <p className='mt-5 text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-zinc-600 to-blue-800'>Ready to scan your site? Drop the URL below</p>

        <form
          onSubmit={handleSubmit}
          className='bg-transparent justify-center items-center flex p-2 rounded-full border-4 border-blue-900 mt-[40px] w-full sm:w-3/4 md:w-2/4 mx-auto shadow-[0_0_8px_2px_rgba(59,130,246,0.4)]'
        >
          <input
            type="text"
            placeholder="Enter URL of website"
            className='placeholder:opacity-40 px-5 outline-none bg-transparent w-full text-white'
            value={inputUrl}
            onChange={e => setInputUrl(e.target.value)}
          />
          <button
            type="submit"
            className='rounded-full items-center bg-gradient-to-r from-blue-700 via-blue-500 to-blue-800 text-white p-1.5 w-1/3 sm:w-1/4 md:w-1/5 font-semibold text-lg hover:bg-none hover:bg-white hover:text-blue-900 cursor-pointer transition-colors ease-in-out'
          >
            Send
          </button>
        </form>

        <div className="mt-8 flex flex-col items-center">
          {loading && (
            <div className="bg-gray-800 rounded-lg p-6 mb-6 shadow text-center w-full max-w-xl">
              <span className="text-gray-400">Analyzing page...</span>
            </div>
          )}
          {!loading && results && <Result results={results} />}
        </div>
      </section>
    </div>
  )
}

export default Home
