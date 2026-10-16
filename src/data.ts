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
  popular: boolean;
};

export const spotifyTracks: SpotifyTrack[] = [
  { title: 'Run Away', artist: 'TADYN', trackId: '6eq3waAY5WeYK8y7hVeOQz', embed: 'https://open.spotify.com/embed/track/6eq3waAY5WeYK8y7hVeOQz', popular: true },
  { title: 'Here With Me', artist: 'TADYN', trackId: '6r5sslX56FO5vmS1QUbIww', embed: 'https://open.spotify.com/embed/track/6r5sslX56FO5vmS1QUbIww', popular: true },
  { title: 'Forget Me Tomorrow', artist: 'TADYN', trackId: '70Z3LXCtJzF15Gfpd6ctEj', embed: 'https://open.spotify.com/embed/track/70Z3LXCtJzF15Gfpd6ctEj', popular: false },
  { title: 'Wish You the Best', artist: 'TADYN', trackId: '77KbkxDxQJoGGzbT8NwJHt', embed: 'https://open.spotify.com/embed/track/77KbkxDxQJoGGzbT8NwJHt', popular: true },
  { title: 'Love Again', artist: 'TADYN', trackId: '5Ggm0IIKWUSc6eM45Cr1gL', embed: 'https://open.spotify.com/embed/track/5Ggm0IIKWUSc6eM45Cr1gL', popular: false },
  { title: 'Pay Me', artist: 'TADYN', trackId: '4S2Em8hFq6VAI6jIEF7mn0', embed: 'https://open.spotify.com/embed/track/4S2Em8hFq6VAI6jIEF7mn0', popular: false },
  { title: 'Dancer in the Rain', artist: 'TADYN', trackId: '6jrtCFlVyZLazpwleXje2k', embed: 'https://open.spotify.com/embed/track/6jrtCFlVyZLazpwleXje2k', popular: false },
  { title: 'Same Night Different Dream', artist: 'THE KID JETT', trackId: '0PYym5yJodAIK4EXdXyqiC', embed: 'https://open.spotify.com/embed/track/0PYym5yJodAIK4EXdXyqiC', popular: true },
  { title: 'Too Late For Us', artist: 'THE KID JETT', trackId: '29b8Nf6NgwjtZE5tPlaOTl', embed: 'https://open.spotify.com/embed/track/29b8Nf6NgwjtZE5tPlaOTl', popular: true },
  { title: 'Again', artist: 'THE KID JETT', trackId: '75ulfzoT660uBxDVlzja3J', embed: 'https://open.spotify.com/embed/track/75ulfzoT660uBxDVlzja3J', popular: false },
  { title: 'THE BRIDGE', artist: 'THE KID JETT', trackId: '2To5k4OsGvHab2lzrR28iG', embed: 'https://open.spotify.com/embed/track/2To5k4OsGvHab2lzrR28iG', popular: false },
  { title: 'Brother (Bonus Track)', artist: 'THE KID JETT', trackId: '1FmGxzRnZhvTRw1Uvns1NZ', embed: 'https://open.spotify.com/embed/track/1FmGxzRnZhvTRw1Uvns1NZ', popular: false },
  { title: 'POP OUT', artist: 'youngscide', trackId: '0wpwc5iob66NiKEoWN2g85', embed: 'https://open.spotify.com/embed/track/0wpwc5iob66NiKEoWN2g85', popular: true },
  { title: 'How We Roll', artist: 'youngscide', trackId: '4xlMBTVT5zXmEgTYR25ydM', embed: 'https://open.spotify.com/embed/track/4xlMBTVT5zXmEgTYR25ydM', popular: true },
  { title: 'Rock Ya Body', artist: 'youngscide', trackId: '01CNCSy80U8Cc7NVY2GVNN', embed: 'https://open.spotify.com/embed/track/01CNCSy80U8Cc7NVY2GVNN', popular: true },
  { title: 'Know I Know', artist: 'youngscide', trackId: '42Nrp87CUUhf7fxOZIx7BY', embed: 'https://open.spotify.com/embed/track/42Nrp87CUUhf7fxOZIx7BY', popular: false },
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


export const releases: Release[] = [
  { title: 'Run Away', artist: 'TADYN', date: 'Single · 2026', cover: 'https://open.spotify.com/embed/track/6eq3waAY5WeYK8y7hVeOQz', status: 'out' },
  { title: 'Same Night Different Dream', artist: 'THE KID JETT', date: 'Single · 2026', cover: 'https://open.spotify.com/embed/track/0PYym5yJodAIK4EXdXyqiC', status: 'out' },
  { title: 'POP OUT', artist: 'youngscide', date: 'Single · 2026', cover: 'https://open.spotify.com/embed/track/0wpwc5iob66NiKEoWN2g85', status: 'out' },
  { title: 'Here With Me', artist: 'TADYN', date: 'Single · 2026', cover: 'https://open.spotify.com/embed/track/6r5sslX56FO5vmS1QUbIww', status: 'out' },
  { title: 'Too Late For Us', artist: 'THE KID JETT', date: 'Single · 2026', cover: 'https://open.spotify.com/embed/track/29b8Nf6NgwjtZE5tPlaOTl', status: 'out' },
  { title: 'How We Roll', artist: 'youngscide', date: 'Single · 2026', cover: 'https://open.spotify.com/embed/track/4xlMBTVT5zXmEgTYR25ydM', status: 'out' },
  { title: 'Wish You the Best', artist: 'TADYN', date: 'Single · 2026', cover: 'https://open.spotify.com/embed/track/77KbkxDxQJoGGzbT8NwJHt', status: 'out' },
  { title: 'Rock Ya Body', artist: 'youngscide', date: 'Single · 2026', cover: 'https://open.spotify.com/embed/track/01CNCSy80U8Cc7NVY2GVNN', status: 'out' },
];

export const applicationUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdDNNQhV9i8kHDt4KBvjvS4sqi8jK1dbh_eJbQ3L01qRQY7zQ/viewform';
