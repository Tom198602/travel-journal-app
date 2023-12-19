import React, { useState } from 'react';

const EntryUpdatedForm = ({ entry, onUpdate }) => {
   const [updatedComment, setUpdatedComment] = useState(entry.comment)
   const [showTextarea, setShowTextArea] = useState(false)

   const handleUpdate = () => {
      onUpdate(entry.id, updatedComment)
      setShowTextArea(false)
   }

   const toggleTextarea = () => {
      setShowTextArea(true)
   }

   return(
      <div>
         {!showTextarea ? (
            <button onClick={toggleTextarea}>Edit Comment</button>
         ) : (
            <div className='edit-comment'>
               <textarea
                  value={updatedComment}
                  onChange={(e) => setUpdatedComment(e.target.value)}
               />
               <button onClick={handleUpdate}>Update</button>
            </div>
         )}
         </div>
   )
}

export default EntryUpdatedForm;