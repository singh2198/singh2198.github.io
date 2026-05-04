import { useCallback, useMemo, useState ,useId } from 'react'

const Hooks = () => {
    // Start with initial list
    const [list, setList] = useState([5, 2, 8, 1, 9, 3]);
    const [count, setCount] = useState(0);
    const id = useId();
    console.log(id);


    const [text, setText] = useState("");
    const [toggle, setToggle] = useState(false);

        // Without useCallback, this is a "new" function every time the 'toggle' changes.
        // This would cause SearchButton to re-render needlessly.
        const handleSearch = useCallback(() => {
            console.log("Searching for:", text);
        }, [text]); 

    // useMemo takes: (function, dependencies)
    const sortedList = useMemo(() => {
        console.log("Sorting the big list...");
        return [...list].sort((a, b) => a - b);
    }, [list]);  // ← Dependency: recalculate when list changes

    const addItem = () => {
        setList([...list, Math.floor(Math.random() * 100)]);
    }

    return (
        <div>
            <h2>Original List: {list.join(", ")}</h2>
            <h2>Sorted List: {sortedList.join(", ")}</h2>
            <h2>Length: {sortedList.length}</h2>
            
            <button onClick={addItem}>Add Random Item</button>
            <button onClick={() => setCount(count + 1)}>
                Increment Count: {count}
            </button>


            <input value={text} onChange={(e) => setText(e.target.value)} />
                <button onClick={() => setToggle(!toggle)}>Toggle Theme</button>
      
                {/* <SearchButton onClick={handleSearch} /> */}
        </div>
    );
}

export default Hooks;