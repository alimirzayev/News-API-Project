import React, { useContext, useEffect, useState, useMemo } from 'react'
import { Context } from '../context/Context'
import { Link, useParams } from 'react-router-dom';
import RadioButtonsGroup from '../components/RadioButtonsGroup'
import axios from 'axios';
import { apiKeys } from '../interceptor/interceptor';
import Pagination from '../components/Pagination';

const Detail = () => {
  const { id } = useParams();
  const ctx = useContext(Context);
  const [category, setCategory] = useState();
  const [PageSize, setPageSize] = useState(1);

  if (!ctx.data) {
    ctx.data = JSON.parse(localStorage.getItem("local"))
  }

  const handleCategory = (categoryName) => {
    axios.get(`top-headlines?country=${id}&category=${categoryName}&apiKey=${apiKeys}`)
    .then((res) => setPageSize(Math.ceil(res.data.totalResults / res.data.articles.length)))
  }

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return ctx.data.articles.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  const handlePage = () => {
    console.log(category);
    if (category) {
      console.log("cat page");
      axios.get(`top-headlines?country=${id}&category=${category}&page=${currentPage}&apiKey=${apiKeys}`)
    } else {
      console.log("no cat page");
      axios.get(`top-headlines?country=${id}&page=${currentPage}&apiKey=${apiKeys}`)
    }
  }

  return (
    <div className='news-container'>
      <div onChange={(e) => {
        setCategory(e.target.value)
        handleCategory(e.target.value)
      }} className="news-container-radio">
        <RadioButtonsGroup />
      </div>

      {ctx.data && ctx.data.articles.map((e, i) => {
        return (
          <div className='news-container-item' key={i}>
            <Link to={`/news/${e.title}`}>

              <div className='news-container-item-image'>
                <img src={e.urlToImage} alt={e.title} />
              </div>
              <div className='news-container-item-title'>
                <p>{e.title}</p>
              </div>
              <div className='news-container-item-description'>
                <p>{e.description}</p>
              </div>
              <div className='news-container-item-source'>
                <p>{e.source.name}</p>
              </div>
            </Link>

          </div>
        )
      })}

      <div className="pagination">
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={ctx.data.articles.length}
          pageSize={PageSize}
          onPageChange={page => {
            handlePage()
            setCurrentPage(page)
          }}
        />
      </div>
    </div>
  )
}

export default Detail