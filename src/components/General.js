import React from "react";
const PersonalInfo = () => {
    return (
        <div>
            <h1>Personal Information</h1>
            <form>
                <label for="firstNameInput">First Name</label>
                <input 
                    type= "text"
                    id="firstNameInput"
                    class="name"
                />
                <label for="lastNameInput">Last Name</label>
                <input 
                    type= "text"
                    id="lastNameInput"
                    class="name"
                />
                <label for="Title">Title</label>
                <input 
                    type= "text"
                    id="Title"
                    class="name"
                />
                <label for="phoneNumberInput">Phone Number</label>
                <input 
                    type= "text"
                    id="phoneNumberInput"
                    class="name"
                />
                <label for="emailInput">Email</label>
                <input 
                    type= "text"
                    id="emailInput"
                    class="name"
                />
                <label for="websiteInput">Website</label>
                <input 
                    type= "text"
                    id="websiteInput"
                    class="name"
                />
                <label for="locationInput">Location</label>
                <input 
                    type= "text"
                    id="locationInput"
                    class="name"
                />
            </form>
        </div>
    )
}

export default PersonalInfo