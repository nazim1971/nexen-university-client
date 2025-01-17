import { ReactNode } from "react"
import { useAppSelector } from "../../redux/hooks"
import { useCurrentToken } from "../../redux/features/auth/authSlice"
import { Navigate } from "react-router";


const ProtectedRoute = ({children}: {children:ReactNode} ) => {

    const token = useAppSelector(useCurrentToken);

    if(!token) {
        return <Navigate to='/sign-in' replace={true} />
    }

  return children
}

export default ProtectedRoute