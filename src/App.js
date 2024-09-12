import ListingCard from "./components/ListingCard";
import ListingDetailsCard from "./components/ListingDetailsCard";
import ListingList from "./components/ListingList";
import UserPage from "./components/UserPage";
import HomePage from "./containers/HomePage";

function App() {
  return (
    <div>
      <HomePage />
      <ListingDetailsCard />
      <UserPage />
    </div>
  );
}

export default App;
