import './Square.css'

const Square = ({pushUser, player}) => {
  /*props={
  /  player: 'asdaasda'
  }*/ //! En vez de hacer esto! directamente le hago destructuring en el parametro
  return ( 
    <>
      <button onClick={pushUser} className="square m">{player}</button>
    </>
   );
}
 
export default Square;