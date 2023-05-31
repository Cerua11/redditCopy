
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
                    <div className="menu__logo-side__input-side">
                        <label className="menu__logo-side__label" htmlFor="header-search-bar">
                            <img className="menu__logo-side__img"  src="./images/transparency.png"/>
                        </label>
                        <input placeholder="Search Reddit" className="menu__logo-side__input" type="search" id="header-search-bar"/>
                    </div>
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

            <div className="left-side">
                <div className="left-side__heading">
                    <span>FEEDS</span>
                </div>
                <button>
                    <a className="left-side__link"href="">
                        <img src="./images/left-side/circle-arrows.png" alt="" />
                        <span>Popular</span>
                    </a>
                </button>
                <div className="left-side__heading">
                    <span>TOPICS</span>
                </div>
                <button>
                    <a className="left-side__link"href="">
                        <img src="./images/left-side/circle-arrows.png" alt="" />
                        <span>Gaming</span>
                    </a>
                </button>
                <button>
                    <a className="left-side__link"href="">
                        <img src="./images/left-side/circle-arrows.png" alt="" />
                        <span>Sports</span>
                    </a>
                </button>
                <button>
                    <a className="left-side__link"href="">
                        <img src="./images/left-side/circle-arrows.png" alt="" />
                        <span>Buisness, Economics</span>
                    </a>
                </button>
                <button>
                    <a className="left-side__link"href="">
                        <img src="./images/left-side/circle-arrows.png" alt="" />
                        <span>Crypto</span>
                    </a>
                </button>
                <button>
                    <a className="left-side__link"href="">
                        <img src="./images/left-side/circle-arrows.png" alt="" />
                        <span>Television</span>
                    </a>
                </button>
                <button>
                    <a className="left-side__link"href="">
                        <img src="./images/left-side/circle-arrows.png" alt="" />
                        <span>Celebrity</span>
                    </a>
                </button>
                <button>
                    <a className="left-side__link"href="">
                        <img src="./images/left-side/circle-arrows.png" alt="" />
                        <span>More Topics</span>
                    </a>
                </button>
            </div>
        </React.Fragment>
    )
}
}
ReactDOM.render(<App />,
document.getElementById('root'))