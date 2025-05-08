const Footer = () => {
    return (
        <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            <div className="flex gap-3">
                <div className="social-icon cursor-pointer" onClick={() => window.open('https://github.com/CynthiaLiu0805', '_blank', 'noopener,noreferrer')}>
                    <img src="/assets/github.svg" alt="github" className="w-10/12 h-10/12"/>
                </div>

            </div>

            <p className="text-white-500">© 2025 Cynthia Liu. All rights reserved.</p>
        </footer>
    );
};

export default Footer;