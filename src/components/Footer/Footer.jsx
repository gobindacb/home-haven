import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <aside>
                <img className='w-full' src={logo} alt="" />
                <p>Home Haven Ltd.<br />where dreams find their address<br />Providing reliable home since 1992</p>
            </aside>
            <div className='flex flex-row gap-16 lg:flex-row lg:gap-5 mt-20'>
            <nav className='flex flex-col'>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav className='flex flex-col'>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav className='flex flex-col'>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            </div>
        </footer>
    );
};

export default Footer;