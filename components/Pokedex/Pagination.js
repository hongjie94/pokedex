
import {useEffect, useState} from 'react';

const Pagination = ({TotalCardNum, PageEnd, PageStart, setPageEnd, setPageStart, CardsPerPage, setCardsPerPage}) => {

  const lastPage = Math.ceil(TotalCardNum / CardsPerPage);
  const [PageNum, setPageNum] = useState(1);

   useEffect(() => {
    setPageStart((PageNum * CardsPerPage) - CardsPerPage);
    (PageNum * CardsPerPage >= TotalCardNum) ? setPageEnd(TotalCardNum): setPageEnd(PageNum * CardsPerPage);
   }, [PageNum, CardsPerPage]);
   

  return (
    <>
    {/* Page details */}
    <div className='w-full text-center mb-10'>
      <p className="text-ms text-gray-900">
        Showing 
        <span className="font-medium"> {PageStart + 1} </span>
        to
        <span className="font-medium"> {PageEnd} </span>
        of
        <span className="font-medium"> {TotalCardNum} </span>
        results
      </p>
    </div>
    
    {/* Pagination */}
    <div className="Pagination_wrap">
      <div className="Pagination">
        {/* Cards per page options */}
        <div className="relative inline-flex sm:mb-0 mb-2">
          <p className="text-gray-600 h-10 pr-3 flex items-center">Show: </p>
          <svg className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fillRule="nonzero"/></svg>
          <select
            onChange={((e)=> {setCardsPerPage(e.target.value), setPageNum(Math.ceil(PageEnd/e.target.value))})}
            className="Dropdown">
            <option value='20'>20 Cards</option>
            <option value='40'>40 Cards</option>
            <option value='60'>60 Cards</option>
            <option value='80'>80 Cards</option>
            <option value='100'>100 Cards</option>
          </select>
        </div>

        {/* Page Nav */}
        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
          {/* Previous Page */}
          <a 
            href="#" 
            onClick={(e)=>{ PageNum > 1 ? setPageNum(PageNum -1): e.preventDefault()}} 
            className="PaginationBtn rounded-l-md" >
            <span className="sr-only">Previous</span>
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </a>

          {/* Page Number (show when screens width is below 370px) */}
          <span className="xsScreenPageNum">
            Page <b className='px-2'>{PageNum}</b>
          </span>

          {/* Pre Nav Page 1 */}
          { ((PageNum === (lastPage - 3)) || (PageNum ===  (lastPage - 4)) ) ?
            <span className='PaginationPages_dots'>...</span>
            :
            <a 
              href="#"
              onClick={()=>{((PageNum <=3) || (PageNum >= (lastPage - 2)))  ? setPageNum(1) : setPageNum( PageNum - 2)}}
              className={ PageNum === 1 ? 'PaginationPageActive' : 'PaginationPages'}>
              <p>{((PageNum <=3) || (PageNum >= (lastPage - 2) )) ? 1 : (PageNum - 2)}</p>
            </a>
            
          }

          {/* Pre Nav Page 2 */}
          <a 
            href="#" 
            onClick={()=>{ ((PageNum <=3) || (PageNum >= (lastPage - 2))) ? setPageNum(2) : setPageNum(PageNum - 1)}}
            className={ PageNum === 2 ? 'PaginationPageActive' : 'PaginationPages'}>
            { ((PageNum <=3) || (PageNum >= (lastPage - 2)  )) ? 2 : (PageNum - 1)}
          </a>

          {/* Pre Nav Page 3 */}
          <a 
            href="#" 
            onClick={(e)=>{ ((PageNum < 3) || (PageNum > (lastPage - 2))) ? setPageNum(3) : e.preventDefault()}}
            className={ (PageNum >= 3 && !(PageNum >= (lastPage - 2)))  ? 'PaginationPageActive' : 'PaginationPages'}>
            { ((PageNum <=3) || (PageNum >= (lastPage - 2) )) ? 3 : (PageNum)}
          </a>

          {/*  Dots (change to page number when reach the end of page) */}
          <a
            href="#" 
            onClick={(e)=>{ (PageNum === (lastPage - 4)) ? setPageNum(PageNum + 1) : e.preventDefault()}} 
            className={PageNum === (lastPage - 3) ? 'hidden' : 'PaginationPages_dots'}
          >
          { (PageNum === lastPage - 4 ) ? (PageNum + 1): '...'} 
          </a>

          {/* Next Nav Page 1 */}
          <a 
            href="#" 
            onClick={()=>{ PageNum !== (lastPage -2) && setPageNum(lastPage -2)}}
            className={ PageNum === (lastPage -2) ? 'PaginationPageActive' : 'PaginationPages'}>
            {lastPage -2}
          </a>

          {/* Next Nav Page 2 */}
          <a 
            href="#" 
            onClick={()=>{ PageNum !== (lastPage -1) && setPageNum(lastPage -1)}}
            className={ PageNum === (lastPage -1) ? 'PaginationPageActive' : 'PaginationPages'}>
            {lastPage -1}
          </a>

          {/* Next Nav Page 3 */}
          <a 
            href="#" 
            onClick={()=>{ PageNum !== lastPage && setPageNum(lastPage)}}
            className={ PageNum === lastPage ? 'PaginationPageActive' : 'PaginationPages'}>
            {lastPage}
          </a>

          {/* Next Page */}
          <a
            href="#"
            onClick={(e)=>{ PageNum < lastPage ? setPageNum(PageNum + 1): e.preventDefault()}} 
            className="PaginationBtn rounded-r-md">
            <span className="sr-only">Next</span>
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </a>
        </nav>
      </div>
    </div>
    </>
  )
}
export default Pagination
