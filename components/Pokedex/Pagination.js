

const Pagination = ({Total, PageEnd, PageStart, setPageEnd, setPageStart}) => {
  return (
    <div className="Pagination_wrap">
      <div className="Pagination">
        <div>
          <p className="text-sm text-gray-700">
            Showing
            <span className="font-medium"> {PageStart + 1} </span>
            to
            <span className="font-medium"> {PageEnd} </span>
            of
            <span className="font-medium"> {Total} </span>
            results
          </p>
        </div>
        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
          <a href="#" className="PaginationBtn rounded-l-md">
            <span className="sr-only">Previous</span>

            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </a>
    
          <a href="#" className="PaginationPageActive">
            1
          </a>
          <a href="#"  className="PaginationPages">
            2
          </a>
          <a href="#" className="PaginationPages_md_hidden">
            3
          </a>
          <span className="PaginationPages_dots">
            ...
          </span>
          <a href="#" className="PaginationPages_md_hidden">
            8
          </a>
          <a href="#" className="PaginationPages">
            9
          </a>
          <a href="#" className="PaginationPages">
            10
          </a>
          <a href="#" className="PaginationBtn rounded-r-md">
            <span className="sr-only">Next</span>
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </a>
        </nav>
      </div>
    </div>
  )
}

export default Pagination
