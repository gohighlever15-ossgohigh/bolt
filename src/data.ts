export type Artist = {
  id: string;
  name: string;
  spotify: string;
  image: string;
  bio: string;
  socials: { label: string; href: string }[];
};

export type Release = {
  title: string;
  artist: string;
  date: string;
  cover: string;
  status: 'out' | 'soon';
};

export type SpotifyTrack = {
  title: string;
  artist: string;
  trackId: string;
  embed: string;
};

export const spotifyTracks: SpotifyTrack[] = [
  { title: 'Run Away', artist: 'TADYN', trackId: '6eq3waAY5WeYK8y7hVeOQz', embed: 'https://open.spotify.com/embed/track/6eq3waAY5WeYK8y7hVeOQz' },
  { title: 'Here With Me', artist: 'TADYN', trackId: '6r5sslX56FO5vmS1QUbIww', embed: 'https://open.spotify.com/embed/track/6r5sslX56FO5vmS1QUbIww' },
  { title: 'Paper Planes', artist: 'TADYN', trackId: '6jrtCFlVyZLazpwleXje2k', embed: 'https://open.spotify.com/embed/track/6jrtCFlVyZLazpwleXje2k' },
  { title: 'Pay Me', artist: 'TADYN', trackId: '4S2Em8hFq6VAI6jIEF7mn0', embed: 'https://open.spotify.com/embed/track/4S2Em8hFq6VAI6jIEF7mn0' },
  { title: 'Same Night Different Dream (Alternate Mix)', artist: 'THE KID JETT', trackId: '0PYym5yJodAIK4EXdXyqiC', embed: 'https://open.spotify.com/embed/track/0PYym5yJodAIK4EXdXyqiC' },
  { title: 'Again', artist: 'THE KID JETT', trackId: '75ulfzoT660uBxDVlzja3J', embed: 'https://open.spotify.com/embed/track/75ulfzoT660uBxDVlzja3J' },
  { title: 'Brother (Bonus Track)', artist: 'THE KID JETT', trackId: '1FmGxzRnZhvTRw1Uvns1NZ', embed: 'https://open.spotify.com/embed/track/1FmGxzRnZhvTRw1Uvns1NZ' },
  { title: 'THE BRIDGE', artist: 'THE KID JETT', trackId: '2To5k4OsGvHab2lzrR28iG', embed: 'https://open.spotify.com/embed/track/2To5k4OsGvHab2lzrR28iG' },
  { title: 'Know I Know', artist: 'youngscide', trackId: '42Nrp87CUUhf7fxOZIx7BY', embed: 'https://open.spotify.com/embed/track/42Nrp87CUUhf7fxOZIx7BY' },
];

const portraits = [
  '/images/artists/780840719_18099785579014023_6782924280227178316_n.jpg',
  '/images/artists/IMG_2715.JPG',
  '/images/artists/1000x1000.jpg',
  '/images/76025a6a67.webp',
  '/images/artists/AND_THAT_A_STAR_WAS_BORN🤩🤩.jpg',
  '/images/artists/Oh_sh_it’s_getting_heated🔥🔥🔥🔥.jpg',
  '/images/artists/I’ll_call_you_back_in_a_second✍️✍️_(1).jpg',
  '/images/artists/Yes_Sir,_Here_Comes_another_one!!!🤩⭐️.jpg',
  '/images/artists/Stuck_in_the_high_loop_(1).jpg',
  '/images/artists/This_is_all_he’d_send_us🥲_(someone_is_grouchy)_copy.jpg',
];

const spotifyLinks = [
  'https://open.spotify.com/artist/3sNMoJo8vPKlK8xFxXLCUo',
  'https://open.spotify.com/artist/3MAVWo7qFIckg68Gj4tBek',
  'https://open.spotify.com/artist/6GPLARcKHyTh0i3i67wPan',
  'https://open.spotify.com/artist/4dTlrERcZBZE8egV4YugpO',
  'https://open.spotify.com/artist/6GPLARcKHyTh0i3i67wPan',
  'https://open.spotify.com/artist/6gjyn6VpLNULqE1ouH48bg',
  'https://open.spotify.com/artist/0QnRYGkGwj86hQApcn0H0z',
  'https://open.spotify.com/artist/3C4X59QVqOjiZwT5e2hN5F',
  'https://open.spotify.com/artist/6RyJPALzeDoLd402qgf5el',
  'https://open.spotify.com/artist/1RILf7ZSkScz2HW1sRimCL',
];

const names = ['TADYN', 'THE KID JETT', 'em34son', '-+ApolloX+-', 'youngscide', 'YHB_Kee', 'gaverick_booms', 'GVIYEM', 'ZXM', 'WITHER'];

export const artists: Artist[] = names.map((name, index) => ({
  id: name.toLowerCase().replace(/ /g, '-'),
  name,
  spotify: spotifyLinks[index],
  image: portraits[index],
  bio: `${name} moves with a point of view that feels immediate and hard to imitate. A distinct voice, a sharp world, and songs built to stay with you.`,
  socials: [
    { label: 'Instagram', href: '#' },
    { label: 'TikTok', href: '#' },
    { label: 'YouTube', href: '#' },
  ],
}));

const covers = [
  'https://images.pexels.com/photos/5764281/pexels-photo-5764281.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/18197120/pexels-photo-18197120.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/19409467/pexels-photo-19409467.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/14865644/pexels-photo-14865644.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/8168570/pexels-photo-8168570.png?auto=compress&cs=tinysrgb&w=900',
];

export const releases: Release[] = [
  { title: 'Run Away', artist: 'TADYN', date: 'Single · 2026', cover: covers[0], status: 'out' },
  { title: 'Same Night Different Dream (Alternate Mix)', artist: 'THE KID JETT', date: 'Single · 2026', cover: covers[1], status: 'out' },
  { title: 'Know I Know', artist: 'youngscide', date: 'Single · 2026', cover: covers[2], status: 'out' },
  { title: 'Here With Me', artist: 'TADYN', date: 'Single · 2026', cover: covers[3], status: 'out' },
  { title: 'Again', artist: 'THE KID JETT', date: 'Single · 2026', cover: covers[4], status: 'out' },
  { title: 'Billie Jean', artist: 'youngscide', date: 'Single · 2026', cover: covers[0], status: 'soon' },
];

export const applicationUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdDNNQhV9i8kHDt4KBvjvS4sqi8jK1dbh_eJbQ3L01qRQY7zQ/viewform';
