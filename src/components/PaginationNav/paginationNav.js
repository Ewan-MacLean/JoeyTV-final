import React from 'react';
import { Pagination } from 'react-bootstrap';

const PaginationNav = ({ postsPerPage, totalPosts, paginate }) => {

    const pageNumbers = [];

    for(let i=1; i<=Math.ceil(totalPosts/postsPerPage); i++)
    {
        pageNumbers.push(i);
    };
  return (
    <Pagination>

        {
            pageNumbers.map(
                number =>(
                    <Pagination.Item key={number} className='page-item'>
                        <a onClick={()=> paginate(number)} href='!#' className='page-link'>
                            {number}
                        </a>
                    </Pagination.Item>
                )
            )
        }
    </Pagination>
  );
};

export default PaginationNav;