const StoreUsers = {
    addUser: (name, email, password, gender) => {
      const users = StoreUsers.getUsers();
      users.push({
        name: name,
        email: email,
        password: password,
        gender: gender
      });
      localStorage.setItem('users', JSON.stringify(users));
    },
  
    getUsers: () => {
      const storedUsers = localStorage.getItem('users');
      return storedUsers ? JSON.parse(storedUsers) : [];
    }
  };
  
  export default StoreUsers;
  