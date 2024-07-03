function HomePage() {

    return (
    <div>
        <header className="hearder">
            
            <nav className="nav_bar">
                <div className="company">Progress</div>
                <ul className="list">
                    <li>Home</li>
                    <li>About</li>
                    <li>Info</li>
                    <li>Blog</li>
                </ul>
                <button className="btn login">Login</button>
            </nav>
           <div className="text">
                <div className="text-page">
                    <h1>Beauty Of Success</h1>
                    <p>The best is yet to come, and I trust my bossom to build a ladder.</p>
                    <div>
                        <button className="btn more">More</button>
                        <button className="btn more">Info</button>
                    </div>
                </div>
                <div>
                    <img src="https://www.scholarshipregion.com/wp-content/uploads/2022/03/bulb-fellowship.png" alt="img" width="450px"/>
                </div>
           </div>
        </header>
    </div>
    );
}


export default HomePage;