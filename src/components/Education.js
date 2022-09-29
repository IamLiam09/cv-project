import React from "react"
const Educational = () => {
    return (
        <div>
            <h1>Education</h1>
            <form>
                <label for="schoolName">Name of school</label>
                <input 
                    type= "text"
                    id="schoolName"
                    class="name"
                />
                <label for="Degree">Degree</label>
                <input 
                    type= "text"
                    id="Degree"
                    class="name"
                />
                <label for="Year">Year</label>
                <input 
                    type= "text"
                    id="Year"
                    class="name"
                />
            </form>
        </div>
    )
}

export default Educational