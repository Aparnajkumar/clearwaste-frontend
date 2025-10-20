import React from 'react'

function Footer() {
  return (
    <>
      <div className="bg-indigo-400 text-white grid grid-cols-1 md:grid-cols-4 p-3">
        <div className='p-5'>
          <h1 className='text-center text-2xl'>ClearWaste</h1>
          <p >Our team helps to manage your waste. We believe in keeping our mother nature clean </p>
        </div>
        <div className='text-center'>
          <h1 className='text-2xl p-2'>Company Information</h1>
          <ul className='none'>
            <li>Home</li>
            <li>About Us</li>
            <li>Our Team</li>
          </ul>
        </div>
        <div className='text-center'>
          <h1 className='text-2xl p-2'>Get Started</h1>
          <ul className='flex '>
            <li className=''><img className=''src="https://yowasteapp.com/wp-content/uploads/elementor/thumbs/A47B9C575CC9ABD2A884DBD85D2414B0BB96-2-pi7ude4zsfpapetpcyni2ewqlq43ciz0xevm2oipv8.png" alt="" /></li>
            <li><img src="https://yowasteapp.com/wp-content/uploads/elementor/thumbs/App-Store-Transparent-border-2-pi7titfzhfuj218iw8vdgmnyzit9yylce2y13nuq9g.png" alt="" /></li>
          </ul>
        </div>
        <div className='text-center'>
          <h1 className='p-2 text-2xl'>Company Policies</h1>
          <ul className='none '>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Refund/Cancellation Policy</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Footer