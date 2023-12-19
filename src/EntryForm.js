const EntryForm = ({ selectedCountry, setSelectedCountry, setCurrentComment, currentComment, addEntry, countries }) => {
   return(
      <div className="entryform-container">
          <h2>Where have you been?</h2>
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            <option value="">Select a country</option>
            {countries.map((country, index) => (
              <option key={index} value={country.name.common}>{country.name.common}</option>
            ))}
          </select>
          <h2>How was it?</h2>
          <textarea
            placeholder='Leave Your Comment'
            value={currentComment}
            onChange={(e) => setCurrentComment(e.target.value)}
            className="entryform-textarea"
          />
          <button onClick={addEntry} className="add-button">Add</button>
      </div>
   )
}

export default EntryForm;