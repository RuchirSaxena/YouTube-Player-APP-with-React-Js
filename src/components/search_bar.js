import React from 'react'

export default (props) => {
  const onVideoSearch = (e) => {
    let term = e.target.value;
   // alert(term);
    props.onVideoSearch(term);
  }
  return (
    <div>
      <input onChange={onVideoSearch.bind()}  type="text" className="search-bar" placeholder="search" id="" />
    </div>
  )
}


