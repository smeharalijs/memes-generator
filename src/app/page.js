import Link from "next/link"

async function Home() {
  const res = await fetch('https://api.imgflip.com/get_memes')
  const response = await res.json()

  return (
    <div>
      <Link href="home">Home</Link>
      <Link href="detail">Detail</Link>

      <div className="flex flex-wrap justify-center">
        {response.data.memes.map((item, index) => (
          <div className="w-64 rounded overflow-hidden shadow-lg mx-4 my-4" key={index}>
            {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
            <img className="w-full" src={item.url} alt="img"/>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
