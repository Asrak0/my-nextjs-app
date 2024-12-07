import Layout from '../components/layout';
import UpdateDeleteEntriesPage from '../components/UpdateEntryPage';

export default function ViewEntriesPage() {
    return(
        <Layout>
            <h1>Explore</h1>
            <UpdateDeleteEntriesPage />
        </Layout>
    );
}