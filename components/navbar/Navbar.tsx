export default function Navbar() {
  return (
    <div className=' m-2 p-2 bg-whiteish shadow-lg rounded-xl flex flex-row justify-around text-center items-center'>
      <div className=' font-semibold'>
        If you want to access the services please download the app by clicking
        here
      </div>
      <div>
        <button className='bg-green m-2 hover:scale-105 cursor-pointer hover:brightness-125 rounded-xl lg:px-10 lg:py-2 text-white text-body text-center'>
          User
        </button>
      </div>
    </div>
  );
}
