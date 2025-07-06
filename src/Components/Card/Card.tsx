import './Card.css'

type Props = {
  companyName: string;
  ticker: string;
  price: number;
}

const Card = ({companyName, ticker, price}: Props) => {
  return (
    <div className='card'>
        <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYyxRDrJKhWSGOwCDdHS5K_6EOY20t0fsUFg&s" 
            alt="Image" 
        />
        <div className='details'>
            <h2>{companyName} ({ticker})</h2>
            <p>{price}</p>
        </div>
        <p className='info'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, maxime.
        </p>
    </div>
  )
}

export default Card