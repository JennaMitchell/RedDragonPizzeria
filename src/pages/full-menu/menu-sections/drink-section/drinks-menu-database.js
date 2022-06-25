import horizonalUnderline from "../../../../img/line-art/underlines/chalk_underline_horizontal.png";
import {
  SmallUnderlineContainer,
  StyledTypography,
} from "../general-styled-components/general-styled-components";
import {
  DrinksContainer,
  DescriptionTitle,
  DescriptionText,
} from "./drinks-menu-database-styled-components";
const drinksDatabase = {
  Beer: [
    {
      title: "Milligun's Deep Stout",
      description:
        "Taken from a keg with a floating lumps of coal inside. An initial strong charcoal taste followed by delicious warm honey golden taste",
      price: "$4.99",
    },
    {
      title: "The Dwarven Hammer",
      description:
        "A mixture of strong, bitter ale, dark rum, and coffee. Served with raw sugar on top for a sparkle effect",
      price: "$4.99",
    },
    {
      title: "The Drunken Uncle",
      description:
        "Thick, dark brown stout, approximately the thickness of eggnog. Tends to remind one of fond family gatherings",
      price: "$4.99",
    },

    {
      title: "The Hairy Wizard",
      description:
        " A complex, deep, hearty stout, with a lingering taste of coffee, burnt grain and a hint of plum. ",
      price: "$3.99",
    },
    {
      title: "Wild Magic Brew",
      description:
        "Bubbly,light, sweet pale ale. Served with a small sparkler for a wild effect",
      price: "$7.99",
    },
    {
      title: "Knock-Out Lager",
      description: "Very bitter dark ale. Rumored to knock you out in one sip",
      price: "$6.99",
    },
    {
      title: "Brewmosa",
      description:
        "Two freshly squeezed oranges from a local orchard mixed with a pint of mead.",
      price: "$4.99",
    },
    {
      title: "Lily in a Well ",
      description:
        "A tall mug of ale, half full with an edible flower garnish ",
      price: "$4.99",
    },
  ],
  Cocktails: [
    {
      title: "I Would Like To Rage",
      description:
        "Vodka, lime juice, ginger ale, lined with lime and chilli flakes",
      price: "$2.99",
    },
    {
      title: "Cure Wounds",
      description:
        "Vodka, tomato , lime and olive juice. With a dash of worchestershire sauce, tabasco, salt and pepper. ",
      price: "$3.99",
    },
    {
      title: "Fire Bolt",
      description:
        "Black Sambuca, rimmed with sugar and lime juice. Served on fire",
      price: "$3.99",
    },
    {
      title: "Flurry of Blows",
      description: "Equal parts tequila, vodka, light rum, gin and sour mix.",
      price: "$2.99",
    },
    {
      title: "Charm Person",
      description:
        "Raspberries, mint, served in gin, lime juice, and champagne. Garnished with mint and raspberries",
      price: "$4.99",
    },
    {
      title: "Charm Person",
      description:
        "Raspberries, mint, served in gin, lime juice, and champagne. Garnished with mint and raspberries",
      price: "$4.99",
    },
  ],
  Shots: [
    {
      title: "Fire Ball",
      description:
        "Have you ever wondered what hell fire would taste like? Then fireball is for you! (Fireball Whiskey)",
      price: "$2.99",
    },
    {
      title: "Merchant's Lucky Day",
      description:
        "Brightens any merchants day. Goldschläger mixed with cininamon",
      price: "$2.99",
    },
    {
      title: "Glowglass",
      description:
        "A gnomish drink that is rumored to glow in the dark.  Midori Melon liqueur, mixed with Malibu coconut rum and Pineapple juice",
      price: "$2.99",
    },
  ],
  Ciders: [
    {
      title: "The Sun's Glory",
      description: "A citrusy cider that might make your eyes glow with joy",
      price: "$3.99",
    },
    {
      title: "Cinder",
      description: "A cinnimon spiced hard cider served hot",
      price: "$3.99",
    },
    {
      title: "Tarnation",
      description:
        "A strong spiced cider served warm and traditionally drank as quickly as posible after a boisterous cheer or a lewd drinking song.",
      price: "$3.99",
    },
  ],
};

const renderReadyBeerData = drinksDatabase.Beer.map((drinks, index) => {
  return (
    <DrinksContainer key={index}>
      <DescriptionTitle>{drinks.title}</DescriptionTitle>
      <SmallUnderlineContainer src={horizonalUnderline} />
      <DescriptionText>{drinks.description}</DescriptionText>
      <StyledTypography variant={"p"}>{drinks.price}</StyledTypography>
    </DrinksContainer>
  );
});

const renderReadyCocktailsData = drinksDatabase.Cocktails.map(
  (drinks, index) => {
    return (
      <DrinksContainer key={index}>
        <DescriptionTitle>{drinks.title}</DescriptionTitle>
        <SmallUnderlineContainer src={horizonalUnderline} />
        <DescriptionText>{drinks.description}</DescriptionText>
        <StyledTypography variant={"p"}>{drinks.price}</StyledTypography>
      </DrinksContainer>
    );
  }
);
const renderReadyCocktailsDataRowOne = renderReadyCocktailsData.slice(0, 3);
const renderReadyCocktailsDataRowTwo = renderReadyCocktailsData.slice(3, 5);

///Shots n' Cider

const renderReadyShotsData = drinksDatabase.Shots.map((drinks, index) => {
  return (
    <DrinksContainer key={index}>
      <DescriptionTitle>{drinks.title}</DescriptionTitle>
      <SmallUnderlineContainer src={horizonalUnderline} />
      <DescriptionText>{drinks.description}</DescriptionText>
      <StyledTypography variant={"p"}>{drinks.price}</StyledTypography>
    </DrinksContainer>
  );
});

const renderReadyCiderData = drinksDatabase.Ciders.map((drinks, index) => {
  return (
    <DrinksContainer key={index}>
      <DescriptionTitle>{drinks.title}</DescriptionTitle>
      <SmallUnderlineContainer src={horizonalUnderline} />
      <DescriptionText>{drinks.description}</DescriptionText>
      <StyledTypography variant={"p"}>{drinks.price}</StyledTypography>
    </DrinksContainer>
  );
});

export {
  renderReadyBeerData,
  renderReadyCocktailsDataRowOne,
  renderReadyCocktailsDataRowTwo,
  renderReadyShotsData,
  renderReadyCiderData,
  drinksDatabase,
};
