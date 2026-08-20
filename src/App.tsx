import { BrowserRouter, NavLink, Route, Routes } from 'react-router';
import Home from './pages/Home';
import Handheld from './pages/Handheld';
import styled from 'styled-components';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/handheld">Handheld</StyledNavLink>
      </NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/handheld" element={<Handheld />} />
      </Routes>
    </BrowserRouter>
  )
}

const NavBar = styled.nav`
  text-align: center;
  font-size: var(--text-md);
  width: 50vw;
  border: 2px solid var(--color-primary);
  border-radius: var(--radius-base);
  margin: var(--space-sm) auto;
  display: flex;
  justify-content: center;
`

const StyledNavLink = styled(NavLink)`
  color: var(--color-text);
  background-color: var(--color-gray);
  padding: var(--space-sm);
  text-decoration: none;
  text-align: center;
  flex: 1 1 0;

  &.active {
    background-color: var(--color-primary);
  }

  &:first-child {
    border-radius: calc(var(--radius-base) - 2px) 0 0 calc(var(--radius-base) - 2px);
  }

  &:last-child {
    border-radius: 0 calc(var(--radius-base) - 2px) calc(var(--radius-base) - 2px) 0;
  }
`
