// src/components/MailboxList.jsx
import { Link } from 'react-router-dom'

const MailboxList = (props) => {
  const { mailboxes } = props
  return (
    <>
      <h1>Mailbox List</h1>
      <ul>
        {mailboxes.map(function(mailbox, index) {
          return (
          <li className="mail-box" key={index}>
            <Link to={`/mailboxes/${mailbox._id}`}>Mailbox {mailbox._id}</Link>
          </li>
          )
        })}
      </ul>
    </>
  )
}

export default MailboxList