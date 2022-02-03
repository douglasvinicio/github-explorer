import { RepositoryItem } from "./RepositoryItem";

import '../src/styles/repositories.scss';
import { useEffect, useState } from "react";

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {

    // State to store repositories
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/douglasvinicio/repos')
        .then(response => response.json())
        .then(data => setRepositories(data)) 
    }, []); 


    return (
        <section className="repository-list">
            <h1>Repository List</h1>

            <ul>
                {repositories.map(repository =>{
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}         
            </ul>
        </section>
    )
}



// useEffect(() => {
//     fetch('https://api.github.com/users/douglasvinicio/repos')
//     .then(response => response.json())
//     .then(data => setRepositories(data)) 
// }, []); // Dependencies -> Every time repositories changes useEffect is triggered 
// // If dependencies is empty, ueEffect will only execute itself once when the DOM is loaded
// // Careful to not let 2 parameter empty, otherwise useEffect will enter a loop. 