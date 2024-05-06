import LoginForm from "./LoginForm";
import Logo from '../carxLogo.png'

const EnterPage = () => {
    return (
        <div className="enter-page-container">
            <header className="enter-page-header">
                    <img className="logo" src={Logo} alt="Logo"></img>
                    <h1 className="text-container">
                        CarX - For today's busy driver who wants to manage all matters related to their car in one place.
                    </h1>
            </header>
            <main>
                <LoginForm/>

            </main>
            <footer>

            </footer>

        </div>

    );
}

export default EnterPage