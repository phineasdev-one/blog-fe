import Home from '@/app/page';
import Hello from '@/components/page/test/Hello';
import '@testing-library/jest-dom';
import { getByText, render } from '@testing-library/react';

describe('Home Page', () => {
  it('check for relevant text', () => {
    const { getByText } = render(<Hello />);

    expect(getByText('Hello')).toBeInTheDocument();
  });
});
