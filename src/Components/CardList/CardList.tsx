import Card from '../Card/Card';

interface Props{
  // Define any props if needed
}

const CardList = () => {
  return (
    <div>
        <Card companyName='Apple' ticker='AAPL' price={100}/>
        <Card companyName='Microsoft' ticker='MSFT' price={200}/>
        <Card companyName='Samsung' ticker='SMG' price={300}/>
    </div>
  )
}

export default CardList