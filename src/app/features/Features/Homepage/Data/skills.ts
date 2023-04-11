/* Skills */
export const SkillsData = [
  /* Front-end */
  {
    category: 'Front-end',
    isSelected: true,
    itemArray: [
      { item: 'HTML/CSS', score: 80 },
      { item: 'JS/TS', score: 65 },
      { item: 'ReactJS', score: 65 },
      { item: 'SCSS', score: 60 },
      { item: 'Webpack', score: 30 },
    ]
  },
  /* Back-end */
  {
    category: 'Back-end',
    isSelected: false,
    itemArray: [
      { item: 'NodeJS (Express)', score: 35 },
      { item: 'Java', score: 35 },
      { item: 'Laravel (PHP)', score: 35 },
      { item: 'MySQL', score: 40 },
      { item: 'MongoDB', score: 30 },
      { item: 'Socket.io', score: 20 }
    ]
  },
  /* Other */
  { 
    category: 'Others',
    isSelected: false,
    itemArray: [
      { item: 'Git', score: 65 },
      { item: 'Figma', score: 60 },
      { item: 'Postman', score: 35 },
    ]
  }
]
