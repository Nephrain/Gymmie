function Page() {
  return <div>
    <h1>Login</h1>
    <form action="/register" method="POST">
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>  
}

export default Page;