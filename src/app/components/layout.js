import Link from 'next/link';

export default function Layout({children}) {
    return(
        <div>
            <nav style={navStyles}>
                <Link href={"/"}>home</Link>
                <Link href={"/entries"}>View Entries</Link>
                <Link href={"/add-entry"}>Add Entries</Link>
                <Link href={"/diaries"}>View Diaries</Link>
            </nav>
            <main>{children}</main>
        </div>
    );
}

const navStyles = {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '1rem',
    backgroundColor: '#f5f5f5',
    borderBottom: '1px solid #ddd',
};