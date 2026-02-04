import * as Dialog from '@radix-ui/react-dialog'
import './App.css'

const textFields = [
  {
    id: 'firstName',
    label: 'First name',
    type: 'text',
    placeholder: 'Avery',
    autoComplete: 'given-name',
  },
  {
    id: 'lastName',
    label: 'Last name',
    type: 'text',
    placeholder: 'Morgan',
    autoComplete: 'family-name',
  },
  {
    id: 'email',
    label: 'Email address',
    type: 'email',
    placeholder: 'avery@email.com',
    autoComplete: 'email',
  },
  {
    id: 'phone',
    label: 'Phone number',
    type: 'tel',
    placeholder: '+1 (415) 555-1010',
    autoComplete: 'tel',
  },
  {
    id: 'company',
    label: 'Company',
    type: 'text',
    placeholder: 'Atlas Studio',
    autoComplete: 'organization',
  },
  {
    id: 'title',
    label: 'Job title',
    type: 'text',
    placeholder: 'Product designer',
    autoComplete: 'organization-title',
  },
  {
    id: 'website',
    label: 'Website',
    type: 'url',
    placeholder: 'https://example.com',
    autoComplete: 'url',
  },
  {
    id: 'birthday',
    label: 'Birthday',
    type: 'date',
    placeholder: '',
    autoComplete: 'bday',
  },
  {
    id: 'address',
    label: 'Street address',
    type: 'text',
    placeholder: '123 Market Street',
    autoComplete: 'street-address',
  },
  {
    id: 'city',
    label: 'City',
    type: 'text',
    placeholder: 'San Francisco',
    autoComplete: 'address-level2',
  },
  {
    id: 'region',
    label: 'State / Region',
    type: 'text',
    placeholder: 'California',
    autoComplete: 'address-level1',
  },
  {
    id: 'postal',
    label: 'Postal code',
    type: 'text',
    placeholder: '94103',
    autoComplete: 'postal-code',
    inputMode: 'numeric',
  },
  {
    id: 'experience',
    label: 'Years of experience',
    type: 'text',
    placeholder: '8',
    inputMode: 'numeric',
    pattern: '[0-9]*',
  },
  {
    id: 'emergencyName',
    label: 'Emergency contact name',
    type: 'text',
    placeholder: 'Sam Rivera',
  },
  {
    id: 'emergencyPhone',
    label: 'Emergency contact phone',
    type: 'tel',
    placeholder: '+1 (415) 555-2020',
  },
]

function App() {
  return (
    <div className="page">
      <div className="hero">
        <span className="badge">Mobile form lab</span>
        <h1>Radix Dialog + Scrollable Form</h1>
        <p>
          Open the dialog on a phone and scroll through every input with the
          keyboard open. The form area is the only scroll container so iOS and
          Android can keep focused fields visible.
        </p>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="button primary">Open the form</button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="dialog-overlay" />
            <Dialog.Content className="dialog-content">
              <div className="dialog-header">
                <div>
                  <Dialog.Title className="dialog-title">
                    Onboarding details
                  </Dialog.Title>
                  <Dialog.Description className="dialog-description">
                    Fill this out on mobile to test keyboard behavior. Every
                    field should remain reachable when the keyboard is open.
                  </Dialog.Description>
                </div>
                <Dialog.Close asChild>
                  <button
                    className="icon-button"
                    type="button"
                    aria-label="Close"
                  >
                    ×
                  </button>
                </Dialog.Close>
              </div>

              <form
                id="dialog-form"
                className="dialog-form"
                onSubmit={(event) => event.preventDefault()}
              >
                {textFields.map((field) => (
                  <div className="field" key={field.id}>
                    <label htmlFor={field.id}>{field.label}</label>
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      autoComplete={field.autoComplete}
                      inputMode={field.inputMode}
                      pattern={field.pattern}
                    />
                  </div>
                ))}

                <div className="field">
                  <label htmlFor="country">Country</label>
                  <select id="country" name="country" defaultValue="">
                    <option value="" disabled>
                      Select a country
                    </option>
                    <option value="us">United States</option>
                    <option value="ca">Canada</option>
                    <option value="mx">Mexico</option>
                    <option value="gb">United Kingdom</option>
                    <option value="de">Germany</option>
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="timezone">Time zone</label>
                  <select id="timezone" name="timezone" defaultValue="">
                    <option value="" disabled>
                      Select a time zone
                    </option>
                    <option value="pt">Pacific Time (UTC-8)</option>
                    <option value="mt">Mountain Time (UTC-7)</option>
                    <option value="ct">Central Time (UTC-6)</option>
                    <option value="et">Eastern Time (UTC-5)</option>
                    <option value="gmt">GMT (UTC+0)</option>
                  </select>
                </div>

                <fieldset className="fieldset">
                  <legend>Preferences</legend>
                  <label className="checkbox-row">
                    <input type="checkbox" name="updates" defaultChecked />
                    Product updates by email
                  </label>
                  <label className="checkbox-row">
                    <input type="checkbox" name="sms" />
                    SMS notifications for reminders
                  </label>
                  <label className="checkbox-row">
                    <input type="checkbox" name="calendar" />
                    Add important dates to calendar
                  </label>
                </fieldset>

                <div className="field">
                  <label htmlFor="accessibility">Accessibility needs</label>
                  <textarea
                    id="accessibility"
                    name="accessibility"
                    rows={3}
                    placeholder="VoiceOver preferences, caption needs, mobility notes..."
                  />
                </div>

                <div className="field">
                  <label htmlFor="notes">Additional notes</label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    placeholder="Anything else we should know?"
                  />
                </div>
              </form>

              <div className="dialog-footer">
                <button className="button ghost" type="button">
                  Save draft
                </button>
                <button
                  className="button primary"
                  type="submit"
                  form="dialog-form"
                >
                  Submit form
                </button>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </div>
  )
}

export default App
