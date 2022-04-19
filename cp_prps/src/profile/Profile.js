import React from 'react'
import PropTypes from 'prop-types'

const Profile = ({profile_props , message}) => {
  return (
    <div>
    <h1> full name : {profile_props.fullName} </h1>
    <h1> bio : {profile_props.bio}</h1>
    <h1>profession : {profile_props.profession}</h1>
    <button onClick={message}>inzeeeeeeel</button>

    </div>
  )
}
Profile.prototype = {
    profile_data : PropTypes.any({
    FullName : PropTypes.string,
    Bio : PropTypes.string,
    Profession : PropTypes.string
 }
 )
}

export default Profile