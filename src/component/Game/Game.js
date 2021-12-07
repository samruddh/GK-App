import React, {useState, useEffect} from 'react';
import './Game.css'
//import { getData } from '../../Service/api'

export default function Game() {

    const [data, setData] = useState([]);
    const [ans, setAns] = useState();
    const [input,setInput] = useState();
    const [final,setFinal] = useState();

    async function getData() {
    const response = await fetch('https://jservice.io/api/random');
    const data = await response.json();
    setData(data) ;
    var anstemp = data[0].answer;
    setAns(anstemp);
    }
    
    // var apidata = getData();
    // console.log(apidata);
    // setData(apidata) ;
    // var anstemp = apidata[0].answer;
    // setAns(anstemp);

    function check(e){
        if(ans===input){
          setFinal('Correct! Best of luck for next Question')
        }
        else{
          setFinal('Wrong! Try next to give next answer'); 
        }
        getData();
        setInput('')
        setTimeout(function(){setFinal('')}, 2000);
    }

    useEffect(() => {
        getData()  
    }, []);

    if(!data) return '...Loading'

    return (
        <div className="main">
            <div className='question'>
                <h3>{data.map((ans,key)=>(
                    <div key={key}>
                        <h3>Q. {ans.question}</h3>
                    </div>))}
                </h3>
            </div>
            <div className='inputs'>
                <h4>Enter your answer:</h4>
                <input value={input} onChange={(e)=>setInput(e.target.value)}></input>
                <button onClick={()=>check()}>Submit Answer</button>
            </div>
            <div className="reaction">
                <h4>{final}</h4>
            </div>
            <div className="answer">
                <h3>for Refrence: {ans}</h3>
            </div>
        </div>
    )
}
