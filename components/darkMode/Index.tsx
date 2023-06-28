import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const DarkMode = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div className="grid place-items-center">
      <div>

        <div className="flex justify-center">
          {currentTheme === 'dark' ? (
            <button
              className="bg-black-700 hover:bg-black w-15 rounded-md border-purple-400 border-2 p-1"
              onClick={() => setTheme('light')}
            >
              {' '}
              <Image src="/sun.svg" alt="logo" height={20} width={20} />
            </button>
          ) : (
            <button
              className="bg-gray-100 w-15 rounded-md border-purple-400 border-2 p-1 hover:bg-gray-300"
              onClick={() => setTheme('dark')}
            >
              <Image src="/moon.svg" alt="logo" height={20} width={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default DarkMode;