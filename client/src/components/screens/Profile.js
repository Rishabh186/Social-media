import React from 'react'

const Profile=()=>{
    return(
        <div style={{maxWidth:"550px",margin:"0px auto"}}>
            <div style={{
                display:"flex",
                justifyContent:"space-around",
                margin:"20px 0",
                borderBottom:"1px solid grey"
            }}>
                <div>
                <img src="https://images.unsplash.com/photo-1584307833174-a3bbb76ab367?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                 style={{width:"160px",height:"160px",borderRadius:"80px"}}
                />
                </div>
                <div>
                    <h4>Lucky</h4>
                    <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
                        <h5>50 posts</h5> 
                        <h5>50 followers</h5> 
                        <h5>50 following</h5> 
                    </div>
                </div>
            </div>
       
           <div className="gallery">
               <img className="item" src="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?ixlib=rb-eyJhcHBfaWQiOjEyMDd9.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
               <img className="item" src="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
               <img className="item" src="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
               <img className="item" src="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>

           </div>
       
       
        </div>
    )
}

export default Profile;