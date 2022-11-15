import React from 'react'
import {auth} from '../firebase'

const style = {
    button: `px-4 py-2 text-white`
}


const LogOut = () => {
const signOut = () => {
    signOut(auth)
}

  return (
    <button onClick={() => auth.signOut()} className={style.button}>
        Logout
    </button>
  )
}

export default LogOut