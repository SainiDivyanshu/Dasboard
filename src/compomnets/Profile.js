import React from 'react'

const Profile = () => {
  return (
    <div>
        
        <section id="profile" className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-purple-100">
          <h2 className="text-xl font-semibold mb-4 text-purple-700">Profile</h2>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* <img src="https://via.placeholder.com/120" alt="" className="rounded-full w-28 h-28 border-4 border-purple-300" /> */}
            <div>
              <p className="text-lg font-medium">Divyanshu Saini</p>
              <p>A passionate developer with a background in BCA and MCA.</p>
              <p>Email: divyanshu@example.com</p>
              <p>LinkedIn: linkedin.com/in/divyanshusaini</p>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Profile