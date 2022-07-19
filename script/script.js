var main = GX.create("main", [{ class: "main container" }]);

//Header
var header = GX.create("header", [{ class: "d-flex flex-column" }]);
var head1 = GX.create("div", [
  { class: "d-flex justify-content-between align-items-center border-bottom" },
]);
var subscribeLink = GX.create(
  "a",
  [{ class: "text-decoration-none text-secondary" }],
  "Subscribe"
);
var icon = GX.create("h1", [{ class: "fs-1 fw-bold" }], "Large");
var signupButton = GX.create(
  "button",
  [{ class: "btn btn-outline-secondary btn-sm" }],
  "Sign Up"
);
head1.addChild(subscribeLink).addChild(icon).addChild(signupButton);
var head2 = GX.create("div", [
  { class: "d-flex justify-content-between align-items-center" },
]);
var menuTags = [];
var menuTopics = [
  "World",
  "U.S.",
  "Technology",
  "Design",
  "Culture",
  "Business",
  "Politics",
  "Opinion",
  "Science",
  "Health",
  "Style",
  "Travel",
];
for (var i = 0; i < menuTopics.length; i++) {
  head2.addChild(
    GX.create(
      "a",
      [{ class: "text-decoration-none text-secondary my-2" }],
      menuTopics[i]
    )
  );
}
header.addChild(head1).addChild(head2);

//Hero section

var hero = GX.create("section", [
  { class: "bg-dark d-flex flex-column p-5 mb-5 rounded mt-2" },
]);

var heroTitle = GX.create(
  "h1",
  [
    { class: "text-white fs-1 fw-bold text-start my-2" },
    { style: 'width: "30vw"' },
  ],
  "Title of a longer featured blog post"
);

var heroPara = GX.create(
  "p",
  [{ class: "text-white my-2" }],
  `Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.`
);
var heroLink = GX.create(
  "a",
  [{ class: "fw-bold fs-5 text-decoration-none text-white" }],
  "Continue reading..."
);

hero.addChild(heroTitle).addChild(heroPara).addChild(heroLink);

//card section

var cardSection = GX.create("section", [{ class: "d-flex gap-4" }]);

//Card

var cardContainer = GX.create("div", [{ class: "row" }]);
var cardDetails = GX.create("div", [{ class: "col-8 p-2 d-flex flex-column" }]);
var cardImage = GX.create("div", [
  {
    class:
      "col-4 d-flex justify-content-center align-items-center bg-secondary",
  },
]);
var thumbNail = GX.create("p", [{ class: "fw-bold text-white" }], "Thumbnail");
cardImage.addChild(thumbNail);

var subTitle = GX.create(
  "p",
  [{ class: "text-primary fw-bold my-2" }],
  "World"
);
var title = GX.create("h2", [{ class: "text-dark fw-bold" }], "Featured post");
var date = GX.create("p", [{ class: "text-secondary" }], "Nov 12");
var cardPara = GX.create(
  "p",
  [{ class: "text-dark my-2" }],
  "This is a wider card with supporting text below as a natural lead-in to additional content."
);
var cardLink = GX.create(
  "a",
  [{ class: "text-primary text-decoration-none" }],
  "Continue reading"
);

cardDetails
  .addChild(subTitle)
  .addChild(title)
  .addChild(date)
  .addChild(cardPara)
  .addChild(cardLink);

cardContainer.addChild(cardDetails).addChild(cardImage);

cardSection.addChild(cardContainer).addChild(cardContainer);

//blog section

var blogSection = GX.create("section", [{ class: "row my-5" }]);
var mainBlogArea = GX.create("section", [{ class: "col-8" }]);
var blogAside = GX.create("aside", [{ class: "col-4" }]);

blogSection.addChild(mainBlogArea).addChild(blogAside);

//Actual Bog area

var blogOverview = GX.create("section", [{ class: "my-2" }]);

var blogSub = GX.create(
  "h3",
  [{ class: "fw-bold fs-3 fst-italic my-4 border-bottom" }],
  "From the Firehose"
);
var blogTitle = GX.create(
  "h2",
  [{ class: "fw-bold fs-2 mt-4" }],
  "Sample blog post"
);
var blogDate = GX.create(
  "p",
  [{ class: "text-secondary" }],
  "January 1, 2014 by"
);
var blogBy = GX.create(
  "a",
  [{ class: "text-primary text-decoration-none" }],
  "Mark"
);

blogDate.addChild(blogBy);

var blogDesc = GX.create(
  "p",
  [{ class: "text-dark my-3 border-bottom" }],
  "This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, images, and code are all supported."
);

var blogPara1 = GX.create(
  "p",
  [{ class: "text-dark my-3" }],
  "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum."
);

var blogPara2 = GX.create(
  "p",
  [{ class: "text-dark my-3" }],
  "Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit."
);

var blogPara3 = GX.create(
  "p",
  [{ class: "text-dark my-3" }],
  "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur."
);

blogOverview
  .addChild(blogSub)
  .addChild(blogTitle)
  .addChild(blogDate)
  .addChild(blogDesc)
  .addChild(blogPara1)
  .addChild(blogPara2)
  .addChild(blogPara3);

mainBlogArea.addChild(blogOverview);

//Blog aside

var aboutCard = GX.create("section", [{ class: "bg-light p-3 rounded" }]);
var aboutCardTitle = GX.create(
  "h3",
  [{ class: "fw-bold fst-italic fs-3" }],
  "About"
);
var aboutCardDesc = GX.create(
  "p",
  [{ class: "my-2" }],
  "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur."
);

aboutCard.addChild(aboutCardTitle).addChild(aboutCardDesc);

var archiveSection = GX.create("section", [{ class: "my-4" }]);
var archiveTitle = GX.create(
  "h3",
  [{ class: "fw-bold fst-italic fs-3 my-3" }],
  "Archives"
);
var archiveList = GX.create("div", [{ class: "d-flex flex-column" }]);
archiveSection.addChild(archiveTitle);
var archiveTopics = [
  "March 2014",
  "February 2014",
  "January 2014",
  "December 2013",
  "November 2013",
  "October 2013",
  "September 2013",
  "August 2013",
  "July 2013",
  "June 2013",
  "May 2013",
  "April 2013",
];
for (var i = 0; i < archiveTopics.length; i++) {
  archiveList.addChild(
    GX.create(
      "a",
      [
        { class: "text-decoration-none text-primary my-1" },
        { style: "cursor: pointer" },
      ],
      archiveTopics[i]
    )
  );
}

archiveSection.addChild(archiveList);

blogAside.addChild(aboutCard).addChild(archiveSection);

main.addChild(header);
main.addChild(hero);
main.addChild(cardSection);
main.addChild(blogSection);

var dom = GX(main);
document.body.append(dom);
