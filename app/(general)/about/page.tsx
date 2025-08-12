import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Title About',
    description: 'Description About'
};

export default function AboutPage() {
    return(
            <span className="text-7xl">About page</span>
    );
}