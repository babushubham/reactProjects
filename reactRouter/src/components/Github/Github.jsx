import React, { useState, useEffect } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/shubham316293')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data)
            })

    }, [])

    return (
        <>
            <div className='text-center m-4 bg-gray-600 p-4 text-4xl text-white '>
                Github followers: {data.followers}
            </div>
            <img src={data.avtar_url} alt="Git picture" />
        </>
    )
}

export default Github