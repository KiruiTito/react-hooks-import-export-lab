import { username, city } from "../data/user";

function Home() {
  return (
    <div>
      <h1>Welcome to {city}!</h1>
      <p>My name is {username} and I'm excited to show you my portfolio.</p>
    </div>
  );
}

export default Home;
