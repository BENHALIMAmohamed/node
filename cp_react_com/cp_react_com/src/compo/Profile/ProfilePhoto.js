import React from 'react'
import profile_img from "../../image/my-visit-to-he-mercedes.jpg"

// function profile_pic() {
//     <div>
//         <img src={profile_img} />
//     </div>
// }

const ProfilePhoto = () => {
  return (
    <div>
        <img src={profile_img} alt='Profile_Pic' />
</div>
  )
}

export default ProfilePhoto