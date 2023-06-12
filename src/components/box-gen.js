import React, {useState} from 'react'

const GenerateBox = (props) => {
    const [color, setColor] = useState('')
    const [arrColors, setArrColors] = useState([])    

    const handleColor = (e) =>{
        e.preventDefault();
        setArrColors([...arrColors, color])
    }

    const ConStyle = {
        display: 'flex',
        alignContent: 'center'
    }


    return(
        <div>
            <form onSubmit = {handleColor}>
                <div>
                    <label>Color: </label>
                    <input type='text' onChange = {(e) => setColor(e.target.value)}/>
                    <div></div>
                    <input type='submit' value='Add Square!'/>
                </div>
            </form>
            {arrColors.map((box, index)=>{
                return (
                    <div style={ConStyle}>
                        <div key={index} style={
                            {
                                height: '75px',
                                width: '75px',
                                margin: '10px',
                                outline: 'solid 1px black',
                                backgroundColor: `${box}`,
                            }
                        }></div>
                    </div>
                )
            })}
        </div>
    )
}
export default GenerateBox