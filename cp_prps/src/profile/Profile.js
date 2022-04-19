import React from 'react'
import PropTypes from 'prop-types'

const Profile = ({profile_props , message,style}) => {
  console.log(style)

  return (
    <div style={style} >
    <h1> full name : {profile_props.fullName} </h1>
    <h1> bio : {profile_props.bio}</h1>
    <h1>profession : {profile_props.profession}</h1>
    <button onClick={()=>message(profile_props.fullName)}>inzeeeeeeel</button>

    </div>
  )
}
Profile.propTypes = {
    profile_props : PropTypes.object
}

export default Profile