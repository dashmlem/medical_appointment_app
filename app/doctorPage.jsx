import React from 'react'

const doctorPage = () => {
  return (
    <div className="bg-background">
<h1 className="text-3xl font-bold text-center py-10">{name}</h1>
<p>{description}  </p>
<span>{specialty}</span>
<span>{experience} years of experience</span>
<span>{contactInfo}</span>
<span>{location}</span>
<span>{availability}</span>
<p>{bio}

</p>
<p>{reviews}</p>
<p>{ratings}</p>
<img src={profilePicture} alt={`${name}'s profile`} className="w-32 h-32 rounded-full" />
<span>{education}</span>
<span>{certifications}</span>
    </div>
  )
}

export default doctorPage