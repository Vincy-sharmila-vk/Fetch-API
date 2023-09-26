import React, { useEffect, useState } from 'react'

const Contact = () => {
  const [posts, setPosts] = useState(null)
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users').then(data => data.json()).then(data => {
      setPosts(data);
    });
  }, []);
  return (
    <div className='container'>
      {
        (posts) ?
      (<ul>
        {
        posts.map(post => {
          return (
            <div className='card'>
           <div className='item'><h3>Name  : </h3><span>{post.name}</span></div>
           <div className='item1'><h3>Email :</h3><span>{post.email}</span></div>

           <div className='item'><h3>Phone Number:</h3><span>{post.phone}</span></div>
           <div className='item1'> <h3>User Name :</h3> <span>{post.username}</span></div>
           <div className='item'> <h3>Website : </h3><span>{post.website}</span></div>
           <div className='item1'><h3>Address  : </h3><span>{post.address.street} ,{post.address.city}, {post.address.Zipcode}</span></div>
           <div className='item'> <h3>Company : </h3>
              <span>{post.company.name} {post.company.bs}{post.company.catchPhrase}</span></div>
        
          </div>
          )
        })
        }
      </ul>) : (<h3>loadinmg</h3>)
}
      </div>
  )
}

export default Contact