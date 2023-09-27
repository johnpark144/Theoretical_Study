// ########### Questions #############################################################################
// Name field
// Email field
// Message field. Since the message can be long, using a <textarea> will be more suitable.
// Submit button
// Contains the text "Send".
// Clicking on the submit button submits the form.

// ########### Solution #############################################################################
import './styles.css';
import submitForm from './submitForm';

export default function App() {
  return (
    <form
      onSubmit={submitForm}
      action='https://www.greatfrontend.com/api/questions/contact-form'
      method='post'
    >
      <div>
        {/* label의 htmlFor과 input의 id가 연결되 있어야함 */}
        <label htmlFor='name-input'>Name</label>
        <input id='name-input' name='name' type='text' />
      </div>
      <div>
        <label htmlFor='email-input'>Email</label>
        <input id='email-input' name='email' type='email' />
      </div>
      <div>
        <label htmlFor='message-input'>Message</label>
        <textarea id='message-input' name='message'></textarea>
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
}
