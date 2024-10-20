// src/components/MailboxForm.jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const MailboxForm = (props) => {
  const navigate = useNavigate()

  const [newMailbox, setnewMailbox] = useState({
    boxholder: '',
    boxSize: 'Small',
  })

  const handleInputChange = (event) => {
    setnewMailbox({ ...newMailbox, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.addMailbox(newMailbox)
    navigate('/mailboxes')
  }
  return (
    <>
      <h1>New Mailbox</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxholder">Enter a Boxholder: </label>
        <input id="boxholder" 
          name="boxholder" 
          value={newMailbox.boxholder}
          onChange={handleInputChange}
          placeholder="Boxholder name"
        />

        <label htmlFor="boxSize">Select a Box Size: </label>
        <select id="boxSize" 
          name="boxSize" 
          value={newMailbox.boxSize}
          onChange={handleInputChange}
          placeholder="Box size"
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default MailboxForm
