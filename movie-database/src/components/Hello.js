function Hello(props) {
    console.log(props);
    
    // melakukan destructing
    const {name} = props;
    // didalam return adalah JSX
    return(
        <div className="hello">
            <h2>Hello React</h2>
            <p> Saya{name} - Frontend Engginer</p>
        </div>
    );
}

export default Hello;