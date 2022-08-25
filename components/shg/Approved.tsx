export default function Approved() {
  return (
    <div className=' border-2 border-dashed border-grey shadow-xl hover:border-blue cursor-pointer p-2 w-[700px] h-[300px] rounded-2xl flex flex-row m-5 flex-shrink-0 snap-always snap-center items-center'>
      <div className=' rounded-full h-[200px] w-[200px] border-2 border-solid flex flex-wrap text-center mx-auto flex-shrink-0'></div>
      <div className=' w-full flex flex-col items-center justify-start text-left font-bold text-xl mx-2 space-y-2'>
        <div>userid: </div>
        <div>amount:</div>
        <div>description:</div>
        <div>loantime:</div>
        <div>EMI:</div>
        <div>Last EMI:</div>
        <div>Next EMI:</div>
      </div>
    </div>
  );
}
