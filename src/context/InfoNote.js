import noteContext from "./noteContext";
import { useState } from 'react'
export default function InfoNote({children}){

    const [notes, setNotes] = useState([])

    return <noteContext.Provider value={{notes,setNotes}}>
        {children}
    </noteContext.Provider>
}