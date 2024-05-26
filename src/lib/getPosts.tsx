import type { postProps } from "@/lib/definitions"
// : postProps[]

const getPosts = (): postProps[] => {
  return [
    {
      id: "3563908653",
      content: "This is a new post. Generated without artificial intelligence or large language models. #Authentic #new #test",
      createdAt: new Date(),
      images: [
        {
          id: "545346957690",
          src: "super-falcons.jpg",
        },
        {
          id: "7609809385751",
          src: "lagoscity1.jpg",
        },
        {
          id: "4562374154789",
          src: "lekan-design.jpg",
        },
        {
          id: "4657823051542",
          src: "football-ad.jpg",
        },
      ],
      comments: [],
      audience: "public",
      likes: [],
      shares: [],
      author: {
        name: "John Adebamigberu",
        friends: [],
        id: "242446345523",
        profileImage: "avatar.jpg",
        profileLink: "new5305new",
        bio: "",
        coverImage: "",
      },
    },

    {
      id: "543953953535",
      content:
        "This is another new post. Generated without artificial intelligence or large language models. In this application, I am trying my best to put together a befitting lengthy typography that can put the integrity and build of this application to the test. I hope this test works. Hopefully, I can only cross my fingers and hope all goes according to plan. #Authentic #second #test",
      createdAt: new Date(),
      images: [
        {
          src: "vbank2.jpg",
          id: "99536095676",
        },
        {
          id: "25680673456",
          src: "vbank3.jpg",
        },
        {
          id: "609878569769",
          src: "pastor-moses.jpg",
        },
        {
          id: "123436456767",
          src: "midyearpraise22.jpg",
        },
        {
          id: "4578945678967",
          src: "kelvin.jpg",
        },
        {
          id: "5634986904675",
          src: "rash.jpg",
        },
      ],
      comments: [],
      audience: "public",
      likes: [],
      shares: [],
      author: {
        name: "Ronald Essien",
        friends: [],
        id: "3853850835325",
        profileImage: "avatar.jpg",
        profileLink: "jkdf4jrf",
        bio: "",
        coverImage: "",
      },
    },
  ]
}

export default getPosts

// const supabase = createClient()
// const { data: notes } = await supabase.from("notes").select()
//  JSON.stringify(notes, null,2)

// postgres://postgres.hdlzghmxaddwzmgzkrfp:[YOUR-PASSWORD]@aws-0-eu-central-1.pooler.supabase.com:5432/postgres

//

// Transaction
// Pool mode is permanently set to Transaction on port 6543
// You can use Session mode by connecting to the pooler on port 5432 instead
