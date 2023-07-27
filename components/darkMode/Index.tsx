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
              className="bg-cyan-100 w-15 rounded-md border-cyan-600 border p-1"
              onClick={() => setTheme('light')}
            >
              {' '}
              <Image src="/sun.svg" alt="logo" height={25} width={25} />
            </button>
          ) : (
            <button
            className="bg-gray-900 w-15 rounded-md border-cyan-600 border p-1"
            onClick={() => setTheme('dark')}
            >
            <Image src="/moon.svg" alt="logo" height={25} width={25} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default DarkMode;