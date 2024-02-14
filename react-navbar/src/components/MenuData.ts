const MenuData = [
  {
    title: "Home",
    url: "/",
    cName: "nav-links",
    icon: "fa-solid fa-house-user",
    children: [
      {
        title: "Home1",
        url: "/home1",
        cName: "nav-links",
        icon: "fa-solid fa-house-user",
      },
      {
        title: "Home2",
        url: "/home2",
        cName: "nav-links",
        icon: "fa-solid fa-house-user",
        children: [
          {
            title: "Home21",
            url: "/home2",
            cName: "nav-links",
            icon: "fa-solid fa-house-user",
            children: [
              {
                title: "Home211",
                url: "/home2",
                cName: "nav-links",
                icon: "fa-solid fa-house-user",
              },
              {
                title: "Home212",
                url: "/home2",
                cName: "nav-links",
                icon: "fa-solid fa-house-user",
                children: [
                  {
                    title: "Home2121",
                    url: "/home2",
                    cName: "nav-links",
                    icon: "fa-solid fa-house-user",
                  },
                  {
                    title: "Home2122",
                    url: "/home2",
                    cName: "nav-links",
                    icon: "fa-solid fa-house-user",
                  },
                ],
              },
            ],
          },
          {
            title: "Home22",
            url: "/home2",
            cName: "nav-links",
            icon: "fa-solid fa-house-user",
          },
        ],
      },
      {
        title: "Home3",
        url: "/home3",
        cName: "nav-links",
        icon: "fa-solid fa-house-user",
        children: [
          {
            title: "Home11",
            url: "/home1",
            cName: "nav-links",
            icon: "fa-solid fa-house-user",
            children: [
              {
                title: "Home111",
                url: "/home1",
                cName: "nav-links",
                icon: "fa-solid fa-house-user",
              },
              {
                title: "Home112",
                url: "/home1",
                cName: "nav-links",
                icon: "fa-solid fa-house-user",
              },
            ],
          },
          {
            title: "Home21",
            url: "/home2",
            cName: "nav-links",
            icon: "fa-solid fa-house-user",
          },
          {
            title: "Home31",
            url: "/home3",
            cName: "nav-links",
            icon: "fa-solid fa-house-user",
          },
        ],
      },
    ],
  },
  {
    title: "About",
    url: "/about",
    cName: "nav-links",
    icon: "fa-solid fa-circle-info",
  },
  {
    title: "service",
    url: "/service",
    cName: "nav-links",
    icon: "fa-solid fa-briefcase",
  },
  {
    title: "Contact",
    url: "/contact",
    cName: "nav-links",
    icon: "fa-solid fa-address-book",
  },
  {
    title: "Sign up",
    url: "/signup",
    cName: "nav-links-mobile",
  },
];
export default MenuData;
