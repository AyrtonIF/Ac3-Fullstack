import React, {useState} from 'react';

function Api() {

    const [numberOfUsers, setnumberOfUsers] = useState(0)
    const [data, setData] = useState([]);

    const getData=()=>{
        fetch('http://localhost:3000/v1/aula/consultar', {mode: 'no-cors'})
        .then(function(response){
            console.log('1')
            setnumberOfUsers(response.json.length)
            setData(JSON.parse(response.json()));
        })
        .then(function(myJson){
            console.log('2')
            setData(myJson)
        });
    }

    return (
        <div className="Api">
        
        <div style={{backgroundColor:'green'}} className="display-board">
            <h4 style={{color:'white'}}>User Created</h4>
            <div className="number">
            {numberOfUsers}
            </div>
            <div className="btn">
                <button type="button" onClick={(e) => getData()} className="btn btn-warning">Get all User</button>
            </div>
        </div>
        </div>
    )
}

export default Api;