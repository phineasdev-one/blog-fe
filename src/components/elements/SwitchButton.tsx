import { useTheme } from '@/components/adapter/ThemeContext'

const ThemeSwitch = () => {
  const { isDarkMode, setIsDarkMode } = useTheme();

  // Function to toggle the theme
  const switchTheme = () => {
    setIsDarkMode((prevMode: boolean) => !prevMode);
  };

  return (
    <div className="switch-button">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckChecked"
          checked={isDarkMode}
          onChange={switchTheme}
        />
      </div>
    </div>
  );
};

export default ThemeSwitch;
