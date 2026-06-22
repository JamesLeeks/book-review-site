export type categoryRating = {
  category: string;
  rating: number;
};
export type book = {
  title: string;
  author: string;
  rating: number;
  representationRating: number;
  categoryRatings: categoryRating[];
  coverImage: string;
};

export function createExampleBook(): book {
  return {
    title: "Example Book Title",
    author: "Example Author",
    rating: Math.random() * 10 + Math.random(),
    representationRating: Math.random() * 10 + Math.random(),
    categoryRatings: [
      {
        category: "ExampleCategoryA",
        rating: Math.random() * 10 + Math.random(),
      },
      {
        category: "ExampleCategoryB",
        rating: Math.random() * 10 + Math.random(),
      },
      {
        category: "ExampleCategoryC",
        rating: Math.random() * 10 + Math.random(),
      },
      {
        category: "ExampleCategoryD",
        rating: Math.random() * 10 + Math.random(),
      },
      {
        category: "ExampleCategoryE",
        rating: Math.random() * 10 + Math.random(),
      },
    ],
    coverImage: "placeholder-cover.png",
  };
}

export function createExampleBooks(amount: number) {
  const books = [];
  for (let i = 0; i < amount; i++) {
    books.push(createExampleBook());
  }
  return books;
}
