console.log("Mulai React");

function Hello(props) {
    console.log(props);
    
    // melakukan detructing
    const {name} = props;
    // didalam return adalah JSX
    return(
        <div className="hello">
            <h2>Hello React</h2>
            <p> Saya{name} - Frontend Engginer</p>
        </div>
    );
}

function Header() {
    return(
    <nav>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
    
    );
}

function Main() {
    return (
        <main>
            <Hello name="Serly" />
            <Hello name="Serlyo"  />
            <Hello name="Serlyok" />
            <Hello name="Serlyokt"  />
            <Hello name="Serlyokta"  />
        </main>
    );
}


function Footer () {
    return (
        <footer>
            <h2>Copyright @serly</h2>
            <p>Created by React.js</p>
        </footer>
    );
}


function App() {
    return(
        <div>
            <Header />
            <Main />
            <Footer />
        </div>        
    );
}


ReactDOM.render(<App />, document.getElementById("root"));
