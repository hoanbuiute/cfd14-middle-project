
import React, { useEffect } from 'react'
import Button from '../../components/Button'
import { connect, useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from '../../store/actions/couterAction'
import { fetchRandomDog } from '../../store/actions/dogAction'

const DemoRedux = () => {
  // console.log("increment",increment);
  // console.log("decrement",decrement);

  // const{increment,decrement,couters} = props || {};
  // console.log("props",props)
  const {initCouter} = useSelector((state)=> state.counter)
  const dog =useSelector((state)=> state.dog)
  // console.log("dog",dog)

  const {message} = dog || "";


  const dispatch = useDispatch();
  // console.log("dispatch",dispatch)

 useEffect(() => {
  dispatch(fetchRandomDog())
 }, [])
 
 const handleChange = () =>{
  dispatch(fetchRandomDog())
 }
  // console.log("dispath",dispath)

  return (
<main className="mainwrapper blog --ptop">
  <div className="container">
    <div className="textbox">
      <div className="container">
        <h2 className="title --t2">Blog</h2>
      </div>
    </div>
    <div className="blog__menu">
      <a href="#" className="blog__menu-item active">Tất cả</a>
      <a href="#" className="blog__menu-item">Tin tức</a>
      <a href="#" className="blog__menu-item">Dev</a>
      <a href="#" className="blog__menu-item">Design</a>
      <a href="#" className="blog__menu-item">Tài Nguyên</a>
    </div>
  

    <div className="container">
        <h1>Courter: {initCouter}</h1>
        <Button onClick={()=>dispatch(increment(10))} >+</Button>
        <Button onClick={()=> dispatch(decrement(10)) }>-</Button>
        <Button onClick={handleChange}> CHANGE </Button>


    </div>

    <div>
    {message ? (
        <img src={message} atl="" />
      ) : (
        <p>Không tìm thấy ảnh cún nào!</p>
      )}
    </div>
    <ul className="paging">
      <li><a href="#"><i><img src="img/iconprev.svg" alt /></i></a></li>
      <li><a href="#" className="active">1</a></li>
      <li><a href="#">2</a></li>
      <li><a href="#">3</a></li>
      <li><a href="#">4</a></li>
      <li><a href="#"><i><img src="img/iconprev.svg" alt /></i></a></li>
    </ul>
  </div>
</main>

        
  )
}
// const mapStateToProps = (state) =>{
//   console.log("state",state)
//   return {
//     couters : state
//   }
// }

// export default connect(mapStateToProps,{increment,decrement})(DemoRedux)
export default DemoRedux;