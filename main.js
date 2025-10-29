import './style.css'
import { createIcons, Search, ArrowLeft, Leaf, Carrot, Sprout, Apple, Thermometer, Droplets, Bug, Shovel, Calendar, Flower } from 'lucide';

const app = document.getElementById('app');

const plantsData = [
  {
    id: 'tomato',
    name: 'Tomato',
    scientificName: 'Solanum lycopersicum',
    category: 'Vegetable',
    subCategory: 'Fruit Vegetable',
    origin: 'Western South America',
    image: 'https://images.unsplash.com/photo-1561155653-29f61b69689f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'The tomato is a culinary vegetable, botanically a fruit, known for its bright red color and versatile use in cuisines worldwide. It is relatively easy to grow in home gardens.',
    cultivation: {
      season: 'Warm season (spring to early summer planting)',
      soil: 'Well-drained, fertile loam soil with a pH between 6.0 and 6.8. Rich in organic matter.',
      temperature: 'Optimal growth between 21-29°C (70-85°F). Not frost-tolerant.',
      watering: 'Consistent watering, 1-2 inches per week. Avoid overhead watering to prevent fungal diseases.',
      pesticides: 'Prone to aphids, hornworms, and blight. Use neem oil for pests. Copper fungicides for blight prevention.',
      seeding: [
        'Start seeds indoors 6-8 weeks before the last expected frost.',
        'Sow seeds 1/4 inch deep in a seed-starting mix.',
        'Keep the soil moist and warm (21-27°C) for germination, which takes 5-10 days.',
        'Transplant seedlings outdoors when they are 6-8 inches tall and all danger of frost has passed.'
      ],
      harvesting: 'Harvest when fruits are firm and fully colored (usually red, but depends on variety), typically 60-85 days after transplanting.'
    }
  },
  {
    id: 'basil',
    name: 'Basil',
    scientificName: 'Ocimum basilicum',
    category: 'Herb',
    origin: 'Central Africa and Southeast Asia',
    image: 'https://images.unsplash.com/photo-1579584393083-d48f489fed3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A popular culinary herb of the mint family, basil is prized for its aromatic leaves. It is a staple in Italian cuisine and is also used in many Southeast Asian dishes.',
    cultivation: {
      season: 'Warm season. Plant after the last spring frost.',
      soil: 'Moist, well-drained soil with a pH of 6.0 to 7.5. Prefers rich soil.',
      temperature: 'Loves heat. Best growth between 25-30°C (77-86°F). Very sensitive to cold.',
      watering: 'Water regularly, about 1 inch per week. Keep soil consistently moist but not waterlogged.',
      pesticides: 'Susceptible to aphids and spider mites. Can be treated with insecticidal soap. Good air circulation prevents fungal issues.',
      seeding: [
        'Sow seeds directly in the garden after the last frost or start indoors 6 weeks earlier.',
        'Plant seeds 1/4 inch deep and 10-12 inches apart.',
        'Germination occurs in 7-14 days.',
        'Pinch the top leaves once the plant has a few sets of leaves to encourage bushier growth.'
      ],
      harvesting: 'Begin harvesting leaves when the plant is 6-8 inches tall. Harvest regularly to promote growth. Best harvested before the plant flowers.'
    }
  },
  {
    id: 'carrot',
    name: 'Carrot',
    scientificName: 'Daucus carota',
    category: 'Vegetable',
    subCategory: 'Root Vegetable',
    origin: 'Persia (modern-day Iran and Afghanistan)',
    image: 'https://images.unsplash.com/photo-1590868309235-ea34bed7bd7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A root vegetable, usually orange in color, though purple, black, red, white, and yellow cultivars exist. Known for its crisp texture and sweet flavor.',
    cultivation: {
      season: 'Cool season. Plant in early spring or in autumn.',
      soil: 'Loose, sandy, or loamy soil that is free of stones. pH 6.0-6.8.',
      temperature: 'Prefers cooler temperatures, with optimal root growth between 15-21°C (60-70°F).',
      watering: 'Needs consistent moisture. Water deeply once a week, providing about 1 inch of water.',
      pesticides: 'Carrot rust fly is a common pest. Use row covers to protect plants. Avoid excessive nitrogen fertilizer.',
      seeding: [
        'Sow seeds directly into the garden 2-3 weeks before the last frost.',
        'Plant seeds 1/4 to 1/2 inch deep in rows 1 foot apart.',
        'Keep the soil moist for germination, which can take 1-3 weeks.',
        'Thin seedlings to 2-3 inches apart once they are a few inches tall.'
      ],
      harvesting: 'Harvest carrots when their roots are at least 1/2 inch in diameter at the shoulder, typically 60-80 days after sowing.'
    }
  },
  {
    id: 'apple',
    name: 'Apple',
    scientificName: 'Malus domestica',
    category: 'Fruit',
    subCategory: 'Pome Fruit',
    origin: 'Central Asia',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b69665?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG9otby1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'One of the most widely cultivated tree fruits, the apple is known for its crisp, juicy flesh and comes in thousands of varieties with different flavors and textures.',
    cultivation: {
      season: 'Plant bare-root trees in spring or fall. Container-grown trees can be planted anytime.',
      soil: 'Well-drained loamy soil is ideal, with a pH between 6.0 and 7.0.',
      temperature: 'Requires a cold period (chill hours) during winter to produce fruit. Can tolerate a wide range of temperatures but is susceptible to late frosts.',
      watering: 'Water young trees regularly. Mature trees are more drought-tolerant but benefit from deep watering during dry spells.',
      pesticides: 'Common pests include codling moth and aphids. Diseases like apple scab and fire blight are concerns. Requires a careful spray schedule.',
      seeding: [
        'Apples are typically grown from grafted saplings, not seeds, to ensure the variety is true to type.',
        'Dig a hole twice as wide as the root ball and just as deep.',
        'Space standard-sized trees 30-35 feet apart; dwarf varieties 8-10 feet apart.',
        'Prune annually in late winter to maintain shape and encourage fruit production.'
      ],
      harvesting: 'Harvest time varies by variety, from late summer to late autumn. Pick apples when they have reached their mature color and are easy to twist off the branch.'
    }
  },
  {
    id: 'pear',
    name: 'Pear',
    scientificName: 'Pyrus communis',
    category: 'Fruit',
    subCategory: 'Pome Fruit',
    origin: 'Central Asia and Europe',
    image: 'https://images.unsplash.com/photo-1615485925585-68995a750b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A sweet, juicy fruit with a soft, buttery texture when ripe. Pears are versatile and can be eaten fresh, canned, or used in baking and cooking.',
    cultivation: {
      season: 'Plant bare-root trees in spring.',
      soil: 'Prefers deep, well-drained, fertile loam. pH 6.0-7.0.',
      temperature: 'Requires chill hours in winter to set fruit. Susceptible to fire blight, which is worse in warm, wet weather.',
      watering: 'Water deeply, especially during dry spells and when fruit is developing.',
      pesticides: 'Fire blight and codling moth are major concerns. Choose resistant varieties if possible.',
      seeding: [
        'Grown from grafted saplings.',
        'Most pear varieties require a different variety nearby for cross-pollination.',
        'Prune annually to an open center or central leader system to promote air circulation and sun exposure.'
      ],
      harvesting: 'Harvest pears when they are mature but still firm. They ripen off the tree. Check the neck of the pear; if it yields to gentle pressure, it\'s ready.'
    }
  },
  {
    id: 'quince',
    name: 'Quince',
    scientificName: 'Cydonia oblonga',
    category: 'Fruit',
    subCategory: 'Pome Fruit',
    origin: 'Western Asia, Turkey, Iran',
    image: 'https://images.unsplash.com/photo-1631034462005-4f3c7343a4e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'An ancient, aromatic pome fruit. It is hard, acidic, and astringent when raw but becomes fragrant, sweet, and delicious when cooked, making it perfect for jams, jellies, and pastes.',
    cultivation: {
      season: 'Plant in spring. Harvest in late autumn.',
      soil: 'Adaptable to most soils but prefers heavy, moist loam.',
      temperature: 'Hardy and requires a cold period to fruit well. Tolerates both cold and heat.',
      watering: 'Drought-tolerant once established but fruits better with regular watering.',
      pesticides: 'Susceptible to fire blight, similar to pears. Generally low-maintenance.',
      seeding: [
        'Most varieties are self-fertile.',
        'Grown from grafted trees or hardwood cuttings.',
        'The tree is attractive and often grown as an ornamental.'
      ],
      harvesting: 'Harvest in late fall when the fruits have turned from green to golden yellow and are very fragrant. Handle carefully as they bruise easily.'
    }
  },
  {
    id: 'loquat',
    name: 'Loquat',
    scientificName: 'Eriobotrya japonica',
    category: 'Fruit',
    subCategory: 'Pome Fruit',
    origin: 'China',
    image: 'https://images.unsplash.com/photo-1588350588836-3d6d58a7f1f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'Also known as the Japanese plum, this fruit grows in clusters on an evergreen tree. The fruit is small, round or oval, with a sweet, tangy flavor and smooth, yellow-orange skin.',
    cultivation: {
      season: 'Blooms in autumn/winter and fruits in early spring.',
      soil: 'Adaptable to many soils but needs good drainage.',
      temperature: 'A subtropical evergreen that can tolerate brief freezes, but flowers and fruit are sensitive to cold.',
      watering: 'Water regularly for best fruit production.',
      pesticides: 'Fire blight and aphids can be issues. Fruit flies can be a problem in some regions.',
      seeding: [
        'Can be grown from seed, but grafted varieties produce better fruit.',
        'Protect from strong winds.',
        'Thinning fruit clusters results in larger, higher-quality fruit.'
      ],
      harvesting: 'Harvest when the fruit is fully colored (yellow-orange) and slightly soft. The fruit bruises easily, so handle with care.'
    }
  },
  {
    id: 'medlar',
    name: 'Medlar',
    scientificName: 'Mespilus germanica',
    category: 'Fruit',
    subCategory: 'Pome Fruit',
    origin: 'Persia, Southeast Europe',
    image: 'https://images.unsplash.com/photo-1635794920238-62d2a73c1d94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'An unusual fruit harvested in late autumn. It is hard and inedible until it has been "bletted" (allowed to begin decaying), at which point the flesh softens and tastes like spiced apple sauce.',
    cultivation: {
      season: 'Plant in spring, harvest in late autumn after the first frosts.',
      soil: 'Tolerant of a wide range of soils, including clay, as long as it is well-drained.',
      temperature: 'Very hardy and requires a cold winter. Flowers late, avoiding most frosts.',
      watering: 'Drought-tolerant once established.',
      pesticides: 'Generally pest and disease-free, making it an easy-care fruit tree.',
      seeding: [
        'A small, ornamental deciduous tree.',
        'Most varieties are self-fertile.',
        'Requires minimal pruning.'
      ],
      harvesting: 'Harvest as late as possible, after the leaves have fallen. Store the hard fruits in a cool place until the flesh becomes soft and brown (bletted).'
    }
  },
  {
    id: 'crabapple',
    name: 'Crabapple',
    scientificName: 'Malus baccata',
    category: 'Fruit',
    subCategory: 'Pome Fruit',
    origin: 'North America and Asia',
    image: 'https://images.unsplash.com/photo-1601758177266-bc5a9de87b00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'Small, tart apples. While many are grown for their beautiful spring flowers, the fruit is highly prized for making jellies, preserves, and cider due to its high pectin and acid content.',
    cultivation: {
      season: 'Plant in spring, harvest in fall.',
      soil: 'Adaptable to most soil types, but prefers well-drained, loamy soil.',
      temperature: 'Very cold-hardy and rugged.',
      watering: 'Water regularly until established. Tolerant of some drought once mature.',
      pesticides: 'Can be susceptible to the same diseases as apples, like scab and fire blight. Choose disease-resistant varieties.',
      seeding: [
        'Excellent pollinators for other apple varieties.',
        'Trees range in size from small shrubs to medium-sized trees.',
        'Prune to remove dead or crossing branches.'
      ],
      harvesting: 'Harvest in the fall when the fruits have developed their characteristic color. Flavor often improves after a light frost.'
    }
  },
  {
    id: 'spinach',
    name: 'Spinach',
    scientificName: 'Spinacia oleracea',
    category: 'Vegetable',
    subCategory: 'Leafy Green',
    origin: 'Persia',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f2f84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A leafy green flowering plant native to central and western Asia. It is loaded with nutrients and antioxidants, making it a popular choice for healthy diets.',
    cultivation: {
      season: 'Cool season. Plant in early spring or fall.',
      soil: 'Fertile, well-drained soil with a pH of 6.5 to 7.0. Add compost before planting.',
      temperature: 'Best grown in cool weather, between 15-20°C (60-68°F). Can bolt in hot weather.',
      watering: 'Keep the soil consistently moist. Water about 1 inch per week.',
      pesticides: 'Susceptible to leaf miners and aphids. Use row covers or insecticidal soap.',
      seeding: [
        'Sow seeds directly in the garden 1/2 inch deep.',
        'Plant seeds 4-6 weeks before the last frost in spring, or 6-8 weeks before the first frost in fall.',
        'Space rows 12-18 inches apart.',
        'Thin seedlings to 3-4 inches apart when they have two true leaves.'
      ],
      harvesting: 'Harvest leaves when they reach the desired size, usually 6-8 weeks after planting. You can harvest outer leaves to allow inner leaves to grow.'
    }
  },
  {
    id: 'lettuce',
    name: 'Lettuce',
    scientificName: 'Lactuca sativa',
    category: 'Vegetable',
    subCategory: 'Leafy Green',
    origin: 'Ancient Egypt',
    image: 'https://images.unsplash.com/photo-1556801712-9c1d5bfaef69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'An annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds.',
    cultivation: {
      season: 'Cool season. Best in spring and fall.',
      soil: 'Loose, well-drained soil rich in organic matter. pH 6.0-7.0.',
      temperature: 'Ideal temperatures are between 15-21°C (60-70°F). Hot weather can cause it to bolt and become bitter.',
      watering: 'Requires consistent moisture. Water shallowly and frequently to keep the soil moist.',
      pesticides: 'Aphids and slugs are common pests. Keep the garden clean and use organic slug bait if necessary.',
      seeding: [
        'Sow seeds directly in the garden, 1/8 to 1/4 inch deep.',
        'For a continuous harvest, sow new seeds every 2-3 weeks.',
        'Thin seedlings to 8-12 inches apart, depending on the variety.',
        'Can be started indoors 4-6 weeks before transplanting.'
      ],
      harvesting: 'Harvest leaf lettuce when leaves are large enough. Harvest head lettuce when a firm head has formed. Typically 45-80 days from seed.'
    }
  },
  {
    id: 'kale',
    name: 'Kale',
    scientificName: 'Brassica oleracea var. sabellica',
    category: 'Vegetable',
    subCategory: 'Leafy Green',
    origin: 'Eastern Mediterranean and Asia Minor',
    image: 'https://images.unsplash.com/photo-1598154099322-132d3olf-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A superfood packed with vitamins, kale is a hardy, cool-season green that is part of the cabbage family. Its flavor improves after a light frost.',
    cultivation: {
      season: 'Cool season. Plant in early spring or late summer for a fall/winter harvest.',
      soil: 'Prefers well-drained, fertile soil with a pH of 6.0 to 7.5.',
      temperature: 'Very cold-hardy. Can withstand temperatures down to -6°C (20°F).',
      watering: 'Water regularly, about 1 to 1.5 inches per week.',
      pesticides: 'Cabbage worms and aphids can be a problem. Use row covers or neem oil.',
      seeding: [
        'Sow seeds 1/2 inch deep, indoors 5-7 weeks before the last frost or directly in the garden.',
        'Space plants 18-24 inches apart.',
        'Kale needs plenty of space to grow.',
        'Mulch to retain moisture and suppress weeds.'
      ],
      harvesting: 'Harvest individual leaves from the bottom of the plant upwards once the plant is about 8-10 inches tall. Leaves are ready in about 55-75 days.'
    }
  },
  {
    id: 'beetroot',
    name: 'Beetroot',
    scientificName: 'Beta vulgaris',
    category: 'Vegetable',
    subCategory: 'Root Vegetable',
    origin: 'Mediterranean region',
    image: 'https://images.unsplash.com/photo-1594251713408-05c03554a36e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A root vegetable also known as the beet. Its deep purple roots are eaten boiled, roasted, or raw, and its leaves are also edible.',
    cultivation: {
      season: 'Cool season. Plant in spring after the last frost or in late summer for a fall crop.',
      soil: 'Deep, well-drained, sandy loam soil. pH 6.5-7.5.',
      temperature: 'Best root growth occurs between 15-20°C (60-68°F).',
      watering: 'Needs consistent moisture. Water deeply to encourage root growth.',
      pesticides: 'Leaf miners can damage leaves. Remove affected leaves. Good spacing prevents fungal diseases.',
      seeding: [
        'Sow seeds 1 inch deep and 2-4 inches apart.',
        'Each "seed" is a cluster of seeds, so thinning is essential.',
        'Thin seedlings to 3-4 inches apart when they are 4-5 inches tall.',
        'Rows should be about 12-18 inches apart.'
      ],
      harvesting: 'Harvest roots when they are 1.5 to 3 inches in diameter, typically 50-70 days after sowing. The greens can be harvested earlier.'
    }
  },
  {
    id: 'radish',
    name: 'Radish',
    scientificName: 'Raphanus sativus',
    category: 'Vegetable',
    subCategory: 'Root Vegetable',
    origin: 'Southeast Asia',
    image: 'https://images.unsplash.com/photo-1598170845033-50d7c04113b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A fast-growing, edible root vegetable. Known for its peppery flavor and crisp texture, radishes come in various shapes, sizes, and colors.',
    cultivation: {
      season: 'Cool season. Plant in spring and fall.',
      soil: 'Loose, well-drained, sandy soil. Free of stones.',
      temperature: 'Prefers cool temperatures. Hot weather can cause them to become woody and spicy.',
      watering: 'Keep soil consistently moist for rapid growth. Lack of water can make them pungent.',
      pesticides: 'Flea beetles and root maggots can be pests. Use row covers for protection.',
      seeding: [
        'Sow seeds 1/2 inch deep and 1 inch apart.',
        'Rows should be 12 inches apart.',
        'Germination is quick, often within 3-7 days.',
        'Thin to 2 inches apart to allow bulbs to develop.'
      ],
      harvesting: 'Harvest quickly, as soon as roots reach a usable size, often in just 3-5 weeks. Do not leave them in the ground too long.'
    }
  },
  {
    id: 'bell-pepper',
    name: 'Bell Pepper',
    scientificName: 'Capsicum annuum',
    category: 'Vegetable',
    subCategory: 'Fruit Vegetable',
    origin: 'Mexico, Central America, and northern South America',
    image: 'https://images.unsplash.com/photo-1599294264604-a1b5059695f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A sweet, non-pungent variety of pepper. They come in various colors like green, red, yellow, and orange, and are rich in Vitamin C.',
    cultivation: {
      season: 'Warm season. Requires a long, warm growing period.',
      soil: 'Well-drained, fertile soil with plenty of organic matter. pH 6.0-6.8.',
      temperature: 'Loves heat. Optimal temperature is 21-29°C (70-85°F).',
      watering: 'Needs consistent watering, about 1-2 inches per week. Mulch helps retain moisture.',
      pesticides: 'Aphids and pepper hornworms are common. Handpick worms or use insecticidal soap.',
      seeding: [
        'Start seeds indoors 8-10 weeks before the last frost.',
        'Sow seeds 1/4 inch deep and keep warm.',
        'Transplant seedlings outdoors when the soil has warmed and night temperatures are consistently above 13°C (55°F).',
        'Space plants 18-24 inches apart.'
      ],
      harvesting: 'Harvest when fruits reach the desired size and color. Green peppers are immature; colored peppers are sweeter. Typically 60-90 days after transplanting.'
    }
  },
  {
    id: 'cucumber',
    name: 'Cucumber',
    scientificName: 'Cucumis sativus',
    category: 'Vegetable',
    subCategory: 'Fruit Vegetable',
    origin: 'Ancient India',
    image: 'https://images.unsplash.com/photo-1589924891138-7963283b3e34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A widely-cultivated creeping vine plant in the gourd family. It is known for its refreshing taste and high water content.',
    cultivation: {
      season: 'Warm season. Plant after all danger of frost has passed.',
      soil: 'Fertile, well-drained soil rich in organic matter. pH 6.0-7.0.',
      temperature: 'Thrives in warm conditions, 20-30°C (68-86°F).',
      watering: 'Loves water. Needs at least 1 inch of water per week. Inconsistent watering can lead to bitter fruit.',
      pesticides: 'Cucumber beetles and powdery mildew are common issues. Use neem oil and ensure good air circulation.',
      seeding: [
        'Sow seeds 1 inch deep directly in the garden once the soil is warm.',
        'Space vining types 3-5 feet apart. Bush types can be closer.',
        'Providing a trellis for vining cucumbers saves space and keeps fruit clean.',
        'Mulch to conserve moisture and suppress weeds.'
      ],
      harvesting: 'Harvest when fruits are of a usable size. Pick regularly to encourage more fruit production. Typically 50-70 days from planting.'
    }
  },
  {
    id: 'eggplant',
    name: 'Eggplant',
    scientificName: 'Solanum melongena',
    category: 'Vegetable',
    subCategory: 'Fruit Vegetable',
    origin: 'Indian subcontinent',
    image: 'https://images.unsplash.com/photo-1583677476992-ea806a88b6b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'Also known as aubergine, it is a plant species in the nightshade family grown worldwide for its edible fruit. It has a unique spongy texture.',
    cultivation: {
      season: 'Very warm season. Requires a long, hot growing period.',
      soil: 'Well-drained, sandy loam soil, high in organic matter. pH 5.8-6.5.',
      temperature: 'Needs hot weather. Optimal growth between 24-32°C (75-90°F).',
      watering: 'Requires consistent watering, at least 1 inch per week. Avoid wetting the leaves.',
      pesticides: 'Flea beetles are a major pest. Use row covers on young plants. Verticillium wilt is a common disease.',
      seeding: [
        'Start seeds indoors 8-10 weeks before the last frost.',
        'Seeds need warmth (27°C / 80°F) to germinate.',
        'Transplant into the garden only when the weather is settled and warm.',
        'Space plants 24-30 inches apart.'
      ],
      harvesting: 'Harvest fruits when they are 6-8 inches long and their skin is glossy. Typically 70-90 days from transplanting.'
    }
  },
  {
    id: 'onion',
    name: 'Onion',
    scientificName: 'Allium cepa',
    category: 'Vegetable',
    subCategory: 'Bulb & Stem',
    origin: 'Asia',
    image: 'https://images.unsplash.com/photo-1587049352851-d48950135e81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A versatile vegetable that is the most widely cultivated species of the genus Allium. It is a fundamental ingredient in cuisines worldwide.',
    cultivation: {
      season: 'Cool season for planting, warm season for bulb development.',
      soil: 'Fertile, well-drained, sandy loam soil. pH 6.0-7.0.',
      temperature: 'Planting is done in cool weather. Bulb formation is triggered by day length and warm temperatures.',
      watering: 'Needs consistent moisture, especially during bulb formation. Reduce watering when tops start to fall over.',
      pesticides: 'Onion maggots and thrips are common pests. Practice crop rotation.',
      seeding: [
        'Can be grown from seeds, sets (small bulbs), or transplants.',
        'Plant sets 1-2 inches deep and 4-6 inches apart.',
        'Onions need full sun and good drainage.',
        'Keep the area weed-free as onions do not compete well.'
      ],
      harvesting: 'Harvest when the tops turn yellow and fall over. Pull the bulbs, cure them in a warm, dry place for 2-3 weeks, then store.'
    }
  },
  {
    id: 'garlic',
    name: 'Garlic',
    scientificName: 'Allium sativum',
    category: 'Vegetable',
    subCategory: 'Bulb & Stem',
    origin: 'Central Asia and northeastern Iran',
    image: 'https://images.unsplash.com/photo-1594298150493-5011559f44a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A species in the onion genus, Allium, known for its pungent flavor and medicinal properties. It is a staple in many cuisines.',
    cultivation: {
      season: 'Plant in the fall for a summer harvest.',
      soil: 'Well-drained, fertile soil with plenty of organic matter. pH 6.0-7.0.',
      temperature: 'Requires a cold period to develop bulbs. Grows leaves in cool weather and forms bulbs in warmer weather.',
      watering: 'Water regularly during the growing season. Stop watering in early summer when the leaves start to turn yellow.',
      pesticides: 'Generally pest-resistant, but onion thrips can be an issue. Good drainage prevents rot.',
      seeding: [
        'Plant individual cloves, not seeds, in the fall.',
        'Plant cloves 2 inches deep and 4-6 inches apart, with the pointed end up.',
        'Mulch heavily after planting to protect from cold and suppress weeds.',
        'Remove flower scapes (on hardneck varieties) to encourage larger bulbs.'
      ],
      harvesting: 'Harvest in mid-summer when the lower leaves begin to turn yellow. Cure in a shady, airy location for several weeks before storing.'
    }
  },
  {
    id: 'potato',
    name: 'Potato',
    scientificName: 'Solanum tuberosum',
    category: 'Vegetable',
    subCategory: 'Tuber',
    origin: 'Andes region of South America',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A starchy tuber that is a staple food in many parts of the world. Incredibly versatile, it can be baked, fried, boiled, or roasted.',
    cultivation: {
      season: 'Cool season crop. Plant in early spring.',
      soil: 'Loose, well-drained, acidic soil (pH 4.8-5.5). Avoid soil with fresh manure.',
      temperature: 'Prefers cool weather. Tuber formation is best between 15-20°C (60-68°F).',
      watering: 'Needs consistent moisture, especially when flowers and tubers are forming.',
      pesticides: 'Colorado potato beetles and potato blight are major concerns. Practice crop rotation and use resistant varieties.',
      seeding: [
        'Grown from "seed potatoes" (small tubers), not actual seeds.',
        'Cut seed potatoes into pieces with 2-3 eyes each and let them cure for a few days.',
        'Plant pieces 4 inches deep and 12 inches apart.',
        '"Hill" the plants by mounding soil around the base as they grow to protect tubers from sunlight.'
      ],
      harvesting: 'Harvest "new potatoes" 2-3 weeks after flowering. For mature potatoes, wait until the foliage has died back, then dig them up carefully. Cure before storing.'
    }
  },
  {
    id: 'broccoli',
    name: 'Broccoli',
    scientificName: 'Brassica oleracea var. italica',
    category: 'Vegetable',
    subCategory: 'Cruciferous',
    origin: 'Italy',
    image: 'https://images.unsplash.com/photo-1587351177734-051641219864?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'An edible green plant in the cabbage family whose large flowering head is eaten as a vegetable. It is rich in vitamins C and K.',
    cultivation: {
      season: 'Cool season. Plant in spring or late summer for a fall crop.',
      soil: 'Fertile, well-drained soil with a pH of 6.0 to 7.0.',
      temperature: 'Prefers temperatures between 18-23°C (65-75°F). Can bolt in heat.',
      watering: 'Requires consistent and ample water, about 1-1.5 inches per week.',
      pesticides: 'Cabbage worms are a common pest. Use floating row covers to prevent moths from laying eggs.',
      seeding: [
        'Start seeds indoors 5-7 weeks before the last frost or sow directly in the garden.',
        'Transplant seedlings when they are 4-6 weeks old.',
        'Space plants 18-24 inches apart in rows 3 feet apart.',
        'Provide plenty of nitrogen-rich fertilizer.'
      ],
      harvesting: 'Harvest the main head when it is firm and tight, before the yellow flowers open. Side shoots will often develop for a secondary harvest.'
    }
  },
  {
    id: 'cauliflower',
    name: 'Cauliflower',
    scientificName: 'Brassica oleracea var. botrytis',
    category: 'Vegetable',
    subCategory: 'Cruciferous',
    origin: 'Cyprus',
    image: 'https://images.unsplash.com/photo-1584279149302-c01a54379963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A popular vegetable in the cabbage family. It is known for its compact head, or "curd," which is typically white.',
    cultivation: {
      season: 'Cool season. Can be a bit trickier to grow than broccoli.',
      soil: 'Rich, moist, well-drained soil with a pH of 6.5 to 6.8.',
      temperature: 'Very sensitive to temperature. Prefers consistent cool weather around 15°C (60°F).',
      watering: 'Needs consistent water, 1-1.5 inches per week. Stress from lack of water can cause buttoning (small heads).',
      pesticides: 'Cabbage worms, aphids, and clubroot are concerns. Practice crop rotation.',
      seeding: [
        'Start seeds indoors 6-8 weeks before setting out.',
        'Transplant into the garden on a cloudy day to reduce stress.',
        'Space plants 18-24 inches apart.',
        'To keep the head white ("blanching"), tie the outer leaves over the developing head when it is 2-3 inches across.'
      ],
      harvesting: 'Harvest when the head is 6-8 inches in diameter and the curds are still tight and smooth. Typically 55-80 days from transplanting.'
    }
  },
  {
    id: 'green-peas',
    name: 'Green Peas',
    scientificName: 'Pisum sativum',
    category: 'Vegetable',
    subCategory: 'Legume',
    origin: 'Mediterranean basin and the Near East',
    image: 'https://images.unsplash.com/photo-1595690782169-3f20a19994c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A cool-season legume crop. The sweet, tender seeds are eaten fresh or cooked. Includes garden peas, snow peas, and snap peas.',
    cultivation: {
      season: 'Cool season. Plant as soon as the soil can be worked in spring.',
      soil: 'Well-drained, fertile soil. pH 6.0-7.5.',
      temperature: 'Thrives in cool, moist weather, 13-18°C (55-65°F). Production stops in hot weather.',
      watering: 'Keep soil moist, especially during flowering and pod development.',
      pesticides: 'Aphids and pea weevils can be pests. Powdery mildew can be an issue in humid weather.',
      seeding: [
        'Sow seeds 1 inch deep and 2 inches apart directly in the garden.',
        'Most varieties require a trellis or other support to climb on.',
        'Inoculating seeds with rhizobium bacteria can increase yields.',
        'Plant in double rows to make trellising easier.'
      ],
      harvesting: 'Harvest when pods are swollen and feel full. Pick regularly to encourage more production. Garden peas are ready in 60-70 days.'
    }
  },
  {
    id: 'button-mushroom',
    name: 'Button Mushroom',
    scientificName: 'Agaricus bisporus',
    category: 'Fungi',
    origin: 'Grasslands of Europe and North America',
    image: 'https://images.unsplash.com/photo-1564094129096-38a1f4995a8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'The most common and mildest-tasting mushroom. When immature and white, it is known as a button mushroom. When mature, it is a Portobello.',
    cultivation: {
      season: 'Can be grown year-round indoors.',
      soil: 'Requires a specific substrate, usually composted manure, not soil.',
      temperature: 'Prefers cool, dark, and humid conditions. Spawning at 24°C (75°F), fruiting at 18°C (65°F).',
      watering: 'Substrate must be kept moist but not waterlogged. Misting is preferred.',
      pesticides: 'Grown in controlled environments, so pests are less common. Contamination from other fungi or bacteria is the main risk.',
      seeding: [
        'Mushroom cultivation is done with "spawn," not seeds.',
        'Spawn (mycelium-colonized grain) is mixed into a pasteurized compost substrate.',
        'The substrate is kept dark and warm for 2-3 weeks for the mycelium to colonize.',
        'A casing layer (peat moss) is added on top, and conditions are changed to induce fruiting (pinning).'
      ],
      harvesting: 'Harvest mushrooms when the cap has opened but before the gills are fully exposed. They grow in flushes every 7-10 days for several weeks.'
    }
  },
  {
    id: 'cabbage',
    name: 'Cabbage',
    scientificName: 'Brassica oleracea var. capitata',
    category: 'Vegetable',
    subCategory: 'Leafy Green',
    origin: 'Europe',
    image: 'https://images.unsplash.com/photo-1562219991-41d3e00a5a82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A leafy green, red, or white biennial plant grown as an annual vegetable crop for its dense-leaved heads. It is a staple in many cuisines, used in coleslaw, kimchi, and soups.',
    cultivation: {
      season: 'Cool season. Plant in early spring for a summer harvest or late summer for a fall harvest.',
      soil: 'Fertile, well-drained soil rich in organic matter. pH 6.5-7.5.',
      temperature: 'Best growth in cool temperatures, 15-20°C (60-68°F).',
      watering: 'Needs consistent moisture to form good heads. About 1-1.5 inches of water per week.',
      pesticides: 'Cabbage worms and aphids are very common. Use row covers or Bt spray for worms.',
      seeding: [
        'Start seeds indoors 6-8 weeks before the last frost or sow directly in the garden.',
        'Transplant seedlings when they have 4-5 leaves.',
        'Space plants 18-24 inches apart.',
        'Fertilize well, as cabbage is a heavy feeder.'
      ],
      harvesting: 'Harvest when the head is firm and has reached a good size. This can be 60-100 days from planting. Cut the head at the base.'
    }
  },
  {
    id: 'swiss-chard',
    name: 'Swiss Chard',
    scientificName: 'Beta vulgaris subsp. vulgaris',
    category: 'Vegetable',
    subCategory: 'Leafy Green',
    origin: 'Mediterranean',
    image: 'https://images.unsplash.com/photo-1604594243548-3c40a559288a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A leafy green vegetable with colorful stems. Both the leaves and stalks are edible. It is related to beets but does not produce a large root.',
    cultivation: {
      season: 'Cool season, but more heat tolerant than spinach. Plant in spring.',
      soil: 'Rich, well-drained soil with a pH of 6.0 to 7.0.',
      temperature: 'Grows well in a wide range of temperatures but is best in cooler weather.',
      watering: 'Provide consistent water, about 1 inch per week.',
      pesticides: 'Leaf miners can be a problem. Remove affected leaves. Slugs may also be an issue.',
      seeding: [
        'Sow seeds directly in the garden 2-3 weeks before the last frost.',
        'Plant seeds 1/2 inch deep and 2-4 inches apart.',
        'Thin seedlings to 8-12 inches apart.',
        'Rows should be 18-24 inches apart.'
      ],
      harvesting: 'Begin harvesting outer leaves when they are large enough to eat (about 6-8 inches long). The plant will continue to produce new leaves from the center.'
    }
  },
  {
    id: 'sweet-potato',
    name: 'Sweet Potato',
    scientificName: 'Ipomoea batatas',
    category: 'Vegetable',
    subCategory: 'Tuber',
    origin: 'Central or South America',
    image: 'https://images.unsplash.com/photo-1599940778173-02466e845237?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A large, starchy, sweet-tasting root vegetable. Despite the name, it is not closely related to the common potato. The leaves are also edible.',
    cultivation: {
      season: 'Warm season. Requires a long, hot growing period of at least 4 months.',
      soil: 'Prefers loose, well-drained, sandy loam. pH 5.0-6.5.',
      temperature: 'Loves heat. Soil temperature should be at least 18°C (65°F).',
      watering: 'Water regularly, especially in mid-summer. Reduce watering towards the end of the season.',
      pesticides: 'Sweet potato weevils can be a major problem in some areas. Use certified disease-free slips.',
      seeding: [
        'Grown from "slips" (sprouts grown from a mature sweet potato), not seeds.',
        'Plant slips in the garden after the soil has warmed up well past the last frost date.',
        'Space slips 12-18 inches apart in rows 3 feet apart.',
        'The vines will spread extensively.'
      ],
      harvesting: 'Harvest before the first fall frost, usually when the leaves start to yellow. Dig carefully to avoid bruising the roots. Cure in a warm, humid place for 1-2 weeks before storing.'
    }
  },
  {
    id: 'ginger',
    name: 'Ginger',
    scientificName: 'Zingiber officinale',
    category: 'Vegetable',
    subCategory: 'Root Vegetable',
    origin: 'Southeast Asia',
    image: 'https://images.unsplash.com/photo-1629828822437-3347c8703350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A flowering plant whose rhizome, ginger root, is widely used as a spice and a folk medicine. It has a pungent, spicy, and aromatic flavor.',
    cultivation: {
      season: 'Tropical plant that needs a long, warm growing season. Can be grown in pots in cooler climates.',
      soil: 'Rich, loose, well-drained soil. High in organic matter.',
      temperature: 'Prefers warm, humid conditions, 22-28°C (72-82°F). Does not tolerate frost.',
      watering: 'Keep soil consistently moist throughout the growing season. Reduce water as weather cools.',
      pesticides: 'Generally pest-free. Root rot can occur in waterlogged soil.',
      seeding: [
        'Plant pieces of fresh ginger rhizome that have "eyes" or growth buds.',
        'Plant in late spring or early summer.',
        'Place the rhizome piece 2-4 inches deep with the buds pointing up.',
        'Grows well in partial shade.'
      ],
      harvesting: 'Can be harvested in small amounts about 4 months after planting. For a full harvest, wait until the leaves die back in the fall (about 8-10 months). Dig up the entire plant.'
    }
  },
  {
    id: 'zucchini',
    name: 'Zucchini',
    scientificName: 'Cucurbita pepo',
    category: 'Vegetable',
    subCategory: 'Fruit Vegetable',
    origin: 'Americas, developed in Italy',
    image: 'https://images.unsplash.com/photo-1557682533-3959ca94119f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A summer squash, botanically a fruit, that can reach nearly 1 metre in length but is usually harvested when still immature at about 15 to 25 cm.',
    cultivation: {
      season: 'Warm season. Very productive.',
      soil: 'Fertile, well-drained soil with a high organic matter content. pH 6.0-7.5.',
      temperature: 'Prefers warm weather. Plant after all danger of frost has passed.',
      watering: 'Needs consistent moisture, about 1 inch per week. Water at the base of the plant to prevent mildew.',
      pesticides: 'Squash vine borers and powdery mildew are common. Look for resistant varieties.',
      seeding: [
        'Sow seeds directly in the garden 1 inch deep after the last frost.',
        'Plant 2-3 seeds in hills spaced 3-4 feet apart.',
        'Thin to the strongest seedling per hill.',
        'Mulching helps retain moisture and suppress weeds.'
      ],
      harvesting: 'Harvest when fruits are young and tender, about 6-8 inches long. Check plants daily as they grow quickly. Regular harvesting encourages more production.'
    }
  },
  {
    id: 'pumpkin',
    name: 'Pumpkin',
    scientificName: 'Cucurbita pepo',
    category: 'Vegetable',
    subCategory: 'Fruit Vegetable',
    origin: 'North America',
    image: 'https://images.unsplash.com/photo-1509813524292-88a2334f69b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A cultivar of winter squash that is round with smooth, slightly ribbed skin, and most often deep yellow to orange in coloration.',
    cultivation: {
      season: 'Warm season. Requires a long, frost-free growing period.',
      soil: 'Rich, fertile, well-drained soil. pH 6.0-6.8.',
      temperature: 'Needs warm soil to germinate and warm weather to grow. 18-30°C (65-85°F).',
      watering: 'Pumpkins are thirsty. Provide plenty of water, especially during fruit development. Water deeply.',
      pesticides: 'Squash bugs and powdery mildew are common problems. Ensure good air circulation.',
      seeding: [
        'Sow seeds directly in the garden after the last frost.',
        'Plant seeds 1 inch deep in hills, 4-5 seeds per hill.',
        'Space hills 8-10 feet apart as vines can be very long.',
        'Thin to the 2-3 strongest plants per hill.'
      ],
      harvesting: 'Harvest in the fall when the pumpkin has reached its mature color and the rind is hard. Leave a few inches of stem attached. Cure in the sun for a week.'
    }
  },
  {
    id: 'leek',
    name: 'Leek',
    scientificName: 'Allium porrum',
    category: 'Vegetable',
    subCategory: 'Bulb & Stem',
    origin: 'Middle East and Mediterranean',
    image: 'https://images.unsplash.com/photo-1595397559329-0143a94d6a99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A vegetable, a cultivar of Allium ampeloprasum, the broadleaf wild leek. It is a cousin to the onion and garlic, with a milder, sweeter flavor.',
    cultivation: {
      season: 'Long growing season. Plant in early spring for a fall or winter harvest.',
      soil: 'Fertile, well-drained soil. Prefers sandy loam.',
      temperature: 'Hardy and can be harvested well into winter in many climates.',
      watering: 'Needs consistent moisture. Water well, especially in dry weather.',
      pesticides: 'Onion maggots and thrips can be issues. Crop rotation is important.',
      seeding: [
        'Start seeds indoors 8-10 weeks before the last frost.',
        'Transplant seedlings into trenches 6 inches deep.',
        'As the leeks grow, gradually fill in the trench (blanching) to produce long, white stems.',
        'Space plants 6 inches apart.'
      ],
      harvesting: 'Begin harvesting when the stalks are about 1 inch in diameter. They can be left in the ground and harvested as needed through winter.'
    }
  },
  {
    id: 'celery',
    name: 'Celery',
    scientificName: 'Apium graveolens',
    category: 'Vegetable',
    subCategory: 'Bulb & Stem',
    origin: 'Mediterranean Basin',
    image: 'https://images.unsplash.com/photo-1603418301844-a6a0b7a8f0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A marshland plant in the family Apiaceae that has been cultivated as a vegetable since antiquity. Celery has a long fibrous stalk tapering into leaves.',
    cultivation: {
      season: 'Long, cool growing season. Can be difficult to grow.',
      soil: 'Requires rich, moist soil with plenty of organic matter. pH 6.0-7.0.',
      temperature: 'Prefers cool temperatures, 15-21°C (60-70°F). Not heat tolerant.',
      watering: 'Celery is very thirsty. Never let the soil dry out. Consistent moisture is critical.',
      pesticides: 'Carrot rust fly and celery leaf miner can be pests. Blight is a common disease.',
      seeding: [
        'Start seeds indoors 10-12 weeks before the last frost. Seeds are slow to germinate.',
        'Transplant into the garden when seedlings are 5-6 inches tall.',
        'Space plants 10-12 inches apart.',
        'Blanching (covering the stalks) can produce a more tender, less bitter stalk.'
      ],
      harvesting: 'Harvest stalks individually as needed, or harvest the whole plant when it reaches a usable size. Typically 100-130 days from transplant.'
    }
  },
  {
    id: 'chickpeas',
    name: 'Chickpeas',
    scientificName: 'Cicer arietinum',
    category: 'Vegetable',
    subCategory: 'Legume',
    origin: 'Middle East',
    image: 'https://images.unsplash.com/photo-1605502686992-c3516f1b6a37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'Also known as garbanzo beans, this legume is a key ingredient in Mediterranean and Middle Eastern cuisines. It is high in protein.',
    cultivation: {
      season: 'Cool season. Plant in early spring.',
      soil: 'Well-drained soil is essential. pH 6.0-8.0.',
      temperature: 'Prefers temperatures between 21-26°C (70-80°F) for pod setting.',
      watering: 'Drought-tolerant once established, but needs moisture during germination and flowering.',
      pesticides: 'Generally few pests, but can be susceptible to aphids and bean beetles.',
      seeding: [
        'Sow seeds directly in the garden 1-2 inches deep after the last frost.',
        'Space seeds 3-6 inches apart.',
        'Plants are bushy and grow to about 2 feet tall.',
        'Inoculating with rhizobium bacteria can improve yield.'
      ],
      harvesting: 'Harvest fresh green chickpeas about 75 days after planting. For dry chickpeas, wait until the plant turns brown and dry, then pull the whole plant and thresh the pods.'
    }
  },
  {
    id: 'shiitake-mushroom',
    name: 'Shiitake Mushroom',
    scientificName: 'Lentinula edodes',
    category: 'Fungi',
    origin: 'East Asia',
    image: 'https://images.unsplash.com/photo-1508311543377-349478f77180?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'An edible mushroom prized for its rich, savory taste and health benefits. It is widely used in Asian cuisine.',
    cultivation: {
      season: 'Can be cultivated year-round, typically on logs or sawdust blocks.',
      soil: 'Grows on hardwood logs (like oak) or sterilized sawdust blocks, not soil.',
      temperature: 'Colonization occurs at 21-27°C (70-80°F). Fruiting is induced by a temperature drop and soaking.',
      watering: 'Logs or blocks must be kept moist. High humidity is required for fruiting.',
      pesticides: 'Contamination from other molds is the primary concern. Slugs can be pests.',
      seeding: [
        'Cultivation is done by inoculating logs or blocks with shiitake plug spawn or sawdust spawn.',
        'Drill holes in logs, insert the spawn, and seal with wax.',
        'Allow 6-18 months for the mycelium to fully colonize the log (the spawn run).',
        'To induce fruiting, shock the logs by soaking them in cold water for 24 hours.'
      ],
      harvesting: 'Mushrooms will appear a few days after shocking. Harvest when the caps are open but the edges are still curled under. Logs can be fruited several times a year for several years.'
    }
  },
  // Leafy Greens from previous addition
  {
    id: 'romaine-lettuce',
    name: 'Romaine Lettuce',
    scientificName: 'Lactuca sativa var. longifolia',
    category: 'Vegetable',
    subCategory: 'Leafy Green',
    origin: 'Rome',
    image: 'https://images.unsplash.com/photo-1622205420325-63cde9e36e0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A variety of lettuce that grows in a tall head of sturdy dark green leaves with firm ribs down their centers. Unlike most lettuces, it is tolerant of heat.',
    cultivation: { season: 'Cool season', soil: 'Fertile, well-drained soil', temperature: '15-20°C', watering: 'Consistent moisture', pesticides: 'Aphids, slugs', seeding: ['Direct sow in spring or fall.'], harvesting: 'Harvest outer leaves or the whole head in 70-75 days.' }
  },
  {
    id: 'arugula',
    name: 'Arugula (Rocket)',
    scientificName: 'Eruca vesicaria',
    category: 'Vegetable',
    subCategory: 'Leafy Green',
    origin: 'Mediterranean region',
    image: 'https://images.unsplash.com/photo-1597992444372-795329424e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'An edible annual plant used as a leaf vegetable for its fresh, tart, bitter, and peppery taste.',
    cultivation: { season: 'Cool season', soil: 'Average, well-drained soil', temperature: '10-18°C', watering: 'Regular watering', pesticides: 'Flea beetles', seeding: ['Sow seeds in early spring.'], harvesting: 'Harvest leaves when young and tender, about 40 days after sowing.' }
  },
  {
    id: 'collard-greens',
    name: 'Collard Greens',
    scientificName: 'Brassica oleracea var. viridis',
    category: 'Vegetable',
    subCategory: 'Leafy Green',
    origin: 'Eastern Mediterranean',
    image: 'https://images.unsplash.com/photo-1628771069273-343858392b95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'Large, dark-colored, edible leaves, a staple vegetable in Southern U.S. cuisine. They are a member of the cabbage family.',
    cultivation: { season: 'Cool season', soil: 'Fertile, well-drained soil', temperature: '18-24°C', watering: '1-1.5 inches per week', pesticides: 'Cabbage worms', seeding: ['Sow in spring or late summer.'], harvesting: 'Harvest outer leaves when plant is 10-12 inches tall.' }
  },
  {
    id: 'mustard-greens',
    name: 'Mustard Greens',
    scientificName: 'Brassica juncea',
    category: 'Vegetable',
    subCategory: 'Leafy Green',
    origin: 'Himalayan region of India',
    image: 'https://images.unsplash.com/photo-1628862602838-89b8714b73b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'The leaves of the mustard plant, which have a distinct peppery flavor. Used in many African, Asian, and Southern U.S. cuisines.',
    cultivation: { season: 'Cool season', soil: 'Rich, moist soil', temperature: '10-20°C', watering: 'Consistent moisture', pesticides: 'Aphids, flea beetles', seeding: ['Sow in early spring or fall.'], harvesting: 'Harvest young leaves for a milder taste, about 30-40 days.' }
  },
  {
    id: 'bok-choy',
    name: 'Bok Choy (Pak Choi)',
    scientificName: 'Brassica rapa subsp. chinensis',
    category: 'Vegetable',
    subCategory: 'Leafy Green',
    origin: 'China',
    image: 'https://images.unsplash.com/photo-1607375126844-3c6340801b6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A type of Chinese cabbage with smooth, dark green leaf blades forming a cluster reminiscent of mustard or celery.',
    cultivation: { season: 'Cool season', soil: 'Fertile, well-drained soil', temperature: '13-24°C', watering: 'Regular watering', pesticides: 'Cabbage worms, slugs', seeding: ['Direct sow in mid-spring or late summer.'], harvesting: 'Harvest when heads are firm and full, about 45-60 days.' }
  },
  {
    id: 'watercress',
    name: 'Watercress',
    scientificName: 'Nasturtium officinale',
    category: 'Vegetable',
    subCategory: 'Leafy Green',
    origin: 'Europe and Asia',
    image: 'https://images.unsplash.com/photo-1628771069273-343858392b95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'An aquatic or semi-aquatic perennial plant, one of the oldest known leaf vegetables consumed by humans. It has a peppery, tangy flavor.',
    cultivation: { season: 'Cool season', soil: 'Can be grown in containers with very wet soil or in slow-moving water.', temperature: '10-18°C', watering: 'Soil must be constantly saturated.', pesticides: 'Snails, aphids', seeding: ['Sow seeds on the surface of wet soil.'], harvesting: 'Harvest stems and leaves frequently to encourage growth.' }
  },
  {
    id: 'endive',
    name: 'Endive',
    scientificName: 'Cichorium endivia',
    category: 'Vegetable',
    subCategory: 'Leafy Green',
    origin: 'Mediterranean region',
    image: 'https://images.unsplash.com/photo-1627427568581-2a2b0b1d3d6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A leaf vegetable belonging to the genus Cichorium, which includes several similar bitter-leafed vegetables. Often used in salads.',
    cultivation: { season: 'Cool season', soil: 'Well-drained, fertile soil', temperature: '15-18°C', watering: 'Consistent moisture', pesticides: 'Slugs, aphids', seeding: ['Sow in late spring for a fall harvest.'], harvesting: 'Harvest heads when they are firm and well-filled.' }
  },
  // New Root Vegetables
  {
    id: 'turnip',
    name: 'Turnip',
    scientificName: 'Brassica rapa subsp. rapa',
    category: 'Vegetable',
    subCategory: 'Root Vegetable',
    origin: 'Europe and Asia',
    image: 'https://images.unsplash.com/photo-1590165482362-92a2c45e3c13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A root vegetable commonly grown in temperate climates worldwide for its white, fleshy taproot. The leaves (turnip greens) are also eaten.',
    cultivation: {
      season: 'Cool season. Plant in early spring or late summer.',
      soil: 'Light, fertile, well-drained soil. pH 6.0-7.0.',
      temperature: 'Best growth at 10-18°C (50-65°F).',
      watering: 'Consistent moisture is key for tender roots.',
      pesticides: 'Root maggots and flea beetles can be problematic.',
      seeding: ['Sow seeds 1/2 inch deep directly in the garden.', 'Thin to 4-6 inches apart.'],
      harvesting: 'Harvest roots when they are 2-3 inches in diameter, about 40-60 days after sowing.'
    }
  },
  {
    id: 'parsnip',
    name: 'Parsnip',
    scientificName: 'Pastinaca sativa',
    category: 'Vegetable',
    subCategory: 'Root Vegetable',
    origin: 'Eurasia',
    image: 'https://images.unsplash.com/photo-1615485925585-68995a750b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A root vegetable closely related to the carrot and parsley. Parsnips are sweeter than carrots and their flavor is enhanced by frost.',
    cultivation: {
      season: 'Long cool season. Plant in early spring.',
      soil: 'Deep, loose, sandy loam, free of stones. pH 6.0-7.0.',
      temperature: 'Germinates slowly in cool soil. Needs frost to develop full flavor.',
      watering: 'Keep soil evenly moist to prevent roots from splitting.',
      pesticides: 'Carrot rust fly can be a pest.',
      seeding: ['Sow seeds 1/2 inch deep. Germination can take up to 3 weeks.', 'Thin seedlings to 3-6 inches apart.'],
      harvesting: 'Harvest late in the fall after a few frosts, or leave in the ground over winter. Typically 120-180 days.'
    }
  },
  {
    id: 'daikon-radish',
    name: 'Daikon (White Radish)',
    scientificName: 'Raphanus sativus var. longipinnatus',
    category: 'Vegetable',
    subCategory: 'Root Vegetable',
    origin: 'East Asia',
    image: 'https://images.unsplash.com/photo-1598434384510-988a21d88734?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A mild-flavored winter radish usually characterized by fast-growing leaves and a long, white, napiform root. A staple in Asian cuisine.',
    cultivation: {
      season: 'Cool season. Plant in late summer for a fall harvest.',
      soil: 'Deep, loose, well-drained soil.',
      temperature: 'Prefers cool temperatures to prevent bolting.',
      watering: 'Consistent watering for best texture and flavor.',
      pesticides: 'Flea beetles and aphids can be pests.',
      seeding: ['Sow seeds 1/2 to 1 inch deep.', 'Thin to 4-6 inches apart.'],
      harvesting: 'Harvest when roots are of a desirable size, typically 60-70 days after planting.'
    }
  },
  {
    id: 'cassava',
    name: 'Cassava (Yuca)',
    scientificName: 'Manihot esculenta',
    category: 'Vegetable',
    subCategory: 'Tuber',
    origin: 'South America',
    image: 'https://images.unsplash.com/photo-1620706290115-139355805152?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A woody shrub cultivated for its edible starchy tuberous root, a major source of carbohydrates in tropical regions. Must be cooked properly to be safe to eat.',
    cultivation: {
      season: 'Long, warm growing season (8-12 months).',
      soil: 'Well-drained, light sandy loams. Tolerant of poor soils.',
      temperature: 'Tropical plant, needs 25-29°C (77-84°F). Not frost-tolerant.',
      watering: 'Drought-tolerant but yields better with consistent moisture.',
      pesticides: 'Cassava mosaic disease and spider mites can be issues.',
      seeding: ['Propagated from stem cuttings (stakes) 8-10 inches long.', 'Plant stakes vertically or at an angle in mounds or ridges.'],
      harvesting: 'Harvest when roots are mature, typically 8-12 months after planting. Roots do not store well in the ground after maturity.'
    }
  },
  {
    id: 'taro-root',
    name: 'Taro Root',
    scientificName: 'Colocasia esculenta',
    category: 'Vegetable',
    subCategory: 'Tuber',
    origin: 'Southeast Asia',
    image: 'https://images.unsplash.com/photo-1600895135438-a2a47c4e531e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A tropical plant grown primarily for its edible corms. It is a staple food in African, Oceanic, and South Asian cultures and the basis for the Hawaiian dish poi.',
    cultivation: {
      season: 'Warm, wet season.',
      soil: 'Rich, moist to wet soil. Can be grown in paddy-like conditions.',
      temperature: 'Prefers 25-35°C (77-95°F). Needs high humidity.',
      watering: 'Requires large amounts of water. Can be grown in flooded conditions.',
      pesticides: 'Taro leaf blight is a major concern.',
      seeding: ['Grown from corms or suckers.', 'Plant 2-3 inches deep, spaced 2 feet apart.'],
      harvesting: 'Harvest 7-12 months after planting when leaves start to turn yellow.'
    }
  },
  {
    id: 'burdock-root',
    name: 'Burdock Root',
    scientificName: 'Arctium lappa',
    category: 'Vegetable',
    subCategory: 'Root Vegetable',
    origin: 'Europe and Northern Asia',
    image: 'https://images.unsplash.com/photo-1598063328057-f3a72c159c47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A biennial plant cultivated for its slender taproot, which is used as a vegetable in some cuisines, particularly in Japan (as Gobo).',
    cultivation: {
      season: 'Plant in spring or fall.',
      soil: 'Deep, loose, well-drained soil is essential for long, straight roots.',
      temperature: 'Prefers temperate climates.',
      watering: 'Water regularly to keep the soil evenly moist.',
      pesticides: 'Generally pest-resistant.',
      seeding: ['Sow seeds 1 inch deep in early spring.', 'Thin plants to 6 inches apart.'],
      harvesting: 'Harvest roots in the first fall or the following spring before the plant flowers. Requires deep digging.'
    }
  },
  {
    id: 'jerusalem-artichoke',
    name: 'Jerusalem Artichoke',
    scientificName: 'Helianthus tuberosus',
    category: 'Vegetable',
    subCategory: 'Tuber',
    origin: 'North America',
    image: 'https://images.unsplash.com/photo-1595110531587-8381882a7923?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A species of sunflower cultivated for its knobby tuber, used as a root vegetable. Also known as sunchoke. Can be very invasive.',
    cultivation: {
      season: 'Plant in early spring.',
      soil: 'Adaptable to most soil types, but prefers loose, well-drained soil.',
      temperature: 'Hardy and tolerant of a wide range of temperatures.',
      watering: 'Water during dry periods. Plants are vigorous.',
      pesticides: 'Slugs can be a problem. The plant itself can become a weed.',
      seeding: ['Plant whole tubers or pieces with at least two eyes, 4-6 inches deep.', 'Space 12-18 inches apart.'],
      harvesting: 'Harvest tubers after the first frost, which improves their flavor. Can be left in the ground and harvested as needed.'
    }
  },
  {
    id: 'turmeric-root',
    name: 'Turmeric Root',
    scientificName: 'Curcuma longa',
    category: 'Vegetable',
    subCategory: 'Root Vegetable',
    origin: 'Indian subcontinent and Southeast Asia',
    image: 'https://images.unsplash.com/photo-1607528999338-40b399283ef3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A flowering plant of the ginger family, whose rhizomes are used in cooking. It gives curry its distinctive yellow color.',
    cultivation: {
      season: 'Warm season, requires a long growing period (8-10 months).',
      soil: 'Well-drained, fertile soil rich in organic matter.',
      temperature: 'Tropical plant, needs 20-30°C (68-86°F) and high humidity.',
      watering: 'Keep soil consistently moist but not waterlogged.',
      pesticides: 'Generally pest-free. Root rot can occur in wet soil.',
      seeding: ['Plant rhizome pieces (with 2-3 buds) 2-4 inches deep.', 'Plant in spring after the last frost.'],
      harvesting: 'Harvest when the leaves and stem turn brown and dry. Dig up the rhizomes, clean, and cure.'
    }
  },
  {
    id: 'galangal',
    name: 'Galangal',
    scientificName: 'Alpinia galanga',
    category: 'Vegetable',
    subCategory: 'Root Vegetable',
    origin: 'Southeast Asia',
    image: 'https://images.unsplash.com/photo-1628620058245-31c5b9bf56c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A plant in the ginger family, grown for its rhizomes, which are used in Southeast Asian cuisines. It has a citrusy, piney flavor, distinct from ginger.',
    cultivation: {
      season: 'Warm season, tropical plant.',
      soil: 'Rich, moist, well-drained soil.',
      temperature: 'Prefers warm, humid conditions. Not frost-tolerant.',
      watering: 'Needs regular watering to keep the soil moist.',
      pesticides: 'Resistant to most pests.',
      seeding: ['Propagated by planting rhizome cuttings.', 'Plant in spring in a location with partial shade.'],
      harvesting: 'Harvest rhizomes after about a year when the plant is established. Can be harvested in small pieces as needed.'
    }
  },
  {
    id: 'jicama',
    name: 'Jicama',
    scientificName: 'Pachyrhizus erosus',
    category: 'Vegetable',
    subCategory: 'Tuber',
    origin: 'Mexico',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A vine grown for its large, tuberous root, which is crisp, juicy, and sweet. Often eaten raw. Note: leaves, stems, and seeds are toxic.',
    cultivation: {
      season: 'Requires a long, warm growing season (5-9 months).',
      soil: 'Well-drained, sandy loam.',
      temperature: 'Needs very warm conditions. Not frost-tolerant.',
      watering: 'Water regularly.',
      pesticides: 'Generally pest-free. Remove flowers to encourage root growth.',
      seeding: ['Start seeds indoors or sow directly in the garden after it is very warm.', 'Provide a trellis for the vine to climb.'],
      harvesting: 'Harvest when the root reaches a usable size, before the first frost. Dig up carefully.'
    }
  },
  {
    id: 'shallot',
    name: 'Shallot',
    scientificName: 'Allium cepa var. aggregatum',
    category: 'Vegetable',
    subCategory: 'Bulb & Stem',
    origin: 'Central or Southwest Asia',
    image: 'https://images.unsplash.com/photo-1587402922209-37f539799837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A type of onion, specifically a botanical variety of the species Allium cepa. Prized for its mild, delicate flavor, it is a staple in French cuisine.',
    cultivation: {
      season: 'Plant in fall or early spring.',
      soil: 'Well-drained, fertile soil with plenty of organic matter. pH 6.0-7.0.',
      temperature: 'Prefers cool weather for early growth and warmer weather for bulb development.',
      watering: 'Keep consistently moist, but reduce watering as bulbs mature.',
      pesticides: 'Similar to onions; onion maggots can be a problem. Practice crop rotation.',
      seeding: ['Grown from sets (small bulbs).', 'Plant individual cloves 1-2 inches deep and 6 inches apart in the fall for a summer harvest.'],
      harvesting: 'Harvest in mid-summer when the tops begin to yellow and fall over. Cure like garlic or onions before storing.'
    }
  },
  {
    id: 'scallion',
    name: 'Scallion (Green Onion)',
    scientificName: 'Allium fistulosum',
    category: 'Vegetable',
    subCategory: 'Bulb & Stem',
    origin: 'Siberia and China',
    image: 'https://images.unsplash.com/photo-1619579907935-8c7c13418935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'Also known as green onions or spring onions, scallions are harvested for their leaves and immature bulb. They have a milder taste than most onions.',
    cultivation: {
      season: 'Cool season. Can be planted in succession for a continuous harvest.',
      soil: 'Rich, well-drained soil.',
      temperature: 'Tolerant of a wide range of temperatures.',
      watering: 'Needs consistent moisture for best growth.',
      pesticides: 'Generally pest-free.',
      seeding: ['Sow seeds 1/4 inch deep from early spring.', 'Can also be grown from sets or by replanting the root ends of store-bought scallions.'],
      harvesting: 'Harvest when plants are 6-8 inches tall and about 1/2 inch in diameter, typically 60-80 days from seed.'
    }
  },
  {
    id: 'fennel-bulb',
    name: 'Fennel Bulb',
    scientificName: 'Foeniculum vulgare',
    category: 'Vegetable',
    subCategory: 'Bulb & Stem',
    origin: 'Mediterranean',
    image: 'https://images.unsplash.com/photo-1569000066314-7ffa2253375c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A flowering plant species in the carrot family. It is a hardy, perennial herb with yellow flowers and feathery leaves, grown for its swollen, bulb-like stem base.',
    cultivation: {
      season: 'Cool season. Plant in spring or late summer.',
      soil: 'Well-drained, fertile soil. pH 6.5-7.5.',
      temperature: 'Prefers temperatures of 15-21°C (60-70°F). Can bolt in hot weather.',
      watering: 'Keep consistently moist to prevent bolting and ensure tender bulbs.',
      pesticides: 'Aphids can be an issue. Parsleyworms may feed on the foliage.',
      seeding: ['Sow seeds 1/2 inch deep. Thin to 10-12 inches apart.', 'Mound soil around the base of the stem as it swells to blanch it, making it more tender.'],
      harvesting: 'Harvest when the bulb is about the size of a tennis ball, before the plant flowers. Typically 90-115 days from seed.'
    }
  },
  {
    id: 'asparagus',
    name: 'Asparagus',
    scientificName: 'Asparagus officinalis',
    category: 'Vegetable',
    subCategory: 'Bulb & Stem',
    origin: 'Europe and Western Asia',
    image: 'https://images.unsplash.com/photo-1559160582-e9914cec0a23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A perennial flowering plant species grown for its spring spears. It is a long-term crop, with beds producing for up to 20 years.',
    cultivation: {
      season: 'Plant crowns in early spring.',
      soil: 'Well-drained, sandy soil with a pH of 6.5-7.0. Needs full sun.',
      temperature: 'Very hardy. Requires a cold period for dormancy.',
      watering: 'Water deeply during the first few years to establish a strong root system.',
      pesticides: 'Asparagus beetles are the main pest. Hand-pick or use neem oil.',
      seeding: ['Best grown from 1- or 2-year-old crowns, not seeds.', 'Plant crowns in a trench 6-8 inches deep and 12-18 inches apart.', 'Do not harvest for the first 1-2 years to allow the plant to establish.'],
      harvesting: 'Begin light harvesting in the 2nd or 3rd year. Harvest spears when they are 6-10 inches tall for 6-8 weeks in the spring.'
    }
  },
  {
    id: 'kohlrabi',
    name: 'Kohlrabi',
    scientificName: 'Brassica oleracea (Gongylodes Group)',
    category: 'Vegetable',
    subCategory: 'Bulb & Stem',
    origin: 'Northern Europe',
    image: 'https://images.unsplash.com/photo-1620189507195-68309c437012?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A stout, round vegetable that is a cultivar of cabbage. It is the swollen stem that is eaten, raw or cooked, with a taste and texture similar to a broccoli stem or cabbage heart.',
    cultivation: {
      season: 'Cool season. Fast-growing.',
      soil: 'Fertile, moist, well-drained soil.',
      temperature: 'Best growth in cool weather, 15-21°C (60-70°F).',
      watering: 'Needs consistent moisture for tender stems. Lack of water can cause woodiness.',
      pesticides: 'Cabbage worms and flea beetles can be pests.',
      seeding: ['Sow seeds 1/2 inch deep in early spring for a summer crop, or mid-summer for a fall crop.', 'Thin to 6-8 inches apart.'],
      harvesting: 'Harvest when the swollen stem is 2-3 inches in diameter. If left too long, it becomes woody. Ready in 45-60 days.'
    }
  },
  {
    id: 'bamboo-shoots',
    name: 'Bamboo Shoots',
    scientificName: 'Bambusa vulgaris, Phyllostachys edulis',
    category: 'Vegetable',
    subCategory: 'Bulb & Stem',
    origin: 'Asia',
    image: 'https://images.unsplash.com/photo-1559160582-e9914cec0a23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'The edible shoots (new bamboo culms that come out of the ground) of many bamboo species. They must be cooked before eating to destroy toxins.',
    cultivation: {
      season: 'Depends on bamboo species. Shoots emerge in spring or summer.',
      soil: 'Fertile, well-drained soil. Most bamboo is very vigorous.',
      temperature: 'Varies by species; some are tropical, others are temperate.',
      watering: 'Needs plenty of water, especially when getting established.',
      pesticides: 'Generally pest-free. The main issue is controlling its spread.',
      seeding: ['Grown from rhizome cuttings or divisions. Be sure to choose a clumping variety unless you have a lot of space and root barriers.', 'Plant in spring.'],
      harvesting: 'Harvest shoots when they are young and tender, typically less than 1 foot tall. Use a sharp spade to sever the shoot from the rhizome below ground.'
    }
  },
  {
    id: 'taro-stems',
    name: 'Taro Stems',
    scientificName: 'Colocasia esculenta',
    category: 'Vegetable',
    subCategory: 'Bulb & Stem',
    origin: 'Southeast Asia',
    image: 'https://images.unsplash.com/photo-1600895135438-a2a47c4e531e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'The leaf stalks (petioles) of the taro plant. They have a mild flavor and are used in soups and stews in many Asian and Pacific cuisines. Must be cooked thoroughly.',
    cultivation: {
      season: 'Warm, wet season.',
      soil: 'Rich, moist to wet soil.',
      temperature: 'Prefers 25-35°C (77-95°F).',
      watering: 'Requires large amounts of water.',
      pesticides: 'Taro leaf blight is a concern.',
      seeding: ['Grown from the same plant as Taro Root (corms).', 'Cultivation is identical to growing for the root.'],
      harvesting: 'Harvest young, tender leaf stalks as needed throughout the growing season. Always leave several stalks on the plant.'
    }
  },
  {
    id: 'lotus-stem',
    name: 'Lotus Stem (Kamal Kakdi)',
    scientificName: 'Nelumbo nucifera',
    category: 'Vegetable',
    subCategory: 'Bulb & Stem',
    origin: 'Asia and Australia',
    image: 'https://images.unsplash.com/photo-1559160582-e9914cec0a23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'The rhizome (underwater stem) of the lotus plant. It has a crunchy texture with a mildly sweet flavor and a distinctive pattern of holes. A delicacy in Asian cuisine.',
    cultivation: {
      season: 'Aquatic perennial. Plant tubers in spring.',
      soil: 'Grows in the mud at the bottom of ponds or in large, water-tight containers. Needs at least 6 inches of mud.',
      temperature: 'Needs warm temperatures and full sun.',
      watering: 'Must be submerged in at least 4-6 inches of water at all times.',
      pesticides: 'Aphids can sometimes infest the leaves above water.',
      seeding: ['Plant tubers horizontally in the mud, about 4 inches deep.', 'Be careful not to damage the growing tips.'],
      harvesting: 'Harvest in the fall after the foliage dies back. It involves reaching into the mud to carefully pull up the long rhizomes.'
    }
  },
  {
    id: 'orange',
    name: 'Orange',
    scientificName: 'Citrus × sinensis',
    category: 'Fruit',
    subCategory: 'Citrus Fruit',
    origin: 'Southeast Asia',
    image: 'https://images.unsplash.com/photo-1547514701-42782101795e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A popular citrus fruit known for its sweet taste and high vitamin C content. Oranges are widely grown in tropical and subtropical climates.',
    cultivation: {
      season: 'Plant in spring. Fruits ripen in fall and winter.',
      soil: 'Well-drained, sandy loam soil with a pH of 6.0 to 7.5.',
      temperature: 'Prefers hot summers and mild winters, 13-38°C (55-100°F). Sensitive to frost.',
      watering: 'Needs regular and deep watering, especially during fruit development. Do not overwater.',
      pesticides: 'Citrus leaf miners and aphids are common pests. Use horticultural oil.',
      seeding: ['Usually grown from grafted young trees.', 'Plant in a sunny, well-protected location. Dig a hole as deep as the root ball and twice as wide.'],
      harvesting: 'Harvest when fruits are uniformly colored and firm. Taste is the best indicator of ripeness. Do not ripen after picking.'
    }
  },
  {
    id: 'lemon',
    name: 'Lemon',
    scientificName: 'Citrus limon',
    category: 'Fruit',
    subCategory: 'Citrus Fruit',
    origin: 'Northeastern India, northern Myanmar, or China',
    image: 'https://images.unsplash.com/photo-1587496679742-96b9af9d4133?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A species of small evergreen tree whose yellow, oval fruit is used for culinary and non-culinary purposes throughout the world, primarily for its juice.',
    cultivation: {
      season: 'Can produce fruit year-round. Plant in spring or fall.',
      soil: 'Well-drained, slightly acidic soil. Good for containers.',
      temperature: 'Sensitive to cold. Prefers temperatures between 21-29°C (70-85°F). Protect from frost.',
      watering: 'Water consistently, allowing the soil to dry slightly between waterings.',
      pesticides: 'Scale insects and spider mites can be a problem. Treat with insecticidal soap.',
      seeding: ['Grown from grafted trees for best results.', 'Requires at least 6 hours of direct sunlight per day.'],
      harvesting: 'Harvest when lemons are yellow and have reached a good size. They can be left on the tree for several weeks.'
    }
  },
  {
    id: 'lime',
    name: 'Lime',
    scientificName: 'Citrus aurantiifolia',
    category: 'Fruit',
    subCategory: 'Citrus Fruit',
    origin: 'Southeast Asia',
    image: 'https://images.unsplash.com/photo-1596423049114-4320a459392c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A citrus fruit which is typically round, green in color, and contains acidic juice vesicles. Limes are a rich source of vitamin C.',
    cultivation: {
      season: 'Fruits year-round in warm climates. Plant in spring.',
      soil: 'Well-drained soil is crucial. pH 6.0-7.0.',
      temperature: 'Very sensitive to cold. Best in tropical or subtropical climates above 10°C (50°F).',
      watering: 'Regular watering is needed, but avoid waterlogged soil.',
      pesticides: 'Citrus canker and leaf miners are potential issues.',
      seeding: ['Propagated by grafting or air layering.', 'Dwarf varieties are excellent for pots.'],
      harvesting: 'Harvest when limes are green, smooth, and heavy for their size. They should be juicy and slightly soft to the touch.'
    }
  },
  {
    id: 'grapefruit',
    name: 'Grapefruit',
    scientificName: 'Citrus × paradisi',
    category: 'Fruit',
    subCategory: 'Citrus Fruit',
    origin: 'Barbados',
    image: 'https://images.unsplash.com/photo-1557682533-3959ca94119f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A large subtropical citrus tree known for its sour to semi-sweet, somewhat bitter fruit. The flesh can be yellow, pink, or red.',
    cultivation: {
      season: 'Plant in spring. Fruits ripen in fall and winter.',
      soil: 'Requires well-drained, sandy loam soil.',
      temperature: 'Needs a hot climate to produce sweet fruit. Not cold-hardy.',
      watering: 'Water deeply and regularly, especially during hot, dry weather.',
      pesticides: 'Susceptible to citrus rust mites and scale insects.',
      seeding: ['Grown from grafted nursery trees.', 'Needs a large space in a sunny location.'],
      harvesting: 'Harvest when fruit has developed full color and a slightly sweet aroma. Can hang on the tree for months, getting sweeter over time.'
    }
  },
  {
    id: 'tangerine',
    name: 'Tangerine',
    scientificName: 'Citrus tangerina',
    category: 'Fruit',
    subCategory: 'Citrus Fruit',
    origin: 'Southeast Asia',
    image: 'https://images.unsplash.com/photo-1557682533-3959ca94119f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A variety of mandarin orange, known for its deep orange-red color and easy-to-peel skin. It is smaller and less rounded than common oranges.',
    cultivation: {
      season: 'Plant in spring. Harvest in late fall to winter.',
      soil: 'Well-drained, fertile soil. Tolerant of various soil types.',
      temperature: 'More cold-hardy than oranges but still needs protection from frost.',
      watering: 'Water regularly, allowing the top inch of soil to dry out between waterings.',
      pesticides: 'Aphids and scale can be problematic. Monitor regularly.',
      seeding: ['Best grown from a grafted tree to ensure fruit quality.', 'Good choice for container gardening.'],
      harvesting: 'Harvest when the fruit is fully colored and pulls easily from the stem. The flavor does not improve after picking.'
    }
  },
  {
    id: 'clementine',
    name: 'Clementine',
    scientificName: 'Citrus × clementina',
    category: 'Fruit',
    subCategory: 'Citrus Fruit',
    origin: 'Algeria',
    image: 'https://images.unsplash.com/photo-1600326145359-3a447371d56c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A hybrid between a mandarin orange and a sweet orange. They are small, seedless, and have a very easy-to-peel skin, making them a popular snack.',
    cultivation: {
      season: 'Harvest from late fall through winter. Plant in spring.',
      soil: 'Prefers well-drained, sandy loam soil.',
      temperature: 'Needs a warm, sunny, and sheltered location. Protect from frost.',
      watering: 'Regular watering is essential, especially when fruit is developing.',
      pesticides: 'Susceptible to aphids and scale insects.',
      seeding: ['Grown from grafted trees to ensure seedless fruit.', 'Dwarf varieties are suitable for large containers.'],
      harvesting: 'Harvest when the fruit is firm and has a deep orange color. They are sweet and juicy when ripe.'
    }
  },
  {
    id: 'pomelo',
    name: 'Pomelo',
    scientificName: 'Citrus maxima',
    category: 'Fruit',
    subCategory: 'Citrus Fruit',
    origin: 'Southeast Asia',
    image: 'https://images.unsplash.com/photo-1587857493873-837053537a7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'The largest citrus fruit, with a very thick rind and sweet, mild flesh. It is a principal ancestor of the grapefruit.',
    cultivation: {
      season: 'Long, hot season required. Fruits ripen in winter.',
      soil: 'Deep, fertile, well-drained soil.',
      temperature: 'Truly tropical/subtropical. Requires significant heat to produce quality fruit.',
      watering: 'Needs ample water, especially during fruit set and development.',
      pesticides: 'Generally hardy, but can be affected by common citrus pests.',
      seeding: ['Grown from grafted trees.', 'Requires a lot of space as trees can become very large.'],
      harvesting: 'Harvest when the skin turns from green to yellow and the fruit feels heavy for its size. Can be stored for long periods.'
    }
  },
  {
    id: 'mandarin-orange',
    name: 'Mandarin Orange',
    scientificName: 'Citrus reticulata',
    category: 'Fruit',
    subCategory: 'Citrus Fruit',
    origin: 'Southeast Asia',
    image: 'https://images.unsplash.com/photo-1568584719232-0b3d5b0851a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A group of small citrus fruits that includes varieties like tangerines and clementines. They are generally sweeter and less acidic than larger oranges.',
    cultivation: {
      season: 'Harvest in late fall and winter.',
      soil: 'Adaptable to a range of soils, but prefers well-drained conditions.',
      temperature: 'More cold-tolerant than most sweet oranges, making them suitable for a wider range of climates.',
      watering: 'Consistent watering is needed for juicy fruit.',
      pesticides: 'Alternaria brown spot can be an issue on some varieties.',
      seeding: ['Many varieties are available as grafted trees.', 'Their smaller size makes them good for home gardens.'],
      harvesting: 'Harvest when fruits are fully colored and have a slightly soft feel. Flavor is the best test for ripeness.'
    }
  },
  {
    id: 'kaffir-lime',
    name: 'Kaffir Lime',
    scientificName: 'Citrus hystrix',
    category: 'Fruit',
    subCategory: 'Citrus Fruit',
    origin: 'Southeast Asia',
    image: 'https://images.unsplash.com/photo-1627991334005-3944a6a5364b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A citrus fruit native to tropical Southeast Asia. Its fruit and leaves are used in Southeast Asian cuisine and its essential oil is used in perfumery. The leaves are highly aromatic.',
    cultivation: {
      season: 'Grown for leaves year-round. Plant in spring.',
      soil: 'Excellent drainage is critical. Prefers a pot where soil can be controlled.',
      temperature: 'Loves heat and humidity. Must be protected from any frost.',
      watering: 'Water when the top inch of soil is dry. Do not let it sit in water.',
      pesticides: 'Spider mites and scale can be a problem, especially indoors.',
      seeding: ['Grown from seed or cuttings.', 'The thorny bush is perfect for container growing.'],
      harvesting: 'Harvest leaves as needed. The bumpy fruit can be zested, but the juice is rarely used.'
    }
  },
  {
    id: 'kumquat',
    name: 'Kumquat',
    scientificName: 'Citrus japonica',
    category: 'Fruit',
    subCategory: 'Citrus Fruit',
    origin: 'China',
    image: 'https://images.unsplash.com/photo-1611793186833-369b05a7f9a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A group of small fruit-bearing trees. The edible fruit is small and olive-sized, and is unique in that it is eaten whole, skin and all. The skin is sweet and the flesh is tart.',
    cultivation: {
      season: 'Harvest in late winter to early spring.',
      soil: 'Well-drained soil. Adaptable to pot culture.',
      temperature: 'The most cold-hardy of all citrus fruits, can withstand temperatures down to -7°C (20°F).',
      watering: 'Water regularly, but do not overwater.',
      pesticides: 'Generally pest-resistant.',
      seeding: ['Grown from grafted stock.', 'The small, shrubby tree makes an attractive ornamental plant.'],
      harvesting: 'Harvest when the fruit is bright orange and slightly soft to the touch. Can be left on the tree for months.'
    }
  },
  {
    id: 'bitter-orange',
    name: 'Bitter Orange (Seville)',
    scientificName: 'Citrus × aurantium',
    category: 'Fruit',
    subCategory: 'Citrus Fruit',
    origin: 'Southeast Asia',
    image: 'https://images.unsplash.com/photo-1547514701-42782101795e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'This orange is prized for making marmalade, as its high pectin content gives a good set and its sour flavor is balanced by sugar. It is also used to make liqueurs.',
    cultivation: {
      season: 'Harvest in late winter.',
      soil: 'Tolerant of a wide range of soils but prefers well-drained sites.',
      temperature: 'A hardy citrus tree, often used as rootstock for other citrus varieties.',
      watering: 'Needs regular watering.',
      pesticides: 'Resistant to many common citrus diseases.',
      seeding: ['Can be grown from seed, but grafted trees are more common for fruit production.', 'A very thorny tree.'],
      harvesting: 'Harvest when fruits are fully orange. The fruit is too sour to be eaten raw.'
    }
  },
  {
    id: 'yuzu',
    name: 'Yuzu',
    scientificName: 'Citrus junos',
    category: 'Fruit',
    subCategory: 'Citrus Fruit',
    origin: 'China',
    image: 'https://images.unsplash.com/photo-1599579084299-9d58b79b049a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A Japanese citrus fruit valued for its highly aromatic rind and juice. It tastes like a cross between a grapefruit and a mandarin orange. It is rarely eaten as a fruit.',
    cultivation: {
      season: 'Harvest in fall and winter.',
      soil: 'Well-drained, fertile soil.',
      temperature: 'Unusually cold-hardy for a citrus, able to withstand temperatures down to -9°C (15°F).',
      watering: 'Regular watering is required.',
      pesticides: 'Generally hardy. The trees are very thorny.',
      seeding: ['Often grown from seed, though it can take many years to fruit. Grafted trees are faster.', 'Can be grown in large containers.'],
      harvesting: 'Harvest when the fruit turns from green to yellow. Both the zest and juice are used in cooking and drinks.'
    }
  },
  {
    id: 'peach',
    name: 'Peach',
    scientificName: 'Prunus persica',
    category: 'Fruit',
    subCategory: 'Stone Fruit',
    origin: 'Northwest China',
    image: 'https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A deciduous tree prized for its juicy, fleshy fruit. Peaches have a delicate aroma and are popular for eating fresh, baking, and canning.',
    cultivation: {
      season: 'Plant in spring. Harvest in summer.',
      soil: 'Well-drained, sandy soil with a pH of 6.5.',
      temperature: 'Requires chill hours in winter but is sensitive to late spring frosts. Needs hot summers to ripen fruit.',
      watering: 'Water deeply every 10-14 days during the growing season.',
      pesticides: 'Peach leaf curl and brown rot are common diseases. Oriental fruit moth is a major pest.',
      seeding: ['Grown from grafted saplings.', 'Requires regular pruning to an open center shape to allow sunlight to reach the branches.'],
      harvesting: 'Harvest when the fruit is fully colored and slightly softens near the stem. The fruit should come off the branch with a gentle twist.'
    }
  },
  {
    id: 'plum',
    name: 'Plum',
    scientificName: 'Prunus domestica',
    category: 'Fruit',
    subCategory: 'Stone Fruit',
    origin: 'Europe and Asia',
    image: 'https://images.unsplash.com/photo-1598512198063-984a861f1373?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A diverse group of fruits with a smooth pit and juicy flesh. Plums can be eaten fresh, dried (as prunes), or used in jams and desserts.',
    cultivation: {
      season: 'Plant in spring. Harvest from late summer to early fall.',
      soil: 'Well-drained, loamy soil with a pH of 6.0-7.0.',
      temperature: 'Varies by type; European plums are more cold-hardy than Japanese plums.',
      watering: 'Water regularly, especially when fruit is developing, to prevent fruit drop.',
      pesticides: 'Brown rot, black knot, and plum curculio are common problems.',
      seeding: ['Plant at least two different varieties for cross-pollination (for most types).', 'Prune annually to maintain an open structure.'],
      harvesting: 'Harvest when the fruit is fully colored and feels slightly soft. They should detach easily from the stem.'
    }
  },
  {
    id: 'apricot',
    name: 'Apricot',
    scientificName: 'Prunus armeniaca',
    category: 'Fruit',
    subCategory: 'Stone Fruit',
    origin: 'China',
    image: 'https://images.unsplash.com/photo-1595152285199-a551a396e94a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'Small, golden-orange fruits with a velvety skin and flesh. They are sweet and slightly tart, excellent for eating fresh, drying, or making preserves.',
    cultivation: {
      season: 'Plant in spring. Harvest in early to mid-summer.',
      soil: 'Deep, well-drained soil. Tolerant of higher pH soils.',
      temperature: 'Requires a cold winter but blooms very early, making it vulnerable to late frosts.',
      watering: 'Drought-tolerant once established but needs water for good fruit production.',
      pesticides: 'Susceptible to brown rot and bacterial canker.',
      seeding: ['Most varieties are self-fruitful.', 'Prune after fruiting in summer to control size and shape.'],
      harvesting: 'Harvest when the fruit turns a uniform orange color and feels slightly soft. They do not ripen much after picking.'
    }
  },
  {
    id: 'nectarine',
    name: 'Nectarine',
    scientificName: 'Prunus persica var. nucipersica',
    category: 'Fruit',
    subCategory: 'Stone Fruit',
    origin: 'China (a variety of peach)',
    image: 'https://images.unsplash.com/photo-1629838998285-05645c859f51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A variety of peach that has a smooth, fuzz-less skin. Nectarines are often more aromatic and slightly smaller than peaches.',
    cultivation: {
      season: 'Plant in spring. Harvest in summer.',
      soil: 'Well-drained, sandy soil, pH 6.5.',
      temperature: 'Similar requirements to peaches: needs chill hours and hot summers, but is frost-sensitive.',
      watering: 'Regular, deep watering is essential.',
      pesticides: 'Even more susceptible to brown rot and peach leaf curl than peaches.',
      seeding: ['Cultivation is nearly identical to peaches.', 'Thin fruit heavily to ensure large, high-quality nectarines.'],
      harvesting: 'Harvest when the fruit is fully colored and gives slightly to pressure. The background color should be yellow, not green.'
    }
  },
  {
    id: 'cherry',
    name: 'Cherry',
    scientificName: 'Prunus avium (sweet) or Prunus cerasus (sour)',
    category: 'Fruit',
    subCategory: 'Stone Fruit',
    origin: 'Europe and Western Asia',
    image: 'https://images.unsplash.com/photo-1528820399434-29b934068417?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A small, round stone fruit that is typically bright or dark red. Sweet cherries are eaten fresh, while sour cherries are used for baking and preserves.',
    cultivation: {
      season: 'Plant in spring. Harvest in early summer.',
      soil: 'Deep, fertile, well-drained sandy loam. pH 6.5-7.0.',
      temperature: 'Requires winter chill. Sweet cherries are less cold-hardy than sour cherries.',
      watering: 'Consistent moisture is needed. Fruit can split if heavy rain occurs near harvest.',
      pesticides: 'Birds are the biggest pest. Netting is often required. Brown rot is a common disease.',
      seeding: ['Most sweet cherry varieties need a pollinator.', 'Sour cherries are usually self-fruitful.'],
      harvesting: 'Harvest when the fruit is fully colored and has a sweet flavor. They will not ripen after being picked.'
    }
  },
  {
    id: 'mango',
    name: 'Mango',
    scientificName: 'Mangifera indica',
    category: 'Fruit',
    subCategory: 'Stone Fruit',
    origin: 'South Asia',
    image: 'https://images.unsplash.com/photo-1591073113125-e46713c82959?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A juicy stone fruit from numerous species of tropical trees. Known as the "king of fruits," it is loved for its sweet taste and rich flavor.',
    cultivation: {
      season: 'Plant in spring. Fruits in summer.',
      soil: 'Well-drained soil is essential. Tolerant of various soil types.',
      temperature: 'A tropical fruit that needs a frost-free climate. Prefers hot, dry periods for fruit production.',
      watering: 'Water regularly when young. Mature trees are drought-tolerant but need water during flowering and fruiting.',
      pesticides: 'Anthracnose and powdery mildew are major diseases, especially in humid climates.',
      seeding: ['Grown from grafted trees to ensure good fruit quality.', 'Protect young trees from wind and cold.'],
      harvesting: 'Harvest when the fruit develops its final color and gives slightly to gentle pressure. The aroma near the stem is a good indicator of ripeness.'
    }
  },
  {
    id: 'lychee',
    name: 'Lychee',
    scientificName: 'Litchi chinensis',
    category: 'Fruit',
    subCategory: 'Stone Fruit',
    origin: 'Southeast Asia',
    image: 'https://images.unsplash.com/photo-1596395033433-a74074082b26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A tropical tree cultivated for its sweet fruit. The fruit has a rough, pink-red rind covering sweet, translucent white flesh.',
    cultivation: {
      season: 'Plant in spring. Harvest in early summer.',
      soil: 'Prefers deep, fertile, well-drained acidic soil.',
      temperature: 'Subtropical; requires a period of cool, dry weather to induce flowering, but is sensitive to frost.',
      watering: 'Needs regular watering, especially during flowering and fruit development.',
      pesticides: 'Pests include fruit-boring moths and mites. Birds and bats are also attracted to the fruit.',
      seeding: ['Grown from air-layered cuttings or grafted trees for reliable fruiting.', 'Trees can grow very large.'],
      harvesting: 'Harvest when the skin turns from green to red or pink. Harvested in clusters to avoid damaging the fruit.'
    }
  },
  {
    id: 'rambutan',
    name: 'Rambutan',
    scientificName: 'Nephelium lappaceum',
    category: 'Fruit',
    subCategory: 'Stone Fruit',
    origin: 'Southeast Asia',
    image: 'https://images.unsplash.com/photo-1618919142942-83493231a961?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A medium-sized tropical tree that produces fruit of the same name. The fruit is red and covered with fleshy, pliable spines, hence the name, which means "hairy".',
    cultivation: {
      season: 'Fruits twice a year in tropical climates.',
      soil: 'Deep, clay-loam or sandy loam rich in organic matter.',
      temperature: 'Strictly tropical, needs high humidity and is not tolerant of cold temperatures.',
      watering: 'Requires regular rainfall or irrigation.',
      pesticides: 'Relatively free of pests, but fruit flies can be a problem.',
      seeding: ['Usually propagated by grafting or budding to ensure good quality.', 'Male and female trees exist, so planting the right type is crucial.'],
      harvesting: 'Harvested in clusters when the fruit has turned a deep red or yellow. The fruit has a short shelf life.'
    }
  },
  {
    id: 'date',
    name: 'Date',
    scientificName: 'Phoenix dactylifera',
    category: 'Fruit',
    subCategory: 'Stone Fruit',
    origin: 'Middle East',
    image: 'https://images.unsplash.com/photo-1609260346399-518a7c299942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A sweet, edible fruit that grows in large clusters on the date palm tree. Dates have been a staple food of the Middle East and the Indus Valley for thousands of years.',
    cultivation: {
      season: 'A long, hot, and dry season is needed for fruit to mature.',
      soil: 'Tolerant of many soil types but needs good drainage. Very salt-tolerant.',
      temperature: 'Requires very high heat and full sun to produce fruit. Can tolerate light frost.',
      watering: 'Very drought-tolerant, but needs ample water for fruit production. Often grown in oases.',
      pesticides: 'Scale insects and palm weevils can be pests.',
      seeding: ['Propagated from offshoots or suckers from a parent palm to ensure the sex of the plant (date palms are dioecious).', 'Hand-pollination is often necessary for commercial crops.'],
      harvesting: 'Harvested in late fall when the fruits have reached the desired stage of ripeness, from fresh and soft (Khalal) to dry and wrinkled (Tamr).'
    }
  },
  {
    id: 'strawberry',
    name: 'Strawberry',
    scientificName: 'Fragaria × ananassa',
    category: 'Fruit',
    subCategory: 'Berry',
    origin: 'France',
    image: 'https://images.unsplash.com/photo-1588600958832-fa0b6e4395b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A widely grown hybrid species of the genus Fragaria, cultivated worldwide for its fruit. The fruit is widely appreciated for its characteristic aroma, bright red color, juicy texture, and sweetness.',
    cultivation: {
      season: 'Plant in spring or fall. Harvest in late spring to early summer.',
      soil: 'Prefers well-drained, sandy loam with a high organic matter content. pH 5.5-6.5.',
      temperature: 'Prefers temperate climates. Flowers can be damaged by frost.',
      watering: 'Needs consistent moisture, about 1-2 inches per week, especially when fruit is forming.',
      pesticides: 'Slugs, spider mites, and various fungal diseases (like grey mold) are common. Use straw mulch to keep fruit off the soil.',
      seeding: ['Usually grown from bare-root runners or small plants.', 'Plant with the crown just at soil level. Space plants about 18 inches apart.'],
      harvesting: 'Harvest when the berries are fully red. Pick every couple of days as they ripen quickly.'
    }
  },
  {
    id: 'blueberry',
    name: 'Blueberry',
    scientificName: 'Vaccinium corymbosum',
    category: 'Fruit',
    subCategory: 'Berry',
    origin: 'North America',
    image: 'https://images.unsplash.com/photo-1498557850523-2337fb7b2a6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A perennial flowering plant with blue or purple berries. They are native to North America and are prized for their sweet taste and health benefits.',
    cultivation: {
      season: 'Plant in spring. Harvest in mid-summer.',
      soil: 'Requires very acidic, well-drained, moist soil (pH 4.5-5.5). Amend soil with peat moss or sulfur.',
      temperature: 'Needs a cold period for dormancy (chill hours) to produce fruit.',
      watering: 'Shallow root systems require consistent moisture. Water regularly, but do not overwater.',
      pesticides: 'Birds are a major pest; netting is essential. Mummy berry is a common fungal disease.',
      seeding: ['Plant at least two different varieties for good cross-pollination and fruit set.', 'Grown from young bushes. Mulch with pine needles or wood chips to conserve moisture and acidify the soil.'],
      harvesting: 'Harvest when berries are a deep, uniform blue-black color. They should pull easily from the bush. Berries ripen over several weeks.'
    }
  },
  {
    id: 'raspberry',
    name: 'Raspberry',
    scientificName: 'Rubus idaeus',
    category: 'Fruit',
    subCategory: 'Berry',
    origin: 'Europe and Northern Asia',
    image: 'https://images.unsplash.com/photo-1592408355647-e14309a6a8a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'An edible fruit of a multitude of plant species in the genus Rubus of the rose family. Most are red, but some are black, purple, or golden.',
    cultivation: {
      season: 'Plant bare-root canes in early spring. Harvest in summer (summer-bearing) or fall (everbearing).',
      soil: 'Well-drained, fertile loam with a high organic matter content. pH 6.0-6.8.',
      temperature: 'Hardy in temperate climates. Prefers full sun.',
      watering: 'Needs about 1 inch of water per week during the growing season.',
      pesticides: 'Cane borers and raspberry beetles can be pests. Viruses can be a problem, so buy certified disease-free plants.',
      seeding: ['Grown from bare-root canes.', 'Requires a sturdy trellis or support system.', 'Prune annually. For summer-bearing types, cut down canes that have fruited. For everbearing, prune the top portion that fruited in the fall.'],
      harvesting: 'Harvest when berries are richly colored and pull easily from their central core (receptacle). Pick carefully as they are very delicate.'
    }
  },
  {
    id: 'blackberry',
    name: 'Blackberry',
    scientificName: 'Rubus fruticosus',
    category: 'Fruit',
    subCategory: 'Berry',
    origin: 'Asia, Europe, and North and South America',
    image: 'https://images.unsplash.com/photo-1596522930191-7634a81b23c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A widespread and well-known edible fruit. It is a bramble, with thorny stems, that produces dark purple to black, juicy fruit.',
    cultivation: {
      season: 'Plant in early spring. Harvest in mid- to late summer.',
      soil: 'Prefers well-drained, sandy loam with a pH of 6.0-7.0.',
      temperature: 'Varieties exist for a wide range of climates. Choose one suited to your area.',
      watering: 'Water regularly, especially during fruit development.',
      pesticides: 'Similar pests to raspberries. Orange rust can be a serious disease.',
      seeding: ['Grown from bare-root plants.', 'Vigorous growers that need a strong trellis. Thornless varieties are available and easier to manage.', 'Pruning is similar to summer-bearing raspberries: remove canes that have finished fruiting.'],
      harvesting: 'Harvest when berries are a deep, dull black color. Unlike raspberries, the core remains inside the fruit when picked.'
    }
  },
  {
    id: 'gooseberry',
    name: 'Gooseberry',
    scientificName: 'Ribes uva-crispa',
    category: 'Fruit',
    subCategory: 'Berry',
    origin: 'Europe, northwestern Africa and southwestern Asia',
    image: 'https://images.unsplash.com/photo-1595211877422-5076a28f5823?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A species of Ribes, known for its tart berries. They can be green, yellow, or red when ripe and are used in pies, fools, and jams.',
    cultivation: {
      season: 'Plant in fall or spring. Harvest in early summer.',
      soil: 'Rich, moist, well-drained soil. pH 6.0-6.8.',
      temperature: 'Prefers cool, humid climates. Can suffer in intense heat.',
      watering: 'Keep soil consistently moist.',
      pesticides: 'Powdery mildew is a major problem. Gooseberry sawfly can defoliate plants quickly.',
      seeding: ['Grown from bare-root plants.', 'Prune to an open, goblet shape to encourage air circulation and make picking easier from the thorny branches.'],
      harvesting: 'Harvest for cooking when green and hard. For fresh eating, wait until the berries are soft and fully colored.'
    }
  },
  {
    id: 'elderberry',
    name: 'Elderberry',
    scientificName: 'Sambucus nigra',
    category: 'Fruit',
    subCategory: 'Berry',
    origin: 'Europe and North America',
    image: 'https://images.unsplash.com/photo-1629828822437-3347c8703350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A large shrub that produces clusters of dark purple to black berries. The berries are toxic when raw but are delicious and medicinal when cooked into syrups, jams, and wine.',
    cultivation: {
      season: 'Plant in spring. Harvest in late summer.',
      soil: 'Adaptable to a wide range of soils but prefers moist, fertile conditions.',
      temperature: 'Very hardy and grows in a variety of climates.',
      watering: 'Tolerant of wet soil. Water during dry spells.',
      pesticides: 'Generally pest-free. Birds love the berries.',
      seeding: ['Grown from cuttings or young plants.', 'Plant at least two different varieties for cross-pollination to ensure a good fruit set.'],
      harvesting: 'Harvest entire clusters when all berries are a deep, dark purple. Strip the berries from the stems using a fork.'
    }
  },
  {
    id: 'mulberry',
    name: 'Mulberry',
    scientificName: 'Morus',
    category: 'Fruit',
    subCategory: 'Berry',
    origin: 'Asia and North America',
    image: 'https://images.unsplash.com/photo-1594212690138-19d465a331a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A fast-growing tree that produces sweet fruits resembling long blackberries. The fruit can be red, dark purple, or white. The dark fruits stain everything.',
    cultivation: {
      season: 'Plant in spring. Harvest in early summer.',
      soil: 'Extremely adaptable, tolerates poor soil, clay, and a wide pH range.',
      temperature: 'Hardy and tolerant of both heat and cold.',
      watering: 'Drought-tolerant once established.',
      pesticides: 'Very few pest or disease problems.',
      seeding: ['Grown from saplings.', 'Trees can get very large, but dwarf varieties are available. Prune to maintain a manageable size.'],
      harvesting: 'Harvest by shaking the branches over a tarp when the fruits are ripe. They ripen over a long period.'
    }
  },
  {
    id: 'black-currant',
    name: 'Black Currant',
    scientificName: 'Ribes nigrum',
    category: 'Fruit',
    subCategory: 'Berry',
    origin: 'Northern Europe and Asia',
    image: 'https://images.unsplash.com/photo-1629828822437-3347c8703350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A woody shrub grown for its berries. They have a strong, tart flavor and are rich in vitamin C. Widely used in Europe for juices, jams, and cordials.',
    cultivation: {
      season: 'Plant in fall or spring. Harvest in mid-summer.',
      soil: 'Prefers rich, heavy, moist soil.',
      temperature: 'Very cold-hardy; requires winter chill. Does not like hot summers.',
      watering: 'Needs consistent moisture.',
      pesticides: 'White pine blister rust is a major disease concern; planting was banned in parts of the US for many years.',
      seeding: ['Grown from bare-root plants.', 'Prune annually, removing old, unproductive wood to encourage new growth.'],
      harvesting: 'Harvest berries in clusters when they are dark, firm, and juicy.'
    }
  },
  {
    id: 'cranberry',
    name: 'Cranberry',
    scientificName: 'Vaccinium macrocarpon',
    category: 'Fruit',
    subCategory: 'Berry',
    origin: 'North America',
    image: 'https://images.unsplash.com/photo-1574868823083-975d8a867c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A low-growing, evergreen shrub that produces tart, red berries. Famously grown in commercial bogs and harvested by flooding. A staple for holiday sauces and juices.',
    cultivation: {
      season: 'Plant in spring. Harvest in fall.',
      soil: 'Requires highly acidic (pH 4.0-5.0), boggy, sandy or peaty soil. Specific needs make it difficult for home gardeners.',
      temperature: 'Needs a cold winter for dormancy. Hardy to very cold temperatures.',
      watering: 'Soil must be kept consistently moist to wet. Excellent drainage is also paradoxically important.',
      pesticides: 'Fruitworms and fungal fruit rot can be problems.',
      seeding: ['Grown from cuttings or small plants.', 'Plant in a specially prepared bed amended with large amounts of peat moss and sand.'],
      harvesting: 'Harvest in the fall (September-October) when berries are a deep red. For home gardens, they can be hand-picked.'
    }
  },
  {
    id: 'boysenberry',
    name: 'Boysenberry',
    scientificName: 'Rubus ursinus × idaeus',
    category: 'Fruit',
    subCategory: 'Berry',
    origin: 'California, USA',
    image: 'https://images.unsplash.com/photo-1596522930191-7634a81b23c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A large, reddish-purple hybrid berry, thought to be a cross between a raspberry, blackberry, dewberry, and loganberry. It has a sweet-tart flavor and is very juicy.',
    cultivation: {
      season: 'Plant in spring. Harvest in early to mid-summer.',
      soil: 'Rich, well-drained soil with a pH of 6.0-7.0.',
      temperature: 'Less cold-hardy than blackberries. Prefers temperate climates.',
      watering: 'Needs regular watering, about 1-2 inches per week during the growing season.',
      pesticides: 'Susceptible to the same pests and diseases as blackberries and raspberries.',
      seeding: ['Grown from bare-root plants.', 'A trailing vine that requires a sturdy trellis or fence for support.', 'Prune canes that have fruited after harvest.'],
      harvesting: 'Harvest when the berries have turned a deep, uniform purple and are slightly soft. They are delicate and should be handled with care.'
    }
  },
  {
    id: 'red-currant',
    name: 'Red Currant',
    scientificName: 'Ribes rubrum',
    category: 'Fruit',
    subCategory: 'Berry',
    origin: 'Western Europe',
    image: 'https://images.unsplash.com/photo-1595211877422-5076a28f5823?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A member of the gooseberry family, grown for its translucent red berries with a tart flavor. They are used primarily for making jellies, jams, and sauces.',
    cultivation: {
      season: 'Plant in fall or spring. Harvest in mid-summer.',
      soil: 'Prefers cool, moist, well-drained soil.',
      temperature: 'Very cold-hardy and prefers cooler summer climates.',
      watering: 'Keep soil consistently moist.',
      pesticides: 'Aphids and gooseberry sawfly can be pests. Birds are attracted to the berries.',
      seeding: ['Grown from bare-root plants or cuttings.', 'Prune to an open, vase-like shape to promote air circulation and sun penetration.'],
      harvesting: 'Harvest in clusters when the berries are firm, plump, and brightly colored.'
    }
  },
  {
    id: 'cloudberry',
    name: 'Cloudberry',
    scientificName: 'Rubus chamaemorus',
    category: 'Fruit',
    subCategory: 'Berry',
    origin: 'Arctic and subarctic regions of the northern hemisphere',
    image: 'https://images.unsplash.com/photo-1594212690138-19d465a331a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A rare, wild berry that grows in alpine and arctic tundra and boreal forests. The fruit is golden-yellow, soft, and juicy, with a unique tart flavor. A prized delicacy in Scandinavia.',
    cultivation: {
      season: 'Perennial that grows in spring/summer.',
      soil: 'Extremely specific needs: requires acidic, boggy, nutrient-poor soil. Very difficult to cultivate outside its native habitat.',
      temperature: 'Requires very cold winters and cool summers. Does not tolerate heat.',
      watering: 'Needs constantly wet, bog-like conditions.',
      pesticides: 'Few pests in its native habitat.',
      seeding: ['Dioecious (male and female plants are separate), so both are needed for fruit.', 'Propagation is difficult and rarely attempted in home gardens. Best foraged in the wild.'],
      harvesting: 'Harvest in mid- to late summer when the berries turn from red to a golden-yellow color and are soft.'
    }
  },
  {
    id: 'huckleberry',
    name: 'Huckleberry',
    scientificName: 'Vaccinium membranaceum',
    category: 'Fruit',
    subCategory: 'Berry',
    origin: 'North America',
    image: 'https://images.unsplash.com/photo-1498557850523-2337fb7b2a6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    overview: 'A name for several plant species in the family Ericaceae, all of which produce small, round, edible berries. They are a relative of blueberries but are typically more tart.',
    cultivation: {
      season: 'Plant in spring. Harvest in late summer to fall.',
      soil: 'Requires acidic, well-drained soil, similar to blueberries. pH 4.3-5.2.',
      temperature: 'Native to mountain regions, they prefer cool climates and are very cold-hardy.',
      watering: 'Needs consistent moisture but good drainage.',
      pesticides: 'Generally hardy. Birds and bears are the main competition for the fruit.',
      seeding: ['Difficult to cultivate and often foraged from the wild.', 'Requires soil with high organic matter. Best to replicate its native forest floor conditions.'],
      harvesting: 'Harvest when berries are dark purple-black and plump. The flavor is often best after a light frost.'
    }
  }
];

const categories = [
  { id: 'all', name: 'All', icon: 'leaf' },
  { id: 'vegetable', name: 'Vegetables', icon: 'carrot' },
  { id: 'fruit', name: 'Fruits', icon: 'apple' },
  { id: 'herb', name: 'Herbs', icon: 'sprout' },
  { id: 'fungi', name: 'Fungi', icon: 'flower' },
];

const vegetableSubCategories = [
    { id: 'all', name: 'All Vegetables' },
    { id: 'leafy-green', name: 'Leafy Greens' },
    { id: 'root-vegetable', name: 'Root Vegetables' },
    { id: 'fruit-vegetable', name: 'Fruit Vegetables' },
    { id: 'bulb-stem', name: 'Bulb & Stem' },
    { id: 'tuber', name: 'Tubers' },
    { id: 'cruciferous', name: 'Cruciferous' },
    { id: 'legume', name: 'Legumes' },
];

const fruitSubCategories = [
    { id: 'all', name: 'All Fruits' },
    { id: 'citrus-fruit', name: 'Citrus Fruits' },
    { id: 'pome-fruit', name: 'Pome Fruits' },
    { id: 'stone-fruit', name: 'Stone Fruits' },
    { id: 'berry', name: 'Berries' },
];

const iconsMap = {
  season: 'calendar',
  soil: 'shovel',
  temperature: 'thermometer',
  watering: 'droplets',
  pesticides: 'bug'
};

const renderHomePage = () => {
  app.innerHTML = `
    <div id="home-view" class="flex flex-col min-h-screen">
      <header class="bg-white/80 backdrop-blur-lg border-b border-slate-200 sticky top-0 z-40">
        <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <a href="#" class="flex items-center space-x-2">
              <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white">
                <i data-lucide="leaf"></i>
              </div>
              <span class="font-bold text-xl text-slate-800">Digital Flora</span>
            </a>
          </div>
        </nav>
      </header>

      <main class="flex-grow">
        <section class="py-20 md:py-28 text-center animate-fade-in">
          <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 class="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
              The Ultimate <span class="text-green-600">Plant & Gardening</span> Encyclopedia
            </h1>
            <p class="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              Explore our comprehensive guide to cultivation. Everything you need to know, from seed to harvest.
            </p>
            <div class="mt-10 max-w-xl mx-auto">
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <i data-lucide="search" class="w-5 h-5 text-slate-400"></i>
                </div>
                <input 
                  type="search" 
                  id="search-plant" 
                  placeholder="Search for a plant (e.g., 'Tomato')"
                  class="w-full pl-12 pr-4 py-4 text-base bg-white border-2 border-slate-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all outline-none"
                >
              </div>
            </div>
          </div>
        </section>

        <section id="plants" class="py-16 bg-slate-200/40 animate-slide-up" style="animation-delay: 0.2s;">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-center mb-6">
              <div id="filters-container" class="flex space-x-2 bg-slate-200 p-1.5 rounded-xl overflow-x-auto">
                <!-- Filters will be injected here -->
              </div>
            </div>
            <div id="sub-filters-container" class="flex justify-center mb-10 flex-wrap gap-2 px-4">
                <!-- Sub-filters will be injected here -->
            </div>
            <div id="plants-grid" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <!-- Plant cards will be injected here -->
            </div>
          </div>
        </section>
      </main>

      <footer class="bg-slate-800 text-slate-400 py-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
          <p>&copy; 2025 Digital Flora. All Rights Reserved. Built by Dualite Alpha.</p>
        </div>
      </footer>
    </div>
  `;
  createIcons({ icons: { Leaf, Search } });
  setupHomeEventListeners();
  renderFilters('all');
  renderSubFilters('all', 'all');
  renderPlants();
};

const renderDetailPage = (plantId) => {
  const plant = plantsData.find(p => p.id === plantId);
  if (!plant) {
    renderHomePage(); // Or a 404 page
    return;
  }

  const cultivationDetails = Object.entries(plant.cultivation)
    .filter(([key]) => key !== 'seeding' && key !== 'harvesting')
    .map(([key, value]) => `
      <div class="flex items-start space-x-4">
        <div class="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
          <i data-lucide="${iconsMap[key] || 'leaf'}" class="w-5 h-5 text-green-700"></i>
        </div>
        <div>
          <h4 class="font-semibold text-slate-700 capitalize">${key}</h4>
          <p class="text-slate-600 text-sm">${value}</p>
        </div>
      </div>
    `).join('');

  const seedingSteps = plant.cultivation.seeding.map(step => `
    <li class="flex items-start">
      <span class="h-6 w-6 flex items-center justify-center rounded-full bg-green-100 text-green-700 font-bold text-xs mr-3 mt-1 flex-shrink-0">✔</span>
      <span class="text-slate-600 text-sm">${step}</span>
    </li>
  `).join('');

  app.innerHTML = `
    <div id="detail-view" class="animate-fade-in">
      <header class="bg-white/80 backdrop-blur-lg border-b border-slate-200 sticky top-0 z-40">
        <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center h-16">
            <button id="back-btn" class="flex items-center space-x-2 text-slate-600 hover:text-green-600 transition-colors">
              <i data-lucide="arrow-left"></i>
              <span class="font-semibold">Back to all plants</span>
            </button>
          </div>
        </nav>
      </header>

      <main class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <!-- Plant Header -->
        <div class="md:flex md:items-center md:space-x-8 mb-12">
          <div class="md:w-1/3 mb-6 md:mb-0">
            <img src="${plant.image}" alt="${plant.name}" class="w-full h-auto rounded-2xl shadow-lg object-cover aspect-square">
          </div>
          <div class="md:w-2/3">
            <span class="text-sm font-bold uppercase text-green-600">${plant.category} ${plant.subCategory ? `• ${plant.subCategory}` : ''}</span>
            <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 mt-2">${plant.name}</h1>
            <p class="text-lg text-slate-500 italic mt-1">${plant.scientificName}</p>
            <p class="mt-4 text-slate-700">${plant.overview}</p>
            <p class="mt-4 text-sm text-slate-500"><strong>Origin:</strong> ${plant.origin}</p>
          </div>
        </div>
        
        <!-- Cultivation Details -->
        <div class="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm">
          <h2 class="text-2xl font-bold text-slate-800 mb-6">Cultivation Guide</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-8">
            ${cultivationDetails}
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 border-t border-slate-200 pt-8">
            <div>
              <h3 class="text-xl font-bold text-slate-800 mb-4 flex items-center">
                <i data-lucide="sprout" class="w-5 h-5 mr-2 text-green-600"></i>
                Seeding & Planting
              </h3>
              <ul class="space-y-3">
                ${seedingSteps}
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-bold text-slate-800 mb-4 flex items-center">
                <i data-lucide="calendar" class="w-5 h-5 mr-2 text-green-600"></i>
                Harvesting
              </h3>
              <p class="text-slate-600 text-sm">${plant.cultivation.harvesting}</p>
            </div>
          </div>
        </div>
      </main>

      <footer class="bg-slate-800 text-slate-400 py-8 mt-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
          <p>&copy; 2025 Digital Flora. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  `;
  createIcons({ icons: { ArrowLeft, Thermometer, Droplets, Bug, Shovel, Sprout, Calendar, Leaf, Flower } });
  document.getElementById('back-btn').addEventListener('click', () => {
    window.location.hash = '';
    handleRoute();
  });
};

const renderPlants = (filter = '', category = 'all', subCategory = 'all') => {
  const grid = document.getElementById('plants-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const lowerCaseFilter = filter.toLowerCase();

  const filteredPlants = plantsData.filter(plant => {
    const inCategory = category === 'all' || plant.category.toLowerCase() === category;
    
    let inSubCategory = true;
    if (category.toLowerCase() === 'vegetable' && subCategory !== 'all') {
        inSubCategory = plant.subCategory && plant.subCategory.toLowerCase().replace(/\s/g, '-') === subCategory.toLowerCase();
    } else if (category.toLowerCase() === 'fruit' && subCategory !== 'all') {
        inSubCategory = plant.subCategory && plant.subCategory.toLowerCase().replace(/\s/g, '-') === subCategory.toLowerCase();
    }

    const matchesSearch = plant.name.toLowerCase().includes(lowerCaseFilter) || plant.scientificName.toLowerCase().includes(lowerCaseFilter);
    
    return inCategory && inSubCategory && matchesSearch;
  });

  if (filteredPlants.length === 0) {
    grid.innerHTML = `<p class="text-slate-500 col-span-full text-center">No plants found. Try a different search or category.</p>`;
    return;
  }

  filteredPlants.forEach(plant => {
    const card = document.createElement('a');
    card.href = `#plant/${plant.id}`;
    card.className = 'plant-card group';
    card.innerHTML = `
      <div class="relative">
        <img src="${plant.image}" alt="${plant.name}" class="w-full h-48 object-cover rounded-t-2xl">
        <div class="absolute top-3 right-3 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold text-slate-700">${plant.subCategory || plant.category}</div>
      </div>
      <div class="p-5">
        <h3 class="font-bold text-lg text-slate-800 mb-1 group-hover:text-green-600 transition-colors">${plant.name}</h3>
        <p class="text-slate-500 text-sm italic">${plant.scientificName}</p>
      </div>
    `;
    grid.appendChild(card);
  });
};

const renderFilters = (activeCategory) => {
  const container = document.getElementById('filters-container');
  if (!container) return;
  container.innerHTML = '';
  categories.forEach(cat => {
    const button = document.createElement('button');
    button.className = `tab-btn flex items-center space-x-2 ${cat.id === activeCategory ? 'active' : ''}`;
    button.dataset.category = cat.id;
    button.innerHTML = `
      <i data-lucide="${cat.icon}" class="w-4 h-4"></i>
      <span>${cat.name}</span>
    `;
    container.appendChild(button);
  });
  createIcons({ icons: { Leaf, Carrot, Sprout, Apple, Flower } });
};

const renderSubFilters = (category, activeSubCategory) => {
    const container = document.getElementById('sub-filters-container');
    if (!container) return;
    container.innerHTML = '';

    let subCategoriesToShow = [];
    if (category.toLowerCase() === 'vegetable') {
        subCategoriesToShow = vegetableSubCategories;
    } else if (category.toLowerCase() === 'fruit') {
        subCategoriesToShow = fruitSubCategories;
    } else {
        return;
    }
    
    subCategoriesToShow.forEach(subCat => {
        const button = document.createElement('button');
        button.className = `px-3 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 ${subCat.id.toLowerCase() === activeSubCategory.toLowerCase() ? 'bg-emerald-600 text-white' : 'bg-white text-slate-600 hover:bg-emerald-100 border border-slate-200'}`;
        button.dataset.subcategory = subCat.id.replace(/\s/g, '-');
        button.textContent = subCat.name;
        container.appendChild(button);
    });
};

const setupHomeEventListeners = () => {
  const searchInput = document.getElementById('search-plant');
  const filtersContainer = document.getElementById('filters-container');
  const subFiltersContainer = document.getElementById('sub-filters-container');

  let activeCategory = 'all';
  let activeSubCategory = 'all';

  searchInput.addEventListener('input', (e) => {
    renderPlants(e.target.value, activeCategory, activeSubCategory);
  });

  filtersContainer.addEventListener('click', (e) => {
    const button = e.target.closest('button');
    if (button && button.dataset.category) {
      activeCategory = button.dataset.category;
      activeSubCategory = 'all';
      renderFilters(activeCategory);
      renderSubFilters(activeCategory, activeSubCategory);
      renderPlants(searchInput.value, activeCategory, activeSubCategory);
    }
  });

  subFiltersContainer.addEventListener('click', (e) => {
    const button = e.target.closest('button');
    if (button && button.dataset.subcategory) {
        activeSubCategory = button.dataset.subcategory;
        renderSubFilters(activeCategory, activeSubCategory);
        renderPlants(searchInput.value, activeCategory, activeSubCategory);
    }
  });

  document.getElementById('plants-grid').addEventListener('click', (e) => {
    const card = e.target.closest('a.plant-card');
    if (card) {
      e.preventDefault();
      window.location.hash = card.getAttribute('href');
      handleRoute();
    }
  });
};

const handleRoute = () => {
  const hash = window.location.hash;
  if (hash.startsWith('#plant/')) {
    const plantId = hash.substring(7);
    renderDetailPage(plantId);
  } else {
    renderHomePage();
  }
};

window.addEventListener('hashchange', handleRoute);

// Initial Load
handleRoute();
