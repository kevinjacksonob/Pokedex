import React from 'react'
import './pokedex/styles/pagination.css'

const Pagination = ({page, pagesLength, setPage}) => {
    
    const pagesPerBlock = 8
    const currentBlock = Math.ceil(page / pagesPerBlock)
    const blockLength = Math.ceil(pagesLength / pagesPerBlock)

    const arrPages = []
    const initialPage = (currentBlock - 1) * pagesPerBlock + 1
    const limitPage = blockLength === currentBlock ? pagesLength : currentBlock * pagesPerBlock
    for(let i = initialPage; i <= limitPage; i++ ){
        arrPages.push(i);
    }

    const handlePrev = () => {
        setPage( page - 1)
    }

    const handleNext = () => {
        setPage( page + 1)
    }

    const handlePage = currentPage => {
        setPage(currentPage);
    }

    return (
        <div className='pagination'>
            {
                page > 1 &&
                <div className='pagination__prev pagination__active' onClick={handlePrev}>&#60;</div>
            }
            <ul className='pagination__container'>
                {
                    arrPages.map( e => (
                        <li 
                            className={`pagination__page ${page === e && 'pagination__active'}`} 
                            key={e}
                            onClick={() => handlePage(e)}
                         >{e}</li>
                    ))
                }
            </ul>
            {
                page < pagesLength && 
                <div className='pagination__next pagination__active' onClick={handleNext}>&#62;</div>
            }
        </div>
    )
}

export default Pagination