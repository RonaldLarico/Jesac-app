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
      <div className="flex justify-center">
        {currentTheme === 'dark' ? (
          <Image src="/sun.svg" alt="logo" height={25} width={25} className='text-violet-500' />
        ) : (
          <Image src="/moon.svg" alt="logo" height={25} width={25} />
        )}
      </div>
    </div>
  );
}

export default DarkMode;