/**
 * @description Hero config
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
export const config = {
  images: {
    0: {
      src: 'media/home/profile.png',
      width: 280,
      height: 280,
      resolution: {
        width: 70,
        height: 70,
      },
      pixel: {
        size: 3,
        motion: {
          displacement: {
            frequency: 1,
            amplitude: 40,
          },
        },
      },
      motion: {
        noise: {
          frequency: 0.05,
          amplitude: 2,
        },
      },
    },
  },
  pointer: {
    size: 0.1,
    trailing: {
      factor: 0.01,
    },
  },
}
