import { db } from "@/firebase"
import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"

interface Users{
    onlineStatus: boolean 
    id: string
    userName: string
    email: string
}

export const useFetchUsers = () => {
  const [users, setUsers] = useState<Users[]>([])
  const fetchUsers = async () => {
    const receivedData = await getDocs(collection(db,"users"))
    const usersData = receivedData.docs.map((eachUser)=>({
        id: eachUser.id,
        userName: `${eachUser.data().firstName} ${eachUser.data().lastName}`,
        email: eachUser.data().email,
        onlineStatus: eachUser.data().onlineStatus,
    }))
    setUsers(usersData)
  }

  useEffect(()=>{
    fetchUsers()
  },[])

  return{users}
}
