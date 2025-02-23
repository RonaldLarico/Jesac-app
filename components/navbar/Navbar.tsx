import Link from 'next/link';
import { useTranslations } from 'next-intl';
import LocaleSwitcher from '@/components/utils/localeSwitcher';

const NavBar: React.FC = () => {
  const t = useTranslations('common');

  return (
    <div className="fixed w-full z-30">
      <nav className="flex invisible lg:visible md:p-2 p-2 justify-between w-full bg-sky-700/90">
        <div>
          <Link href="#home">
            <h1 className="text-2xl uppercase font-bold">{t('logo')}</h1>
          </Link>
        </div>
        <div className="flex items-center">
          <LocaleSwitcher />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
