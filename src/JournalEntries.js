import EntryUpdatedForm from "./EntryUpdatedForm";

const JournalEntries = ({ entries, onDelete, onUpdate }) => {
   return(
      <div>
      {entries.map((entry, index) => (
      <div key={index}>
         <h2>{entry.country}</h2>
         <p>{entry.comment}</p>
         <button onClick={() => onDelete(index)}>Delete</button>
         <EntryUpdatedForm entry={entry} onUpdate={onUpdate}/>
      </div>
      ))}
   </div>
   )
}

export default JournalEntries;