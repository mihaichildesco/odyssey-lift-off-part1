const gql = require("graphql-tag");

const typeDefs = gql`
  type Query {
    "query to get tracks array for the homepage grid!"
    tracksForHome: [Track!]!
    track(id: ID!): Track!
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "tracks title"
    title: String!
    "tracks author"
    author: Author!
    "the track main illustration to display in track card or track page detail"
    thumbnail: String
    "the track length in minutes"
    length: Int
    "the number of modules this track contains"
    modulesCount: Int
    "the tracks complete description, can be in markdown format"
    description: String
    "the number of times a track has been viewed"
    numberOfViews: Int
    "the tracks complete array of Modules"
    modules: [Module!]!
  }

  "A Module is a single unit of teaching, multiple modulse compes a track"
  type Module {
    id: ID!
    "module title"
    title: String!
    "module length in minutes"
    length: Int
  }

  "Author of a complete Track"
  type Author {
    "author id"
    id: ID!
    "author name"
    name: String!
    "author profile photo url"
    photo: String
  }
`;

module.exports = typeDefs;
