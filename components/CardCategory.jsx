
function CardCategory({ category }) {
  return (
    <div key={category.id} className='bg-white m-3 pb-4 flex flex-col h-auto min-h-[375px] xl:w-[19rem] lg:w-[25rem] w-[30rem] hover:cursor-pointer shadow-lg hover:shadow-xl rounded-2xl'>
      <div className="p-4 bg-gray-200 font-medium text-lg rounded-t-2xl">
        <p>{category.name}</p>
      </div>
      <img src={category.picture} alt={category.name} className="p-4 px-auto mx-auto flex object-cover" />
    </div>
  )
}

export default CardCategory