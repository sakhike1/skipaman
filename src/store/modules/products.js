export default {
  namespaced: true,
  state() {
    return {
      products: [
        {
          id: "p1",
          textFromParent: "Niggaz know i'm him!",
          SummerVibes: "Get your summer on",
          WasAmount: "R325",
          prices: "R261",
          image: [
            "https://mir-s3-cdn-cf.behance.net/project_modules/1400/8b867683071443.5d30b5ec8ac5a.jpg",
          ],
        },
        {
          id: "p2",
          textFromParent: "know they mad at me!",
          SummerVibes: "Be on fire with the works",
          WasAmount: "R150",
          prices: "R261",
          image: ["https://i.ibb.co/VWm1hxS/Screenshot-2023-09-11-124656.png"],
        },
        {
          id: "p3",
          textFromParent: "know they mad at me!",
          SummerVibes: "does it happy does it not happy",
          WasAmount: "R150",
          prices: "R261",
          image: [
            "https://mir-s3-cdn-cf.behance.net/project_modules/1400/8b867683071443.5d30b5ec8ac5a.jpg",
          ],
        },
        {
          id: "p4",
          textFromParent: "know they mad at me!",
          SummerVibes: "made it from the impossible",
          WasAmount: "R150",
          prices: "R261",
          image: ["https://i.ibb.co/VWm1hxS/Screenshot-2023-09-11-124656.png"],
        },
        {
          id: "p5",
          textFromParent: "know they mad at me!",
          SummerVibes: "be willing to learn and grow",
          WasAmount: "R150",
          prices: "R261",
          image: [
            "https://mir-s3-cdn-cf.behance.net/project_modules/1400/8b867683071443.5d30b5ec8ac5a.jpg",
          ],
        },
        {
          id: "p6",
          textFromParent: "know they mad at me!",
          SummerVibes: "the summer is us ",
          WasAmount: "R150",
          prices: "R261",
          image: ["https://i.ibb.co/VWm1hxS/Screenshot-2023-09-11-124656.png"],
        },
        {
          id: "p7",
          textFromParent: "know they mad at me!",
          SummerVibes: "the lies never end",
          WasAmount: "R150",
          prices: "R261",
          image: [
            "https://mir-s3-cdn-cf.behance.net/project_modules/1400/8b867683071443.5d30b5ec8ac5a.jpg",
          ],
        },
        {
          id: "p8",
          textFromParent: "know they mad at me!",
          SummerVibes: "be kind to each other",
          WasAmount: "R150",
          prices: "R261",
          image: ["https://i.ibb.co/VWm1hxS/Screenshot-2023-09-11-124656.png"],
        },
        {
          id: "p9",
          textFromParent: "know they mad at me!",
          SummerVibes: "The grace of God ",
          WasAmount: "R150",
          prices: "R261",
          image: [
            "https://mir-s3-cdn-cf.behance.net/project_modules/1400/8b867683071443.5d30b5ec8ac5a.jpg",
          ],
        },
        {
          id: "p10",
          textFromParent: "know they mad at me!",
          SummerVibes: "art is what makes sense to you",
          WasAmount: "R150",
          prices: "R261",
          image: ["https://i.ibb.co/VWm1hxS/Screenshot-2023-09-11-124656.png"],
        },
        {
          id: "p11",
          textFromParent: "know they mad at me!",
          SummerVibes: "levels that are on other levels",
          WasAmount: "R150",
          prices: "R261",
          image: [
            "https://mir-s3-cdn-cf.behance.net/project_modules/1400/8b867683071443.5d30b5ec8ac5a.jpg",
          ],
        },
        {
          id: "p12",
          textFromParent: "know they mad at me!",
          SummerVibes: "taking over the city this summer",
          WasAmount: "R150",
          prices: "R261",
          image: ["https://i.ibb.co/VWm1hxS/Screenshot-2023-09-11-124656.png"],
        },

        // Add more data items as needed
      ],
    };
  },
  getters: {
    products(state) {
      return state.products;
    },
  },
};
