// Function to check if cancellation is allowed
const isAllowedToCancel = (date) => {
    const currentDate = new Date();
    const newCurrentDate = new Date(currentDate.getTime() + 24);
    return newCurrentDate.getTime() > date.getTime();
}

// Function to handle the cancellation request
const requestCancellation = () => {
    const orderDate = new Date('2023-10-30'); // Replace with the actual order date
    const cancelButton = document.getElementById('cancelButton');
    const messageElement = document.getElementById('message');
    
    if (isAllowedToCancel(orderDate)) {
        messageElement.innerText = 'Order cancellation request is allowed.';
        cancelButton.style.display = 'none'; // Hide the cancel button
    } else {
        messageElement.innerText = 'Order cancellation is not allowed within 24 hours.';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    requestCancellation(); // Check if cancellation is allowed when the page loads
});
