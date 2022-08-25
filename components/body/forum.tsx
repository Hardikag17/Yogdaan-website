export default function Forum({ data }) {
  return (
    <div className=' border-2 border-dashed border-grey shadow-xl hover:border-blue cursor-pointer p-2 w-[550px] h-[350px] rounded-2xl flex flex-row m-5 flex-shrink-0 snap-always snap-center justify-center items-center'>
      <div className=' rounded-full h-[200px] w-[200px] border-2 border-solid flex flex-wrap text-center mx-auto flex-shrink-0'></div>
      <div className=' h-full -w-full flex items-center mx-2'>
        <div>Title: {data.title}</div>
        <div>Description: {data.description}</div>
        <div>Location: {data.location}</div>
      </div>
    </div>
  );
}
