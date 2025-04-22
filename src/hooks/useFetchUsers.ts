import { db } from "@/firebase"
import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"

interface Users{
    id: string
    userName: string
}

export const useFetchUsers = () => {
  const [users, setUsers] = useState<Users[]>([])
  const fetchUsers = async () => {
    const receivedData = await getDocs(collection(db,"users"))
    const usersData = receivedData.docs.map((eachUser)=>({
        id: eachUser.id,
        userName: `${eachUser.data().firstName} ${eachUser.data().lastName}`
    }))
    setUsers(usersData)
  }

  useEffect(()=>{
    fetchUsers()
  },[])

  return{users}
}
