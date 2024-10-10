import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
const Pagination = () => {
  return (
    <div  className='pagination-sec'>
        <ul className="pagination-block">
            <li className="pagination-list"><Link>First</Link></li>
            <li className="pagination-list"><Link>Preview</Link></li>
            <li className="pagination-list"><Link>1</Link></li>
            <li className="pagination-list"><Link>Next</Link></li>
            <li className="pagination-list"><Link>Last</Link></li>
        </ul>
    </div>
  )
}

export default Pagination