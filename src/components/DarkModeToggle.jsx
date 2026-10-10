const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  const handleToggle = () => {
    setDarkMode((currentMode) => !currentMode);
  };

  return (
    <button onClick={handleToggle}>
      {darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;