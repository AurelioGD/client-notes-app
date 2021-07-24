import './PageWelcome.css'
import CompleteNav from '../../components/CompleteNav/CompleteNav';
const PageWelcome = ({user="Desconocido"}) => {
    return (
        <>
            <CompleteNav/>
            <main className="page-welcome">
                <h2 className="page-welcome__title">Welcome {user}!</h2>
                <h3 className="page-welcome__subtitle">Remember this!</h3>
                <div className="page-welcome__card">
                    <p>It 's amazing what you can do when you try (Es increíble lo que puedes lograr cuando lo intentas).</p>
                </div>
            </main>
        </>
    )
}

export default PageWelcome;
