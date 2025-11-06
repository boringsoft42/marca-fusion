import { useTranslations } from 'next-intl';

/**
 * Marca Fusión Home Page
 *
 * This is a placeholder that will be replaced with the full home page implementation
 * in Task 3.0
 */

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-marca-green">
        {t('hero.title')}
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        {t('hero.subtitle')}
      </p>
    </div>
  );
}
