class Hotel {
    constructor() {
    // possible Hotel properties based on classes:
        // this.rooms = rooms
        // this.bookings = bookings
        // this.customers = customers

    }
}

export default Hotel;

// 5. Manager Interaction
// Your app should now support two different types of users. In addition to having a customer, you will now add a manager.

// As a manager:

// I should be able to login
// I will see a login page when I first visit the site
// I can log in with the following credentials:
    // username: manager
    // password: overlook2021
// As a manager, upon logging in:

// I should see a dashboard page that shows me:
// Total Rooms Available for today’s date
// Total revenue for today’s date
// Percentage of rooms occupied for today’s date
// As a manager:

// I should be able to search for any user by name and:
// View their name, a list of all of their bookings, and the total amount they’ve spent
// Add a room booking for that user
// Delete any upcoming room bookings for that user (they cannot delete a booking from the past)