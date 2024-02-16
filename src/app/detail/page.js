"use client"
import { useState, createRef } from "react"
import { useSearchParams } from "next/navigation"
import Draggable from "react-draggable"
import { exportComponentAsJPEG } from "react-component-export-image"

const memeRef = createRef()
const exportMeme = () => {
    exportComponentAsJPEG(memeRef, {
        fileName: 'meme'
    })
}

function Detail() {
    const searchParams = useSearchParams()
    const Url = searchParams.get('url')
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');

    return (
        <div className="flex flex-wrap justify-center">
            <div className="w-64 rounded overflow-hidden shadow-lg mx-4 my-4">




                <div ref={memeRef} className="w-[100%]" >

                    <img className="w-[100%]" src={Url} alt="img" />
                    <div className="px-6 py-4">

                        <Draggable>
                            <div className="font-bold text-xl mb-2">{input1}</div>
                        </Draggable>


                        <Draggable>
                            <div className="font-bold text-xl mb-2">{input2}</div>
                        </Draggable>
                    </div>
                    </div>
                    <input className="border-2" type="text" onChange={event => setInput1(event.target.value)} placeholder="Text #1" />
                    <input className="border-2" type="text" onChange={event => setInput2(event.target.value)} placeholder="Text #2" />
                    <div onClick={exportMeme} className="p-1 rounded-md w-[100%] bg-gray-700 text-white hover:bg-white hover:text-black">
                        Generate Meme
                    </div>
                </div>
            </div>
    )
}

export default Detail
