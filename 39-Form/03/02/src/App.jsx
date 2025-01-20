
import './App.css'
import HookForm from './Components/HookForm/HookForm'
import RefForm from './Components/RefForm/RefForm'
import ReusableForm from './Components/ReusableForm/ReusableForm'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import StatefulForm from './Components/StatefulForm/StatefulForm'

function App() {

  const handleSingUpSubmit = data => {
    console.log('sign up data', data);
    
  }
  const handleUpdateProfile = data => {
    console.log('update profile', data);
    
  }


  return (
    <>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <p>*******************************</p><br /><br />
      <ReusableForm formTitle={'Sign Up'} submitBtnText='Login' handleSubmit={handleSingUpSubmit}>
      <div>
        <h2>Sing Up Please</h2>
        <p>Please signup up right now</p>
      </div>
      </ReusableForm>
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
