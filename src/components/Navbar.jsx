    import { useState } from 'react';
import {Link} from 'react-router-dom'

    const Navbar = () => {
        const [dropdown,setDropDown] = useState(false)
        let groceries = ["Bread", "Eggs", "Milk", "Chicken breast", "Rice", "Apples", "Carrots", "Butter", "Pasta", "Olive oil"];
        const handleDropDown = () => {
            setDropDown(!dropdown)
        }
        return ( 
            <>
            <main className='border p-2'>
                <nav  className="flex  flex-row mt-3 items-center
                 border-gray-700 justify-center gap-24">
                   
                    <h1 className="text-red-700 text-4xl relative 
                    border-r-2 border-700 h-12 pr-2 m-0 ">LOGO</h1>
                 
               
                    <p className='flex flex-col w-60 truncate  overflow-hidden'>
  <span className="font-bold inline-block ">Delvivery in 10 minutes</span>
  145 West 45th Street, Apt 3B, New York, NY 10036 145 West 45th Street, Apt 3B, New York, NY 10036
</p>

                <input type="text"
                className="border h-10 w-96 outline-none p-3 rounded-lg placeholder-gray-500 
                " placeholder="Search 'Milk' "
                 />
                 <Link>Login</Link>
                 <button className=" h-10 w-20 bg-red-600 text-white rounded-lg">My cart</button>
                </nav>
                </main>
                <div className='flex gap-3 justify-center items-center text-sm text-gray-500 mt-3'>
                    <Link>Vegetable & Fruits</Link>
                    <Link>Dairy & Breakfast</Link>
                    <Link>Munchies</Link>
                    <Link>Cold Drinks & Juices</Link>
                    <Link>Instant & Frozen Food</Link>
                    <Link>Tea,Coffee & Healthy Drinks</Link>
                    <Link>Bakery & Biscuits</Link>
                    <span className='relative inline-block'>
      <Link onClick={handleDropDown}>More</Link>
      {dropdown && (
        <ul className='absolute bg-white shadow-md py-2 w-48'>
          {groceries.map((gro) => (
            <li key={gro} className='px-4 py-2 cursor-pointer hover:bg-gray-100'>
              {gro}
            </li>
          ))}
        </ul>
      )}
    </span>
                </div>
          
            </>
        );
    }
    
    export default Navbar;