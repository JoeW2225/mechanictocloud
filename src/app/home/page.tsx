import Link from 'next/link'
import { NavBar } from '../components/NavBar'
export default function Homepage() {

    return (
        <>
            <NavBar/>
            <h1 className='platypi text-7xl'>Welcome to my site!</h1>
        </>
    )
}