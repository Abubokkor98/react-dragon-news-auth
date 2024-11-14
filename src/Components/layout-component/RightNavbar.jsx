import React from 'react'
import SocialLogin from '../SocialLogin'
import FindUs from '../FindUs'

export default function RightNavbar() {
  return (
    <div className='space-y-5'>
        {/* component one */}
        <SocialLogin></SocialLogin>
        {/* component two */}
        <FindUs></FindUs>
    </div>
  )
}
