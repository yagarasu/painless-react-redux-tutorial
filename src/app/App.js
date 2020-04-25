import React from 'react';
import './App.css';
import SearchPage from 'features/search/SearchPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Githubby
      </header>
      <main className="App-main">
        <SearchPage />
      </main>
    </div>
  );
}

export default App;
