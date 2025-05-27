import './App.css'

import ReusableForm from './Components/ReusableForm/ReusableForm'

function App() {

  const handleSingUpSubmit = data => {
    console.log('sign up data', data);

  }
  const handleUpdateProfile = data => {
    console.log('update profile', data);

  }

  return (
    <>

      <ReusableForm formTitle={'Sign Up'} submitBtnText='Login' handleSubmit={handleSingUpSubmit}>
        <div>
          <h2>Sing Up Please</h2>
          <p>Please signup up right now</p>
        </div>
      </ReusableForm>

      <br/>
      <span>**************************************************</span>

      <ReusableForm formTitle={'Profile Update'} submitBtnText='Update' handleSubmit={handleUpdateProfile}>
        <div>
          <h2>Update Profile Please</h2>
          <p>Always keep your profile updated</p>
        </div>
      </ReusableForm>

    </>
  )
}

export default App
