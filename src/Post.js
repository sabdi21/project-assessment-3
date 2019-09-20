import React from 'react'

function Posts({posts}) {
   return (
      <>
            {posts.map(post => {
               return (
          
                     <div className="posts-container" >
                        <h4>User Id:{post.userId}</h4>
                        <p><strong>POST Num:</strong> {post.id}</p>  
                        <p><strong>Title:</strong> {post.title}</p>
                        <p><strong>Body:</strong> {post.body} </p>
                     <hr />
                  </div>
               )
            })}
         
      </>
   )
}
export default Posts
