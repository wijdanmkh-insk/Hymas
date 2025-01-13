const Footer = () => {
  return (
    <footer className="text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-xs">
          &copy; {new Date().getFullYear()} Hymas. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
