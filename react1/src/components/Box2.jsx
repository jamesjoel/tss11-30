let Box2 = ()=>{

    let Styles = {
        container : {
            backgroundColor : "green"
        },
        ul : {
            margin : 0,
            padding : 0,
            listStyle : "none"
        },
        li : {
           float : "left" 
        },
        link : {
            backgroundColor : "#fff",
            color : "#000",
            textDecoration : "none",
            display : "inline-block",
            padding : "10px"
        }
    }


    return(
        <>
        <div style={Styles.container}>
            <ul style={Styles.ul}>
                <li style={Styles.li}>
                    <a style={Styles.link} href="">Home</a>
                </li>
                <li  style={Styles.li}>
                    <a style={Styles.link} href="">About</a>
                </li>
                <li  style={Styles.li}>
                    <a style={Styles.link} href="">Contact</a>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Box2;