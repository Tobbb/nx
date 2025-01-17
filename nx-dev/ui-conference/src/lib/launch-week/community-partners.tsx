export function LaunchNxCommunityPartners(): JSX.Element {
  const partners: Array<{
    imageUrl: string;
    name: string;
    linkTarget: string;
  }> = [
    {
      imageUrl: '/images/launch-nx/stackblitz.png',
      name: 'Stackblitz',
      linkTarget: 'https://stackblitz.com/',
    },
    {
      imageUrl: '/images/launch-nx/ng-conf.webp',
      name: 'NG-Conf',
      linkTarget: 'https://ng-conf.org/',
    },
    {
      imageUrl: '/images/launch-nx/thisdot.png',
      name: 'ThisDot',
      linkTarget: 'https://www.thisdot.co/',
    },
    {
      imageUrl: '/images/launch-nx/storybook.svg',
      name: 'Storybook',
      linkTarget: 'https://storybook.js.org/',
    },
    {
      imageUrl: '/images/launch-nx/chromatic.png',
      name: 'Chromatic',
      linkTarget: 'https://www.chromatic.com/',
    },
    {
      imageUrl: '/images/launch-nx/epicweb.svg',
      name: 'Epic Web',
      linkTarget: 'https://www.epicweb.dev/',
    },
  ];

  return (
    <div className="border-t border-slate-200 dark:border-slate-700">
      <div className="mx-auto max-w-7xl py-6">
        <div className="mx-auto mt-10 px-6 grid max-w-lg grid-cols-1 items-center gap-8 sm:max-w-xl md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {partners.map((partner) => (
            <a
              key={partner.name}
              className="flex justify-center w-full h-full bg-white p-8 rounded-lg"
              href={partner.linkTarget}
            >
              <img
                key={partner.name}
                className={'max-h-12 max-w-[220px] object-contain'}
                src={partner.imageUrl}
                alt={partner.name}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
