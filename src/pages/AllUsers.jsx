import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAction } from '../redux/action'

export default function AllUsers() {

    const {getUserData} = useSelector( state => state.allUser)

   const dispatch =  useDispatch()

    useEffect(() => {
        dispatch(getUserAction())
    }, []) 
    


   console.log("getUserData from AllUser", getUserData);
  return (
    <div className="container">
        <div className="row">
            <div className="col-sm-6 offset-3">

    <div>AllUsers</div>



            </div>
        </div>
    </div>
  )
}
