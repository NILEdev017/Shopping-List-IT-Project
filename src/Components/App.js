import "../styles.css";
import { useState } from "react";
import EntryItem from "./EntryItem";
import AddIcon from '@mui/icons-material/Add';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';

function App() {
  const [entry, setEntry] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const { value } = event.target;
    setEntry(value);
  }

  function addItem(event) {
    if (document.getElementById("listentry").value !== "") {
      setItems((prevItems) => {
        return [...prevItems, entry];
      });
      setEntry("");
    }

    event.preventDefault();
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((entry, index) => {
        return index !== id;
      });
    });
  }

  function erase() {
    setItems([]);
    setEntry("");
  }

  return (
    <div>
    <h3 id='title-text'>To-do list</h3>
      <div id="todolist-body">
        <div className="input-field">
          <form id='input-form'>
            <input
              id="listentry"
              type="text"
              placeholder="Enter item here..."
              value={entry}
              onChange={handleChange}
            />
            <button id="add-button" onClick={addItem}>
              <AddIcon />
            </button>
          </form>
          <div>
            <ul>
              {items.map((todoItem, index) => (
                <EntryItem
                  key={index}
                  id={index}
                  text={todoItem}
                  deleteItem={deleteItem}
                />
              ))}
            </ul>
          </div>
        </div>

        <div>
          <button id="clear-button" onClick={erase}>
            Erase All <WarningRoundedIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
