import './PageWelcome.css'
import CompleteNav from '../../components/CompleteNav/CompleteNav';

import { useEffect, useState } from 'react';

const PageWelcome = () => {

    const [user, setUser] = useState('Desconocido')
    const [phrase, setPhrase] = useState({})
    const API_PHRASES='https://quotes.rest/qod/inspire';

    useEffect(()=>{
        const dataUser= JSON.parse(localStorage.getItem('userInfoSession'))
        setUser(dataUser.name)
    },[])

    useEffect(()=>{
        fetch(API_PHRASES)
            .then(rawData=>rawData.json())
            .then(data=>setPhrase(data.contents.quotes[0]))
    },[])


    return (
        <>
            <CompleteNav/>
            <main className="page-welcome">
                <h2 className="page-welcome__title">Welcome {user}!</h2>
                <h3 className="page-welcome__subtitle">Remember this!</h3>
                <div className="page-welcome__card">
                    <p>{phrase.quote}</p>
                </div>
            </main>
        </>
    )
}

export default PageWelcome;
