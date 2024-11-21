

export default function Service({transferProps}) {

    console.log(transferProps);
    

  return (
    <div>
      <h2>This is Service Page</h2>
      {/* <button onClick={()=>transferProps("Service theke Parent e Data Pass korlam")}>Click from Service</button> */}
      <button onClick={()=>transferProps(88)}>Click from Service</button>
    </div>
  )
}
