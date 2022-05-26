import logo from './logo.svg';
import './App.scss';

function App() {
    return (
        <Header/>
    );
}

function Header() {
    return (
        <header className='header'>
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="#" width='50'/>
                </div>
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="list-item"><a className='list-link' href="#">Product</a></li>
                        <li className="list-item"><a className='list-link' href="#">Customers</a></li>
                        <li className="list-item"><a className='list-link' href="#">Pricing</a></li>
                        <li className="list-item"><a className='list-link' href="#">Resources</a></li>
                    </ul>
                    <div className="btn-holder">
                        <button className="btn-white" onClick={() => {
                            console.log('client sign up')
                        }}><a className='btn-white-link' href="#">Sign In</a></button>
                        <button className="btn-orange"><a className='btn-orange-link' href="#">Sign Up </a></button>
                    </div>
                </nav>
                <button className="nav-opener" onClick={() => {
                    let header = document.querySelector('.header');
                    let navOpenBtn = document.querySelector('.nav-opener');

                    header.classList.toggle('active');
                }}>
                    <span></span>
                </button>
            </div>
        </header>

    );
}


export default App;
