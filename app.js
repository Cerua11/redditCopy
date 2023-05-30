class App extends React.Component {

    render(){
    return (
        <React.Fragment>
            <div className="menu">
                <div className="menu__logo-side">
                    <a className="menu__logo-side__link">
                        <img className="menu__logo-side__logo" src="./images/reddit-logo.png" alt="logo" />
                        <h1 className="menu__logo-side__text">Reddit</h1>
                    </a>
                    <input className="menu__logo-side__input" type="search"/>
                </div>
                <div className="menu__logo-side-second">
                    <button> <img src="./images/polling.png"/> Get App</button>
                    <button>Log In</button>
                    <button>
                        <img src="./images/user.png" alt="" />
                        <img src="./images/down-arrow.png" alt="" />
                    </button>

                </div>
                
                    
                

                
            </div>
        </React.Fragment>
    )
}
}
ReactDOM.render(<App />,
document.getElementById('root'))