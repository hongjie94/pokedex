
import {useEffect} from 'react';

const Pagination = ({TotalCardNum, PageEnd, PageStart, setPageEnd, setPageStart, PageNum, setPageNum}) => {

  const cardPerPage = 20;
  const lastPage = Math.ceil(TotalCardNum / cardPerPage);

   useEffect(() => {
    setPageStart((PageNum * cardPerPage) - cardPerPage);
    (PageNum * cardPerPage >= TotalCardNum) ? setPageEnd(TotalCardNum): setPageEnd(PageNum * cardPerPage);
   }, [PageNum]);
   
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

        {/* Page details */}
        <div>
          <p className="text-sm text-gray-700">
            Showing {PageNum} {lastPage}
            <span className="font-medium"> {PageStart + 1} </span>
            to
            <span className="font-medium"> {PageEnd} </span>
            of
            <span className="font-medium"> {TotalCardNum} </span>
            results
          </p>
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
              onClick={()=>{ PageNum <= 3 ? setPageNum(1) : setPageNum( PageNum - 2)}}
              className={ PageNum === 1 ? 'PaginationPageActive' : 'PaginationPages'}>
              <p>{((PageNum <=3) || (PageNum >= (lastPage - 2) )) ? 1 : (PageNum - 2)}</p>
            </a>
            
          }

          {/* Pre Nav Page 2 */}
          <a 
            href="#" 
            onClick={()=>{ PageNum <= 3 ? setPageNum(2) : setPageNum(PageNum - 1)}}
            className={ PageNum === 2 ? 'PaginationPageActive' : 'PaginationPages'}>
            { ((PageNum <=3) || (PageNum >= (lastPage - 2)  )) ? 2 : (PageNum - 1)}
          </a>

          {/* Pre Nav Page 3 */}
          <a 
            href="#" 
            onClick={(e)=>{ PageNum < 3 ? setPageNum(3) : e.preventDefault()}}
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
            onClick={(e)=>{ PageNum < 45 ? setPageNum(PageNum + 1): e.preventDefault()}} 
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
