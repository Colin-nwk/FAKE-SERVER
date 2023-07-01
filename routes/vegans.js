import { Router } from "express";

//import { readFile } from "fs/promises";

const router = Router();
// let items = [];

// async function loadItems() {
//   try {
//     const data = await readFile("./data/vegans.json", "utf8");
//     items = JSON.parse(data);
//     console.log("Data loaded successfully");
//   } catch (error) {
//     console.error("Error reading or parsing JSON:", error);
//     throw new Error("Failed to load items");
//   }
// }

const items =[
  {
    id: '1',
    title: 'Dark chocolate bark with sea salt, rosemary, pistachios and candied citrus',
    difficulty: 'Easy',
    portion: 'Makes 6 generous shards',
    time: 'Hands-on time 15 min, plus cooling',
    description: 'Close your eyes and feel the Mediterranean sun beating down on you as you take a bite out of vegan dark chocolate bark studded with pistachios, rosemary-flavoured salt and little bursts of candied peel.',
    ingredients: [
      '200g dark chocolate',
      '1 tsp flaky sea salt',
      '2 rosemary sprigs',
      'Handful shelled pistachios',
      '2 tbsp mixed peel or candied lemon, chopped'
    ],
    method: [
      {
        'Step 1': 'Bring a small pan of water to a simmer and put a heatproof bowl on top (ensuring the base of the bowl doesn’t touch the water). Finely chop the chocolate and add it to the bowl, then wait 5-10 minutes until it’s completely melted.'
      },
      {
        'Step 2': 'Meanwhile, line a small baking dish or container (which will dictate the shape and size of your bark) with baking paper. Put the salt in a spice grinder or pestle and mortar, then finely chop the leaves from 1 of the rosemary sprigs. Grind the chopped leaves with the salt.'
      },
      {
        'Step 3': 'Pour the melted chocolate into the lined dish or container, tilting it so the chocolate runs into each corner equally. Put the remaining rosemary sprig on top, then scatter the pistachios, rosemary salt and mixed peel all over the top.'
      },
      {
        'Step 4': 'Leave to cool for 10 minutes, then cover and put in the fridge for 2 hours to set completely. Break into shards and keep in an airtight container for up to a week.'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/1.jpg'
  },
  {
    id: '2',
    title: 'Pressure cooker refried beans',
    difficulty: 'Easy',
    portion: 'Serves 4-8 as a side',
    time: 'Hands-on time 15 min. Simmering time 30 min',
    description: 'Using dried instead of tinned beans is cheaper and offers up more flavour, but most of us don’t bother due to the time it takes. A pressure cooker is the solution – better for your time, wallet and for the environment. These refried beans beat anything you can buy and are the perfect introduction to pressure  cooking and dried pulses (a match made in heaven).',
    ingredients: [
      '500g dried pinto beans',
      '1 tsp dried oregano',
      '1 tsp ground cumin',
      '1 tsp fine sea salt',
      '2 tbsp olive oil or lard',
      '1 large onion, finely chopped',
      '1 jalapeno, finely chopped',
      '3 garlic cloves, chopped',
      'Diced tomatoes, pickled jalapenos and fresh coriander to serve',
      'Pressure cooker'
    ],
    method: [
      {
        'Step 1': 'inse the beans then put them in the pressure cooker with 1.6 litres water. Stir in the oregano, cumin and salt. Add the lid and bring to high pressure then cook for 30 minutes. Allow the steam to release naturally then open and check if they’re done (they should be very tender). Return to high pressure and cook for another 5-10 minutes if needed.'
      },
      {
        'Step 2': 'Once the beans are cooked, drain them, reserving the cooking water in a jug. Return the pressure cooker to a medium heat (or set to the sauté function if electric), add the oil or lard then cook the onion, jalapeno and garlic with a pinch of salt for about 5 minutes, until softened. Stir in the drained beans then cook for a few minutes, adding a little of their cooking water while mashing with a potato masher until you reach the desired consistency (if you prefer them smoother you can whizz with a hand blender then continue cooking). Season to taste then serve topped with tomatoes, pickled jalapenos and coriander.'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/2.jpg'
  },
  {
    id: '3',
    title: 'Beetroot, spinach and coconut curry',
    difficulty: 'Easy',
    portion: 'Serves 4',
    time: 'Hands-on time 15 min. Simmering time 20 min',
    description: 'Healthy, fresh tasting and with a rich finish thanks to coconut milk, this is an easy curry to knock together on a busy weeknight. The tamarind and lime cut through the creaminess to create flavour harmony.',
    ingredients: [
      '2 tbsp vegetable oil',
      '1 onion, finely sliced',
      '1 green chilli, finely sliced',
      '2 tbsp ginger garlic paste',
      '2 tbsp mild curry powder',
      '1 tsp ground turmeric',
      '½ tsp ground coriander',
      '500g plum tomatoes, chopped',
      '250g cooked beetroot, chopped',
      '400ml tin coconut milk',
      '1 tbsp tamarind paste',
      '100g baby spinach',
      'Handful coriander leaves, chopped',
      '1 lime, cut into wedges, to serve (optional)',
      'Flatbreads or rice to serve'
    ],
    method: [
      {
        'Step 1': 'Heat the oil in a large saucepan over a low-medium heat. Tip in the onion and chilli and cook slowly for 10-12 minutes, stirring occasionally, until soft. Add the ginger garlic paste and dried spices and cook for a few more minutes, stirring often.'
      },
      {
        'Step 2': 'Add the tomatoes and cook for 2 minutes, then add the cooked beetroot and coconut milk and simmer for 15 minutes. Stir in the tamarind, spinach and half of the chopped coriander and simmer for a final 5 minutes.'
      },
      {
        'Step 3': 'Divide among bowls and sprinkle over the remaining coriander. Serve with wedges of lime on the side (if using) and rice or flatbreads.'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/3.jpg'
  },
  {
    id: '4',
    title: 'Traditional pretzels',
    difficulty: 'Easy',
    portion: 'Makes 13',
    time: 'Hands-on time 40 min, plus 1 hour resting. Oven time 10-12 min',
    description: 'Learn to make classic twisted pretzels with this authentic recipe from food writer and historian Regula Ysewijn. They’re easier to make than you’d think!',
    ingredients: [
      '270g strong white bread flour, plus extra to dust',
      '2 tbsp rapeseed or olive oil',
      '1 tsp caster sugar',
      '1 tsp instant dry yeast',
      '180ml water',
      '½ tsp salt'
    ],
    method: [
      {
        'Step 1': 'Mix the flour, oil, sugar and yeast in a large bowl or the bowl of a stand mixer fitted with a dough hook. Pour in 90ml water and start kneading. When completely absorbed, pour in another 90ml water and knead for 5 minutes. Set aside to rest for 5 minutes'
      },
      {
        'Step 2': 'Add the salt and knead for 10 minutes until it has come together in a smooth and elastic dough that is neither too dry nor terribly wet. Cover the dough and set aside for 1 hour until it has doubled in size.'
      },
      {
        'Step 3': 'the end of the resting time, line 2-3 baking trays with baking paper and heat the oven to 210°C fan/gas 8.'
      },
      {
        'Step 4': 'Knock the air out of the dough and divide it into 13 equal pieces. Have a small bowl of water handy. Take a piece of dough in your hand and stretch, then moisten your hands with a little water and roll the dough into a 60cm strand that is just under 1cm wide.'
      },
      {
        'Step 5': 'Sprinkle each lined tray with some flour to prevent the dough from sticking. Shape the strand into a pretzel straight onto the tray by twisting the ends of the strand together once or twice, depending on your preference. Moisten your index finger and thumb and stick the twisted ends onto the middle of the loop. You can correct the shape if needed once the krakeling is on the tray.'
      },
      {
        'Step 6': 'Bake the pretzels for 10-12 minutes until they have a golden blush, then transfer to a wire rack to cool. Keep in an airtight container.'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/4.jpg'
  },
  {
    id: '5',
    title: 'Homemade crispy chilli oil',
    difficulty: 'Easy',
    portion: 'Makes 250ml',
    time: 'Hands-on time 30 min, plus overnight infusing ',
    description: 'This is a full-flavoured, in-your-face crispy chilli oil, with plenty of fire, spice and floral numbness from the Sichuan peppercorns. Use it as a base recipe to then tweak, amend and experiment with until you’ve found your perfect combination.',
    ingredients: [
      '250g vegetable or sunflower oil',
      '2 slices fresh ginger',
      '3 banana shallots, finely sliced',
      '5 garlic cloves, finely sliced',
      '3 tbsp Sichuan peppercorns',
      '3 star anise',
      '1 cinnamon stick',
      '1 tsp fennel seeds',
      '50g gochugaru (Korean red pepper flakes)',
      '25g chilli flakes, or crushed dried chillies',
      '½ tbsp sweet paprika',
      '2 dried bay leaves',
      '2 tsp salt',
      '1 tsp caster sugar',
      'Thermometer',
      'Sterilised jar'
    ],
    method: [
      {
        'Step 1': 'Pour the oil into a saucepan with a spout. Add the ginger, shallots and garlic, then place over a medium heat and gradually bring to 160°C. Meanwhile, put the Sichuan peppercorns, star anise, cinnamon stick and fennel seeds in a dry frying pan and toast over a medium heat for a few minutes until fragrant. Crush the peppercorns and fennel seeds in a pestle and mortar.'
      },
      {
        'Step 2': 'Mix the toasted spices with the remaining ingredients in a heatproof container that holds at least a litre, as the oil will bubble up a lot when you pour it in. Mould the mixture into a pyramid, then make an indent in the tip – this is what you’ll pour your oil into.'
      },
      {
        'Step 3': 'As the oil heats up, the ginger, shallots and garlic will sizzle and begin to colour. As soon as they turn golden, remove them with a slotted spoon. Discard the ginger and leave the shallots and garlic to crisp up as they cool.'
      },
      {
        'Step 4': 'Once the oil is up to temperature, very carefully pour around a quarter of it into the chilli mixture – it will instantly bubble up and produce a lot of steam. Give everything a good mix, then continue to pour the oil slowly, until the bowl or jar is filled. Leave to cool for 10 minutes, add the fried garlic and shallots, then transfer to a sterilised jar. Seal and leave to infuse at room temperature overnight.'
      },
      {
        'Step 5': 'The next day, carefully remove and discard the star anise, cinnamon and bay leaves. Keep the chilli oil in the fridge for up to a month.'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/5.jpg'
  },
  {
    id: '6',
    title: 'Ultimate vegan lasagne',
    difficulty: 'Easy',
    portion: 'Serves 8',
    time: 'Hands-on time 45 min. Oven time 45 min',
    description: 'Lasagne is usually a celebration of all things meaty and creamy, with a rich ragù and creamy bechamel layered between silky pasta sheets. With just a few swaps, however, it becomes a wonderful vegan dish thrumming with Italian flavour.',
    ingredients: [
      '1 large red onion',
      '2 celery sticks',
      '2 carrots, peeled',
      '1 medium fennel bulb',
      '1 tbsp olive oil',
      '2 bay leaves',
      '3 garlic cloves, finely chopped',
      '250ml vegan red wine',
      '3 tbsp tomato purée',
      '1 tbsp balsamic vinegar',
      '1 tsp sugar',
      '400g tin chopped tomatoes',
      '500g passata',
      '350ml vegetable stock',
      '450g frozen or fresh meat-free mince',
      'Bunch basil, roughly chopped, with a few leaves reserved to garnish',
      '500g pack dried egg-free lasagne sheets',
      '4 tbsp plain flour',
      '5 tbsp vegan spread',
      '675ml unsweetened soya, almond or oat milk',
      '1 heaped tsp dijon mustard',
      'Pinch freshly grated nutmeg',
      '2 tbsp nutritional yeast flakes',
      '60g vegan parmesan alternative (we used Violife Prosociano), finely grated',
      '33cm x 22cm lasagne dish'
    ],
    method: [
      {
        'Step 1': 'Using a food processor, whizz the onion, celery, carrots and fennel until finely chopped but not puréed – you may need to do this in a couple of batches and scrape down the sides as needed. Heat the oil in a large deep saucepan, add the chopped vegetables with the bay leaves and garlic, then cover and cook over a medium heat for 5-6 minutes until softened. Remove the lid and cook for a few more minutes, stirring regularly, to allow some of the liquid to evaporate.'
      },
      {
        'Step 2': 'Pour in the red wine, tomato purée, balsamic vinegar and sugar, then bring to a simmer and cook for 2-3 minutes until reduced by at least half before adding the tomatoes, passata, stock and mince. Season with lots of black pepper and simmer for 15-20 minutes until the sauce is thickened. Remove from the heat and stir in the chopped basil.'
      },
      {
        'Step 3': 'Meanwhile, make the white sauce by whisking together the flour and spread in a medium saucepan over a medium heat. Whisk in the milk bit by bit, then continue to cook and whisk until thickened and smooth (about 4 minutes). Remove from the heat, season with a pinch of salt and pepper, then stir in the dijon, nutmeg, yeast flakes and cheese alternative, reserving a handful of the cheese for the top.'
      },
      {
        'Step 4': 'Spread around a quarter of the tomato sauce across the base of the lasagne dish, then top with a layer of lasagne sheets, breaking any pieces to fit, then repeat with another layer of sauce and pasta. For the third layer, spread another portion of the tomato sauce, followed by half of the white sauce. Top with pasta, then create a final layer of tomato sauce. Top with a final layer of pasta, then pour over the remaining white sauce. Scatter with the reserved cheese alternative and basil leaves.'
      },
      {
        'Step 5': 'Bake for 45-50 minutes or until a knife easily sinks through the layers in the middle of the lasagne. Leave to rest for at least 10 minutes before serving (lasagne always tastes better warm rather than hot).'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/6.jpg'
  },
  {
    id: '7',
    title: 'Vegan Victoria sponge cake',
    difficulty: 'Easy',
    portion: 'Serves 14-16',
    time: 'Hands-on time 25 min. Oven time 30 min',
    description: 'Light, springy and seriously moreish, this vegan Victoria sponge is packed with fresh lemon flavour, vegan buttercream and raspberry jam.',
    ingredients: [
      '100ml sunflower oil, plus extra to grease',
      '100g ready-made apple purée (we used Clearspring)',
      '200ml unsweetened soy milk',
      'Finely grated zest 1 lemon, plus 1 tbsp juice',
      '175g caster sugar',
      '300g self-raising flour',
      '¾ tsp baking powder',
      '10g freeze-dried raspberry pieces',
      '70g plant butter (we used Flora)',
      'Finely grated zest 1 lemon, plus 1 tbsp juice',
      '140g icing sugar, sifted, plus extra to dust',
      '4 tbsp raspberry jam',
      '2 x 20cm loose bottomed cake tins'
    ],
    method: [
      {
        'Step 1': 'Heat the oven to 160°C fan/gas 4. Grease and line the cake tins with oil and baking paper. In a jug, whisk together the apple purée, soy milk, lemon zest and juice and oil. Set aside for 5 minutes.'
      },
      {
        'Step 2': 'In a separate bowl, sift together the sugar, flour, a pinch of salt and baking powder, then add the raspberry pieces, saving some to garnish. Pour in the milk mixture and stir until smooth, then divide the mixture between the cake tins and smooth the surface. Bake for 25-30 minutes until golden and springy, then transfer to a wire rack to cool completely.'
      },
      {
        'Step 3': 'To make the filling, beat the butter with the lemon zest and juice until creamy, then add the icing sugar and continue to beat until pale and fluffy.'
      },
      {
        'Step 4': 'To assemble, put one of the cakes upside-down on a serving platter, so the flattest side is facing the platter. Spread the top of it with the buttercream, then top with jam. Put the second cake on top (with the flattest side facing up) and dust with icing sugar. Decorate with the reserved raspberry pieces.'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/7.jpg'
  },
  {
    id: '8',
    title: 'Vegan quiche',
    difficulty: 'Easy',
    portion: 'Serves 6-8',
    time: 'Hands-on time 35 min. Oven time 1 hour 15 min',
    description: 'Vegan quiche? Yes, it’s possible – and very tasty, too. Tofu takes centre stage, creating the same set custard texture as traditional eggs, with plenty of umami-rich mushrooms, garlic, tahini and vegan cheese ensuring the flavour is on point.',
    ingredients: [
      '1 tbsp olive oil, plus extra to grease',
      '250g plain flour, plus extra to dust',
      '125g salted plant butter (we used Flora salted plant butter), cubed',
      '150g mixed mushrooms, cut into bite-size chunks',
      '1 tbsp fresh thyme leaves',
      '280g pack extra-firm tofu (we used Tofoo), drained and roughly chopped',
      '150ml single soy cream alternative (we used Alpro)',
      '75ml unsweetened soy, almond or oat milk',
      '2 tsp roasted garlic purée',
      'Pinch ground turmeric',
      '4 tbsp instant mashed potato flakes (check they are dairy free)',
      '2 tbsp tahini paste',
      '100g smoked vegan cheese alterative, coarsely grated',
      'Large handful baby leaf spinach',
      '3 spring onions, white parts only, sliced',
      '23cm loose-bottomed deep tart tin'
    ],
    method: [
      {
        'Step 1': 'Heat the oven to 170°C fan/gas 5 and lightly oil the tart tin. Put the flour and plant butter in a food processor and pulse until it forms a breadcrumb-like texture. Add 4 tbsp cold water and pulse again until it forms a firm dough (you may need to add a little more water, 1 tsp at a time). Bring together into a ball.'
      },
      {
        'Step 2': 'Lightly flour your work surface and roll out the dough into a disc about 30cm in diameter. Brush off any excess flour then press into the greased tin. Using a pair of scissors, trim the excess pastry, leaving about 5mm of overhang, then press this over the edge of the tin. Use a fork to prick the pastry base all over, then line with a sheet of baking paper and fill with baking beans (or uncooked rice). Bake for 25 minutes, then remove from the oven and remove the paper and baking beans. Return to the oven for 15 minutes until the pastry is a light golden and feels sandy to the touch.'
      },
      {
        'Step 3': 'Meanwhile, heat the oil in a large frying pan over a medium-high heat, then add the mushrooms and thyme with a pinch of salt. Cook for 5-6 minutes, stirring often until deep golden. Remove from the heat.'
      },
      {
        'Step 4': 'In the food processor (there’s no need to clean it after making the pastry), whizz the tofu, soy cream, milk, garlic purée and turmeric until smooth. Season with lots of pepper, then add the potato flakes, tahini and two thirds of the cheese. Whizz until well combined.'
      },
      {
        'Step 5': 'Mix together the tofu purée with the baby spinach and half the mushrooms. Spoon into the pastry case, smoothing the top. Add the reserved cheese, spring onions and remaining mushrooms. Press them lightly into the filling. Bake for 35-40 minutes until the filling is golden and just set. Remove from the oven and leave to cool before serving.'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/8.jpg'
  },
  {
    id: '9',
    title: 'Vegan chocolate brownies',
    difficulty: 'Easy',
    portion: 'Makes 16',
    time: 'Hands-on time 20 min, plus cooling. Oven time 30 min',
    description: 'Traditional brownies rely on eggs to help them rise and create that gooey, fudgy texture – but plant-based superstar chia does the job just as well. Give these vegan brownies a try and see why they’re one of our favourite plant-based bakes.',
    ingredients: [
      '325ml unsweetened soy, almond or oat milk',
      '1 tsp instant coffee powder',
      '1 tbsp ground chia seeds',
      '2 tsp vanilla extract',
      '1 tsp lemon juice',
      '150g vegan dark chocolate, around 70% cocoa solids',
      '5 tbsp olive oil',
      '160g self-raising flour',
      '35g cocoa powder',
      '½ tsp bicarbonate of soda',
      '175g caster sugar',
      'Icing sugar to dust',
      '20cm x 20cm square baking tin'
    ],
    method: [
      {
        'Step 1': 'Heat the oven to 160°C fan/gas 4 and line the tin with baking paper. In a jug, which together the soy milk, coffee, chia, vanilla and lemon juice. Set aside for 10 minutes.'
      },
      {
        'Step 2': 'Put the chocolate and oil in a heatproof bowl set over a pan of simmering water (ensure the base of the bowl doesn’t touch the water). Heat until melted, stirring occasionally, then set aside.'
      },
      {
        'Step 3': 'Sift the flour, cocoa powder, bicarbonate of soda and caster sugar together in a large bowl. Pour in the milk mixture and melted chocolate with a pinch of salt, then stir well until combined and pour into the lined tin.'
      },
      {
        'Step 4': 'Bake for 30-35 minutes until the brownies have set but still have a wobble in the middle. Allow to cool completely in the tin for at least an hour, or ideally overnight. Cut into squares and serve with a dusting of icing sugar.'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/9.jpg'
  },
  {
    id: '10',
    title: 'Vegan blueberry pancakes',
    difficulty: 'Easy',
    portion: 'Serves 2',
    time: 'Hands-on time 25 min',
    description: 'A breakfast worth getting up for, these plant-based pancakes are light, fluffy and speckled with tangy blueberry flavour.',
    ingredients: [
      '125g self-raising flour',
      '½ tsp bicarbonate of soda',
      '2 tbsp caster sugar',
      '150ml unsweetened soy, almond or oat milk',
      '½ tsp ground cinnamon',
      '½ tsp vanilla extract',
      '40g dried blueberries, chopped',
      '40g pecans, chopped, see Tips',
      '1½ tbsp sunflower oil',
      'Maple syrup, vegan yogurt, extra pecans and/or fresh blueberries to serve'
    ],
    method: [
      {
        'Step 1': 'Sift the flour, bicarbonate of soda and sugar into a mixing bowl. Add the rest of the ingredients (except the oil and toppings) and mix thoroughly.'
      },
      {
        'Step 2': 'Heat a large nonstick frying pan over a medium heat and add about ½ tbsp oil. Put dollops of the batter into the pan (about 2 tbsp at a time), spacing them at least 5cm apart.'
      },
      {
        'Step 3': 'Cook for 1 minute, until little bubbles appear on the surface, then use a spatula to flip them over and cook for a further minute until golden and the centres have puffed up a little. Continue cooking in batches until you’ve used all the oil and batter. Serve scattered and drizzled with the toppings.'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/10.jpg'
  },
  {
    id: '11',
    title: 'Vegan sausage casserole',
    difficulty: 'Easy',
    portion: 'Serves 4',
    time: 'Hands-on time 1 hour',
    description: 'A one-pot beauty full of earthy root veg, creamy beans and the unmistakably wintry flavour of chestnuts, this vegan sausage casserole proves you don’t need meat to create something hearty, warming and seriously tasty.',
    ingredients: [
      '2 tbsp sunflower oil',
      '8-12 vegan sausages',
      '1 large onion, roughly chopped',
      '3 large carrots, peeled and cut into 3cm chunks',
      '1 small (500g) swede or celeriac, peeled and cut into 2cm chunks',
      '3 celery sticks, thickly sliced, plus any celery leaves to garnish',
      '2 parsnips, peeled and cut into 2cm chunks',
      '2 bay leaves',
      '1½ tbsp chopped fresh herbs such as thyme, rosemary and/or sage',
      '1 tbsp tomato purée',
      '175ml vegan red wine',
      '1 tbsp wholegrain mustard',
      'Pinch freshly grated nutmeg',
      '1 vegetable stock cube',
      '400g tin butterbeans, rinsed and drained',
      '150g vacuum-packed cooked chestnuts'
    ],
    method: [
      {
        'Step 1': 'Heat half the oil in a large casserole pan over a medium heat. Add the sausages and cook for 8-10 minutes until nicely browned all over. Set aside.'
      },
      {
        'Step 2': 'Add the remaining oil to the pan with the onion. Cook for 5 minutes until beginning to soften then add the remaining veg and cook, covered, for 10 minutes, stirring occasionally. Stir in the bay leaves, chopped herbs and tomato purée and cook for another minute.'
      },
      {
        'Step 3': 'Pour in the wine, bring to the boil and simmer for a few minutes to reduce. Season with lots of pepper, the mustard and a grating of nutmeg, then add the stock cube and pour in 500ml boiling water. Don’t worry if it doesn’t completely cover the veg. Pop the lid back on and allow to simmer gently for 15 minutes.'
      },
      {
        'Step 4': 'Stir in the butterbeans and chestnuts, then nestle the sausages on top. Cover and cook for a further 12-15 minutes until everything is tender and the parsnips have started to break down and thicken the sauce. Add a splash more hot water if it’s too thick. Stir through the celery leaves and serve.'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/11.jpg'
  },
  {
    id: '12',
    title: 'Air fryer potato wedges',
    difficulty: 'Easy',
    portion: 'Serves 2',
    time: 'Hands-on time 10 min, air frying time 20 min',
    description: 'Use your air fryer to create absolutely knockout potato wedges and roasties that are fluffy inside and super-crisp on the outside. These mini ones are lightly spiced, just begging to be dipped into mayo or ketchup. Great for a party.',
    ingredients: [
      '600g new potatoes',
      '2 tbsp rapeseed oil',
      '1 tbsp cornflour',
      '1 tsp sea salt',
      '1 tsp smoked paprika',
      '½ tsp garlic powder',
      '1 tsp freshly ground black pepper',
      'Ketchup, mayo or your dipping sauce of choice to serve'
    ],
    method: [
      {
        'Step 1': 'Quarter each potato lengthways, trying to keep each wedge an equal size (so any smaller potatoes might only need to be halved). Put the wedges in a bowl of cold water as you work, swishing the water around them to remove excess starch. Drain well and pat dry.'
      },
      {
        'Step 2': 'Mix the remaining ingredients together to make a loose paste, then spoon over the wedges. Give everything a toss to coat evenly, then set aside for 5 minutes.'
      },
      {
        'Step 3': 'Heat the air fryer to 200°C. Put the wedges in the air fryer basket, ideally in a single layer with room around each one for ultimate crispiness. Cook for 18-20 minutes, giving them a shake halfway. Serve with plenty of sauce for dipping.'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/12.jpg'
  },
  {
    id: '13',
    title: 'Potato, pineapple and cashew curry',
    difficulty: 'Easy',
    portion: 'Serves 4',
    time: 'Hands-on time 10 min. Simmering time 35 min',
    description: 'This vegan coconut curry is packed with filling potato and cashews. It’s sweet, sour and fragrant all at once. Serve as is, or with plain rice or flatbreads.',
    ingredients: [
      '1 red onion, coarsely grated',
      '1 tbsp tomato purée',
      '1½ tbsp finely grated garlic',
      '1½ tbsp finely grated ginger',
      '1 tsp chilli powder or more to taste',
      '½ tsp ground turmeric',
      '½ tsp ground cumin',
      '½ tsp ground coriander',
      'Pinch ground cloves',
      '2 tbsp sunflower oil',
      '1 cinnamon stick',
      '400ml tin coconut milk (at least 55% coconut extract)',
      '500ml vegetable stock',
      '3 bay leaves',
      '1 lemongrass stalk, halved and bashed',
      '1 tbsp tamarind paste',
      '2 tbsp smooth peanut butter',
      '1 tsp soft light brown sugar',
      '150g cashews',
      '400g new potatoes, cut into 3cm chunks',
      '250g fresh pineapple, cut into bite-size chunks',
      '3-4 tbsp roughly chopped coriander'
    ],
    method: [
      {
        'Step 1': 'In a medium bowl, mix together the onion, tomato purée, garlic, ginger and ground spices to create a coarse paste. Heat the oil in a deep saucepan over a medium heat. Once hot, add the paste and the cinnamon stick and cook, stirring regularly, for 3-4 minutes until noticeable drier and just starting to catch on the bottom of the pan.'
      },
      {
        'Step 2': 'Add the coconut milk, vegetable stock, bay leaves, lemongrass, tamarind paste, peanut butter, sugar, cashews and 2 tsp salt. Bring to a simmer and cook, bubbling gently, for 10 minutes until the liquid has reduced and thickened slightly.'
      },
      {
        'Step 3': 'Add the potatoes then bring back to a simmer and cook for 15-20 minutes, or until the potatoes are tender. Stir in the pineapple, allow to come back to a simmer and cook for 2 more minutes. Serve sprinkled with coriander.'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/13.jpg'
  },
  {
    id: '14',
    title: 'Cauliflower with olives, preserved lemons and giant couscous',
    difficulty: 'Easy',
    portion: 'Serves 4',
    time: 'Hands-on time 15 min. Oven time 45 min',
    description: 'This fragrant vegan one-pot with cauliflower and giant couscous nods to a Moroccan classic. Perfect served as is for a light lunch or supper.',
    ingredients: [
      '6 tbsp olive oil',
      '1 medium cauliflower, separated into small florets, rinsed in cold water and drained',
      '1 onion, finely sliced',
      '1 tbsp finely grated garlic',
      '1 small (50g) preserved lemon, pips discarded and finely chopped',
      '800ml vegetable stock, hot',
      '100g pitted green olives',
      '400g tin chickpeas, drained',
      '350g giant couscous',
      '3-4 tbsp chopped coriander',
      'Large pinch saffron',
      '1 tsp ground ginger',
      '½ tsp ground cumin',
      '½ tsp mild paprika',
      '¼-½ tsp cayenne pepper (depending on how spicy you like things)',
      '½ tsp ground turmeric'
    ],
    method: [
      {
        'Step 1': 'Heat the oven to 180°C fan/gas 6. To make the spice paste, mix the spices in a small bowl with 2 tbsp water and set aside.'
      },
      {
        'Step 2': 'Heat 4 tbsp of the oil in a wide, shallow lidded pan over a low heat. Add the rinsed cauliflower florets along with a sprinkle of salt and cook, with the lid on, for 10-12 minutes, occasionally turning the florets over until caramelised. Transfer to a bowl, leaving as much of the oil in the pan as possible.'
      },
      {
        'Step 3': 'Increase the heat to medium and add the remaining oil. Add the onion and a pinch of salt and cook for 7-10 minutes until very soft but not starting to colour. Add the grated garlic and cook for 2 minutes more, then add the spice paste and chopped preserved lemon and cook for another minute. Add the stock, olives and chickpeas along with 1½ tsp salt. Now add the couscous, mixing well to ensure it is distributed evenly.'
      },
      {
        'Step 4': 'Lay the browned cauliflower florets on top. Bring to a simmer, then cover with the lid and put in the oven for 20 minutes until the cauliflower is totally tender, the couscous puffed up and most of the stock is absorbed. Give everything a good mix around, then sprinkle over the fresh coriander and serve.'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/14.jpg'
  },
  {
    id: '15',
    title: 'Easy rhubarb cordial',
    difficulty: 'Easy',
    portion: 'Makes approx. 300ml (enough to serve 10)',
    time: 'Hands-on time 10 min, plus 2-3 days infusing. Simmering time 2 hours',
    description: 'This homemade rhubarb cordial highlights both the sweet and vegetal flavours of rhubarb. It’s a nice light, bright and spritzy drink that should go well with just about everything as it’s not too sweet. Follow our serving suggestion to make a simple rhubarb cocktail.',
    ingredients: [
      '500g rhubarb, cut into 1cm slices',
      '200g granulated sugar',
      '300ml non-alcoholic spirit (Roberta uses Feragaia) or gin to serve (optional)',
      'Soda water to serve',
      'Rhubarb ribbons to serve (optional)'
    ],
    method: [
      {
        'Step 1': 'Put 300g of the rhubarb in a container and freeze. Put the remaining rhubarb in a jar or container with the sugar and 100ml water, giving it a good stir, then cover and put in the fridge for 2-3 days – it’s a long time to wait, but this will allow the sugar to dissolve and the rhubarb’s colour and flavour to infuse into the liquid.'
      },
      {
        'Step 2': 'After 2-3 days, put the frozen rhubarb in a metal bowl. Cover tightly with foil, then set it over a pan of simmering water. Leave the rhubarb to defrost and then cook like this for 2 hours – the freezing process breaks down the cells in the rhubarb which then allows the juice to leach out of it once heated.'
      },
      {
        'Step 3': 'Strain the juice from the frozen and cooked rhubarb into a sterilised jar or bottle, then strain the syrupy liquid from the other rhubarb into it, mixing the two liquids together. Keep in the fridge for up to a week. To serve, mix 30ml of the rhubarb cordial with 30ml of non-alcoholic spirit or gin, then top with soda water. Garnish with a ribbon of rhubarb (if you like).'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/15.jpg'
  },
  {
    id: '16',
    title: 'Paul A Young’s vegan chocolate truffles',
    difficulty: 'Easy',
    portion: 'Makes 40 truffles',
    time: 'Hands-on time 20 min, plus cooling and chilling',
    description: '“These dark chocolate truffles taste wonderful – intense, rich and smooth without being too strong. And they contain no dairy at all, so what you get is the purity of the cocoa.” Chocolatier Paul A Young.',
    ingredients: [
      '75g stevia or erythritol',
      '½ tsp sea salt',
      '200g dark chocolate (100% cocoa solids), chopped',
      '2 tsp extra-virgin olive oil',
      '100g cocoa powder'
    ],
    method: [
      {
        'Step 1': 'Put the sweetener and salt in a small saucepan with 200ml water (see Paul’s tips). Over a high heat, bring the mixture to a simmer. Put the chocolate in a heatproof bowl and pour over half the hot liquid. Whizz with a stick blender to emulsify, then add the rest of the liquid and whizz again until glossy.'
      },
      {
        'Step 2': 'Add the olive oil and whizz again, then allow the ganache to cool to room temperature before refrigerating for 1 hour.'
      },
      {
        'Step 3': 'Use a teaspoon to scoop out 40 pieces of ganache (see Paul’s tips). Scatter the cocoa powder over a high-sided tray and toss the truffles through to coat. Allow the truffles to fully set in the cocoa powder for 5 minutes, then gently shake in a sieve to release any loose powder.'
      },
      {
        'Step 4': 'The truffles will keep (chilled) for 5 days in an airtight container. Take them to someone’s house as a gift, or let them come to room temperature for 10 minutes, then enjoy.'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/16.jpg'
  },
  {
    id: '17',
    title: 'Vegan cabbage cacciatore',
    difficulty: 'Easy',
    portion: 'Serves 4',
    time: 'Hands-on time 20 min. Simmering time 30 min',
    description: 'Try this vegan cacciatore, a plant-based twist on the traditional Italian stew. Wedges of savoy cabbage absorb loads of rich, tomatoey flavour. It’s great served with crusty bread, or with rice or mashed potato if you want something more substantial.',
    ingredients: [
      '1 medium savoy cabbage',
      'Olive oil to fry',
      '1 onion, sliced',
      '1 celery stick, sliced',
      '1 red pepper, deseeded and chopped into 2cm pieces',
      '4 garlic cloves, sliced',
      '2 tbsp tomato purée',
      '150ml red wine',
      '400g tin chopped tomatoes',
      '150g button mushrooms',
      '1 sprig of rosemary',
      '1 tsp dried oregano',
      '50g black olives',
      '1 tbsp capers',
      'Handful parsley or basil, chopped'
    ],
    method: [
      {
        'Step 1': 'Remove any damaged outer leaves from the cabbage, wash to remove any dirt and slice into 4 wedges. Put a large lidded saucepan over a high heat and, once smoking, add a drizzle of vegetable oil and the cabbage wedges, cut-side down. Cook for a few minutes until nicely charred, then flip to char the other cut side for another few minutes. Remove and set aside.'
      },
      {
        'Step 2': 'Add another drizzle of oil to the pan, turn down the heat to medium, then add the onions, celery, red pepper and garlic and cook for 6 minutes until soft. Stir in the tomato purée and cook for 2 minutes.'
      },
      {
        'Step 3': 'Nestle the cabbage wedges back into the pan then pour in the wine. Simmer until reduced by half (about 4 minutes) then add 200g water, the tinned tomatoes, mushrooms, rosemary, oregano, olives and capers and season with salt and pepper. Cover and simmer for 20 minutes, until the sauce has thickened slightly and you can insert a knife into the thick stem of a cabbage wedge with little resistance. Serve scattered with chopped parsley or basil.'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/17.jpg'
  },
  {
    id: '18',
    title: 'Vegan butternut squash risotto with millet',
    difficulty: 'Easy',
    portion: 'Serves 2',
    time: 'Hands-on time 25 min. Simmering time 20 min',
    description: 'Butternut squash, sage and hazelnuts are an iconic flavour combination synonymous with the colder months and work really well in this simple, plant based dinner. Using millet – a gluten-free grass seed – instead of rice to create the risotto adds to the earthy, nutty flavours.',
    ingredients: [
      '½ (500g) butternut squash',
      'Extra-virgin olive oil to drizzle and fry',
      '2 garlic cloves, sliced',
      '750ml of vegetable stock',
      '100g of millet, see Tips',
      '1 sage sprig, leaves picked',
      '2 tbsp hazelnuts, roughly chopped',
      '1 tsp white miso paste (make sure it’s gluten-free if you need it to be)',
      'Pinch nutritional yeast flakes',
      '2 tbsp oat fraiche (optional)'
    ],
    method: [
      {
        'Step 1': 'Heat the oven to 200°C fan/gas 7. Remove the peel from around half the squash, leaving the other half unpeeled, then chop into 2cm pieces, keeping the peeled and unpeeled pieces of squash separate. Put the unpeeled squash on a baking tray, toss with a little oil, season with salt and pepper and roast for 25 minutes.'
      },
      {
        'Step 2': 'Meanwhile, put a medium lidded saucepan over a medium heat with a dash of oil then add the peeled butternut squash and sliced garlic. Cook for 5 minutes until starting to soften, then pour in 250ml of the vegetable stock. Cover and simmer until soft (about 12–15 minutes).'
      },
      {
        'Step 3': 'Bring the remaining 500ml vegetable stock to the boil in a separate saucepan, then add the millet. Turn the heat down and gently simmer for 15 minutes. Heat a drizzle of oil in a small frying pan and add the sage leaves and chopped hazelnuts. Cook for a few minutes until golden and crisp, then drain on kitchen paper.'
      },
      {
        'Step 4': 'Once the squash and garlic are soft, drain (reserving the stock) and transfer to a blender. Add the miso and nutritional yeast, then whizz into a smooth sauce, adding back in a splash of the stock as needed. Stir the butternut purée through the millet, taste for seasoning, then divide between bowls and top with the roasted squash, hazelnuts, sage leaves and a spoonful of oat fraiche (if using).'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/18.jpg'
  },
  {
    id: '19',
    title: 'Marmite parsnips with poppy seeds',
    difficulty: 'Easy',
    portion: 'Serves 4-6 as a side',
    time: 'Hands-on time 5 min. Oven time 45 min',
    description: 'Marmite’s deeply savoury flavour mellows out into something sweeter and almost smoky once heated, making it the perfect match for roast parsnips.',
    ingredients: [
      '6 parsnips',
      '1 tbsp vegetable oil',
      '1 tbsp marmite',
      '1 tbsp poppy seeds'
    ],
    method: [
      {
        'Step 1': 'Heat the oven to 160°C fan/gas 4. Trim the tops of the parsnips then give them a good scrub under running water. Cut them lengthways into quarters (or sixths if they’re particularly big) and put them on a baking tray. Mix the oil with the marmite to loosen it slightly, then massage the mixture onto the wedges as evenly as possible.'
      },
      {
        'Step 2': 'Cook for 40 minutes, stirring every 10 minutes or so as the marmite can catch and burn (although a little charring and blackening is a good thing). Season with salt and pepper, then sprinkle over the poppy seeds.'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/19.jpg'
  },
  {
    id: '20',
    title: 'Vegan tart with miso, frangipane and onions',
    difficulty: 'Easy',
    portion: 'Serves 1',
    time: 'Hands-on time 40 min, plus chilling. Oven time 37-43 min.',
    description: 'This rich vegan tart makes a great Christmas main for a plant-based guest. Savoury frangipane is topped with kale and sweet, sticky miso onions.',
    ingredients: [
      '1 tsp olive oil',
      '½ or 1 small red onion, finely sliced',
      '½ tsp brown rice miso paste',
      '1 tsp rice or white wine vinegar',
      'Pinch sugar',
      'Small handful kale',
      '1 tsp Free and Easy egg replacer (from Asda, Waitrose and Ocado)',
      '1 small garlic clove, crushed',
      '25g ground almonds',
      '50g plain flour, plus extra to dust',
      '1 tbsp olive oil',
      '10cm fluted tart tin',
      'Baking beans'
    ],
    method: [
      {
        'Step 1': 'Make the pastry first: put the flour in a bowl with a pinch of salt. Add the oil and rub it into the flour with your fingertips until it resembles breadcrumbs. Add 1 tbsp cold water, then use a butter knife to mix until it comes together. Lightly knead the dough into a ball, then roll out on a lightly floured worktop and use to line a 10cm fluted tart tin. Chill for 20 minutes.'
      },
      {
        'Step 2': 'Heat 1 tsp oil in a small pan over a medium heat. Add the sliced onion and a pinch of salt and cook gently for about 20 minutes, stirring occasionally. Stir in the miso paste, vinegar and sugar, then cook for another 5 minutes. Put the kale in a colander in the sink and pour over boiling water from the kettle to wilt it, then leave to drain and cool.'
      },
      {
        'Step 3': 'Heat the oven to 180°C fan/ gas 6. Line the pastry case with crumpled baking paper and fill with baking beans or uncooked rice. Bake on a tray for 12 minutes, then remove the paper and beans and bake for another 5-6 minutes until the pastry is crisp and lightly browned.'
      },
      {
        'Step 4': 'Meanwhile, put the egg replacer in a bowl with 1 tbsp water and whisk until light and fluffy. Use a metal spoon to fold in the garlic and ground almonds to make a fragipane, then season with a pinch of salt and some ground black pepper. Tip the frangipane into the tart case, then spoon over the miso onions and kale, pressing them in lightly. Bake for 20-25 minutes until the frangipane is puffed up and golden.'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/20.jpg'
  },
  {
    id: '21',
    title: 'Confit parsnip and carrot crumble',
    difficulty: 'Easy',
    portion: 'Serves 1',
    time: 'Hands-on time 15 min. Oven time 1 hour 10 min',
    description: 'Got a vegan guest for Christmas? This vegetable crumble for one makes a hearty and impressive Christmas main. Slow-cooked root veg and beans sit in a creamy, plant-based sauce, finished with a flavoursome crumble topping.',
    ingredients: [
      '1 carrot, cut into 3cm chunks',
      '1 parsnip, cut into 3cm chunks',
      '1 star anise',
      '1 small bay leaf',
      '1 garlic clove, peeled but left whole',
      '1 strip orange peel',
      '200-300ml olive oil',
      '1 slice seeded bread (preferably a crust)',
      '2 tbsp rolled oats',
      '1 tbsp nutritional yeast flakes',
      '100g cooked haricot or cannellini beans',
      '2 tbsp oat fraiche (we used Oatly)',
      'Individual pie or oven dish'
    ],
    method: [
      {
        'Step 1': 'Heat the oven to 160°C fan/ gas 4. First, confit the veg: put the carrot, parsnip, star anise, bay, garlic and orange peel in a small oven dish, then pour over enough oil to submerge everything. Cover tightly with foil and put in the oven for 35-40 minutes until the veg is completely tender when pierced with a knife.'
      },
      {
        'Step 2': 'Meanwhile, whizz the bread to a coarse crumb in a food processor (you could also tear or chop it into small chunks). Tip into a bowl, then stir in the oats and half the nutritional yeast. Season with a pinch of salt and pepper and set aside.'
      },
      {
        'Step 3': 'Scoop the confit veg out of the oil and into a bowl (reserve the oil; see Don’t Waste It). Crush the confit garlic into a paste with a fork, then stir it into the veg along with the beans, oat fraiche and remaining nutritional yeast. Season, then tip into an individual oven or pie dish. Add 3 tbsp of the infused oil to the bread mixture and stir to combine. Use this to top the vegetable filling. Cover and chill or freeze until ready to cook (see Make Ahead).'
      },
      {
        'Step 4': 'When ready to cook, heat the oven to 180°C fan/gas 6. Bake the crumble on a tray for 30 minutes (or 40 minutes if cooking from frozen) until golden and crisp. Leave to stand for 5-10 minutes before serving.'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/21.jpg'
  },
  {
    id: '22',
    title: 'Caramelised onion, pear and chestnut stuffing',
    difficulty: 'Easy',
    portion: 'Serves 4-6',
    time: 'Hands-on time 25 min. Oven time 15-20 min',
    description: 'Get ready for Christmas with this freeze-ahead chestnut stuffing recipe from Chantelle Nicholson. Silky, caramelised onions combined with chestnuts, pears and bread make the ultimate comforting stuffing (and it’s vegan, too).',
    ingredients: [
      '50ml rapeseed oil, plus extra to grease and drizzle',
      '2 onions, halved and finely sliced',
      '2 pears, cored',
      '½ bunch thyme, leaves picked, plus extra to serve',
      '250g bread, ideally stale, whizzed into breadcrumbs',
      '8 vacuum-packed cooked chestnuts, chopped, plus extra to serve',
      'Whole nutmeg for grating'
    ],
    method: [
      {
        'Step 1': 'Heat the oven to 180°C fan/ gas 6. Heat the oil in a non-stick frying pan over a medium heat. Once hot, add the onions and a big pinch of salt and fry for 15-20 minutes, stirring occasionally, until a deep golden colour.'
      },
      {
        'Step 2': 'Cut 5-6 long thin slices off one of the pears, then chop the rest. Add the chopped pears and thyme leaves to the pan and cook for 10 minutes more, then transfer to a bowl and mix in the breadcrumbs and chestnuts. Season to taste with salt, pepper and a good grating of nutmeg.'
      },
      {
        'Step 3': 'Grease a small baking dish or tray with oil, then transfer the stuffing into it, in an even layer. Lay the pear slices on top, scatter over a few more chopped chestnuts and thyme leaves, drizzle with a little more oil, then bake for 15-20 minutes.'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/22.jpg'
  },
  {
    id: '23',
    title: 'Ultimate vegan gravy',
    difficulty: 'Easy',
    portion: 'Serves 6',
    time: 'Hands-on time 30 min. Oven time 40 min, plus simmering time 1 hour.',
    description: 'Chef Harriet Mansell has created the ultimate vegan gravy recipe, with all the depth and umami of its meaty counterpart. The gravy makes the most of roast and fried alliums, smoked oil and umami-rich miso and mushrooms, but what really elevates it is the roasted yeast, adding an intensity even  meaty gravies struggles to achieve.',
    ingredients: [
      '16 shallots',
      '2 leeks, cleaned',
      '2 garlic bulbs, cloves separated and peeled',
      'Rapeseed oil to fry and drizzle',
      '250g fresh yeast (see Know How)',
      '2 tbsp smoked rapeseed oil (see tips)',
      '250g white mushrooms, sliced',
      '1 tsp white miso paste (make sure it’s gluten-free if needed)',
      'Pinch mixed spice',
      'Splash ruby port',
      'Splash cider brandy (optional)',
      '1 tbsp balsamic vinegar',
      '4 celery sticks, roughly chopped',
      'Handful dried mushrooms, roughly chopped',
      '½ bunch thyme',
      '½ bunch chives',
      'Handful chervil or parsley',
      'Pinch freshly grated nutmeg',
      '1 tbsp cornflour, mixed with 1 tbsp water (optional'
    ],
    method: [
      {
        'Step 1': 'Heat the oven to 180°C fan/gas 4. Divide the shallots, leeks and garlic into two even piles. Roughly chop one pile and finely slice the other. Add the roughly chopped veg onto a baking tray, drizzle with oil and season with salt. Put in the oven to roast for 40 minutes until a deep golden brown.'
      },
      {
        'Step 2': 'Meanwhile, line a separate large baking tray with baking paper, then crumble the fresh yeast into it, drizzling over half the smoked rapeseed oil. Put in the oven and cook for 30-40 minutes, stirring occasionally. The yeast will initially melt but will then begin to brown and form a crust (it looks a little like crispy chicken skin).'
      },
      {
        'Step 3': 'While the veg and yeast roast, add a generous drizzle of oil to a large saucepan over a medium heat. Once hot, add the finely sliced vegetables and cook for 15-20 minutes, stirring occasionally, until golden and caramelised. Add half the mushrooms and continue cooking until they release their liquid and begin to colour too.'
      },
      {
        'Step 4': 'Once the mushrooms and sliced veg are cooked, put the roasted vegetables in the saucepan with the fried veg. Pour in just enough water to cover, then add the miso, mixed spice, port, cider brandy (if using), balsamic vinegar and the remaining smoked rapeseed oil. Bring to a simmer with the lid on, then add the roasted yeast, which will thicken the liquid and make it look creamy. Simmer (covered) for 30 minutes to get as much flavour out of the solids into the liquid as you can.'
      },
      {
        'Step 5': 'Add the remaining mushrooms, half the celery, the dried mushrooms and half the thyme sprigs. Cover and continue to simmer for another 20-30 minutes.'
      },
      {
        'Step 6': 'Add the remaining celery and thyme along with the chives, chervil (or parsley) and the nutmeg, then remove from the heat. Give the gravy a stir, then season to taste with salt and pepper. Strain through a fine sieve, squishing the solids with a spoon to get as much liquid/flavour out of them as possible, either into a gravy jug (if serving right away) or a lidded container to cool and then keep in the fridge or freezer. If you like your gravy thicker, you can whisk in the slaked cornflour whilst the (strained) gravy is still very hot.'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/23.jpg'
  },
  {
    id: '24',
    title: 'Leek and watercress risotto',
    difficulty: 'Easy',
    portion: 'Serves 4',
    time: 'Hands-on time 30 min',
    description: 'This verdant leek risotto is kept fresh, light and peppery thanks to a simple watercress purée stirred through right before serving. Replacing the usual butter with oil also keeps this dish vegan.',
    ingredients: [
      '2 tbsp olive oil',
      '2 large leeks, trimmed and finely sliced',
      '1 litre vegetable stock',
      '80g watercress',
      '40g spinach leaves',
      'Bunch (30g) parsley',
      '30g salted almonds, plus extra, roughly chopped, to garnish',
      '5 tbsp extra-virgin olive oil, plus extra to serve',
      'Juice ½ lemon',
      '200g risotto rice (arborio or carnaroli)',
      '100ml white wine'
    ],
    method: [
      {
        'Step 1': 'Heat the olive oil in a large saucepan over a medium heat then add the leeks and a pinch of salt. Cook for 6 minutes, stirring occasionally, until softened.'
      },
      {
        'Step 2': 'Meanwhile, pour the stock into a separate saucepan and heat until barely simmering. Set aside a few watercress sprigs to garnish, then put the rest of it in a food processor with the spinach, parsley, almonds and extra-virgin olive oil. Whizz until a coarse paste forms, scraping down the sides as needed. Add a spoonful of stock to loosen, then stir in the lemon juice. Set aside.'
      },
      {
        'Step 3': 'Add the rice to the leeks, turn up the heat slightly and stir to coat the rice in the oil and toast the grains lightly. Pour in the wine, simmer and stir until almost completely reduced, then add a ladleful of stock. Constantly stir the rice until it has absorbed all the stock, then repeat this process, a ladleful at a time, until the rice is tender but with a slight bite in the centre. You may not need to use all the stock – start tasting when you have around 200ml of stock left. This should take around 15-20 minutes.'
      },
      {
        'Step 4': 'Tip the green puree into the rice, stir to incorporate, then remove from the heat and allow to stand for 5 minutes. Season to taste, divide between serving bowls and garnish with watercress sprigs, almonds and an extra drizzle of olive oil.'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/24.jpg'
  },
  {
    id: '25',
    title: 'Pickled bramble martini',
    difficulty: 'Easy',
    portion: 'Serves 1',
    time: 'Hands on time 5 min, plus pickling time.',
    description: 'This pickled bramble martini is a hedgerow treat. Quick pickle blackberries in wine vinegar, then add a little of the liquor to a martini for a taste of autumn.',
    ingredients: [
      '10 blackberries',
      '1 tsp caster sugar',
      '1 tsp salt',
      '4 tbsp white wine vinegar',
      'Dash of dry vermouth',
      '60ml gin',
      'Thyme sprig (to serve)',
      'Martini glass or coupe'
    ],
    method: [
      {
        'Step 1': 'Put the blackberries in a small bowl. In another small bowl, combine the caster sugar, salt and white wine vinegar, then pour it over the fruit. Leave for at least 15 minutes.'
      },
      {
        'Step 2': 'Fill a cocktail shaker with ice, add a dash of dry vermouth, stir, then drain away almost all the liquid (or leave it in if you prefer your martini ‘wet’). Pour in the gin, stir well, then strain into a martini glass or coupe.'
      },
      {
        'Step 3': 'Add 1 tbsp of the pickling liquid, then garnish with one of the pickled blackberries and a thyme sprig.'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/25.jpg'
  },
  {
    id: '26',
    title: 'The Dusty Knuckle’s sourdough starter',
    difficulty: 'Easy',
    portion: 'Makes 1 healthy sourdough starter',
    time: 'Hands-on time about 20 min, plus 7 days fermenting',
    description: 'Make a healthy and lively sourdough starter from scratch with our step-by-step starter recipe from The Dusty Knuckle Bakery. This stiff starter is perfect for making the bakery’s linseed baguettes.',
    ingredients: [
      'Wholewheat flour',
      'Water',
      'Digital scales',
      'Jam jar with a loose-fitting (not airtight) lid'
    ],
    method: [
      {
        'Step 1': 'DAY 1 Mix 40g wholewheat flour and 40g water in a clean jam jar until there are no dry bits. Put on the lid. Remember the rules around temperature here, and use the water temperature to counter your room temperature (see Know How).'
      },
      {
        'Step 2': 'DAY 2 Repeat DAY 1, adding 40g wholewheat flour and 40g water.'
      },
      {
        'Step 3': ' DAY 3 Repeat DAY 1, adding 40g wholewheat flour and 40g water. By the end of DAY 3 you will have 240g starter in your jar.'
      },
      {
        'Step 4': 'DAY 4 You should start seeing some bubbles appear and there should be a nice yogurty, slightly acidic smell. Now to make the starter stiff. Discard all but 1 tbsp starter (see Know How) and feed the remaining starter with 200g strong white bread flour and 150g water. This may be harder to mix in the jar – you can always scoop it out and mix it by hand in a bowl.'
      },
      {
        'Step 5': 'DAY 5 Discard 200g (leaving you with 150g) and feed the remaining starter with 180g strong white bread flour and 120g water.'
      },
      {
        'Step 6': 'Leave alone for DAY 6'
      },
      {
        'Step 7': 'DAY 7 Your starter is now a week old! It should grow in size slowly over the day, and when you come to feed it, it should have grown noticeably in the jar. It should be smelling acidic and delicious. You are now ready to make bread.'
      },
      {
        'Step 8': 'You have two options for maintaining your starter. If you’re not planning to bake regularly, put your starter in the fridge and give it a feed (DAY 5 instructions) once a week. You’ll need to take it out of the fridge 3 days before you want to make bread, feeding it daily to bring it back to life.'
      },
      {
        'Step 9': 'Alternatively, keep the starter out of the fridge, but feed it daily (DAY 5 instructions). You’ll need to bake regularly, every day or whenever you want! If you miss a feed, don’t panic – give it a few days of feeding to get it back to normal.'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/26.jpg'
  },
  {
    id: '27',
    title: 'The Dusty Knuckle’s linseed baguettes',
    difficulty: 'A challenge',
    portion: 'Makes 4 baguettes, each serving 2',
    time: 'Hands-on time 1 hour, plus a week to make the starter, 8-10 hours resting, overnight chilling and 1 hour proving. Oven time 18 min',
    description: 'Learn how to make The Dusty Knuckle’s crunchy-on-the-outside, chewy-on-the-inside linseed baguettes with a step-by-step recipe from the acclaimed London bakery.',
    ingredients: [
      '100g wholemeal flour',
      '375g strong white bread flour, plus extra to dust',
      '370g warm water (see Know How)',
      '135g stiff starter',
      '15g fine sea salt',
      '100g cooked porridge, overnight oats, cooked bulgur wheat or cooked rice (see tips)',
      '100g soaked golden or brown linseeds (see Make Ahead)',
      'Vegetable oil for greasing',
      'Rice flour to dust',
      'Digital thermometer',
      'Dough scraper',
      'Baking stone'
    ],
    method: [
      {
        'Step 1': 'Mix the flours and 300g of the warm water in a bowl until there are no wet or dry bits. Scrape down the bowl, cover, then set aside for 2-4 hours to allow your flour to hydrate fully.'
      },
      {
        'Step 2': 'Weigh out your starter and add it with the remaining 70g warm water to the flour bowl. Squish, squeeze and squelch your dough. It will go weird and slimy, but don’t worry – this is normal. When it’s all combined, scrape down the bowl, cover it and set aside for 30 minutes. Add your salt to the bowl and mix this through, squeezing the dough again until the salt is totally incorporated. Add the porridge and soaked linseeds and work these into the dough mix – you want to give this a good 8 minutes. Use a scraper or your hands to get under the dough and lift it up, then lightly oil the inside of the bowl. Cover the bowl with a lid or a clean tea towel and leave it somewhere warm for 1 hour. Take a mental picture of how much the dough fills the bowl – by the end, you want it to have almost doubled.'
      },
      {
        'Step 3': 'For the next 4 hours you are going to give the dough a ‘fold’ every hour. This just means grabbing the edge of the dough with a wet hand, stretching it up as high as it will go and folding it over on itself, working around the bowl as many times as the dough will let you – until it feels tight and as if it might tear. Over 4 hours, this means you’ll have given the dough 3 folds. With each fold, you should be starting to see more life in the dough. This process is what we call the bulk fermentation and it’s where the magic is happening.'
      },
      {
        'Step 4': 'After the last fold, let the dough rest for a final 30(ish) minutes. You should have a shiny, coherent, strong dough that wobbles when you carefully prod it. If it feels wet and sticky, give it another fold and leave it for a further 30 minutes. If it feels strong, just not that lively, leave out the extra fold but still give it more resting time. This is the fermentation period, and you can’t really rush it – just let it do its thing. You’ll get a feel for this sweet spot the more you bake. Put the dough in the fridge overnight. This will help develop the flavour, let it rest and get lovely and strong. (It can stay in the fridge for up to 24 hours.)'
      },
      {
        'Step 5': 'The next day, gently tip the dough out onto a flour-dusted worktop and, without disturbing it much, cut it into 4 quarters – use a dough scraper to do this if you have one. With each quarter of dough, fold the points to the centre to make a very rough, long rectangle. You need to be gentle, but if you’re slow and too careful the dough will stick to your fingers and it’ll quickly get stressful. Flip the dough so the seams are facing down and the top is smooth, then let it rest for 30 minutes to come up to room temperature.'
      },
      {
        'Step 6': 'Now flip the dough back over again so the seams are facing up – you want the rectangle to be oriented so the longest side is horizontal in front of you. Grab the top edge and fold it into the middle of the dough, then grab the bottom edge and fold it over to meet the new top edge. Gently seal along this length with your thumbs. Roll the dough over so the seam is on the bottom. Next, cup both hands over the dough, your fingers resting on the work surface at the top and the heel of your hand on the surface at the bottom. Roll the dough, working your hands away from each other, so you’re lengthening the baguette Push your hands down harder as you reach the ends so you get that lovely pointed shape. The trick is not to go over it too many times – once is ideal.'
      },
      {
        'Step 7': 'Heavily dust a tea towel with rice flour and lay it in a shallow baking tray or something of a similar shape so it just hangs over one side and there’s plenty left on the other. Lay your first baguette seam-side down along the edge of the tray with a little overhang, so the side supports it. Pull a fold of the tea towel up around it so it’s cradled on both sides. Put another baguette alongside and repeat. Do this for all 4 baguettes, nestling them against each other, then let them rest for 1 hour.'
      },
      {
        'Step 8': 'Heat your oven to 220°C fan/gas 9 or as hot as it will go, and boil a kettle. Put a baking tin in the bottom of your oven and a baking sheet (or a baking stone, if you have one) on the middle shelf to heat up. Cut 4 slightly larger than baguette-size pieces of baking paper and flip out the baguettes onto them with the seams facing up. These will act as a score – the loaf will open through the seam. The outcome is quite a rustic look, far from your traditional French stick.'
      },
      {
        'Step 9': 'Working as quickly as you can, open the oven, take out your hot baking sheet or stone and use the baking paper strips as little hammocks to transfer each baguette onto the baking sheet/ stone. Pour some boiling water into the baking tin at the bottom and put the baguettes in the middle of the oven. Bake for 18 minutes or until lovely and dark.'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/27.jpg'
  },
  {
    id: '28',
    title: 'Runner bean and apple chutney',
    difficulty: 'Easy',
    portion: 'Makes about 1.5-1.75 litres',
    time: 'Hands-on time 15 min',
    description: 'Transform a glut of late summer veg into Gill Meller’s runner bean and apple chutney. This tangy pickle will last you well into winter. Root, Stem, Leaf, Flower by Gill Meller is out now (£27, Hardie Grant).',
    ingredients: [
      '500g runner beans, de-stringed and cut into 1cm lengths',
      '1kg bramley apples, peeled, quartered, cored and roughly chopped',
      '500g ripe tomatoes, roughly chopped',
      '2 onions, roughly chopped',
      '150g sultanas',
      '2 tsp coriander seeds, bashed',
      '1 tsp caraway seeds, bashed',
      '2 green cardamom pods, bashed',
      '350g light brown soft sugar',
      '500ml cider vinegar',
      '1 tsp fine sea salt',
      'Preserving pan or large non-reactive saucepan; sterilised preserving jars',
      'Pestle and mortar for bashing'
    ],
    method: [
      {
        'Step 1': 'Put all the ingredients in a preserving pan over a medium heat (see Easy Swaps). Slowly bring the mixture up to a simmer, stirring regularly until the sugar has dissolved.'
      },
      {
        'Step 2': 'Reduce the heat and gently simmer the chutney for 1½–2 hours, stirring every so often to stop it sticking to the base of the pan. The chutney will thicken as it cooks; you’ll know it’s ready when you can draw a wooden spoon across the bottom of the pan and it leaves a path behind it for a few seconds before the chutney collapses back down and covers the base. Be extra-careful it doesn’t catch and burn at this point.'
      },
      {
        'Step 3': 'Remove the chutney from the heat and spoon carefully into jars, still warm from sterilising (see Know-how). Seal with the lids and cool. Store in a cool, dark place for several months before eating – although you can eat it earlier, if you like. Once open, store in the fridge and use within a month.'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/28.jpg'
  },
  {
    id: '29',
    title: 'Pumpkin curry',
    difficulty: 'Easy',
    portion: 'Serves 4 as a main or 6 as a side',
    time: 'Hands-on time 15 min, simmering time 20 min',
    description: 'Gourds, squashes and pumpkins of all shapes and sizes are used in dishes across the Indian subcontinent. This colourful pumpkin curry, full of mustard seeds, curry leaves, tamarind and jaggery (cane sugar), takes inspiration from the flavours of southern India.',
    ingredients: [
      '3 tbsp mustard oil or vegetable oil',
      '1 tbsp black mustard seeds',
      '1 tsp cumin seeds',
      '10 curry leaves, ideally fresh (see Tips)',
      '1 onion, finely chopped',
      '2 green chillies, finely chopped',
      '2 tbsp ginger-garlic paste',
      '½ tsp ground turmeric',
      '1 tsp kashmiri chilli powder',
      '1 tsp ground coriander',
      '800g pumpkin, peeled, deseeded and cut into 5cm chunks',
      '1 tbsp tamarind paste',
      '½ tbsp jaggery, grated, or light brown sugar',
      'Bunch coriander, finely chopped'
    ],
    method: [
      {
        'Step 1': 'Pour the oil into a large lidded saucepan and put over a medium heat. Once shimmering hot, add the mustard seeds, cumin seeds and curry leaves and cook for 30 seconds or until the seeds begin to crackle.'
      },
      {
        'Step 2': 'Add the onion and green chillies with a pinch of salt, cook for 8 minutes, stirring regularly, then add the ginger-garlic paste and cook for another 2 minutes. Add the turmeric, chilli powder and coriander, stir to combine, then add the pumpkin. Stir to coat the pumpkin in the onions and spices, then add 300ml water and the tamarind paste and cover. Bring to a simmer and cook for 8-10 minutes, stirring regularly, or until the pumpkin is tender. Depending on the type, size and variety of pumpkin you’re using, it may take a little longer – you want the pumpkin to be soft but still holding its shape. If the mixture begins to stick, add a splash more water, although bear in mind this is quite a dry dish without much sauce.'
      },
      {
        'Step 3': 'Add the jaggery (or brown sugar), stir to combine, then stir through half the coriander. Serve with the rest of the coriander sprinkled on top with rice, chapatis or other Indian dishes as part of a larger spread.'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/29.jpg'
  },
  {
    id: '30',
    title: 'Coconut dhal and chapatis',
    difficulty: 'Easy',
    portion: 'Serves 6, with 3 chapatis per person',
    time: 'Hands-on time 45 min. Cooking time 45 min',
    description: 'Nearly all the ingredients for this fragrant vegan coconut dhal come from the store cupboard. Serve with homemade chapatis for a filling, budget dinner.',
    ingredients: [
      '250g red lentils',
      '2 tbsp vegetable oil',
      '2 medium onions, finely chopped',
      '4 garlic cloves, crushed',
      '½ tsp dried chilli flakes, or more to taste',
      '2 tsp mustard seeds (optional)',
      '2 tsp ground cumin',
      '2 tsp ground coriander',
      '1 tsp ground turmeric',
      '1 tsp ground ginger',
      '400g tin chopped tomatoes',
      '400g tin coconut milk',
      '1 tbsp tamarind paste',
      '250g frozen spinach (optional)',
      'Juice ½ lemon or lime',
      '500g chapati or wholemeal flour, plus extra to dust',
      '1 tsp salt',
      '250-300ml water',
      'Vegetable oil or ghee for frying'
    ],
    method: [
      {
        'Step 1': 'Rinse the lentils thoroughly in cold water and leave to drain in a sieve until ready to use. Heat the oil in a large saucepan and add the onions. Stir intermittently over a low-medium heat for 10-15 minutes, or until the onions are soft and golden.'
      },
      {
        'Step 2': 'Add the garlic and spices and cook, stirring, for a few minutes, until you hear the mustard seeds pop and the spices have cooked out – take care not to burn them. Add the red lentils and stir them round to coat them in the oil, before adding the tomatoes and coconut milk. Swish round the empty tins with about 100ml water and add the water to the pan.'
      },
      {
        'Step 3': 'Season generously with salt, then stir in the tamarind paste and frozen spinach (if using) and leave to simmer gently for about 25-30 minutes, stirring intermittently, or until the lentils are soft. You may need to add more water.'
      },
      {
        'Step 4': 'Meanwhile, make the chapatis. Mix the flour and salt in a large bowl. Add the water, a little at a time, mixing it in with your fingers as you go, until the mixture comes together to form a dough. Knead the dough for a few minutes in the bowl and leave to rest for a few minutes more.'
      },
      {
        'Step 5': 'On a work surface lightly dusted with flour, roll the dough into a sausage shape and divide it into 18 pieces. Flatten each piece of dough with the heel of your hand, before rolling it very thinly into discs, roughly 15cm in diameter. Add more flour to prevent the dough sticking as needed.'
      },
      {
        'Step 6': 'Heat a sparing slick of oil or ghee in a frying pan over a medium-high heat. Fry a chapatti for about 30 seconds on each side, or until it puffs up and dark spots appear on the surface. Repeat with the remaining chapatis. Serve alongside the dal, squeezing over the lemon or lime juice.'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/30.jpg'
  },
  {
    id: '31',
    title: 'British plum umeboshi',
    difficulty: 'Easy',
    portion: 'Makes around 500g',
    time: 'Hands-on time 20 min, plus 2 weeks fermenting',
    description: 'Umeboshi are Japanese pickled ume plums (actually a type of apricot), which give a complex, salty-sweet-sour kick to dishes. Can’t get hold of ume? Try our easy British plum umeboshi recipe – it’s the perfect intro to pickling fruit.',
    ingredients: [
      '500g small firm plums',
      '150ml vodka',
      '30-50g sea salt flakes',
      '1 litre jar'
    ],
    method: [
      {
        'Step 1': 'Inspect your plums and set aside any that are bruised, split or withered for another recipe – you need fruit in peak condition. Discard any stalks, rinse the fruit in water, then leave to dry.'
      },
      {
        'Step 2': 'Sterilise a 1 litre jar (see Know How) and set aside. Pour the vodka into a small bowl. Ensure your hands, knife and chopping board are very clean, then, one by one, dip the plums in the vodka and wipe dry with kitchen paper – this gets rid of any bacteria remaining on the surface of the plums. (The vodka is fine to pour back in the bottle and use as normal.) Halve the plums and remove the stones.'
      },
      {
        'Step 3': 'Weigh the plum halves and work out 10% of this weight in salt – for example, if you have 400g plum halves, you’ll need 40g salt. Beginning with a layer of salt, layer the plums into the sterilised jar, sprinkling each layer with more salt. End with a final layer of salt, then seal the jar.'
      },
      {
        'Step 4': 'Leave the plums to ferment in a cool, dark place for 2 weeks, turning the jar upside down from time to time, and opening and closing the lid every few days (this ensures the salt is evenly dispersed and that any built-up gases can escape). The salt should draw out the juice from the plums to create a brine. After 2 weeks, the plums are ready to use. Once opened, keep them in the fridge and use within 3 months.'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/31.jpg'
  },
  {
    id: '32',
    title: 'Plum and vanilla jam',
    difficulty: 'Easy',
    portion: 'Makes 1.5kg jam',
    time: 'Hands-on time 30 min',
    description: 'This speedy plum jam with hints of vanilla and cinnamon uses a clever time-saving trick in the cooking process. Delicious, fragrant plum preserve in a hurry? Yes please.',
    ingredients: [
      '500g glucose syrup',
      '500g caster sugar',
      '150ml water',
      '1 tsp salt',
      '2 cinnamon sticks',
      '2 star anise',
      '1 vanilla pod, split lengthways',
      'Pared zest 1 orange',
      '1.5kg plums, halved and pitted',
      '1 tbsp liquid pectin (from most large supermarkets)',
      '15g food-grade citric acid (see Know How) or 5 tbsp freshly squeezed lemon juice',
      'Sugar/probe thermometer',
      'Sterilised jars and lids',
      'Preserving pan'
    ],
    method: [
      {
        'Step 1': 'Put the glucose, sugar, water, salt, cinnamon, star anise, vanilla pod and orange zest in a large preserving pan (or a large, deep heavy-based saucepan). Put over a medium-high heat and bring to the boil, stirring occasionally, to dissolve the sugar and create a spiced syrup. Use a thermometer to keep an eye on the temperature.'
      },
      {
        'Step 2': 'As the syrup reaches 140°C it will start to turn golden. As soon as it hits that temperature, very carefully add the plums (don’t tip them in all at once, otherwise you risk splashing boiling syrup on yourself). The syrup will harden but don’t worry – just continue to heat until it remelts, stirring gently to coax it along (but trying not to break up the plums too much). Continue to cook over a high heat for around 10 minutes or until the syrup is liquid, bubbling, bright purple and returns to 120°C.'
      },
      {
        'Step 3': 'Stir in the pectin and citric acid (or lemon juice), then remove from the heat. Leave to cool slightly, then lift out and discard the cinnamon, star anise, orange peel and vanilla pod. Decant into sterilised jars, then seal (see Know How).'
      },
      {
        'Step 4': 'Store the jars in the fridge for up to 4 weeks (see Know How). Once opened, eat within 2 weeks.'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/32.jpg'
  },
  {
    id: '33',
    title: 'Smoky jollof rice',
    difficulty: 'Easy',
    portion: 'Serves 4-6',
    time: 'Hands-on time 15 min. Simmering time 1 hour 20 min',
    description: 'Jollof rice gets a smoky flavour boost in this delicious jollof recipe from Lerato Umah-Shaylor. One helping is never enough.',
    ingredients: [
      '300g long-grain or basmati rice, thoroughly rinsed',
      '250-400ml vegetable or chicken stock',
      '2 tsp fine sea salt',
      '2 plantains, sliced and fried, to serve (optional)',
      '6 medium vine-ripened tomatoes or a 400g tin plum tomatoes',
      '2-3 romano or red peppers, deseeded and roughly chopped',
      '1 large onion, roughly chopped',
      '5cm piece of ginger, peeled and roughly chopped',
      '5 garlic cloves, roughly chopped',
      '1-2 red or yellow scotch bonnet peppers, stalks removed and roughly chopped (wear gloves), or pierced and left whole',
      '90ml coconut, rapeseed or vegetable oil',
      '1 small red onion, finely sliced',
      '2 tbsp tomato puree',
      '2 tsp curry powder',
      '2 tsp smoked paprika',
      '1 bay leaf',
      '1 tsp dried thyme',
      '4-6 thyme sprigs, some thyme leaves picked and kept for garnish',
      'Food processor'
    ],
    method: [
      {
        'Step 1': 'Put all the puree ingredients in a food processor, except the scotch bonnets, if using whole, and whizz into a thick and aromatic puree.'
      },
      {
        'Step 2': 'Put the oil in a wide large saucepan, for which you have a tightly fitting lid, and set over a medium heat. Add the red onion and a pinch of fine sea salt. Cook for 15 minutes, stirring often, until softened and golden. If it starts to get dry, add a little splash of water to prevent the onion from burning.'
      },
      {
        'Step 3': 'Stir in the tomato puree and cook for 2-3 minutes, until the puree starts to separate. Add the spices and herbs and cook for 2 minutes, stirring continuously.'
      },
      {
        'Step 4': 'Gently pour in the blended puree, stirring well, then cover and cook for up 20 25 minutes, until the puree is reduced to a drier sauce. Keep a close eye on it and stir occasionally.'
      },
      {
        'Step 5': 'Add the rice and stock (about 250ml for basmati rice and up to 400ml for long-grain rice), ensuring there is enough water to just submerge the rice. Season with the fine sea salt and stir just once. Add the scotch bonnets, if using whole. Bring to a boil, then reduce the heat, cover and simmer over a low-medium heat for up to 30 minutes. The sauce must be visibly simmering to ensure the rice cooks properly.'
      },
      {
        'Step 6': 'Once the rice is cooked, remove the pan from the heat and leave covered to steam for a few minutes. Fluff with a fork, scatter over the reserved thyme leaves and enjoy your wonderful creation with a fresh salad and/or fried plantains, because jollof and plantains are a match made in heaven.'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/33.jpg'
  },
  {
    id: '34',
    title: 'Pide dough',
    difficulty: 'Easy',
    portion: 'Makes 3 x 150g dough balls',
    time: 'Hands-on time 15 min, plus about 3 hours resting and rising',
    description: 'Josh Katz’s pide dough recipe makes three balls of springy dough. Use the dough to make pide (Turkish-style oval pizzas), pizzas or flatbreads.',
    ingredients: [
      '5g fresh yeast',
      '35ml warm (26-29°C) water',
      '½ tsp runny honey',
      '175g strong bread flour',
      '125g ‘00’ flour',
      '3g fine salt',
      '½ tbsp olive oil, plus extra to grease',
      '135ml ice-cold water',
      'Stand mixer with dough hook'
    ],
    method: [
      {
        'Step 1': 'Combine the yeast, warm water and honey in a bowl and whisk to dissolve the yeast. Set aside for 10 minutes to give the yeast time to activate. The mixture should start to bubble and foam – if it doesn’t, discard the yeast and start again with a different batch.'
      },
      {
        'Step 2': 'Put the flours in the bowl of a stand mixer fitted with a dough hook, add the salt, oil and cold water. Run the mixer on its lowest speed for about 1 minute, then add the yeast mixture and mix for 5-7 minutes until the dough comes together as a smooth mass (it should be soft but not sticky). If the dough feels too sticky, add a little more flour and continue to mix. Transfer the dough to a lightly oiled bowl, cover with a damp cloth and rest for 1-1½ hours or until the dough has roughly doubled in size.'
      },
      {
        'Step 3': 'Turn out the dough onto a lightly floured work surface and knead for 2-3 minutes, then form into 3 equal balls weighing 150-160g. Transfer the balls to a lightly oiled tray, arranging them roughly 5-7cm apart. Double-wrap loosely with cling film and leave to rise for 1-2 hours, or until the balls have roughly doubled in size (see Make Ahead). The dough is now ready to shape as a base for pides, flatbreads or pizzas.'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/34.jpg'
  },
  {
    id: '35',
    title: 'Strawberry collins',
    difficulty: 'Easy',
    portion: 'Serves 1',
    time: '20 minutes',
    description: 'We love using mezcal in cocktails, and this strawberry collins from Los Mochis restaurant in London pairs it with grapefruit soda and lime juice for a zingy and refreshing mix. A perfect use of on-the-turn strawberries.',
    ingredients: [
      '225g strawberries',
      '225ml of water',
      '100g sugar',
      '50ml mezcal espadin',
      '20ml strawberry syrup (from above)',
      '30ml lime juice, plus a wedge to rub around the glass',
      'Grapefruit soda to top up'
    ],
    method: [
      {
        'Step 1': 'Rinse the strawberries under cold running water, then pick off the green tops. Slice and put in a medium saucepan with the water.'
      },
      {
        'Step 2': 'Bring the water to the boil, then reduce to a medium simmer and let the strawberries cook for 15 minutes. Skim and discard any foam that rises to the top.'
      },
      {
        'Step 3': 'Strain the strawberry liquid through a fine sieve into another clean saucepan (discard the strawberries). Add the sugar then bring back to the boil, stirring to help dissolve the sugar. Simmer the syrup for 5 minutes until the sugar is completely dissolved, skimming any additional foam that rises to the top.'
      },
      {
        'Step 4': 'Remove from the heat and allow to cool completely. Pour into a container, seal and refrigerate.'
      },
      {
        'Step 5': 'To make the cocktail, rub a lime wedge around the rim of a highball (collins) glass, then dip in salt. Fill the glass a third of the way up with ice then pour over the mezcal, lime juice and strawberry syrup. Give it a stir and top up with grapefruit soda.'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/35.jpg'
  },
  {
    id: '36',
    title: 'Crispy shallots',
    difficulty: 'Easy',
    portion: 'Serves 4-6',
    time: 'Hands-on time 5 min. Frying time 15-20 min.',
    description: 'Crispy shallots add colour, crunch and flavour to all manner of dishes. Sprinkle these golden bits on soups, pasta, hot dogs or curries.',
    ingredients: [
      '400ml vegetable oil',
      '600g thinly sliced shallots'
    ],
    method: [
      {
        'Step 1': 'Warm 400ml veg oil in a smallpan over low-medium heat until just shimmering, then add the thinly sliced shallots and fry, stirring often, for 15-20 minutes until golden. Remove the shallots from the oil using a slotted spoon (reserve the oil for later use) and transfer to a plate lined with kitchen paper.'
      },
      {
        'Step 2': 'Season the shallots with salt and store in a sealed container for up to 5 days.'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/36.jpg'
  },
  {
    id: '37',
    title: 'Taco slaw with pink pickled onions',
    difficulty: 'Easy',
    portion: 'Serves 4-6 as a side',
    time: 'Hands-on time 15 min, plus pickling',
    description: 'You need a zingy taco slaw to cut through the smoky richness of tacos – and this easy, colourful carrot slaw with quick-pickled onions has zest and crunch to spare.',
    ingredients: [
      '1 red onion, finely sliced',
      'Juice of 5 limes',
      '1 garlic clove, finely chopped',
      '1 tsp cumin seeds',
      '½ tsp chipotle flakes (optional)',
      '½ tsp sugar',
      '1/4 white cabbage, finely shredded',
      '2 carrots, finely shredded',
      '1 jalapeño chilli, finely chopped',
      'Handful coriander, finely chopped',
      '1 tbsp rapeseed oil'
    ],
    method: [
      {
        'Step 1': 'Put the sliced red onion in a heatproof bowl, cover with boiling water for 20 seconds, then drain well and return to the bowl. Squeeze in the lime juice, then add the garlic, cumin seeds, chipotle flakes (if using), sugar and a big pinch of salt. Stir well, then set aside for at least 20 minutes to quick-pickle.'
      },
      {
        'Step 2': 'While the onion pickles,put the shredded cabbage and carrot in a colander. Add the finely chopped jalapeño and a good pinch of salt then scrunch together and set aside for 10 minutes to drain.'
      },
      {
        'Step 3': 'Squeeze the cabbage mixture to remove excess water, then put in a mixing bowl. Add the pickled onions, along with the pickling lime juice. Sprinkle in a handful of finely chopped coriander, drizzle in the rapeseed oil, give everything a mix, then taste and add extra salt if needed.'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/37.jpg'
  },
  {
    id: '38',
    title: 'Corn on the cob peanut curry',
    difficulty: 'Easy',
    portion: 'Serves 4',
    time: 'Hands-on time 15 min. Simmering time 25 min',
    description: 'Masterchef star Nisha Parmar shares her family recipe for corn cob and peanut curry. A creamy, vegan coconut and tomato sauce is laced with curry leaves and peanuts. “All the coastal flavours of Kenya, with Indian undertones and satay vibes, ” says Nisha.',
    ingredients: [
      '4 corn on the cobs',
      '4 tbsp vegetable oil',
      '1 tsp cumin seeds',
      '1 tsp mustard seeds',
      '10 curry leaves (optional)',
      '1 medium onion, finely diced',
      '1 tbsp crushed garlic',
      '1 tbsp crushed ginger',
      '1 tsp finely chopped green chilli (or more to taste)',
      '2 tsp ground cumin',
      '2 tsp ground coriander',
      '1 tsp ground turmeric',
      '1 tsp garam masala',
      '200g tinned tomatoes, whizzed until smooth',
      '75g unsalted peanuts, crushed, plus extra to garnish',
      '400g tin coconut milk',
      'Coriander, chopped, to serve',
      'Chapatis to serve'
    ],
    method: [
      {
        'Step 1': 'Cook the corn in boiling water for 8 minutes, then drain. Once cool enough to handle, cut each cob into 4 equal pieces (for the picture they were cut bigger).'
      },
      {
        'Step 2': 'In a large deep saucepan over a medium heat, add the oil, cumin seeds and mustard seeds, then sizzle until they crackle. Quickly add the curry leaves (if using) followed by the diced onion and a pinch of salt, then cook gently for about 10 minutes until the onion is lightly browned.'
      },
      {
        'Step 3': 'Add the garlic, ginger and green chilli, cook for 1 minute, then tip in all the ground spices and stir for another minute. Add the whizzed tomatoes, along with a splash of water if the mixture looks too dry. Simmer for 10 minutes.'
      },
      {
        'Step 4': 'Tumble in the corn cobs, scatter over the peanuts and gently stir to coat everything in the tomato masala. Pour in the coconut milk, give everything another gentle stir, then simmer for 15 minutes until both sauces are combined and you have a deep orange, creamy sauce. Season to taste with salt, garnish with fresh coriander and another sprinkling of peanuts, then serve with chapatis.'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/38.jpg'
  },
  {
    id: '39',
    title: 'Pink pickled onions',
    difficulty: 'Easy',
    portion: 'Makes enough to fill a 250ml sterilised jar',
    time: 'Hands-on time 5 min, plus pickling',
    description: 'Learn how to make pink pickled onions with this easy recipe. Use the bright pink, tangy onions to adorn burgers, salads and tacos.',
    ingredients: [
      '1 red onion, very finely sliced into half moons',
      'Juice 5 limes',
      '½ tsp cumin seeds',
      '½ tsp caster sugar',
      '1 garlic clove, finely chopped'
    ],
    method: [
      {
        'Step 1': 'Put the sliced onions in a heatproof bowl and boil a kettle. Pour boiling water over the onions, leave them to sit for 20 seconds, then drain.'
      },
      {
        'Step 2': 'Return the drained onions to the bowl and add the lime juice, cumin seeds, sugar, garlic and a big pinch of salt. Stir to combine, ensuring the onions are fully submerged in lime juice, then cover and leave to pickle for at least 20 minutes. Store in the fridge and eat within 1 week.'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/39.jpg'
  },
  {
    id: '40',
    title: 'Padron peppers',
    difficulty: 'Easy',
    portion: 'Serves 4 as a snack or tapas',
    time: 'Hands-on time 5 min',
    description: 'A Spanish classic, these blistered little peppers offer an unbridled taste of sunshine on a plate and can be cooked from scratch in an instant. Just watch out for the occasional hot one…',
    ingredients: [
      '2 tbsp olive oil',
      '250g padron peppers',
      'Juice 1/2 lemon'
    ],
    method: [
      {
        'Step 1': 'Place a large frying pan over a high heat and add the olive oil. Once shimmering hot, tip in the padron peppers and cook for 3-5 minutes, tossing regularly, until blistered all over.'
      },
      {
        'Step 2': 'Squeeze over the lemon juice, add a big pinch of salt and transfer to a serving dish. Enjoy as part of a larger array of tapas dishes, or alone with an ice-cold glass of sherry.'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/40.jpg'
  },
  {
    id: '41',
    title: 'Limoncello spritz',
    difficulty: 'Easy',
    portion: 'Makes 1',
    time: 'Hands-on time 5 min',
    description: 'Limoncello spritz is a zippy, lemony livener from Salvi’s in Manchester. Mix limoncello, Prosecco and soda over ice for a seriously summery cocktail.',
    ingredients: [
      'Ice',
      '75ml limoncello',
      '125ml prosecco,',
      'Soda water, a dash',
      '1 lemon, long strip of peel only (ideally sorrento lemon if you can get one)'
    ],
    method: [
      {
        'Step 1': 'Fill a large glass to the top with ice. Add the  limoncello and prosecco, then add a dash of soda water. Cut a long strip of peel from a lemon (ideally sorrento if you can get one), twist it over the drink to release its oils, then add as a garnish.'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/41.jpg'
  },
  {
    id: '42',
    title: 'Vegan kimchi',
    difficulty: 'Easy',
    portion: 'Makes 1.5 litres (including the cabbage and juices) ',
    time: 'Hands-on time 15 min, plus 6-8 hours soaking and at least 3 days fermenting ',
    description: 'Make vegan kimchi with Ching He Huang’s step-by-step recipe. Swap traditional fish sauce for red miso to make this funky, fermented cabbage dish vegan friendly.',
    ingredients: [
      '2 chinese cabbages',
      '65g sea salt flakes',
      '1 daikon/mooli, peeled and sliced into julienne strips (matchsticks) – see Know How',
      '3 spring onions, trimmed and cut into 5cm slices',
      '2.5cm piece fresh ginger, peeled',
      '8 garlic cloves, peeled',
      '2 shallots, peeled',
      '6 tbsp gochugaru (Korean red pepper flakes), or more if you like it spicier – see Know How',
      '2 tbsp red miso paste (from Waitrose and online suppliers – see Ching’s tip)',
      '2 tsp caster sugar',
      '1 tbsp glutinous rice powder (optional; also known as glutinous rice flour – see Know How)',
      'Sesame seeds, toasted in a dry pan, to serve (optional)'
    ],
    method: [
      {
        'Step 1': 'Reserve 1-2 outer leaves of the cabbages. Wrap them in damp kitchen paper and put in the fridge until needed. Shred the remaining cabbage and put in a large, deep pot or bowl. Add the salt and toss well. Add enough cool water to cover the cabbage and stir until the salt has dissolved. Put a plate on top to keep the cabbage submerged, then leave at room temperature for 6-8 hours or overnight (stir halfway through if possible).'
      },
      {
        'Step 2': 'Drain the cabbage, reserving the brine. Rinse the cabbage, squeeze out any excess water, then return it to the bowl, adding the daikon/mooli and spring onions. Put the ginger, garlic, shallots, gochugaru, red miso paste and sugar in a food processor. Add the rice powder, if using. Pulse until the mixture forms a paste, then spoon the paste over the vegetables. Using tongs or gloves, mix and massage the vegetables and paste together until well coated. Pack the mixture into a sterilised 2 litre jar, leaving 3-5cm space at the top (see Ching’s tips for success). Add enough of the reserved brine to just cover the vegetables, pressing them down a bit. Place the whole cabbage leaf or leaves over the top, pressing down – this should help keep the kimchi submerged under the brine (or see Ching’s tips for success).'
      },
      {
        'Step 3': 'Cover loosely (to allow air to escape) and put the jar in a baking dish or large bowl to collect any juices that escape (see Ching’s tips for success). Leave the jar in the kitchen, out of direct sunlight, for 3 days. During this time, you can press down on the kimchi daily with the back of a wooden spoon to keep it all submerged.'
      },
      {
        'Step 4': 'After 3 days the kimchi will be ready, but it won’t achieve its full flavour and complexity for about another 2 weeks, so I suggest you seal the jar and transfer it to the fridge, where the kimchi will continue to slowly ferment (see Ching’s tips for success).'
      },
      {
        'Step 5': 'To serve, scoop out using a slotted spoon, transfer to a side dish and dress with toasted sesame seeds. It’s delicious on top of noodle soups or stews – or added to a stir-fry. Enjoy!'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/42.jpg'
  },
  {
    id: '43',
    title: 'Pomegranate-glazed aubergines and courgette tabbouleh',
    difficulty: 'Easy',
    portion: 'Serves 4',
    time: 'Hands-on time 20 min',
    description: 'Pair pomegranate-glazed aubergines and an easy courgette tabbouleh for a low-effort, big-flavour dinner. Roast or barbecue the aubergines.',
    ingredients: [
      '2 large aubergines, halved lengthways',
      '2 tbsp pomegranate molasses',
      '1 tbsp maple syrup',
      '1 tsp cumin seeds, crushed',
      'Olive oil for drizzling',
      '180g quinoa, ideally a mixture of white, red and black',
      '3 tbsp extra-virgin olive oil',
      'Juice ½ lemon',
      '1 small garlic clove, chopped',
      '200g cherry tomatoes, sliced',
      '1 courgette, coarsely grated',
      '30g parsley, roughly chopped',
      '4 mint sprigs, leaves picked and roughly chopped',
      '3 tbsp tahini',
      'Squeeze lemon juice',
      '3 tbsp ice-cold water'
    ],
    method: [
      {
        'Step 1': 'Prepare the barbecue for direct heat (for cooking right over the coals; or see alternative cooking instructions above). Score the aubergine flesh in a criss cross without cutting the skin. In a small bowl, mix the pomegranate molasses, maple syrup and cumin seeds with a drizzle of oil. Drizzle the aubergines with oil and barbecue skin-side down for 10 minutes until tender. Flip, then brush the flesh side with most of the glaze. Adjust the coals, then cook indirectly for 8-10 minutes with the lid down, flipping halfway through, until sticky and charred. Set aside on a plate and brush with the remaining glaze.'
      },
      {
        'Step 2': 'Meanwhile, for the tabbouleh, follow the pack instructions to cook the quinoa, then rinse and drain well. Put the olive oil, lemon juice (setting aside a squeeze for the dressing) and garlic in a large bowl and whisk to combine, then add the tomatoes, courgette, mint and quinoa. Season and mix.'
      },
      {
        'Step 3': 'Stir the remaining squeeze of lemon into the tahini, then gradually whisk in the water to make a smooth sauce. Divide the quinoa among plates, top each with an aubergine half and drizzle with dressing to serve.'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/43.jpg'
  },
  {
    id: '44',
    title: 'Green coriander chutney',
    difficulty: 'Easy',
    portion: 'Makes 280ml (serves 8 with leftovers)',
    time: 'Hands-on time 5 minutes',
    description: 'Whizz up a batch of green coriander chutney (Dhaniyey ki hari chutney) in ust 10 mins. This zingy fresh chutney has a chilli kick. Spoon it over grilled prawns, fish or chicken.',
    ingredients: [
      '100g fresh coriander leaves and stalks',
      '20g fresh mint leaves (optional)',
      '1½ garlic cloves (optional)',
      '2 Thai green chillies (stalks removed)',
      '1 tsp salt',
      '½ tsp sugar',
      'Juice of ½ lemon'
    ],
    method: [
      {
        'Step 1': 'In a pestle and mortar or mini food processor, blend 100g fresh coriander leaves and stalks, 20g fresh mint leaves (optional), 1½ garlic cloves (optional) and 2 Thai green chillies (stalks removed) until you get a soft, spoonable consistency.'
      },
      {
        'Step 2': 'Add 1 tsp salt, ½ tsp sugar and the juice of ½ lemon. Season to taste, then use in our  papdi chaat recipe, if you like.'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/44.jpg'
  },
  {
    id: '45',
    title: 'Smoky chipotle tofu with tomatoes and avocado',
    difficulty: 'Easy',
    portion: 'Serves 2-3',
    time: 'Hands-on time 15 min. Simmering time 7-8 min',
    description: 'Pair warm, intensely smoky, chipotle tofu with soothing smashed avocado. This vegan combo is incredible on toast or in breakfast tacos.',
    ingredients: [
      '2 tbsp olive oil',
      '225g block smoked firm tofu, cut into small cubes',
      '3 tbsp chipotles in adobo',
      '½ tsp sea salt',
      '3 spring onions, finely sliced',
      '150g cherry tomatoes, halved',
      'Tacos or toast to serve',
      '1 large avocado',
      'Grated zest and juice 1 lime',
      'Garlic cloves',
      'Chilli oil or Korean chilli flakes',
      'Chopped coriander, chervil, tarragon, basil or dill',
      'Drizzle of tahini'
    ],
    method: [
      {
        'Step 1': 'For the smashed avocado, cut the avocado in half and discard the stone. Mash the garlic, if using, with ½ tsp salt using a knife or pestle and mortar. Mash with the avocado, then add the lime zest and juice (and, if using, the chilli oil/flakes, herbs and tahini). Season to taste.'
      },
      {
        'Step 2': 'Heat a frying pan over a medium-high heat and, when hot, add the olive oil, then the tofu. Fry for a few minutes until crisp, then add the chipotles. Stir-fry for a few minutes, seasoning with the sea salt, then add the spring onions and tomatoes. Turn the heat to medium and cook for 7-8 minutes until the tomatoes begin to break down. Taste and adjust the seasoning, then serve with the smashed avocado, in tacos or on toast.'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/45.jpg'
  },
  {
    id: '46',
    title: 'José Pizarro’s carajamandanga (chilled tomato soup)',
    difficulty: 'Easy',
    portion: 'Serves 6-8',
    time: 'Hands-on time 30 min, plus 3 hours chilling',
    description: 'Chef José Pizarro shares his recipe for carajamandanga, a chilled tomato, pepper and courgette soup which is similar to gazpacho. Perfect for a hot day or night.',
    ingredients: [
      '100g stale white bread, torn',
      '2 garlic cloves',
      '800g tomatoes, chopped',
      '2 tsp agridulce pimentón de La Vera (bittersweet smoked paprika – see Know How)',
      '1 tbsp cider vinegar',
      '1 red pepper, chopped',
      '1 courgette, chopped',
      '½ cucumber, peeled, deseeded and chopped',
      '120g pitted black olives, roughly chopped',
      '2 tbsp snipped chives',
      'Extra-virgin olive oil for drizzling'
    ],
    method: [
      {
        'Step 1': 'Put the bread and garlic in a food processor with 600ml water and whizz together to form a smooth mixture with the consistency of single (light) cream. Add two thirds of the tomatoes, along with the paprika and vinegar. Season well, then whizz again until smooth. You can add a splash of water if it’s a little too thick.'
      },
      {
        'Step 2': 'Pour the mixture into a large bowl and add the remaining tomatoes. Reserve a couple of spoonfuls each of the pepper, courgette and cucumber for the garnish, then add the rest to the bowl. Check the seasoning, then chill for at least 3 hours.'
      },
      {
        'Step 3': 'To serve, scatter with the olives, vegetable garnish and chives, then drizzle with extra-virgin olive oil. Season with plenty of freshly ground black pepper and enjoy.'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/46.jpg'
  },
  {
    id: '47',
    title: 'Jackfruit pickle (Kathal achaar)',
    difficulty: 'Easy',
    portion: 'Makes about 550g',
    time: 'Hands-on time 10 min, plus cooling time. Simmering time 15 min',
    description: 'Romy Gill shares her recipe for tangy jackfruit pickle (Kathal achaar). Serve this versatile vegan condiment alongside Indian dishes.',
    ingredients: [
      '500g tinned jackfruit chunks, halved and well drained (leave in the colander so any excess water drains away)',
      '2 tsp chilli flakes or chilli powder',
      '1 tsp turmeric',
      '2 tsp panch phoran (see Know How)',
      '½ tsp asafoetida powder',
      '2 tsp ground coriander',
      '1 tsp salt',
      '75ml rapeseed oil',
      '1 litre sterlised glass jar or a selection of smaller glass jars with lid(s)'
    ],
    method: [
      {
        'Step 1': 'Heat the oven to 160°C fan/gas 4, put the drained jackfruit chunks on a baking tray and cook for 10-12 minutes to dry out. Set aside when done.'
      },
      {
        'Step 2': 'In a large bowl, combine the jackfruit with the rest of the ingredients except the oil.'
      },
      {
        'Step 3': 'Heat the oil in a pan, then add the hot oil to the bowl and mix again with a metal spoon. Put in the sterilised jar(s) and seal.'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/47.jpg'
  },
  {
    id: '48',
    title: 'Shchi (cabbage and caraway soup)',
    difficulty: 'Easy',
    portion: 'Serves 4-6',
    time: 'Hands-on time 25 min. Simmering time 1 hour.',
    description: 'This simple cabbage soup may be frugal but has big flavours thanks to the smoked paprika and caraway. “It’s wonderfully satisfying,” says Georgina Hayden.',
    ingredients: [
      '2 onions',
      '4 garlic cloves',
      '1 leek',
      '2 carrots',
      '400g waxy potatoes',
      '500g white cabbage',
      '4 tbsp sunflower oil',
      '2 tbsp tomato purée',
      '1 tsp caraway seeds',
      '¼ tsp sweet smoked paprika',
      '1.5 litres vegetable stock',
      '2 bay leaves',
      '½ bunch dill',
      'Rye bread to serve'
    ],
    method: [
      {
        'Step 1': 'Peel and finely chop the onions and garlic. Trim and finely slice the leek, then rinse it well in a colander to get rid of any dirt. Peel the carrots and potatoes, then chop them into 2cm pieces, keeping them separate. Halve the cabbage, remove the core, then finely shred the leaves.'
      },
      {
        'Step 2': 'Put the sunflower oil in a large casserole or saucepan over a low-medium heat. Add the onions, garlic, leek and carrots and fry for 15 minutes until softened and sticky. Stir in the tomato purée, caraway seeds and paprika then, after a minute, add the shredded cabbage, chopped potatoes, veg stock and bay leaves. Turn up the heat and bring to the boil. Season generously, then reduce the heat to a simmer. Cook on a low heat for 1 hour until the vegetables are tender and the broth is rich.'
      },
      {
        'Step 3': 'Taste the soup and tweak the seasoning, then leave to rest for 10 minutes before serving. Roughly chop the dill, then ladle the soup into bowls and serve scattered with dill, with a slice of rye bread on the side.'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/48.jpg'
  },
  {
    id: '49',
    title: 'Lime pickle',
    difficulty: 'Easy',
    portion: 'Makes about 800g',
    time: 'Hands-on time 30 min, plus 1 week pickling ',
    description: 'Chef Romy Gill shares her easy recipe for lime pickle. Serve this classic condiment alongside an array of Indian dishes.',
    ingredients: [
      '1 tsp ground coriander',
      '2 tsp ajwain seeds',
      '3 tsp cumin seeds',
      '6 cloves',
      '10 black peppercorns',
      '2-3 tsp chilli powder',
      '1 tsp ground ginger',
      '1 tsp black salt (kala namak) or fine sea salt',
      '700g limes (8-9), washed, dried and cut into small chunks – about 5mm',
      '100ml rapeseed oil',
      'Spice grinder or pestle and mortar',
      'Large (1 litre) glass jar or a selection of smaller glass jars with lid(s); sterilised'
    ],
    method: [
      {
        'Step 1': 'Use a spice grinder/pestle and mortar to grind the whole spices with the chilli powder, ground ginger and salt until blended.'
      },
      {
        'Step 2': 'Put the lime chunks in a large bowl with the spice blend and oil, then mix well and immediately put into the sterilised jar(s). Seal and set aside in a cool, dark place for 1 week, shaking daily to make sure the lime stays well coated in the spiced oil before using.'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/49.jpg'
  },
  {
    id: '50',
    title: 'Mango chutney (Aam ki meethi chutney)',
    difficulty: 'Easy',
    portion: 'Makes about 600g ',
    time: 'Hands-on time 15 min, plus resting and cooling. Simmering time 25 min',
    description: 'Romy Gill believes making homemade pickles and chutneys is good for the soul. Try her family recipe for fragrant mango chutney, and serve with all kinds of Indian dishes.',
    ingredients: [
      '500g unripe mangoes (about 2), peeled and stones removed, diced into 1cm cubes',
      '20g fresh ginger, grated',
      '1 tsp fennel seeds, crushed in a pestle and mortar',
      '½ tsp nigella seeds',
      '1 tsp chilli flakes',
      '½ tsp salt',
      '1 tbsp rapeseed oil',
      '75g demerara sugar',
      '50ml white wine vinegar',
      'Large (1 litre) glass jar or a selection of smaller glass jars with lid(s)'
    ],
    method: [
      {
        'Step 1': 'In a large bowl mix the diced mangoes with the grated ginger, seeds, chilli flakes and salt, then leave to rest for 15 minutes.'
      },
      {
        'Step 2': 'Heat the oil in a pan, then add the mango mixture. Cook for few minutes, then add the sugar and vinegar, mix and cook for 10 minutes on a low heat, stirring occasionally so the mangoes don’t stick to the pan.'
      },
      {
        'Step 3': 'After 10 minutes mash the mixture roughly, cover the pan and cook for another 10 minutes on a low heat. Take off the heat.'
      },
      {
        'Step 4': 'Pour the hot chutney into the warm, sterilised airtight jar(s). Enjoy with Indian food or simply a slice of toast.'
      }
    ],
    image: 'https://apipics.s3.amazonaws.com/vegan_api/50.jpg'
  }
]

router.get("/", (req, res, next) => {
  try {
    const { page = 1, limit = 3 } = req.query;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedItems = items.slice(startIndex, endIndex);

    return res.json({
      totalItems: items.length,
      totalPages: Math.ceil(items.length / limit),
      currentPage: parseInt(page),
      items: paginatedItems,
    });
  } catch (error) {
    next(error);
  }
});


router.get("/search", (req, res, next) => {
  try {
    const { q, page = 1, limit = 3} = req.query;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const searchResults = items.filter((item) =>
      item.title.toLowerCase().includes(q.toLowerCase())
    );

    const paginatedResults = searchResults.slice(startIndex, endIndex);

    return res.json({
      totalItems: searchResults.length,
      totalPages: Math.ceil(searchResults.length / limit),
      currentPage: parseInt(page),
      items: paginatedResults,
    });
  } catch (error) {
    next(error);
  }
});


router.get("/:id", (req, res, next) => {
  try {
    const itemId = req.params.id;
    const item = items.find((item) => item.id === itemId);

    if (item) {
      return res.json(item);
    } else {
      const error = new Error("Item not found");
      error.status = 404;
      throw error;
    }
  } catch (error) {
    next(error);
  }
});


//loadItems();

export default router;
