import chai from 'chai';
const expect = chai.expect;

// 1. Dashboard
    // As a customer:
    // I should see a dashboard page that shows me:
        // Any room bookings I have made (past or upcoming)
        // The total amount I have spent on rooms

            // previous history based on customer id? 
            // since single customer get fetch requires a customer id?

// 2. Customer Interaction
    // As a customer:
    // I should be able to select a date for which I’d like to book a room for myself
    // Upon selecting a date, I should be shown a list of room details for only rooms that are available on that date

            // Room class will need to be imported?

    // I should be able to filter the list of available rooms by their roomType property

            // Property in the Room class? standard vs suite?

    // I should be able to select a room for booking
    // In the event that no rooms are available for the date/roomType selected, display a message fiercely apologizing to the user and asking them to adjust their room search
// 3. Accessibility
// Create a branch for accessibility.
    // Use this branch to make your dashboard as accessible as possible.
    // Push this branch up to GH. You can merge the changes into main but do not delete this branch.
    // This branch should not have a login page so that during the live eval, we can run the Lighthouse audit and check tabbability of your dashboard (without the login page).
// 4. Login
// When first arriving at the site, a user should be able to log in with a username and password.
// As a customer:
    // I should be able to login
    // I will see a login page when I first visit the site
    // I can log in with the following credentials:
        // username: customer50 (where 50 is the ID of the user)
        // password: overlook2021
    // Upon successfully loggin in, I should see my dashboard.
    
    describe('See if the tests are running', function() {
        it('should return true', function() {
            expect(true).to.equal(true);
        });
    });