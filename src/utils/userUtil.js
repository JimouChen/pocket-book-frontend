const UserService = {
    setUserId(userId) {
        localStorage.setItem('UserId', userId);
    },
    setUsername(username) {
        localStorage.setItem('username', username);
    },
    getUserId() {
        // return localStorage.getItem('UserId');
        const userId = localStorage.getItem('UserId');
        return userId !== null ? userId : '';
    },
    getUsername() {
        const username = localStorage.getItem('username');
        return username !== null ? username : '';
        // return localStorage.getItem('username');
    },
    clearUserId() {
        localStorage.removeItem('UserId');
    },
    clearUsername() {
        localStorage.removeItem('username');
    },
};

export default UserService;
