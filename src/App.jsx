import { useState, useEffect } from 'react'
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Result from './components/Result';

function App() {
  const [url, setUrl] = useState('');
  const [inputUrl, setInputUrl] = useState('');
  const [HTML, setHTML] = useState('');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch HTML when url changes
  useEffect(() => {
    if (!url) return;
    setLoading(true);
    setResults(null);
    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`)
      .then(response => {
        if (response.ok) return response.json()
        throw new Error('Network response was not ok.')
      })
      .then(data => setHTML(data.contents))
      .catch(err => {
        setHTML('');
        setResults(null);
        setLoading(false);
        alert('Failed to fetch the website. Please check the URL.');
      });
  }, [url]);

  // Analyze HTML when it changes
  useEffect(() => {
    if (!HTML) {
      setLoading(false);
      return;
    }
    const parser = new DOMParser();
    const doc = parser.parseFromString(HTML, 'text/html');

    const imagesWithoutAlt = [...doc.querySelectorAll('img')].filter(
      img => !img.hasAttribute('alt') || img.getAttribute('alt').trim() === ''
    );
    const imagesWithBadAlt = [...doc.querySelectorAll('img')].filter(
      img => {
        const alt = img.getAttribute('alt');
        return alt && /^(image|photo|picture)$/i.test(alt.trim());
      }
    );
    const linksWithoutText = [...doc.querySelectorAll('a')].filter(
      a => !a.textContent.trim() || /^(click here|read more)$/i.test(a.textContent.trim())
    );
    const htmlTag = doc.querySelector('html');
    const missingLang = !htmlTag || !htmlTag.hasAttribute('lang');
    const titleTag = doc.querySelector('title');
    const missingTitle = !titleTag || !titleTag.textContent.trim();
    const metaDescription = doc.querySelector('meta[name="description"]');
    const missingMetaDescription = !metaDescription || !metaDescription.getAttribute('content');
    const h1s = doc.querySelectorAll('h1');
    const missingH1 = h1s.length === 0;
    const buttonsWithoutLabel = [...doc.querySelectorAll('button')].filter(
      btn => !btn.textContent.trim() && !btn.getAttribute('aria-label')
    );

    setResults({
      imagesWithoutAlt,
      imagesWithBadAlt,
      linksWithoutText,
      missingLang,
      missingTitle,
      missingMetaDescription,
      missingH1,
      buttonsWithoutLabel
    });
    setLoading(false);
  }, [HTML]);

  // Handle form submit (to be used in Home)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputUrl.trim()) return;
    setUrl(inputUrl.trim());
  };

  return (
    <div>
      <Header />
      <div className='text-white w-full  p-5 '>
       
        <Routes>
          <Route
            path="/"
            element={
              <Home
                inputUrl={inputUrl}
                setInputUrl={setInputUrl}
                handleSubmit={handleSubmit}
                loading={loading}
                results={results}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
