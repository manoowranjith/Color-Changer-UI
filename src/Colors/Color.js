import './Colors.css'
function Color (props)
{
    
    return (
        <div>
            <div style={{backgroundColor:props.color}} className="Field"></div>
        </div>
      );
}

export default Color;