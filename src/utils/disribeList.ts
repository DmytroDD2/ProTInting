export async function getDisribeList(translation: any) {
  const disribeListRaw = [
    {
      image: () => import('@/assets/star.svg'),
      title: translation.aboutService.materials.title,
      description: translation.aboutService.materials.description,
    },
    {
      image: () => import('@/assets/cube.svg'),
      title: translation.aboutService.durability.title,
      description: translation.aboutService.durability.description,
    },
    {
      image: () => import('@/assets/gear.svg'),
      title: translation.aboutService.adoptable.title,
      description: translation.aboutService.adoptable.description,
    },
    {
      image: () => import('@/assets/quality.svg'),
      title: translation.aboutService.quality.title,
      description: translation.aboutService.quality.description,
    },
  ];
  return await Promise.all(
    disribeListRaw.map(async ({ image, ...rest }) => {
      const module = await image();
      return { Svg: module.default, ...rest };
    })
  );
}
