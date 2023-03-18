import './InputOption.css'

export const InputOption = ({Icon, Title, color})=>{
  return <div className='InputOption'>
    {<Icon style={{color: color}}/>}
    <h4 className='InputOption__title'>{Title}</h4>
  </div>
}

