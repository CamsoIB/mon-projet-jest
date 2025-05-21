function getUser(id) {
    return{
        id,
        name: "Jean Dupont",
        isAdmin: false
    };
}
module.exports = { getUser };