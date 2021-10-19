import {useState} from 'react';
import "./Pagination.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

import Pagination from 'react-bootstrap/Pagination'

const setPage = (currentPage, delta, paginate, setCurrentPage) => {
  console.log(paginate);
  paginate(currentPage+ delta);
  setCurrentPage(currentPage+ delta);
}


const PaginationEllipsisLogic = (number, index, paginate, setCurrentPage, currentPage, length) => {
            if(index <= currentPage+2 && index >= currentPage-2){
              return (<Pagination.Item onClick={() => {
                paginate(number);
                setCurrentPage(number);
                }} href='#pagination-bar'>
                {number}
              </Pagination.Item>);
            } else if (index === currentPage+3) {
              return (<Pagination.Ellipsis onClick={() => {
                paginate(number);
                setCurrentPage(number);
                }}/>)
            } else if (index === length) {
              return (<Pagination.Item onClick={() => {
                paginate(number);
                setCurrentPage(number);
                }} href='#pagination-bar'>
                {number}
              </Pagination.Item>);
          }
  }

function PaginationComp({ postsPerPage, totalPosts, paginate }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className='pagination justify-content-center'>
        <Pagination>
          {currentPage>1?<Pagination.Prev onClick={(currentPage,index=-1, paginate, setCurrentPage)=> {return setPage(currentPage,-1, paginate=paginate, setCurrentPage)}}/>:null}
          {pageNumbers.map((numbers, index)=>PaginationEllipsisLogic(numbers,index, paginate, setCurrentPage, currentPage, pageNumbers.length))}
          {currentPage===pageNumbers.length?<Pagination.Next onClick={(currentPage,index=1, paginate, setCurrentPage)=> {return setPage(currentPage,1, paginate=paginate, setCurrentPage)}}/>:null}
        </Pagination>

      </ul>
    </nav>
  );
}

export default PaginationComp;
