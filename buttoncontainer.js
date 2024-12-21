const Button=()=>{
    return <div className="btn-flex"> 
        <div>
            <button className="btn-items">All</button>
        </div>
        <div>
            <button className="btn-items">Telugu Entertainment</button>
        </div>
        <div>
            <button className="btn-items">Dhee</button>
        </div>
        <div>
            <button className="btn-items">Jabardast</button>
        </div>
        <div>
            <button className="btn-items">Sudigali Sudheer</button>
        </div>
        <div>
            <button className="btn-items">Comedy</button>
        </div>
        <div>
            <button className="btn-items">Horror</button>
        </div>
        <div>
            <button className="btn-items">Melody Songs</button>
        </div>
        <div>
            <button className="btn-items">Mixes</button>
        </div>
        
    </div>
}
const ButtonContainer=()=>{
    return <div className="btncontainer">
        <Button/>

    </div>
}
export default  ButtonContainer;