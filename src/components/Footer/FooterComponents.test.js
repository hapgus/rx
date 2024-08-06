import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Footer from './Footer';


describe('Footer components testing suite', ()=>{
    test('Footer renders without crashing',
        () => {
            const { container } = render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );
            expect(container).toBeTruthy();
        }
    );
})

