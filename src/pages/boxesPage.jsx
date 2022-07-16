import './box.css'

function BoxesPage() {

    const boxes = {
        first: '#0af',
        second: '#e3ad23',
        third: '#d938a9',
        forth: '#38d94b',
        fifth: '#d93838',
        sixth: '#7cc8cd'
    }
    
    return (
            <div className="container">
                <div className="box  shadow" style={{backgroundColor: boxes.first}}>
                    <h1>01</h1>
                    <h2>BOX</h2>
                    <div className="clicavel" data-box='1'></div>
                </div>
                <div className="box  shadow" style={{backgroundColor: boxes.second}}>
                    <h1>02</h1>
                    <h2>BOX</h2>
                    <div className="clicavel" data-box='2'></div>
                </div>
                <div className="box  shadow" style={{backgroundColor: boxes.third}}>
                    <h1>03</h1>
                    <h2>BOX</h2>
                    <div className="clicavel" data-box='3'></div>
                </div>
                <div className="box  shadow" style={{backgroundColor: boxes.forth}}>
                    <h1>04</h1>
                    <h2>BOX</h2>
                    <div className="clicavel" data-box='4'></div>
                </div>
                <div className="box  shadow" style={{backgroundColor: boxes.fifth}}>
                    <h1>05</h1>
                    <h2>BOX</h2>
                    <div className="clicavel" data-box='5'></div>
                </div>
                <div className="box  shadow" style={{backgroundColor: boxes.sixth}}>
                    <h1>06</h1>
                    <h2>BOX</h2>
                    <div className="clicavel" data-box='6'></div>
                </div>
            </div>
    )
}
export default BoxesPage