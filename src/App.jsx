// src/App.jsx
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

// components
import NavBar from './components/NavBar'
import MailboxList from './components/MailboxList'
import MailboxForm from './components/MailboxForm'
import MailboxDetails from './components/MailboxDetails'

const App = () => {
  const [mailboxes, setMailboxes] = useState([])

  const addBox = (mailbox) => {
    mailbox._id = mailboxes.length + 1
    setMailboxes([...mailboxes, mailbox])
  }

  return (
    <main>
      <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addMailbox={mailbox => addBox(mailbox)} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
      </Routes>
    </main>
  )
}

export default App