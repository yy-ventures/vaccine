import {useState} from 'react';
import "./Pagination.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

import Pagination from 'react-bootstrap/Pagination'

const PaginationEllipsisLogic = (number, index) => {
            if(index <= currentPage+2){
              return (<Pagination.Item onClick={() => {
                paginate(number);
                setCurrentPage(number);
                }} href='#pagination-bar'>
                {number}
              </Pagination.Item>);
            } else if (index ==currentPage+3) {
              return (<Pagination.Ellipsis onClick={() => {
                paginate(number);
                setCurrentPage(number);
                }}/>)
            } else if (index == pageNumbers.length) {
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


}
  return (
    <nav>
      <ul className='pagination justify-content-center'>
        <Pagination>
          {pagenumbers.map((numbers, index)=>PaginationEllipsisLogic(numbers,index))}
        </Pagination>
      </ul>
    </nav>
  );
};

export default PaginationComp;
