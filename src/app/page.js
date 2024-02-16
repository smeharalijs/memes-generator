import Link from "next/link"

async function Home() {
  const res = await fetch('https://api.imgflip.com/get_memes')
  const response = await res.json()
  console.log(response.data.memes);

  return (
    <div>
  <h1 className="text-center bg-white w-[100%]">Memes Generator</h1>

      <div className="flex flex-wrap justify-center">
        {response.data.memes.map((item, index) => (
          <div className="w-64 rounded overflow-hidden shadow-lg mx-4 my-4" key={index}>
            <img className="w-full" src={item.url} alt="img"/>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Id : {item.id}</div>
              <p className="text-gray-700 text-base">
                Name : {item.name}
              </p>
              <div className="p-1 rounded-md w-[50%] bg-white hover:bg-black hover:text-white">
              <Link href={`detail?url=${item.url}`}>Open Meme</Link>
              </div>
            </div>
          
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
