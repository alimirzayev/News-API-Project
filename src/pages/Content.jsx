import React, { useState } from 'react'
import { useContext, useEffect } from 'react'
import { Context } from '../context/Context'
import { Link, useParams } from 'react-router-dom'

const Content = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const ctx = useContext(Context)

  if (!ctx.data) {
    ctx.data = JSON.parse(localStorage.getItem("local"))
  }

  useEffect(() => {
    setData(ctx.data.articles.find((e) => e.title == id));
  }, [id])

  const link = data && data.url


  return (
    <div className='content'>
      <div className="content-inner">
        <img src={data && data.urlToImage} alt="" />
        <p>{data && data.title}</p>
        <p>{data && data.content + data.description}</p>

        <a href={link} target="_blank">
          <button>READ MORE</button>
        </a>
      </div>
    </div>
  )
}

export default Content