import React, { useEffect, useState } from 'react';
import JournalEntries from './JournalEntries';
import EntryForm from './EntryForm';

const App = () => {
  const[entries, setEntries] = useState([])
  const[countries, setCountries] = useState([])
  const[selectedCountry, setSelectedCountry] = useState('')
  const[currentComment, setCurrentComment] = useState('')

  useEffect(() => {
      fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data => setCountries(data))
        .catch(error => console.log('Error fetching countries:', error))
  }, [])

  const addEntry = () => {
    if(selectedCountry && currentComment) {
          const newEntry = {country: selectedCountry, comment: currentComment}
          setEntries([newEntry, ...entries])
          setSelectedCountry('')
          setCurrentComment('')
    }
  }

  const onDeleteEntry = (index) => {
    const UpdatedEntries = entries.filter((_, i) => i !== index);
    setEntries(UpdatedEntries);
  }

  const onUpdateEntry = (id, newComment) => {
    const UpdatedEntries = entries.map((entry) => entry.id === id ? {...entry, comment: newComment} : entry);
    setEntries(UpdatedEntries)
  };
  
  return(
    <div className='container'>
      <div className='left-container'>
        <div className='title-container'>
          <h1 className='title'>Traveling Journal</h1>
        </div>
        <div className='left-bottom-container'>
          <EntryForm 
              selectedCountry={selectedCountry} 
              setSelectedCountry={setSelectedCountry}
              setCurrentComment={setCurrentComment} 
              currentComment={currentComment}
              addEntry={addEntry}
              countries={countries}
          />   
        </div>
      </div>
      <div className='right-container'>
        <div>
          <JournalEntries 
            entries={entries}
            onDelete={onDeleteEntry}
            onUpdate={onUpdateEntry}
          />
        </div>
      </div>
    </div>
  )
}

export default App;

