import './Colors.css'

function Dropdown (props)
{
    var options = [
        {
            label : 'Select Color',
            value : 'Select Color'
        },
        {
            label : 'Lime',
            value : 'lime'
        },
        {
            label : 'Lavender',
            value : 'lavender'
        },
        {
            label : 'Crimson',
            value : 'crimson'
        },
        {
            label : 'Darkblue',
            value : 'darkblue'
        },
        {
            label : 'Teal',
            value : 'teal'
        },
        {
            label : 'Rebecca Purple',
            value : 'rebeccapurple'
        },
        {
            label : 'Ghost White',
            value : 'ghostwhite'
        },
        {
            label : 'Aqua Marine',
            value : 'aquamarine'
        },
        {
            label : 'Alice Blue',
            value : 'aliceblue'
        }
    ];


    return (
        <div>
            <h1>Color Changer</h1>
            <select style={{backgroundColor:props.color}} name="colors" id="color" onChange={(e)=>{props.setColor(e.target.value)}}>
                {
                options.map(el => <option value={el.value} > {el.value}  </option>)
                }
            </select>
        </div>
      );
}

export default Dropdown;