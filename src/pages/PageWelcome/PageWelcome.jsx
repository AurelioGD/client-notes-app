import './PageWelcome.css'
const PageWelcome = ({user}) => {
    return (
        <div className="page-welcome">
            <h2 className="page-welcome__title">Welcome {user}!</h2>
            <h3 className="page-welcome__subtitle">Remember this!</h3>
            <div className="page-welcome__card">
                <p>It 's amazing what you can do when you try (Es increíble lo que puedes lograr cuando lo intentas).</p>
            </div>
        </div>
    )
}

export default PageWelcome;
