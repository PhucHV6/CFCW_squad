import { Match, Player, TicketInfo } from './types';

export const MOCK_MATCHES: Match[] = [
  // Results
  {
    id: 'm_prev_1',
    opponent: 'Man City Women',
    date: 'Fri 16 Feb',
    time: '19:15',
    venue: 'Kingsmeadow',
    competition: 'Barclays Women\'s Super League',
    isHome: true,
    score: '0 - 1',
    status: 'PLAYED',
  },
  {
    id: 'm_prev_2',
    opponent: 'Leicester City Women',
    date: 'Sun 03 Mar',
    time: '12:00',
    venue: 'King Power Stadium',
    competition: 'Barclays Women\'s Super League',
    isHome: false,
    score: '0 - 4',
    status: 'PLAYED',
  },
  // Upcoming - March
  {
    id: 'm1',
    opponent: 'Ajax Women',
    date: 'Tue 19 Mar',
    time: '17:45',
    venue: 'Johan Cruijff ArenA',
    competition: 'UEFA Women\'s Champions League',
    isHome: false,
    status: 'UPCOMING',
  },
  {
    id: 'm2',
    opponent: 'West Ham Women',
    date: 'Sun 24 Mar',
    time: '16:30',
    venue: 'Chigwell Construction Stadium',
    competition: 'Barclays Women\'s Super League',
    isHome: false,
    status: 'UPCOMING',
  },
  {
    id: 'm3',
    opponent: 'Ajax Women',
    date: 'Wed 27 Mar',
    time: '20:00',
    venue: 'Stamford Bridge',
    competition: 'UEFA Women\'s Champions League',
    isHome: true,
    status: 'UPCOMING',
  },
  {
    id: 'm4',
    opponent: 'Arsenal Women',
    date: 'Sun 31 Mar',
    time: '15:00',
    venue: 'Molineux Stadium',
    competition: 'FA Women\'s League Cup',
    isHome: false,
    status: 'UPCOMING',
  },
  // Upcoming - April
  {
    id: 'm5',
    opponent: 'Man Utd Women',
    date: 'Sun 14 Apr',
    time: '12:00',
    venue: 'Leigh Sports Village',
    competition: 'Women\'s FA Cup',
    isHome: false,
    status: 'UPCOMING',
  },
  {
    id: 'm6',
    opponent: 'Aston Villa Women',
    date: 'Wed 17 Apr',
    time: '19:00',
    venue: 'Kingsmeadow',
    competition: 'Barclays Women\'s Super League',
    isHome: true,
    status: 'UPCOMING',
  },
  {
    id: 'm7',
    opponent: 'Barcelona Women',
    date: 'Sat 20 Apr',
    time: '12:30',
    venue: 'Lluís Companys Olympic Stadium',
    competition: 'UEFA Women\'s Champions League',
    isHome: false,
    status: 'UPCOMING',
  }
];

export const MOCK_PLAYERS: Player[] = [
  // SENIOR SQUAD
  // Goalkeepers
  { 
    id: 'p1', 
    name: 'Livia Peng', 
    number: 1, 
    position: 'Goalkeeper', 
    country: 'SUI', 
    imageUrl: 'https://img.chelseafc.com/image/upload/f_auto,h_860,dpr_2.0,q_50/editorial/people/ladies/2025-26/Livia_Peng_profile_2025-26_avatar-removebg.png',
    bio: "A talented Swiss goalkeeper known for her agility and reflex saves. Peng joins the squad bringing international experience and great potential between the posts.",
    stats: { appearances: 5, goals: 0, assists: 0, pace: 48, shooting: 22, passing: 75, dribbling: 42, defending: 80, physical: 70 },
    squadType: 'Senior'
  },
  { 
    id: 'p2', 
    name: 'Hannah Hampton', 
    number: 24, 
    position: 'Goalkeeper', 
    country: 'ENG', 
    imageUrl: 'https://img.chelseafc.com/image/upload/f_auto,h_860,dpr_2.0,q_50/editorial/people/ladies/2025-26/Hannah_Hampton_profile_2025-26_avatar-removebg.png',
    bio: "One of England's brightest goalkeeping talents, Hampton arrived with a reputation for incredible distribution and shot-stopping ability.",
    stats: { appearances: 10, goals: 0, assists: 1, pace: 50, shooting: 25, passing: 84, dribbling: 45, defending: 80, physical: 72 },
    squadType: 'Senior'
  },
  // Defenders
  { 
    id: 'p22', 
    name: 'Lucy Bronze', 
    number: 22, 
    position: 'Defender', 
    country: 'ENG', 
    imageUrl: 'https://img.chelseafc.com/image/upload/f_auto,h_860,dpr_2.0,q_50/editorial/people/ladies/2025-26/Lucy_Bronze_profile_2025-26_avatar-removebg.png',
    bio: "A living legend of the game. Lucy Bronze joined Chelsea in the summer of 2024, bringing a wealth of experience, winner's mentality, and world-class ability to the backline.",
    stats: { appearances: 5, goals: 1, assists: 2, pace: 80, shooting: 70, passing: 82, dribbling: 78, defending: 88, physical: 85 },
    squadType: 'Senior'
  },
  { 
    id: 'p3', 
    name: 'Millie Bright', 
    number: 4, 
    position: 'Defender', 
    country: 'ENG', 
    imageUrl: 'https://img.chelseafc.com/image/upload/f_auto,h_860,dpr_2.0,q_50/editorial/people/ladies/2025-26/Millie_Bright_profile_2025-26_avatar-removebg.png',
    bio: "The rock at the heart of the defence. Millie Bright is renowned for her aerial dominance, crunching tackles, and leadership on the pitch.",
    stats: { appearances: 150, goals: 15, assists: 8, pace: 72, shooting: 65, passing: 75, dribbling: 60, defending: 91, physical: 94 },
    squadType: 'Senior'
  },
  { 
    id: 'p26', 
    name: 'Kadeisha Buchanan', 
    number: 26, 
    position: 'Defender', 
    country: 'CAN', 
    imageUrl: 'https://img.chelseafc.com/image/upload/f_auto,h_860,dpr_2.0,q_50/editorial/people/ladies/2025-26/Kadeisha_Buchanan_profile_2025-26_avatar-removebg.png',
    bio: "A five-time Champions League winner before joining Chelsea. Buchanan is a world-class center back combining speed with elite reading of the game.",
    stats: { appearances: 40, goals: 1, assists: 2, pace: 79, shooting: 45, passing: 76, dribbling: 65, defending: 89, physical: 88 },
    squadType: 'Senior'
  },
  { 
    id: 'p12', 
    name: 'Ashley Lawrence', 
    number: 12, 
    position: 'Defender', 
    country: 'CAN', 
    imageUrl: 'https://img.chelseafc.com/image/upload/f_auto,h_860,dpr_2.0,q_50/editorial/people/ladies/2025-26/Ashley_Lawrence_profile_2025-26_avatar-removebg.png',
    bio: "An athletic and versatile full-back, Lawrence is known for her tireless running, defensive recovery, and ability to join the attack.",
    stats: { appearances: 25, goals: 1, assists: 6, pace: 86, shooting: 55, passing: 78, dribbling: 81, defending: 82, physical: 75 },
    squadType: 'Senior'
  },
  { 
    id: 'p21', 
    name: 'Niamh Charles', 
    number: 21, 
    position: 'Defender', 
    country: 'ENG', 
    imageUrl: 'https://img.chelseafc.com/image/upload/f_auto,h_860,dpr_2.0,q_50/editorial/people/ladies/2025-26/Niamh_Charles_profile_2025-26_avatar-removebg.png',
    bio: "Starting her career as a winger, Charles has transformed into a dynamic full-back who loves to drive forward and support the attack.",
    stats: { appearances: 90, goals: 8, assists: 15, pace: 84, shooting: 68, passing: 74, dribbling: 79, defending: 76, physical: 78 },
    squadType: 'Senior'
  },
  { 
    id: 'p15', 
    name: 'Eve Perisset', 
    number: 15, 
    position: 'Defender', 
    country: 'FRA', 
    imageUrl: 'https://img.chelseafc.com/image/upload/f_auto,h_860,dpr_2.0,q_50/editorial/people/ladies/2025-26/Eve_Perisset_profile_2025-26_avatar-removebg.png',
    bio: "A technically gifted full-back with exceptional crossing ability. Perisset brings French flair and Champions League winning experience.",
    stats: { appearances: 45, goals: 1, assists: 12, pace: 78, shooting: 55, passing: 83, dribbling: 75, defending: 81, physical: 70 },
    squadType: 'Senior'
  },
  // Midfielders
  { 
    id: 'p8', 
    name: 'Erin Cuthbert', 
    number: 22, 
    position: 'Midfielder', 
    country: 'SCO', 
    imageUrl: 'https://img.chelseafc.com/image/upload/f_auto,h_860,dpr_2.0,q_50/editorial/people/ladies/2025-26/Erin_Cuthbert_profile_2025-26_avatar-removebg.png',
    bio: "The engine room. Cuthbert's tenacity and long-range shooting ability have made her a fan favourite. She never stops running.",
    stats: { appearances: 160, goals: 30, assists: 25, pace: 78, shooting: 84, passing: 81, dribbling: 80, defending: 75, physical: 85 },
    squadType: 'Senior'
  },
  { 
    id: 'p6', 
    name: 'Sjoeke Nusken', 
    number: 6, 
    position: 'Midfielder', 
    country: 'GER', 
    imageUrl: 'https://img.chelseafc.com/image/upload/f_auto,h_860,dpr_2.0,q_50/editorial/people/ladies/2025-26/Sjoeke_Nusken_profile_2025-26_avatar-removebg.png',
    bio: "A box-to-box powerhouse. Nusken arrived from Germany and immediately made an impact with her energy, late runs into the box, and goal-scoring.",
    stats: { appearances: 25, goals: 8, assists: 5, pace: 76, shooting: 78, passing: 80, dribbling: 75, defending: 78, physical: 82 },
    squadType: 'Senior'
  },
  { 
    id: 'p11', 
    name: 'Guro Reiten', 
    number: 11, 
    position: 'Midfielder', 
    country: 'NOR', 
    imageUrl: 'https://img.chelseafc.com/image/upload/f_auto,h_860,dpr_2.0,q_50/editorial/people/ladies/2025-26/Guro_Reiten_profile_2025-26_avatar-removebg.png',
    bio: "The Assist Queen. Reiten's left foot is a wand, capable of unlocking any defence with precise crosses and through balls. Also deadly from set-pieces.",
    stats: { appearances: 120, goals: 35, assists: 55, pace: 82, shooting: 80, passing: 92, dribbling: 86, defending: 55, physical: 65 },
    squadType: 'Senior'
  },
  { 
    id: 'p5', 
    name: 'Sophie Ingle', 
    number: 5, 
    position: 'Midfielder', 
    country: 'WAL', 
    imageUrl: 'https://img.chelseafc.com/image/upload/f_auto,h_860,dpr_2.0,q_50/editorial/people/ladies/2025-26/Sophie_Ingle_profile_2025-26_avatar-removebg.png',
    bio: "The midfield metronome. Ingle's ability to break up play and restart attacks with simple, effective passing makes her indispensable.",
    stats: { appearances: 180, goals: 12, assists: 10, pace: 65, shooting: 60, passing: 85, dribbling: 70, defending: 84, physical: 76 },
    squadType: 'Senior'
  },
  { 
    id: 'p19', 
    name: 'Johanna Rytting Kaneryd', 
    number: 19, 
    position: 'Midfielder', 
    country: 'SWE', 
    imageUrl: 'https://img.chelseafc.com/image/upload/f_auto,h_860,dpr_2.0,q_50/editorial/people/ladies/2025-26/Johanna_Rytting_Kaneryd_profile_2025-26_avatar-removebg.png',
    bio: "Electric pace and dribbling on the wing. JRK terrorizes full-backs and creates numerous chances for her teammates.",
    stats: { appearances: 45, goals: 6, assists: 10, pace: 90, shooting: 72, passing: 75, dribbling: 86, defending: 50, physical: 68 },
    squadType: 'Senior'
  },
  // Forwards
  { 
    id: 'p10', 
    name: 'Lauren James', 
    number: 10, 
    position: 'Forward', 
    country: 'ENG', 
    imageUrl: 'https://img.chelseafc.com/image/upload/f_auto,h_860,dpr_2.0,q_50/editorial/people/ladies/2025-26/Lauren_James_profile_2025-26_avatar-removebg.png',
    bio: "A generational talent. James possesses world-class dribbling, strength, and finishing. She can create a goal out of absolutely nothing.",
    stats: { appearances: 50, goals: 25, assists: 15, pace: 88, shooting: 86, passing: 82, dribbling: 94, defending: 40, physical: 85 },
    squadType: 'Senior'
  },
  { 
    id: 'p20', 
    name: 'Sam Kerr', 
    number: 20, 
    position: 'Forward', 
    country: 'AUS', 
    imageUrl: 'https://img.chelseafc.com/image/upload/f_auto,h_860,dpr_2.0,q_50/editorial/people/ladies/2025-26/Sam_Kerr_profile_2025-26_avatar-removebg.png',
    bio: "One of the world's best strikers. Kerr's movement, heading ability, and finishing are elite. The face of the franchise.",
    stats: { appearances: 110, goals: 90, assists: 25, pace: 87, shooting: 93, passing: 75, dribbling: 84, defending: 45, physical: 80 },
    squadType: 'Senior'
  },
  { 
    id: 'p9', 
    name: 'Catarina Macario', 
    number: 9, 
    position: 'Forward', 
    country: 'USA', 
    imageUrl: 'https://img.chelseafc.com/image/upload/f_auto,h_860,dpr_2.0,q_50/editorial/people/ladies/2025-26/Catarina_Macario_profile_2025-26_avatar-removebg.png',
    bio: "A highly technical and intelligent forward. Macario's vision and link-up play make her a nightmare for defenders to track.",
    stats: { appearances: 10, goals: 3, assists: 4, pace: 82, shooting: 85, passing: 86, dribbling: 88, defending: 45, physical: 72 },
    squadType: 'Senior'
  },
  { 
    id: 'p35', 
    name: 'Mayra Ramirez', 
    number: 35, 
    position: 'Forward', 
    country: 'COL', 
    imageUrl: 'https://img.chelseafc.com/image/upload/f_auto,h_860,dpr_2.0,q_50/editorial/people/ladies/2025-26/Mayra_Ramirez_profile_2025-26_avatar-removebg.png',
    bio: "A physical powerhouse. Ramirez holds up the ball exceptionally well and uses her strength to dominate defenders.",
    stats: { appearances: 10, goals: 4, assists: 2, pace: 84, shooting: 82, passing: 70, dribbling: 78, defending: 40, physical: 92 },
    squadType: 'Senior'
  },
  { 
    id: 'p17', 
    name: 'Sandy Baltimore', 
    number: 17, 
    position: 'Forward', 
    country: 'FRA', 
    imageUrl: 'https://img.chelseafc.com/image/upload/f_auto,h_860,dpr_2.0,q_50/editorial/people/ladies/2025-26/Sandy_Baltimore_profile_2025-26_avatar-removebg.png',
    bio: "A new arrival for 24/25. Baltimore is a diminutive but explosive winger with low center of gravity and excellent crossing ability.",
    stats: { appearances: 2, goals: 1, assists: 1, pace: 88, shooting: 74, passing: 79, dribbling: 85, defending: 45, physical: 55 },
    squadType: 'Senior'
  },
  { 
    id: 'p33', 
    name: 'Aggie Beever-Jones', 
    number: 33, 
    position: 'Forward', 
    country: 'ENG', 
    imageUrl: 'https://img.chelseafc.com/image/upload/f_auto,h_860,dpr_2.0,q_50/editorial/people/ladies/2025-26/Aggie_Beever-Jones_profile_2025-26_avatar-removebg.png',
    bio: "An exciting academy graduate. Aggie has an eye for goal and brings youthful energy and directness to the forward line.",
    stats: { appearances: 20, goals: 8, assists: 3, pace: 85, shooting: 78, passing: 72, dribbling: 80, defending: 35, physical: 68 },
    squadType: 'Senior'
  },

  // U21s
  {
    id: 'u21_1',
    name: 'Katie Cox',
    number: 40,
    position: 'Goalkeeper',
    country: 'ENG',
    imageUrl: 'https://img.chelseafc.com/image/upload/f_auto,h_860,dpr_2.0,q_50/editorial/people/ladies/2025-26/Katie_Cox_profile_2025-26_avatar-removebg.png',
    bio: "Promising young goalkeeper who has risen through the academy ranks.",
    stats: { appearances: 0, goals: 0, assists: 0, pace: 40, shooting: 10, passing: 60, dribbling: 30, defending: 65, physical: 60 },
    squadType: 'U21'
  },
  {
    id: 'u21_2',
    name: 'Lexi Potter',
    number: 42,
    position: 'Midfielder',
    country: 'ENG',
    imageUrl: 'https://img.chelseafc.com/image/upload/f_auto,h_860,dpr_2.0,q_50/editorial/people/ladies/2025-26/Lexi_Potter_profile_2025-26_avatar-removebg.png',
    bio: "Technically gifted midfielder, the youngest female player to sign a professional contract with Chelsea.",
    stats: { appearances: 0, goals: 0, assists: 0, pace: 70, shooting: 60, passing: 75, dribbling: 72, defending: 50, physical: 55 },
    squadType: 'U21'
  },

  // LOAN
  {
    id: 'l1',
    name: 'Jorja Fox',
    number: 38,
    position: 'Defender',
    country: 'ENG',
    imageUrl: 'https://img.chelseafc.com/image/upload/f_auto,h_860,dpr_2.0,q_50/editorial/people/ladies/2025-26/Jorja_Fox_profile_2025-26_avatar-removebg.png',
    bio: "Talented full-back currently gaining experience on loan at Crystal Palace.",
    stats: { appearances: 5, goals: 0, assists: 1, pace: 75, shooting: 40, passing: 65, dribbling: 68, defending: 70, physical: 65 },
    squadType: 'Loan'
  },
  {
    id: 'l2',
    name: 'Ashanti Akpan',
    number: 36,
    position: 'Midfielder',
    country: 'POL',
    imageUrl: 'https://img.chelseafc.com/image/upload/f_auto,h_860,dpr_2.0,q_50/editorial/people/ladies/2025-26/Ashanti_Akpan_profile_2025-26_avatar-removebg.png',
    bio: "Powerhouse midfielder on loan at Birmingham City.",
    stats: { appearances: 2, goals: 0, assists: 0, pace: 70, shooting: 60, passing: 68, dribbling: 65, defending: 65, physical: 78 },
    squadType: 'Loan'
  },

  // STAFF
  {
    id: 's1',
    name: 'Sonia Bompastor',
    position: 'Head Coach',
    country: 'FRA',
    imageUrl: 'https://img.chelseafc.com/image/upload/f_auto,h_860,dpr_2.0,q_50/editorial/people/ladies/2025-26/Sonia_Bompastor_profile_2025-26_avatar-removebg.png',
    bio: "Appointed in 2024, Bompastor is a Champions League winner as both player and manager.",
    squadType: 'Staff'
  },
  {
    id: 's2',
    name: 'Camille Abily',
    position: 'Assistant Coach',
    country: 'FRA',
    imageUrl: 'https://img.chelseafc.com/image/upload/f_auto,h_860,dpr_2.0,q_50/editorial/people/ladies/2025-26/Camille_Abily_profile_2025-26_avatar-removebg.png',
    bio: "French football legend serving as assistant coach.",
    squadType: 'Staff'
  },
  {
    id: 's3',
    name: 'Paul Green',
    position: 'General Manager',
    country: 'ENG',
    imageUrl: 'https://img.chelseafc.com/image/upload/f_auto,h_860,dpr_2.0,q_50/editorial/people/staff/men/Paul_Green.png',
    bio: "Long-serving General Manager overseeing the women's setup.",
    squadType: 'Staff'
  }
];

export const TICKET_INFO: TicketInfo[] = [
  { category: 'Adult', price: '£15.00', availability: 'High' },
  { category: 'Junior (Under 20)', price: '£7.50', availability: 'High' },
  { category: 'Senior (65+)', price: '£7.50', availability: 'Low' },
];