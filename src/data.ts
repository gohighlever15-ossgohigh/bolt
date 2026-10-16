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

const portraits = [
  '/images/artists/780840719_18099785579014023_6782924280227178316_n.jpg',
  '/images/artists/Oh_sh_it’s_getting_heated🔥🔥🔥🔥.jpg',
  '/images/artists/IMG_2715.JPG',
  '/images/artists/1000x1000.jpg',
  '/images/76025a6a67.webp',
  '/images/artists/AND_THAT_A_STAR_WAS_BORN🤩🤩.jpg',
  '/images/artists/I’ll_call_you_back_in_a_second✍️✍️_(1).jpg',
  '/images/artists/Yes_Sir,_Here_Comes_another_one!!!🤩⭐️.jpg',
  '/images/artists/Stuck_in_the_high_loop_(1).jpg',
  '/images/artists/This_is_all_he’d_send_us🥲_(someone_is_grouchy)_copy.jpg',
];

const spotifyLinks = [
  'https://open.spotify.com/artist/3sNMoJo8vPKlK8xFxXLCUo',
  'https://open.spotify.com/artist/1p98iUARI2UdtAhk63eEQV',
  'https://open.spotify.com/artist/3MAVWo7qFIckg68Gj4tBek',
  'https://open.spotify.com/artist/6GPLARcKHyTh0i3i67wPan',
  '#',
  'https://open.spotify.com/artist/1p98iUARI2UdtAhk63eEQV',
  'https://open.spotify.com/artist/0QnRYGkGwj86hQApcn0H0z',
  'https://open.spotify.com/artist/3C4X59QVqOjiZwT5e2hN5F',
  'https://open.spotify.com/artist/6RyJPALzeDoLd402qgf5el',
  'https://open.spotify.com/artist/1RILf7ZSkScz2HW1sRimCL',
];

const names = ['TADYN', 'YHB_Kee', 'THE KID JETT', 'em34son', '-+ApolloX+-', 'youngscide', 'gaverick_booms', 'GVIYEM', 'ZXM', 'WITHER'];

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
  { title: 'Cold Front', artist: 'TADYN', date: '08.29.26', cover: covers[0], status: 'out' },
  { title: 'No Signal', artist: 'YHB_Kee', date: '08.15.26', cover: covers[1], status: 'out' },
  { title: 'After Hours', artist: 'THE KID JETT', date: '07.31.26', cover: covers[2], status: 'out' },
  { title: 'New Weather', artist: 'youngscide', date: '09.26.26', cover: covers[3], status: 'soon' },
  { title: 'Blue Light', artist: 'GVIYEM', date: '10.10.26', cover: covers[4], status: 'soon' }
];

export const applicationUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdDNNQhV9i8kHDt4KBvjvS4sqi8jK1dbh_eJbQ3L01qRQY7zQ/viewform';
