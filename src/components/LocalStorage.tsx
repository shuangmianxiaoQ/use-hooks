import { useLocalStorage } from "../hooks";

const LocalStorage = () => {
  const [name, setName] = useLocalStorage<string>("name", "bob");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default LocalStorage;
