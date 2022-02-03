type User = {
    name: string
    email: String
    address: {
        city: string
        state?: string 
    }
}

function showWelcomeMessage(user: User) {
    return `Welcome ${user.name}, your email is ${user.email}. Your city is ${user.address.city} and your state is ${user.address.state}`;
}


showWelcomeMessage({
    name: "John Doe",
    email: 'john@gmail.com',
    address: {
        city: "New York",
        state: "NY"
    }
}); 
