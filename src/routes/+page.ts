import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch, url }) => {
  // Get the postId from the URL
  const postId = url.searchParams.get("postId");

  //   this is where you fetch the data from the API
  // im using a placeholder API for this example to get the array of comments for a post
  // if you have multiple filters, you can append them to the URL like this
  //   `https://jsonplaceholder.typicode.com/comments?postId=${postId}&filter1=${filter1Value}&filter2=${filter2Value}`
  //  after you get the values from the searchParams object
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
    {
      method: "GET",
    }
  );

  return {
    tableData: data.json(),
  };
};
