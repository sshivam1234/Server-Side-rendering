var mockData = [
  {
    id: 1,
    title: "Server-Side Rendering",
    description: "React components rendered to HTML on the server for fast initial page loads.",
    category: "Architecture"
  },
  {
    id: 2,
    title: "Client-Side Hydration",
    description: "React attaches event listeners to server-rendered HTML making it interactive.",
    category: "React"
  },
  {
    id: 3,
    title: "Express.js Backend",
    description: "A minimal Node.js framework serving both API endpoints and SSR pages.",
    category: "Backend"
  },
  {
    id: 4,
    title: "Webpack Bundling",
    description: "Separate webpack configs for client and server bundles.",
    category: "Tooling"
  },
  {
    id: 5,
    title: "SEO Benefits",
    description: "Search engines receive complete HTML instead of empty divs.",
    category: "SEO"
  }
];

export function getData() {
  return JSON.parse(JSON.stringify(mockData));
}