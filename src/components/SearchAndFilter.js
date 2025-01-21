import React, { useState } from 'react';


const SearchAndFilter = ({ users }) => {

// State to track the search term entered by the user
  const [searchTerm, setSearchTerm] = useState('');
   // State to track the selected filter criterion (name, email, or phone)
  const [filterBy, setFilterBy] = useState('name');
   // State to determine whether filtering is active
  const [isFiltering, setIsFiltering] = useState(false);

   // Function to activate filtering when the user clicks the "Filter" button
  const handleSearch = () => {
    setIsFiltering(true);
  };

  // Filter users based on the selected criterion and search term
  const filteredUsers = users.filter(user => {
    if (!isFiltering) return true;
    if (filterBy === 'name') {
      return user.name.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (filterBy === 'email') {
      return user.email.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (filterBy === 'phone') {
      return user.phone.includes(searchTerm);
    }
    return false;
  });
  return (
    // <div>SearchAndFilter</div>

    <div className="search-filter">
    <h2>Search and Filter Users</h2>
    <div className="search-bar">
      <select value={filterBy} onChange={(e) => setFilterBy(e.target.value)}>
        <option value="name">Filter by Name</option>
        <option value="email">Filter by Email</option>
        <option value="phone">Filter by Phone</option>
      </select>
      <input
        type="text"
        value={searchTerm}
        placeholder={`Search by ${filterBy}...`}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Filter</button>
    </div>

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {filteredUsers.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  )
}

export default SearchAndFilter