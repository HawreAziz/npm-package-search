import React, { useState, useRef, useEffect } from 'react';
import { useActions, useTypedSelector } from './hooks';



const SearchPackage: React.FC = () => {
    const [ packageName, setPackageName ] = useState('');
    const inputRef = useRef<HTMLInputElement | null >(null);
    const { searchPackages } = useActions();
    const { loading, error, data } = useTypedSelector(state => state.packages);


    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        inputRef.current?.focus();
        searchPackages(packageName);
    }

    useEffect(() => {
        inputRef.current?.focus();
    }, [])

    return <div style={{ marginTop: 10, marginBottom: 10 }}>
        <form onSubmit={onSubmit}>
            <input placeholder="Search npm package" 
                   value={packageName}
                   onChange={event => setPackageName(event.target.value)}
                   ref={inputRef}
                   />
            <button>Search</button>
            { error && <div>{error}</div>}
            { loading && <h2>Searching...</h2>}
            { data && data.map(name => <div key={name} style={{ margin: 10 }}>{name}</div>)}
        </form>
        </div>
}

export default SearchPackage;