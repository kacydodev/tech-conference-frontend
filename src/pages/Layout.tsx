import { Link, Outlet } from 'react-router';
import MobileNav from '../components/MobileNav';
import { NavButton } from '../components/NavButton';
import { Button } from '../components/NewButton';
import { Logo } from '../components/Logo';
import { FooterTitle } from '../components/Typography';
import { useQuery } from '@tanstack/react-query';
import type { Track } from '../types';

function Header() {
	return (
		<header className='flex justify-between'>
			<Logo to='/' />
			<nav className='hidden md:flex mr-1'>
				<NavButton to='/'>Home</NavButton>
				<NavButton to='/schedule'>Schedule</NavButton>
				<NavButton to='/speakers'>Speakers</NavButton>
			</nav>

			{/* Mobile View */}
			<nav className='md:hidden'>
				<MobileNav />
			</nav>
		</header>
	);
}

function Footer() {
	const url = new URL('/api/v1/tracks', import.meta.env.VITE_DATABASE_REMOTE);

	const { data } = useQuery({
		queryKey: ['main-talks', url],
		queryFn: async () => {
			const response = await fetch(url.toString());
			const data: Track[] = await response.json();
			return data;
		},
	});

	return (
		<footer className='flex flex-col lg:flex-row lg:justify-between'>
			<div>
				<Logo to='/' />
				<sub className='block'>
					A three-day conference for engineers who build the interfaces humans
					use every day.
				</sub>
			</div>
			<div className='flex justify-between'>
				<div className='flex flex-col text-sm [&_button]:capitalize!'>
					<FooterTitle>Navigate</FooterTitle>
					<Link to='/'>
						<Button variants='link'>Home</Button>
					</Link>
					<Link to='/schedule'>
						<Button variants='link'>Schedule</Button>
					</Link>
					<Link to='/speakers'>
						<Button variants='link'>Speakers</Button>
					</Link>
				</div>
				<div className='flex flex-col text-sm [&_button]:capitalize!'>
					<FooterTitle>Tracks</FooterTitle>
					{data?.map(({ id, name }) => (
						<Link key={id} to={id}>
							<Button variants='link'>{name}</Button>
						</Link>
					))}
				</div>
				<div className='flex flex-col text-sm'>
					<FooterTitle>Venue</FooterTitle>
					<p>Pier 70</p>
					<p>San Francisco, CA</p>
					<p>Nov 15–17, 2026</p>
				</div>
			</div>
		</footer>
	);
}

function Layout() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}

export default Layout;
