import React from 'react'

export const JournalEntry = () => {
  return (
    <div className="journal__entry">
        <div 
            className="journal__entry-picture"
            style={{
                backgroundImage: 'url(https://www.industrialempathy.com/img/remote/ZiClJf-640w.avif)',
                backgroundSize: 'cover',
            }}>
        </div>
        <div className="journal__entry-body"> 
            <p className="journal__entry-title">
                Un nuevo día
            </p>
            <p className="journal__entry-content">
                lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </div>
        <div className="journal__entry-date-box">
            <span>Monday</span>
            <h4>28</h4>
        </div>
    </div>
  )
}
