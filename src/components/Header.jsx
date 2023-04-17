import LoginButton from './LoginButton';

const Header = () => {
  return (
    <header className="h-[60px] w-full px-4 bg-gray-900 text-white flex justify-between items-center">
      <div className="font-bold text-[20px]">Cesium App</div>
      <div className="hidden md:flex items-center gap-10">
        <div>About us</div>
        <div>Technology</div>
        <div>Projects</div>
        <div>Career</div>
      </div>
      <LoginButton />
    </header>
  );
};

export default Header;
