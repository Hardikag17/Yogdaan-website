export default function Approved() {
  return (
    <div className=' shadow-xl hover:border-blue cursor-pointer p-2 w-full h-[300px] rounded-2xl flex flex-row flex-shrink-0 snap-always snap-center items-center'>
      <div className=' rounded-full h-[200px] w-[200px] border-2 border-solid flex flex-wrap text-center mx-auto flex-shrink-0'></div>
      <div className=' w-full flex flex-row justify-around text-left font-bold text-xl mx-2 space-x-2 space-y-5 flex-wrap'>
        <div>
          <div>userid: </div>
          <div>amount:</div>
          <div>loantime:</div>
          <div>EMI:</div>
        </div>
        <div>
          <div>description:</div>
          <div>Last EMI:</div>
          <div>Next EMI:</div>
        </div>
      </div>
    </div>
  );
}
