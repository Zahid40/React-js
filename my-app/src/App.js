import './App.css';
import './App2.css';

function App() {
  return (
    <>
    <nav className="">
        <div>
            <a href="/index.html">
                <div id="logo"></div>
            </a>
            <ul id="navi">
                <li><a href="/">Models</a></li>
                <li><a href="/">Textures</a></li>
                <li><a href="/">Edits</a></li>
            </ul>
            <div>
                <i className="fa fa-sun-o"></i>
            </div>
        </div>
        <div>
            <button className="btn" id="Login">Login</button>
            <button className="btn" id="sign">Sign Up</button>
            <button className="btn" id="cart"><i className="fa fa-cart-arrow-down"></i></button>
        </div>

        <div className="burger">
            <i className="fa fa-bars"></i>
        </div>
        <div className="sidebarnav">
            <div className="oologo"></div>
            <div id="logo"></div>
            <ul id="navi">
                <li><a href="/">Models</a></li>
                <li><a href="/">Textures</a></li>
                <li><a href="/">Edits</a></li>
            </ul>

            <div>
                <button className="btn" id="Login">Login</button>
                <button className="btn" id="sign">Sign Up</button>
                <button className="btn" id="cart"><i className="fa fa-cart-arrow-down"></i></button>
            </div>
        </div>
    </nav>

    <section className="hero">
        <div></div>
    </section>

    <section className="itemrow">
        <div className="item" id="item1">
            <div>
                <h2>Models</h2>
                <button className="btn" id="btnitm1"><i className="fa fa-arrow-right"></i></button>
            </div>
        </div>
        <div className="item" id="item2">
            <div>
                <h2>Textures</h2>
                <button className="btn" id="btnitm1"><i className="fa fa-arrow-right"></i></button>
            </div>
        </div>
        <div className="item" id="item3">
            <div>
                <h2>Edits</h2>
                <button className="btn" id="btnitm1"><i className="fa fa-arrow-right"></i></button>
            </div>
        </div>
    </section>

    <section className="assetshow">
        <div id="show"></div>
        <div id="show-text">
            <h1>Our showcases</h1>
            <p>3D Show cases related to projects.</p>
            <button className="btn" id="sign">Sign Up</button>
        </div>

    </section>

    
    <footer>
        <div id="insidewall">
            <div className="details">
                <div id="logo"></div>
                <p className="cont1">A platform dedicated to providing high-quality services and a wide range of creative
                    resources.</p>
                <p className="cont2">Unleash your creativity with our high-quality surface rendering services and creative
                    resources. Discover 3D models, textures, and design assets tailored to architects, designers, and
                    artists. Join our vibrant community at surfacerender.github.io and elevate your projects to new
                    heights.</p>
            </div>
            <div className="linkdata">
                <div className="datatable">
                    <ul>
                        <li className="datahead">Assets</li>
                        <li><a href="/">Models</a></li>
                        <li><a href="/">Textures</a></li>
                        <li><a href="/">Edits</a></li>
                    </ul>
                    <ul>
                        <li className="datahead">Software Links</li>
                        <li><a href="https://www.blender.org/download/" target="_blank" rel="noreferrer">Blender</a></li>
                        <li><a href="https://www.adobe.com/in/products/photoshop.html?gclid=CjwKCAjwg-GjBhBnEiwAMUvNW8StI5zvtscy4FZqvbR5Uw7zVZMrdWrakcA8JOriKe_TI6sk4zoTVxoCCioQAvD_BwE&sdid=SGDJMMG3&mv=search&ef_id=CjwKCAjwg-GjBhBnEiwAMUvNW8StI5zvtscy4FZqvbR5Uw7zVZMrdWrakcA8JOriKe_TI6sk4zoTVxoCCioQAvD_BwE:G:s&s_kwcid=AL!3085!3!444587838671!e!!g!!photoshop%20download!221442788!17534777948"
                                target="_blank" rel="noreferrer">Photoshope</a></li>
                    </ul>
                    <ul>
                        <li className="datahead">Account</li>
                        <li><a href="/">Login</a></li>
                        <li><a href="/">Sign Up</a></li>
                    </ul>
                    <ul>
                        <li className="datahead">Help ?</li>
                        <li><a href="mailto:surfacerender1@gmail.com" target="_blank" rel="noreferrer">Contact us</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="social">
            <div className="socialmedia">
                <div className="socialicons">
                    <a href="https://github.com/surfacerender">
                        <i className="fa fa-github"></i>
                    </a>
                    <a href="/">
                        <i className="fa fa-instagram"></i>
                    </a>

                </div>
                <span id="copyright">
                    © Copyright 2023 surfacerender
                </span>
            </div>
            <span id="terms">
                <ul>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>License</li>
                </ul>
            </span>
        </div>
    </footer>
    </>
  );
}

export default App;
