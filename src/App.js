import React, { useEffect, useState } from 'react';

function App() {
  const [frequentSites, setFrequentSites] = useState([]);

  useEffect(() => {
    if (window.chrome && chrome.storage) {
      chrome.storage.local.get('frequentSites', (data) => {
        if (data.frequentSites) {
          setFrequentSites(data.frequentSites);
        }
      });
    }
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Frequently Visited Websites</h1>
      <ul className="list-disc pl-5">
        {frequentSites.map((site) => (
          <li key={site.id} className="mb-2">
            <a href={site.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              {site.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
