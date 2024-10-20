// src/components/MailboxDetails.jsx
import { useParams } from "react-router-dom"

const MailboxDetails = (props) => {
  const { mailboxes } = props
  const { mailboxId } = useParams()
  const selectedBox = mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  )
  if (selectedBox) {
    return (
      <>
        <h1>Mailbox {selectedBox._id}</h1>
        <div>
          <h3>Details</h3>
          <p>Boxholder: {selectedBox.boxholder}</p>
          <p>Box Size: {selectedBox.boxSize}</p>
        </div>
      </>
    )
  } else {
    return (
      <>
        <h1>Mailbox Not Found!</h1>
      </>
    )
  }
}

export default MailboxDetails
