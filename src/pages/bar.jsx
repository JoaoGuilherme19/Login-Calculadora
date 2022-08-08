import "./bar.css"
function Bar() {

    function barCount(e) {
        const barraAtual = e.target.offsetParent.children[1].value
        const barraMax = e.target.offsetParent.children[2].value
        const bar = e.target.offsetParent.firstChild.children[0]
        const qtd = (barraAtual * 100) / barraMax
        bar.style.width = `${qtd}%`

        
        console.log(qtd);
    }

    return(

        <div className="bars">
            <div className="life-container">
                <h1>Vida</h1>
                <div className="bar-container">
                    <div className="barAround">
                        <div className="bar life"></div>
                    </div>
                    <input 
                    type="number" 
                    data-atual 
                    className="atual"
                    onChange={barCount}
                    placeholder="Atual"
                    min="0"/>
                    <input 
                    type="number" 
                    data-max 
                    className="maximo"
                    onChange={barCount}
                    placeholder="Max"
                    min="0"/>
                </div>
            </div>
            <div className="life-container">
                <h1>Sanidade</h1>
                <div className="bar-container">
                    <div className="barAround">
                        <div className="bar sanity"></div>
                    </div>
                    <input 
                    type="number" 
                    data-atual 
                    className="atual"
                    onChange={barCount}
                    placeholder="Atual"
                    min="0"/>
                    <input 
                    type="number" 
                    data-max 
                    className="maximo"
                    onChange={barCount}
                    placeholder="Max"
                    min="0"/>
                </div>
            </div>
        </div>

    )
}

export default Bar