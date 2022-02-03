interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
    }
}

export function RepositoryItem(props: RepositoryItemProps) {
    return (
        <li>
        <a href={props.repository.html_url}><strong>{props.repository.name ?? 'Repository Name - Default data'}</strong></a>
        <p>{props.repository.description ?? '-- No description available --'}</p>
    </li>
    );
}